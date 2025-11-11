import { defineConfig, Options } from 'tsup';
import path from 'path';
import fs from 'fs';
import { format } from 'prettier';
import { readWantedLockfile } from '@pnpm/lockfile-file';
import { merge } from 'es-toolkit';

/**
 * Format JSON with Prettier (uses simple config for package.json)
 */
const prettierFormatJson = async (text: string) => {
    return await format(text, {
        parser: 'json',
        tabWidth: 4,
        singleQuote: true,
        trailingComma: 'es5',
    });
};

/**
 * Helper function to create tsup configuration with automatic workspace dependency resolution
 * and 'use client' directive injection for client-side components.
 *
 * @param entries - Object mapping entry names to source file paths (e.g., { index: 'src/index.ts' })
 * @param clientEntries - Object mapping entry names to client component source file paths (e.g., { button: 'src/components/Button.tsx' })
 * @param optionOverrides - Optional tsup configuration overrides
 * @returns tsup configuration object
 *
 * @example
 * ```typescript
 * import { makeConfig } from '@yourname/tsup-config';
 *
 * export default makeConfig(
 *   { index: 'src/index.ts' },
 *   { button: 'src/components/Button.tsx' }
 * );
 * ```
 */
export const makeConfig = (
    entries: Record<string, string>,
    clientEntries?: Record<string, string>,
    optionOverrides?: Partial<Options>
) => {
    return defineConfig(makeConfigObject(entries, clientEntries, optionOverrides));
};

/**
 * Copy package.json to dist with workspace dependencies resolved to actual versions
 */
const copyPackageJson = async () => {
    const packageJSON = JSON.parse(fs.readFileSync('package.json').toString());
    const newPackageJSON: any = {};

    // Copy essential fields only
    newPackageJSON.name = packageJSON.name;
    newPackageJSON.dependencies = packageJSON.dependencies;
    newPackageJSON.peerDependencies = packageJSON.peerDependencies ?? {};
    newPackageJSON.sideEffects = packageJSON.sideEffects;
    newPackageJSON.version = packageJSON.version;

    // Set entry points
    newPackageJSON.main = './index.js';
    newPackageJSON.types = './index.d.ts';

    // Get package name relative to monorepo root (e.g., 'brand-libraries/basketball-training-ui')
    const packageName = process.cwd().split(path.sep).slice(-2).join('/');

    // Read lockfile to get resolved dependency versions
    const lockfile_package_list = (await readWantedLockfile('../..', { ignoreIncompatible: true }))?.importers?.[
        packageName
    ];
    const merged_deps = merge(lockfile_package_list?.dependencies ?? {}, lockfile_package_list?.devDependencies ?? {});

    // Resolve workspace:* dependencies to actual versions
    for (const item of Object.entries(newPackageJSON.peerDependencies)) {
        const [dep, version] = item as [string, string];
        if (version.includes('workspace')) {
            // @ts-expect-error This is an object, not a string
            const package_path = merged_deps?.[dep].version.replace(/(?:link:|\/dist)/g, '') + '/package.json';
            const depPackageJSON = JSON.parse(fs.readFileSync(package_path).toString());
            newPackageJSON.peerDependencies[dep] = version.replace('workspace:*', depPackageJSON.version);
        }
    }

    // Resolve workspace dependencies
    if (newPackageJSON.dependencies) {
        for (const item of Object.entries(newPackageJSON.dependencies)) {
            const [dep, version] = item as [string, string];
            if (version.includes('workspace')) {
                // @ts-expect-error This is an object, not a string
                const package_path = merged_deps?.[dep].version.replace(/(?:link:|\/dist)/g, '') + '/package.json';
                const depPackageJSON = JSON.parse(fs.readFileSync(package_path).toString());
                newPackageJSON.dependencies[dep] = version.replace('workspace:*', depPackageJSON.version);
            }
        }
    }

    // Write formatted package.json to dist
    fs.writeFileSync(path.join('dist', 'package.json'), await prettierFormatJson(JSON.stringify(newPackageJSON)));
};

/**
 * Prepend 'use client' directive to specified client component files
 */
const prependUseClient = (fileNames: string[]) => {
    fileNames
        .map((fileName) => `dist/${fileName}.js`)
        .forEach((fileName) => fs.writeFileSync(fileName, "'use client';\n" + fs.readFileSync(fileName).toString()));
};

/**
 * Default tsup configuration object
 */
export const defaultConfigObject = {
    dts: true,
    format: ['cjs', 'esm'],
    legacyOutput: true,
    clean: true,
    sourcemap: 'inline',
    splitting: true,
    skipNodeModulesBundle: true,
} satisfies Options;

/**
 * Internal helper to create the full configuration object
 */
const makeConfigObject = (
    entries: Record<string, string>,
    clientEntries: Record<string, string> = {},
    optionOverrides: Partial<Options> = {}
): Options => {
    return {
        ...defaultConfigObject,
        entry: { ...entries, ...clientEntries },
        ...optionOverrides,
        onSuccess: async () => {
            await copyPackageJson();
            prependUseClient(Object.keys(clientEntries));
            if (typeof optionOverrides.onSuccess === 'function') {
                await optionOverrides.onSuccess();
            }
        },
    };
};


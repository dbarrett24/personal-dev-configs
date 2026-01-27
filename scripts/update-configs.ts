#!/usr/bin/env node

/**
 * Update all packages to use latest shared configs
 *
 * Usage:
 *   pnpm tsx scripts/update-configs.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const MONOREPO_ROOT = path.join(__dirname, '..');

const CONFIG_PACKAGES = [
    '@dbarrett24/prettier-config',
    '@dbarrett24/typescript-config',
    '@dbarrett24/eslint-config',
    '@dbarrett24/eslint-config-library',
    '@dbarrett24/jest-config',
    '@dbarrett24/jest-config-library',
    '@dbarrett24/testing-utils',
    '@dbarrett24/theme-system',
];

const findAllPackages = (): string[] => {
    const packages: string[] = [];

    const scanDir = (dir: string) => {
        if (!fs.existsSync(dir)) return;

        const items = fs.readdirSync(dir);

        for (const item of items) {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                const pkgPath = path.join(itemPath, 'package.json');
                if (fs.existsSync(pkgPath)) {
                    packages.push(itemPath);
                }
            }
        }
    };

    scanDir(path.join(MONOREPO_ROOT, 'shared-configs'));
    scanDir(path.join(MONOREPO_ROOT, 'brand-libraries'));
    scanDir(path.join(MONOREPO_ROOT, 'templates'));

    return packages;
};

const updatePackage = (pkgDir: string) => {
    const pkgPath = path.join(pkgDir, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const pkgName = pkg.name || path.basename(pkgDir);

    console.log(`\n📦 Updating ${pkgName}...`);

    let updated = false;

    // Update devDependencies
    if (pkg.devDependencies) {
        for (const configPkg of CONFIG_PACKAGES) {
            if (pkg.devDependencies[configPkg]) {
                const oldVersion = pkg.devDependencies[configPkg];
                pkg.devDependencies[configPkg] = 'workspace:*';

                if (oldVersion !== 'workspace:*') {
                    console.log(`  ✅ ${configPkg}: ${oldVersion} → workspace:*`);
                    updated = true;
                }
            }
        }
    }

    // Update dependencies
    if (pkg.dependencies) {
        for (const configPkg of CONFIG_PACKAGES) {
            if (pkg.dependencies[configPkg]) {
                const oldVersion = pkg.dependencies[configPkg];
                pkg.dependencies[configPkg] = 'workspace:*';

                if (oldVersion !== 'workspace:*') {
                    console.log(`  ✅ ${configPkg}: ${oldVersion} → workspace:*`);
                    updated = true;
                }
            }
        }
    }

    if (updated) {
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 4) + '\n');
        console.log(`  💾 Saved ${pkgName}`);
    } else {
        console.log(`  ⏭️  No updates needed`);
    }
};

const main = () => {
    console.log('\n🔄 Updating all packages to use latest shared configs...\n');

    const packages = findAllPackages();

    console.log(`Found ${packages.length} packages:\n`);
    packages.forEach((pkg) => {
        const pkgJson = JSON.parse(fs.readFileSync(path.join(pkg, 'package.json'), 'utf-8'));
        console.log(`  • ${pkgJson.name || path.basename(pkg)}`);
    });

    packages.forEach(updatePackage);

    console.log('\n\n✅ All packages updated!\n');
    console.log('Next steps:');
    console.log('  pnpm install      # Update lockfile');
    console.log('  pnpm build        # Rebuild all packages');
    console.log('  pnpm test         # Run tests');
    console.log('');

    // Optionally run pnpm install
    console.log('Run pnpm install now? (recommended)');
    const shouldInstall = process.argv.includes('--install') || process.argv.includes('-i');

    if (shouldInstall) {
        console.log('\n📦 Running pnpm install...\n');
        try {
            execSync('pnpm install', { cwd: MONOREPO_ROOT, stdio: 'inherit' });
            console.log('\n✅ Installation complete!\n');
        } catch (error) {
            console.error('\n❌ Installation failed\n');
            process.exit(1);
        }
    } else {
        console.log('Tip: Run with --install or -i to automatically run pnpm install');
    }
};

main();


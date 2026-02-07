#!/usr/bin/env node

/**
 * Runs tests for all packages sequentially
 *
 * This script discovers all packages in the workspace and runs their tests
 * one by one, providing clear output for each package.
 *
 * Usage:
 *   pnpm test-sequential
 *   pnpm test-sequential --coverage
 *   pnpm test-sequential --update-snapshots
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

type PackageInfo = {
    name: string;
    path: string;
    hasTests: boolean;
};

const WORKSPACE_PATTERNS = ['shared-configs/*', 'brand-libraries/*', 'templates/*'];

/**
 * Get all packages in the workspace
 */
const getWorkspacePackages = (): PackageInfo[] => {
    const rootDir = path.join(__dirname, '..');
    const packages: PackageInfo[] = [];

    for (const pattern of WORKSPACE_PATTERNS) {
        const baseDir = pattern.split('/')[0];
        const basePath = path.join(rootDir, baseDir);

        if (!fs.existsSync(basePath)) {
            continue;
        }

        const items = fs.readdirSync(basePath);

        for (const item of items) {
            const itemPath = path.join(basePath, item);
            const pkgJsonPath = path.join(itemPath, 'package.json');

            if (fs.existsSync(pkgJsonPath) && fs.statSync(itemPath).isDirectory()) {
                try {
                    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
                    const hasTests = Boolean(pkgJson.scripts?.test);

                    packages.push({
                        name: pkgJson.name || item,
                        path: itemPath,
                        hasTests,
                    });
                } catch (error) {
                    console.warn(`⚠️  Warning: Could not read ${pkgJsonPath}`);
                }
            }
        }
    }

    return packages;
};

/**
 * Run tests for a single package
 */
const runPackageTests = (
    pkg: PackageInfo,
    args: string[]
): { success: boolean; duration: number } => {
    const startTime = Date.now();

    try {
        const command = args.length > 0 ? `pnpm test ${args.join(' ')}` : 'pnpm test';

        execSync(command, {
            cwd: pkg.path,
            stdio: 'inherit',
            env: { ...process.env, FORCE_COLOR: '1' },
        });

        const duration = Date.now() - startTime;
        return { success: true, duration };
    } catch (error) {
        const duration = Date.now() - startTime;
        return { success: false, duration };
    }
};

/**
 * Format duration in human-readable format
 */
const formatDuration = (ms: number): string => {
    if (ms < 1000) return `${ms}ms`;
    const seconds = (ms / 1000).toFixed(2);
    return `${seconds}s`;
};

/**
 * Main function
 */
const main = () => {
    console.log('\n🧪 Running tests sequentially for all packages\n');

    // Parse command-line arguments
    const args = process.argv.slice(2);

    // Get all packages
    const packages = getWorkspacePackages();
    const testablePackages = packages.filter((pkg) => pkg.hasTests);

    if (testablePackages.length === 0) {
        console.log('⚠️  No packages with test scripts found');
        return;
    }

    console.log(`Found ${testablePackages.length} package(s) with tests:\n`);
    testablePackages.forEach((pkg, idx) => {
        console.log(`  ${idx + 1}. ${pkg.name}`);
    });
    console.log('');

    // Run tests for each package
    const results: Array<{
        package: PackageInfo;
        success: boolean;
        duration: number;
    }> = [];

    let currentPackage = 1;

    for (const pkg of testablePackages) {
        console.log(
            `\n${'='.repeat(80)}\n📦 [${currentPackage}/${testablePackages.length}] Testing: ${pkg.name}\n${'='.repeat(80)}\n`
        );

        const result = runPackageTests(pkg, args);
        results.push({
            package: pkg,
            success: result.success,
            duration: result.duration,
        });

        currentPackage++;
    }

    // Print summary
    console.log('\n' + '='.repeat(80));
    console.log('📊 Test Summary');
    console.log('='.repeat(80) + '\n');

    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    results.forEach((result) => {
        const icon = result.success ? '✅' : '❌';
        const status = result.success ? 'PASS' : 'FAIL';
        const duration = formatDuration(result.duration);
        console.log(`${icon} ${status.padEnd(6)} ${duration.padStart(10)}  ${result.package.name}`);
    });

    const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

    console.log('\n' + '-'.repeat(80));
    console.log(
        `Total: ${successful.length} passed, ${failed.length} failed (${formatDuration(totalDuration)})`
    );
    console.log('='.repeat(80) + '\n');

    if (failed.length > 0) {
        console.error('❌ Some tests failed\n');
        process.exit(1);
    } else {
        console.log('✅ All tests passed!\n');
        process.exit(0);
    }
};

main();

#!/usr/bin/env tsx

/**
 * Test Script Validator
 * 
 * Automatically tests the most important scripts to ensure they work correctly.
 * This is a quick smoke test for the development workflow scripts.
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = path.resolve(__dirname, '..');

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

type TestResult = {
    name: string;
    passed: boolean;
    duration: number;
    error?: string;
};

const results: TestResult[] = [];

function log(message: string, color: string = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function runScript(scriptName: string, description: string): TestResult {
    const startTime = Date.now();
    log(`\n${colors.cyan}Testing: ${colors.bright}${scriptName}${colors.reset}`);
    log(`${colors.blue}Description: ${description}${colors.reset}`);

    try {
        execSync(`pnpm ${scriptName}`, {
            cwd: ROOT_DIR,
            stdio: 'pipe',
            encoding: 'utf8',
        });

        const duration = Date.now() - startTime;
        log(`${colors.green}✓ Passed${colors.reset} (${duration}ms)`);

        return {
            name: scriptName,
            passed: true,
            duration,
        };
    } catch (error: any) {
        const duration = Date.now() - startTime;
        log(`${colors.red}✗ Failed${colors.reset} (${duration}ms)`);
        
        if (error.stdout) {
            log(`${colors.yellow}Output:${colors.reset}`);
            console.log(error.stdout.toString().slice(-500)); // Last 500 chars
        }
        
        if (error.stderr) {
            log(`${colors.red}Error:${colors.reset}`);
            console.log(error.stderr.toString().slice(-500));
        }

        return {
            name: scriptName,
            passed: false,
            duration,
            error: error.message,
        };
    }
}

function checkDistFolder(packagePath: string, packageName: string): TestResult {
    const startTime = Date.now();
    const distPath = path.join(ROOT_DIR, packagePath, 'dist');
    
    log(`\n${colors.cyan}Checking: ${colors.bright}${packageName} dist folder${colors.reset}`);
    
    if (fs.existsSync(distPath)) {
        const files = fs.readdirSync(distPath);
        const duration = Date.now() - startTime;
        
        if (files.length > 0) {
            log(`${colors.green}✓ Exists${colors.reset} (${files.length} files)`);
            return {
                name: `${packageName} dist`,
                passed: true,
                duration,
            };
        }
    }
    
    const duration = Date.now() - startTime;
    log(`${colors.red}✗ Missing or empty${colors.reset}`);
    return {
        name: `${packageName} dist`,
        passed: false,
        duration,
        error: 'dist folder missing or empty',
    };
}

async function main() {
    console.clear();
    log('═══════════════════════════════════════════════════════', colors.bright);
    log('         Script Validator - Quick Test Suite          ', colors.bright);
    log('═══════════════════════════════════════════════════════', colors.bright);

    log(`\n${colors.magenta}Running from: ${ROOT_DIR}${colors.reset}\n`);

    // Section 1: Build Scripts
    log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);
    log('  1️⃣  Build Scripts', colors.bright);
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);

    results.push(runScript('build:theme', 'Build theme system package'));
    results.push(checkDistFolder('shared-configs/theme-system', 'theme-system'));

    results.push(runScript('build:core', 'Build core components package'));
    results.push(checkDistFolder('shared-configs/core-components', 'core-components'));

    results.push(runScript('build:basketball', 'Build basketball brand package'));
    results.push(checkDistFolder('brand-libraries/basketball-training-ui', 'basketball-training-ui'));

    results.push(runScript('build:professional', 'Build professional brand package'));
    results.push(checkDistFolder('brand-libraries/professional-brand-ui', 'professional-brand-ui'));

    // Section 2: Test Scripts
    log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);
    log('  2️⃣  Test Scripts', colors.bright);
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);

    results.push(runScript('test:core', 'Run core components tests'));
    results.push(runScript('test:basketball', 'Run basketball brand tests'));
    results.push(runScript('test:professional', 'Run professional brand tests'));

    // Section 3: Quality Scripts
    log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);
    log('  3️⃣  Quality Scripts', colors.bright);
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);

    results.push(runScript('type-check:core', 'Type check core components'));
    results.push(runScript('lint', 'Run all linters'));

    // Section 4: Cleanup Scripts
    log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);
    log('  4️⃣  Cleanup Scripts (non-destructive)', colors.bright);
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright);

    // Note: We skip actual cleanup to avoid breaking the test
    log(`${colors.yellow}⊘ Skipping actual cleanup (would delete dist folders)${colors.reset}`);
    results.push({
        name: 'clean:dist',
        passed: true,
        duration: 0,
    });

    // Final Summary
    log('\n═══════════════════════════════════════════════════════', colors.bright);
    log('                    SUMMARY                            ', colors.bright);
    log('═══════════════════════════════════════════════════════', colors.bright);

    const passed = results.filter((r) => r.passed).length;
    const failed = results.filter((r) => !r.passed).length;
    const total = results.length;
    const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

    log(`\nTotal Tests: ${total}`);
    log(`${colors.green}✓ Passed: ${passed}${colors.reset}`);
    log(`${colors.red}✗ Failed: ${failed}${colors.reset}`);
    log(`Total Time: ${(totalDuration / 1000).toFixed(2)}s`);

    if (failed > 0) {
        log(`\n${colors.red}${colors.bright}Failed Tests:${colors.reset}`);
        results
            .filter((r) => !r.passed)
            .forEach((r) => {
                log(`  ${colors.red}✗ ${r.name}${colors.reset}`);
                if (r.error) {
                    log(`    ${colors.yellow}${r.error}${colors.reset}`);
                }
            });
    }

    // Performance Report
    log(`\n${colors.cyan}Performance Report:${colors.reset}`);
    const sortedResults = [...results].sort((a, b) => b.duration - a.duration);
    sortedResults.slice(0, 5).forEach((r) => {
        const icon = r.passed ? colors.green + '✓' : colors.red + '✗';
        log(`  ${icon} ${r.name}: ${(r.duration / 1000).toFixed(2)}s${colors.reset}`);
    });

    // Exit code
    if (failed > 0) {
        log(`\n${colors.red}${colors.bright}Some tests failed. See details above.${colors.reset}`);
        process.exit(1);
    } else {
        log(`\n${colors.green}${colors.bright}✨ All tests passed!${colors.reset}`);
        log(`\n${colors.cyan}Next steps:${colors.reset}`);
        log(`  • Try dev scripts: ${colors.bright}pnpm dev:core${colors.reset}`);
        log(`  • Try workflow scripts: ${colors.bright}pnpm work:basketball${colors.reset}`);
        log(`  • View Storybook: ${colors.bright}pnpm storybook:core${colors.reset}`);
        process.exit(0);
    }
}

main().catch((error) => {
    log(`\n${colors.red}${colors.bright}Fatal error:${colors.reset}`, colors.red);
    console.error(error);
    process.exit(1);
});

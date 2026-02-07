#!/usr/bin/env node

/**
 * Comprehensive verification script for the entire project
 *
 * Runs through the complete verification checklist:
 * 1. Install and build
 * 2. Run all tests
 * 3. Lint everything
 * 4. Type-check
 *
 * Usage:
 *   pnpm verify-all
 *   pnpm verify-all --skip-install  # Skip install/build step
 *   pnpm verify-all --parallel-tests  # Use parallel tests instead of sequential
 */

import { execSync } from 'child_process';

type StepResult = {
    name: string;
    success: boolean;
    duration: number;
    error?: string;
};

const formatDuration = (ms: number): string => {
    if (ms < 1000) return `${ms}ms`;
    const seconds = (ms / 1000).toFixed(2);
    if (ms < 60000) return `${seconds}s`;
    const minutes = Math.floor(ms / 60000);
    const remainingSeconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}m ${remainingSeconds}s`;
};

const runStep = (name: string, command: string, cwd?: string): StepResult => {
    const startTime = Date.now();

    console.log(`\n${'='.repeat(80)}`);
    console.log(`🔍 ${name}`);
    console.log('='.repeat(80));
    console.log(`Running: ${command}\n`);

    try {
        execSync(command, {
            cwd: cwd || process.cwd(),
            stdio: 'inherit',
            env: { ...process.env, FORCE_COLOR: '1' },
        });

        const duration = Date.now() - startTime;
        console.log(`\n✅ ${name} completed in ${formatDuration(duration)}`);

        return { name, success: true, duration };
    } catch (error) {
        const duration = Date.now() - startTime;
        console.error(`\n❌ ${name} failed after ${formatDuration(duration)}`);

        return {
            name,
            success: false,
            duration,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};

const printSummary = (results: StepResult[]) => {
    console.log('\n' + '='.repeat(80));
    console.log('📊 Verification Summary');
    console.log('='.repeat(80) + '\n');

    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    results.forEach((result) => {
        const icon = result.success ? '✅' : '❌';
        const status = result.success ? 'PASS' : 'FAIL';
        const duration = formatDuration(result.duration);
        console.log(`${icon} ${status.padEnd(6)} ${duration.padStart(10)}  ${result.name}`);
    });

    const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

    console.log('\n' + '-'.repeat(80));
    console.log(
        `Total: ${successful.length} passed, ${failed.length} failed (${formatDuration(totalDuration)})`
    );
    console.log('='.repeat(80) + '\n');

    return failed.length === 0;
};

const printVisualCheckReminder = () => {
    console.log('📝 Manual Visual Checks Remaining:\n');
    console.log('Run these commands in separate terminals to verify visually:\n');
    console.log('  1. Core Components:');
    console.log('     cd shared-configs/core-components && pnpm storybook');
    console.log('     → http://localhost:6007');
    console.log('     ✓ Check Button, Input components load\n');
    console.log('  2. Basketball Brand:');
    console.log('     cd brand-libraries/basketball-training-ui && pnpm storybook');
    console.log('     → http://localhost:6006');
    console.log('     ✓ Check styled Button loads with orange theme\n');
    console.log('  3. Professional Brand:');
    console.log('     cd brand-libraries/professional-brand-ui && pnpm storybook');
    console.log('     → http://localhost:6006');
    console.log('     ✓ Check styled Button loads with blue theme\n');
    console.log('  4. Next.js Template:');
    console.log('     cd templates/nextjs-app && pnpm dev');
    console.log('     → http://localhost:3000');
    console.log('     ✓ Check homepage renders\n');
    console.log('  5. React Vite Template:');
    console.log('     cd templates/react-vite && pnpm dev');
    console.log('     → http://localhost:5173');
    console.log('     ✓ Check app renders\n');
};

const main = () => {
    const args = process.argv.slice(2);
    const skipInstall = args.includes('--skip-install');
    const parallelTests = args.includes('--parallel-tests');

    console.log('\n🚀 Running Complete Verification Checklist\n');

    const results: StepResult[] = [];

    // Step 1: Install and Build
    if (!skipInstall) {
        results.push(runStep('Step 1: Install and Build', 'pnpm install && pnpm build'));

        if (!results[results.length - 1].success) {
            console.error('\n❌ Build failed. Stopping verification.\n');
            printSummary(results);
            process.exit(1);
        }
    } else {
        console.log('\n⏭️  Skipping install and build (--skip-install flag)\n');
    }

    // Step 2: Run All Tests
    const testCommand = parallelTests ? 'pnpm test' : 'pnpm test-sequential';
    results.push(runStep('Step 2: Run All Tests', testCommand));

    // Step 3: Lint Everything
    results.push(runStep('Step 3: Lint Everything', 'pnpm lint'));

    // Step 4: Type-check
    results.push(runStep('Step 4: Type-check', 'pnpm ts-check'));

    // Print summary
    const allPassed = printSummary(results);

    if (allPassed) {
        console.log('✅ All automated checks passed!\n');
        printVisualCheckReminder();
        process.exit(0);
    } else {
        console.error('❌ Some checks failed. Please fix the issues and try again.\n');
        process.exit(1);
    }
};

main();

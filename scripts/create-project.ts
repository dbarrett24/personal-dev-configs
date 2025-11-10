#!/usr/bin/env node

/**
 * Interactive CLI to create new projects from templates
 *
 * Usage:
 *   pnpm tsx scripts/create-project.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

type Template = 'nextjs-app' | 'react-vite';
type Brand = 'basketball-training' | 'professional' | 'none';

const main = async () => {
    console.log('\n🚀 Create New Project\n');

    // 1. Project name
    const projectName = await question('Project name: ');
    if (!projectName) {
        console.error('❌ Project name is required');
        process.exit(1);
    }

    // 2. Template selection
    console.log('\nSelect template:');
    console.log('  1) Next.js App (with App Router, SSR)');
    console.log('  2) React + Vite (SPA)');
    const templateChoice = await question('\nTemplate (1-2): ');

    const template: Template = templateChoice === '2' ? 'react-vite' : 'nextjs-app';

    // 3. Brand selection
    console.log('\nSelect brand library:');
    console.log('  1) Basketball Training UI (Orange theme)');
    console.log('  2) Professional Brand UI (Blue theme)');
    console.log('  3) None (no component library)');
    const brandChoice = await question('\nBrand (1-3): ');

    let brand: Brand = 'basketball-training';
    if (brandChoice === '2') brand = 'professional';
    else if (brandChoice === '3') brand = 'none';

    // 4. Confirm
    console.log('\n📋 Summary:');
    console.log(`  Project: ${projectName}`);
    console.log(`  Template: ${template}`);
    console.log(`  Brand: ${brand}`);

    const confirm = await question('\nCreate project? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
        console.log('❌ Cancelled');
        rl.close();
        return;
    }

    // 5. Create project
    console.log('\n🔨 Creating project...\n');

    const templatePath = path.join(__dirname, '..', 'templates', template);
    const targetPath = path.join(process.cwd(), projectName);

    // Copy template
    if (fs.existsSync(targetPath)) {
        console.error(`❌ Directory ${projectName} already exists`);
        rl.close();
        return;
    }

    fs.cpSync(templatePath, targetPath, { recursive: true });

    // Update package.json
    const pkgPath = path.join(targetPath, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.name = projectName;

    // Update brand library if needed
    if (brand === 'professional') {
        if (pkg.dependencies['@yourname/basketball-training-ui']) {
            delete pkg.dependencies['@yourname/basketball-training-ui'];
            pkg.dependencies['@yourname/professional-brand-ui'] = 'workspace:*';
        }
    } else if (brand === 'none') {
        delete pkg.dependencies['@yourname/basketball-training-ui'];
        delete pkg.dependencies['@yourname/professional-brand-ui'];
    }

    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 4));

    // Initialize git
    try {
        execSync('git init', { cwd: targetPath, stdio: 'inherit' });
    } catch (error) {
        console.log('⚠️  Failed to initialize git');
    }

    console.log('\n✅ Project created successfully!\n');
    console.log('Next steps:');
    console.log(`  cd ${projectName}`);
    console.log('  pnpm install');
    console.log('  pnpm dev');
    console.log('');

    rl.close();
};

main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
});


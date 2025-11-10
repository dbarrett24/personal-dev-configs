#!/usr/bin/env node

/**
 * Interactive CLI to create new brand component libraries
 *
 * Usage:
 *   pnpm tsx scripts/create-brand.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

const kebabCase = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
};

const main = async () => {
    console.log('\n🎨 Create New Brand Component Library\n');

    // 1. Brand name
    const brandName = await question('Brand name (e.g., "Gaming UI"): ');
    if (!brandName) {
        console.error('❌ Brand name is required');
        process.exit(1);
    }

    const brandSlug = kebabCase(brandName);
    const packageName = `@yourname/${brandSlug}-ui`;

    // 2. Primary color
    const primaryColor = await question('Primary color (hex, e.g., #3B82F6): ');
    const primary = primaryColor || '#3B82F6';

    // 3. Secondary color
    const secondaryColor = await question('Secondary color (hex, e.g., #6B7280): ');
    const secondary = secondaryColor || '#6B7280';

    // 4. Accent color
    const accentColor = await question('Accent color (hex, e.g., #10B981): ');
    const accent = accentColor || '#10B981';

    // 5. Storybook port
    const defaultPort = 6008;
    const portInput = await question(`Storybook port (default: ${defaultPort}): `);
    const port = portInput ? parseInt(portInput, 10) : defaultPort;

    // 6. Confirm
    console.log('\n📋 Summary:');
    console.log(`  Brand: ${brandName}`);
    console.log(`  Package: ${packageName}`);
    console.log(`  Primary: ${primary}`);
    console.log(`  Secondary: ${secondary}`);
    console.log(`  Accent: ${accent}`);
    console.log(`  Storybook: http://localhost:${port}`);

    const confirm = await question('\nCreate brand library? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
        console.log('❌ Cancelled');
        rl.close();
        return;
    }

    // 7. Create brand library
    console.log('\n🔨 Creating brand library...\n');

    const sourcePath = path.join(__dirname, '..', 'brand-libraries', 'basketball-training-ui');
    const targetPath = path.join(__dirname, '..', 'brand-libraries', `${brandSlug}-ui`);

    if (fs.existsSync(targetPath)) {
        console.error(`❌ Brand library ${brandSlug}-ui already exists`);
        rl.close();
        return;
    }

    // Copy from basketball-training-ui as template
    fs.cpSync(sourcePath, targetPath, { recursive: true });

    // Update package.json
    const pkgPath = path.join(targetPath, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.name = packageName;
    pkg.description = `${brandName} Component Library`;
    pkg.keywords = ['react', 'ui', 'component-library', 'tailwind', brandSlug];
    pkg.scripts.storybook = `storybook dev -p ${port}`;

    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 4));

    // Update theme CSS variables
    const cssPath = path.join(targetPath, 'src', 'theme', 'styles.css');
    const cssTemplate = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --color-primary: ${primary};
    --color-primary-foreground: #ffffff;
    --color-secondary: ${secondary};
    --color-secondary-foreground: #ffffff;
    --color-accent: ${accent};
    --color-accent-foreground: #ffffff;
    --color-background: #ffffff;
    --color-foreground: #333333;
    --color-card: #f8f8f8;
    --color-card-foreground: #333333;
    --color-border: #e0e0e0;
    --color-input: #f0f0f0;
    --color-ring: ${primary};

    --radius: 0.5rem;
}
`;

    fs.writeFileSync(cssPath, cssTemplate);

    // Update README
    const readmePath = path.join(targetPath, 'README.md');
    const readmeTemplate = `# ${packageName}

${brandName} Component Library built with React, TypeScript, Tailwind CSS, and Storybook.

## Installation

\`\`\`bash
pnpm add ${packageName}
\`\`\`

## Usage

\`\`\`tsx
import { Button } from '${packageName}';

function MyComponent() {
  return <Button variant="primary">Click Me</Button>;
}
\`\`\`

## Development

\`\`\`bash
# Install dependencies (from monorepo root)
pnpm install

# Build the library
pnpm build

# Start Storybook
pnpm storybook
# Opens http://localhost:${port}
\`\`\`

## Theme Colors

- Primary: ${primary}
- Secondary: ${secondary}
- Accent: ${accent}

## License

MIT
`;

    fs.writeFileSync(readmePath, readmeTemplate);

    console.log('\n✅ Brand library created successfully!\n');
    console.log('Next steps:');
    console.log(`  cd brand-libraries/${brandSlug}-ui`);
    console.log('  pnpm build');
    console.log('  pnpm storybook');
    console.log(`  Open http://localhost:${port}`);
    console.log('');

    rl.close();
};

main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
});


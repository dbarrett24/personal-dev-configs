#!/usr/bin/env node

/**
 * Interactive CLI to create new brand component libraries
 *
 * Creates BOTH the brand package AND starter stories in apps/docs.
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

const pascalCase = (str: string): string => {
    return str
        .split(/[\s-_]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
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
    const brandPascal = pascalCase(brandName);
    const packageName = `@dbarrett24/${brandSlug}-ui`;

    // 2. Primary color
    const primaryColor = await question('Primary color (hex, e.g., #3B82F6): ');
    const primary = primaryColor || '#3B82F6';

    // 3. Secondary color
    const secondaryColor = await question('Secondary color (hex, e.g., #6B7280): ');
    const secondary = secondaryColor || '#6B7280';

    // 4. Accent color
    const accentColor = await question('Accent color (hex, e.g., #10B981): ');
    const accent = accentColor || '#10B981';

    // 5. Confirm
    console.log('\n📋 Summary:');
    console.log(`  Brand: ${brandName}`);
    console.log(`  Package: ${packageName}`);
    console.log(`  Primary: ${primary}`);
    console.log(`  Secondary: ${secondary}`);
    console.log(`  Accent: ${accent}`);
    console.log(`  Stories: apps/docs/stories/${brandPascal}/`);

    const confirm = await question('\nCreate brand library? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
        console.log('❌ Cancelled');
        rl.close();
        return;
    }

    // 6. Create brand library
    console.log('\n🔨 Creating brand library...\n');

    const sourcePath = path.join(__dirname, '..', 'brand-libraries', 'basketball-training-ui');
    const targetPath = path.join(__dirname, '..', 'brand-libraries', `${brandSlug}-ui`);

    if (fs.existsSync(targetPath)) {
        console.error(`❌ Brand library ${brandSlug}-ui already exists`);
        rl.close();
        return;
    }

    // Copy from basketball-training-ui as template (excluding .storybook and stories)
    fs.cpSync(sourcePath, targetPath, {
        recursive: true,
        filter: (src) => !src.includes('.storybook') && !src.includes('.stories.'),
    });

    // Update package.json
    const pkgPath = path.join(targetPath, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.name = packageName;
    pkg.description = `${brandName} Component Library`;
    pkg.keywords = ['react', 'ui', 'component-library', 'tailwind', brandSlug];
    // Remove any storybook scripts that might have been copied
    delete pkg.scripts.storybook;
    delete pkg.scripts['build-storybook'];
    delete pkg.scripts['dev:storybook'];
    // Ensure subpath exports
    pkg.exports = {
        '.': {
            import: './dist/esm/index.js',
            require: './dist/index.js',
            types: './dist/index.d.ts',
        },
        './Button': {
            import: './dist/esm/Button.js',
            require: './dist/Button.js',
            types: './dist/Button.d.ts',
        },
        './theme': './dist/theme/styles.css',
    };

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

${brandName} Component Library built with React, TypeScript, Tailwind CSS.

## Installation

\`\`\`bash
pnpm add ${packageName}
\`\`\`

## Usage

\`\`\`tsx
import { Button } from '${packageName}/Button';

function MyComponent() {
  return <Button variant="filled" style="primary">Click Me</Button>;
}
\`\`\`

## Development

\`\`\`bash
# Install dependencies (from monorepo root)
pnpm install

# Build the library
pnpm build

# View in Storybook
pnpm storybook:${brandSlug}
\`\`\`

## Theme Colors

- Primary: ${primary}
- Secondary: ${secondary}
- Accent: ${accent}

## License

MIT
`;

    fs.writeFileSync(readmePath, readmeTemplate);

    // 7. Create starter stories in apps/docs
    console.log('📖 Creating starter stories in apps/docs...\n');

    const storiesDir = path.join(__dirname, '..', 'apps', 'docs', 'stories', brandPascal, 'Core', 'Button');
    fs.mkdirSync(storiesDir, { recursive: true });

    const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '${packageName}/Button';

const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'outline', 'ghost'],
            description: 'Button variant style',
        },
        style: {
            control: 'select',
            options: ['primary', 'secondary', 'neutral', 'critical'],
            description: 'Semantic style of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Button size',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
    args: {
        variant: 'filled',
        style: 'primary',
        children: 'Filled Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        style: 'primary',
        children: 'Outline Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        style: 'primary',
        children: 'Ghost Button',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <div className="flex gap-md">
                <Button variant="filled" style="primary">Filled Primary</Button>
                <Button variant="filled" style="secondary">Filled Secondary</Button>
                <Button variant="outline" style="primary">Outline</Button>
                <Button variant="ghost" style="primary">Ghost</Button>
            </div>
            <div className="flex gap-md">
                <Button variant="filled" style="primary" size="sm">Small</Button>
                <Button variant="filled" style="primary">Medium</Button>
                <Button variant="filled" style="primary" size="lg">Large</Button>
            </div>
        </div>
    ),
};
`;

    fs.writeFileSync(path.join(storiesDir, 'Button.stories.tsx'), storyContent);

    // 8. Update storyConfiguration.ts
    const storyConfigPath = path.join(__dirname, '..', 'apps', 'docs', '.storybook', 'storyConfiguration.ts');
    if (fs.existsSync(storyConfigPath)) {
        let configContent = fs.readFileSync(storyConfigPath, 'utf-8');

        // Add new brand config before the 'all' key
        const newBrandConfig = `    ${brandSlug}: {
        defaultTheme: '${brandSlug}',
        stories: [
            { directory: '../stories/${brandPascal}/Core', titlePrefix: 'Core' },
        ],
    },
    all`;

        configContent = configContent.replace(/    all/, newBrandConfig);

        // Add new brand stories to 'all' config
        const allStoriesInsert = `            { directory: '../stories/${brandPascal}/Core', titlePrefix: '${brandPascal}/Core' },`;
        configContent = configContent.replace(
            /(\{ directory: '\.\.\/stories\/Professional\/Core'.*?\},)/,
            `$1\n${allStoriesInsert}`
        );

        fs.writeFileSync(storyConfigPath, configContent);
    }

    // 9. Add root script
    const rootPkgPath = path.join(__dirname, '..', 'package.json');
    const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));
    rootPkg.scripts[`storybook:${brandSlug}`] = `pnpm --filter docs storybook:${brandSlug}`;
    fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 4));

    // 10. Add docs script for new brand
    const docsPkgPath = path.join(__dirname, '..', 'apps', 'docs', 'package.json');
    const docsPkg = JSON.parse(fs.readFileSync(docsPkgPath, 'utf-8'));
    docsPkg.scripts[`storybook:${brandSlug}`] = `STORYBOOK_KEY=${brandSlug} storybook dev -p 6006`;
    docsPkg.dependencies[packageName] = 'workspace:*';
    fs.writeFileSync(docsPkgPath, JSON.stringify(docsPkg, null, 4));

    console.log('\n✅ Brand library created successfully!\n');
    console.log('Next steps:');
    console.log('  1. Run: pnpm install');
    console.log('  2. Run: pnpm build');
    console.log(`  3. View in Storybook: pnpm storybook:${brandSlug}`);
    console.log('');
    console.log('Files created:');
    console.log(`  📦 brand-libraries/${brandSlug}-ui/`);
    console.log(`  📖 apps/docs/stories/${brandPascal}/Core/Button/Button.stories.tsx`);
    console.log('');

    rl.close();
};

main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
});

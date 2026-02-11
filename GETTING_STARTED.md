# Getting Started with Personal Dev Configs

## What's Included

A production-ready monorepo containing:

✅ **10 Shared Configuration Packages:**

1. `@dbarrett24/prettier-config` - Prettier with Tailwind support
2. `@dbarrett24/typescript-config` - TypeScript configs (base, react, nextjs, library)
3. `@dbarrett24/eslint-config` - ESLint for React/Next.js apps
4. `@dbarrett24/eslint-config-library` - Stricter ESLint for libraries
5. `@dbarrett24/jest-config` - Jest with 90% coverage (apps)
6. `@dbarrett24/jest-config-library` - Jest with 95% coverage (libraries)
7. `@dbarrett24/testing-utils` - Testing utilities (render, jotaiStore, React Query mocks, FormWrapper)
8. `@dbarrett24/theme-system` - Semantic tokens and cn() utility
9. `@dbarrett24/tsup-config` - Smart build wrapper (resolves workspace deps, adds 'use client')
10. `@dbarrett24/core-components` - Headless base components

✅ **2 Brand Libraries:**

- `@dbarrett24/basketball-training-ui` - Basketball brand components with Storybook
- `@dbarrett24/professional-brand-ui` - Professional brand components with Storybook

✅ **2 App Templates:**

- `nextjs-app` - Next.js 15 + App Router template
- `react-vite` - React + Vite SPA template

✅ **Repository Infrastructure:**

- pnpm workspaces
- Turbo for monorepo builds
- Changesets for version management
- Comprehensive development scripts

---

## Installation & Setup

### 1. Install Dependencies

```bash
cd /Users/dbarr/Documents/Development/personal-dev-configs
pnpm install
```

### 2. Build All Packages

```bash
pnpm build
```

### 3. Run Storybook

```bash
# Basketball Training UI (port 6006)
pnpm storybook:basketball

# Professional Brand UI (port 6006)
pnpm storybook:professional

# Core Components (port 6007)
pnpm storybook:core

# All Storybooks in parallel
pnpm storybook:all
```

### 4. Run Tests

```bash
# Test all packages
pnpm test

# Test with coverage
pnpm test-coverage

# Test specific package
pnpm test:core
pnpm test:basketball
pnpm test:professional
```

---

## Using in Your Projects

### Option 1: Link Locally (Development)

```bash
cd /Users/dbarr/Documents/Development/personal-dev-configs

# Link all packages
pnpm link --global

cd /path/to/your/project
pnpm link --global @dbarrett24/eslint-config
pnpm link --global @dbarrett24/prettier-config
pnpm link --global @dbarrett24/typescript-config
pnpm link --global @dbarrett24/basketball-training-ui
```

### Option 2: Publish to npm (Production)

```bash
# 1. Update changesets config with your npm username
# Edit .changeset/config.json and update "repo"

# 2. Create changesets for packages
pnpm cl

# Follow prompts to select packages and version bumps

# 3. Version packages
pnpm ci:version

# 4. Publish to npm
npm login
pnpm ci:publish
```

### Option 3: Use in New Project

```json
// my-basketball-app/package.json
{
    "name": "my-basketball-app",
    "dependencies": {
        "@dbarrett24/basketball-training-ui": "^1.0.0",
        "@dbarrett24/theme-system": "^1.0.0",
        "next": "15.5.4",
        "react": "19.1.0"
    },
    "devDependencies": {
        "@dbarrett24/eslint-config": "^1.0.0",
        "@dbarrett24/prettier-config": "^1.0.0",
        "@dbarrett24/typescript-config": "^1.0.0",
        "@dbarrett24/jest-config": "^1.0.0",
        "@dbarrett24/testing-utils": "^1.0.0"
    },
    "prettier": "@dbarrett24/prettier-config"
}
```

---

## Essential Scripts

For a complete list of available scripts, see **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

### Development

```bash
pnpm work:core            # Work on core components
pnpm work:basketball      # Work on basketball brand
pnpm work:professional    # Work on professional brand
pnpm dev:nextjs           # Start Next.js template
pnpm dev:vite             # Start Vite template
```

### Testing

```bash
pnpm test                 # Run all tests
pnpm test:watch:core      # Watch mode for core
pnpm test-coverage        # With coverage reports
pnpm test-update          # Update snapshots
```

### Quality Checks

```bash
pnpm pc                   # Pre-commit check
pnpm pcf                  # Pre-commit fix (auto-fix)
pnpm prepush              # Full pre-push check
pnpm lint                 # Lint all packages
pnpm lint-fix             # Fix linting issues
```

### Storybook

```bash
pnpm storybook:core           # Port 6007
pnpm storybook:basketball     # Port 6006
pnpm storybook:professional   # Port 6006
pnpm storybook:all            # All in parallel
```

### Maintenance

```bash
pnpm cleanup              # Remove all node_modules
pnpm clean:dist           # Remove dist folders
pnpm full-rebuild         # Complete rebuild
pnpm upgrade-deps         # Update dependencies
```

---

## Package Overview

### @dbarrett24/prettier-config

- Single quotes, 4-space tabs
- Tailwind CSS class sorting
- Recognizes `cn()` function

### @dbarrett24/typescript-config

- **base.json**: Common TypeScript settings
- **react.json**: React-specific config
- **nextjs.json**: Next.js App Router config
- **library.json**: Component library config

### @dbarrett24/eslint-config

- React + TypeScript rules
- Testing Library rules
- Import sorting
- Prettier integration

### @dbarrett24/jest-config

- 90% coverage thresholds (apps)
- Auto mock clearing
- Path alias support (@/\*)
- React Testing Library setup

### @dbarrett24/testing-utils

- Custom render with providers (React Query + Jotai)
- Direct Jotai store access
- React Query mocks (success, loading, error states)
- FormWrapper for React Hook Form
- userEvent for interactions

### @dbarrett24/theme-system

- Semantic color tokens (background-primary, text-primary, etc.)
- Semantic spacing (xs, sm, md, lg, xl)
- cn() utility for class merging
- Multi-brand support via CSS variables

### @dbarrett24/tsup-config

- Automatic workspace dependency resolution
- 'use client' directive injection
- dist/package.json generation
- Consistent build configuration

### @dbarrett24/basketball-training-ui

- Complete component library
- Orange brand colors
- Storybook documentation
- Full test coverage

### @dbarrett24/professional-brand-ui

- Complete component library
- Blue brand colors
- Storybook documentation
- Full test coverage

---

## Customization

### Update Brand Colors

Edit TypeScript theme definitions in `shared-configs/theme-system/src/themes/YourBrand.ts`:

```typescript
import type { ThemeDefinition } from './types';

export const YourBrand: ThemeDefinition = {
    name: 'YourBrand',
    colors: {
        primary: {
            500: { r: 255, g: 107, b: 53 }, // Your primary color
            // ... full color scale
        },
        // ... other color families
    },
    // ... typography, spacing overrides if needed
};
```

Then register in `src/themes/writeToCSSFile.ts` and rebuild:

```bash
pnpm build:theme
```

CSS will be generated at `dist/css/YourBrand.css` for apps to import.

### Add New Components

```bash
cd brand-libraries/basketball-training-ui/src/components
```

Create component files:

1. `ComponentName.tsx` - Component implementation
2. `ComponentName.stories.tsx` - Storybook stories
3. `ComponentName.spec.tsx` - Jest tests

Export from `src/index.ts`.

### Create New Brand Library

```bash
cp -r brand-libraries/basketball-training-ui brand-libraries/new-brand-ui
cd brand-libraries/new-brand-ui

# Update package.json name
# Update theme colors in src/theme/styles.css
# Update brand-specific colors in tailwind.config.js
```

---

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 6006
lsof -ti:6006 | xargs kill -9

# Kill process on port 6007
lsof -ti:6007 | xargs kill -9
```

### Module Not Found Errors

```bash
# Rebuild dependencies
pnpm build:theme
pnpm build:core
# Then try your command again
```

### Build Fails

```bash
# Clean rebuild
pnpm cleanup
pnpm install
pnpm build
```

### Storybook Won't Start

```bash
cd brand-libraries/basketball-training-ui
rm -rf node_modules .storybook-cache
pnpm install
pnpm storybook
```

### Tests Failing

```bash
# Update snapshots
pnpm test-update

# Run tests sequentially to see which fails
pnpm test-sequential
```

### Turbo Cache Issues

```bash
# Clear cache and rebuild
pnpm clean:cache
pnpm build
```

---

## What's Valuable

Based on professional experience, this setup captures:

1. ✅ **Strict TypeScript** with proper configs
2. ✅ **Consistent code style** (arrow functions, nullish coalescing, naming)
3. ✅ **High test coverage** (90%+ apps, 95%+ libraries)
4. ✅ **Testing best practices** (no mocking components, direct queries, FormWrapper)
5. ✅ **Multi-brand theming** (semantic tokens, CSS variables)
6. ✅ **Modern tooling** (Vite, Storybook, pnpm, Turbo)
7. ✅ **Version management** (Changesets like Hammer UI)
8. ✅ **Comprehensive scripts** (workflow, quality, maintenance)
9. ✅ **React Query patterns** (options for SSR, mock helpers)
10. ✅ **Jotai patterns** (direct store access in tests)
11. ✅ **React Hook Form** (FormWrapper, Zod validation)
12. ✅ **Next.js App Router** (proper configs, patterns)

---

## Documentation

- **[README.md](./README.md)** - Project overview and quick start
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Development workflow and all scripts
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System design and architecture decisions

Each package also includes:

- README with usage examples
- TypeScript types
- Code examples
- Best practices

---

## License

MIT

---

**Ready to build with professional-grade tooling!** 🚀

**Created**: 2026

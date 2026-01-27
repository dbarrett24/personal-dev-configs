# Getting Started with Personal Dev Configs

## What's Been Built

A production-ready monorepo containing:

✅ **8 Shared Configuration Packages:**
1. `@dbarrett24/prettier-config` - Prettier with Tailwind support
2. `@dbarrett24/typescript-config` - TypeScript configs (base, react, nextjs, library)
3. `@dbarrett24/eslint-config` - ESLint for React/Next.js apps
4. `@dbarrett24/eslint-config-library` - Stricter ESLint for libraries
5. `@dbarrett24/jest-config` - Jest with 90% coverage (apps)
6. `@dbarrett24/jest-config-library` - Jest with 95% coverage (libraries)
7. `@dbarrett24/testing-utils` - Testing utilities (render, jotaiStore, React Query mocks, FormWrapper)
8. `@dbarrett24/theme-system` - Semantic tokens and cn() utility

✅ **1 Complete Brand Library:**
- `@dbarrett24/basketball-training-ui` - Full component library with Storybook

✅ **Repository Infrastructure:**
- pnpm workspaces
- Turbo for monorepo builds
- Changesets for version management
- Comprehensive scripts

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

### 3. Run Storybook (Basketball UI)

```bash
cd brand-libraries/basketball-training-ui
pnpm storybook
```

### 4. Run Tests

```bash
# Test all packages
pnpm test

# Test with coverage
pnpm test-coverage

# Test specific package
cd brand-libraries/basketball-training-ui
pnpm test
```

## Next Steps to Complete

### Phase 4: Complete professional-brand-ui

Copy basketball-training-ui structure and customize:

```bash
# 1. Copy remaining config files
cp brand-libraries/basketball-training-ui/tsconfig.json brand-libraries/professional-brand-ui/
cp brand-libraries/basketball-training-ui/tsup.config.ts brand-libraries/professional-brand-ui/
cp brand-libraries/basketball-training-ui/jest.config.js brand-libraries/professional-brand-ui/
cp brand-libraries/basketball-training-ui/.eslintrc.js brand-libraries/professional-brand-ui/
cp brand-libraries/basketball-training-ui/postcss.config.js brand-libraries/professional-brand-ui/

# 2. Update package references
sed -i '' 's/basketball-training-ui/professional-brand-ui/g' brand-libraries/professional-brand-ui/*.js
sed -i '' 's/basketball-training-ui/professional-brand-ui/g' brand-libraries/professional-brand-ui/*.ts
sed -i '' 's/basketball-training-ui/professional-brand-ui/g' brand-libraries/professional-brand-ui/*.json

# 3. Create professional brand theme (blue/gray instead of orange)
# 4. Create Button component with professional styling
# 5. Add Storybook config
```

### Phase 5: Create Project Templates

Create templates for:
1. **Next.js App Template** - Full stack with all integrations
2. **React + Vite Template** - SPA with all integrations
3. **New Brand Library Template** - Scaffold new brands quickly

### Phase 6: Extract Cursor Rules

From `wavebid-a2o/.cursor/rules/` and `hammer-ui/.cursor/rules/`, extract:
- TypeScript patterns
- React patterns
- Testing guidelines
- Next.js App Router patterns
- React Hook Form + Zod patterns
- Jotai state patterns
- Naming conventions
- Data layer (React Query) patterns

### Phase 7: Create Automation Scripts

```typescript
// scripts/create-project.ts
// Interactive CLI to create new projects from templates

// scripts/create-brand.ts
// Scaffold new brand libraries

// scripts/update-configs.ts
// Update all packages to latest configs
```

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

### Option 3: Use in Projects

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

## Essential Scripts

```bash
# Development
pnpm dev                 # Start all dev servers
pnpm build              # Build all packages
pnpm test               # Run all tests
pnpm lint               # Lint all packages
pnpm lint-fix           # Fix linting issues

# Pre-commit
pnpm pc                 # Pre-commit check (build + lint + test)
pnpm pcf                # Pre-commit fix (auto-fix + update tests + check)

# Changesets
pnpm cl                 # Create changeset
pnpm ci:version         # Version packages
pnpm ci:publish         # Publish to npm

# Maintenance
pnpm cleanup            # Remove all node_modules
pnpm full-rebuild       # Complete rebuild
pnpm upgrade-deps       # Update all dependencies
pnpm test-update        # Update test snapshots
pnpm test-coverage      # Run tests with coverage
```

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
- Import restrictions
- Prettier integration

### @dbarrett24/jest-config
- 90% coverage thresholds (apps)
- Auto mock clearing
- Path alias support (@/*)
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

### @dbarrett24/basketball-training-ui
- Complete component library example
- Orange brand colors
- Storybook documentation
- Full test coverage

## Customization

### Update Brand Colors

Edit `brand-libraries/{brand}/src/theme/styles.css`:

```css
:root {
    --interactive-primary: #YOUR_COLOR;
    --interactive-primary-hover: #YOUR_HOVER_COLOR;
    /* ... other variables */
}
```

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

## What's Valuable

Based on your work experience, this setup captures:

1. ✅ **Strict TypeScript** with proper configs
2. ✅ **Consistent code style** (arrow functions, nullish coalescing, naming)
3. ✅ **High test coverage** (90%+ apps, 95%+ libraries)
4. ✅ **Testing best practices** (no mocking components, direct queries, FormWrapper)
5. ✅ **Multi-brand theming** (semantic tokens, CSS variables)
6. ✅ **Modern tooling** (Vite, Storybook, pnpm, turbo)
7. ✅ **Version management** (changesets like Hammer UI)
8. ✅ **Comprehensive scripts** (pc, pcf, test-update, cleanup)
9. ✅ **React Query patterns** (*Options for SSR, mock helpers)
10. ✅ **Jotai patterns** (direct store access in tests)
11. ✅ **React Hook Form** (FormWrapper, Zod validation)
12. ✅ **Next.js App Router** (proper configs, import restrictions)

## Documentation

Each package includes:
- README with usage examples
- TypeScript types
- Code examples
- Best practices

## License

MIT

---

**Created**: November 2025
**Based on**: Professional patterns from Hammer UI and Wavebid A2O repositories


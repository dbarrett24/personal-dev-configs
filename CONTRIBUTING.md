# Contributing to Personal Dev Configs

Thank you for your interest in contributing! This guide will help you understand the development workflow, available scripts, and contribution guidelines for this monorepo.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Available Scripts](#available-scripts)
- [Adding New Packages](#adding-new-packages)
- [Running Tests](#running-tests)
- [Publishing Packages](#publishing-packages)
- [Code Quality Standards](#code-quality-standards)
- [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 8+
- **Git**

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd personal-dev-configs

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

For detailed setup instructions, see **[GETTING_STARTED.md](./GETTING_STARTED.md)**.

---

## Development Workflow

### Working on Core Components

```bash
# Option 1: Quick start (if dependencies already built)
pnpm dev:core

# Option 2: Safe start (builds dependencies first)
pnpm work:core
```

### Working on Brand Libraries

```bash
# Always use work:* scripts for brands (they depend on core + theme)
pnpm work:basketball      # Basketball Training UI
pnpm work:professional    # Professional Brand UI
```

### Comparing Brand Designs

```bash
# Run all Storybooks at once
pnpm storybook:all

# Then open:
# - http://localhost:6007 (Core Components)
# - http://localhost:6006 (Brand - only one at a time)
```

### Running Tests While Developing

```bash
# Terminal 1: Development server
pnpm dev:core

# Terminal 2: Tests in watch mode
pnpm test:watch:core
```

---

## Available Scripts

### Development Scripts

```bash
# Start all dev servers in parallel
pnpm dev
pnpm dev:all              # Same as above

# Individual package development
pnpm dev:core             # Core components (tsup watch + Storybook on 6007)
pnpm dev:basketball       # Basketball brand (tsup watch + Storybook on 6006)
pnpm dev:professional     # Professional brand (tsup watch + Storybook on 6006)
pnpm dev:theme            # Theme system (tsup watch)
pnpm dev:nextjs           # Next.js template (port 3000)
pnpm dev:vite             # React Vite template (port 5173)
```

### Workflow Scripts (Build Dependencies First)

These ensure dependencies are built before starting development:

```bash
pnpm work:core            # Build theme → dev core
pnpm work:basketball      # Build theme + core → dev basketball
pnpm work:professional    # Build theme + core → dev professional
```

**Use these when:**

- Starting fresh after `git pull`
- Dependencies have changed
- You get "module not found" errors

### Build Scripts

```bash
# Build everything
pnpm build

# Build individual packages
pnpm build:core           # Core components
pnpm build:basketball     # Basketball brand
pnpm build:professional   # Professional brand
pnpm build:theme          # Theme system
```

### Storybook Scripts

```bash
# Run individual Storybooks
pnpm storybook:core           # Port 6007
pnpm storybook:basketball     # Port 6006
pnpm storybook:professional   # Port 6006

# Run ALL Storybooks in parallel
pnpm storybook:all

# Build static Storybook for deployment
pnpm build-storybook:all
pnpm build-storybook:core
pnpm build-storybook:basketball
pnpm build-storybook:professional
```

#### Port Reference

| Package             | Port | Command                       |
| ------------------- | ---- | ----------------------------- |
| Core Components     | 6007 | `pnpm storybook:core`         |
| Basketball Brand    | 6006 | `pnpm storybook:basketball`   |
| Professional Brand  | 6006 | `pnpm storybook:professional` |
| Next.js Template    | 3000 | `pnpm dev:nextjs`             |
| React Vite Template | 5173 | `pnpm dev:vite`               |

> **Note:** Brand Storybooks use the same port (6006) but can't run simultaneously. Core uses 6007 to avoid conflicts.

### Testing Scripts

```bash
# Run all tests
pnpm test                 # Parallel (faster)
pnpm test-sequential      # Sequential (clearer output)

# Test individual packages
pnpm test:core
pnpm test:basketball
pnpm test:professional
pnpm test:nextjs
pnpm test:vite

# Watch mode for development
pnpm test:watch:core      # Core components only

# Update snapshots
pnpm test-update

# Coverage reports
pnpm test-coverage

# Test only changed files (since last commit)
pnpm test:changed
```

### Code Quality Scripts

#### Linting

```bash
# Lint everything
pnpm lint                 # Check only
pnpm lint-fix             # Auto-fix issues

# Format code
pnpm format               # Write changes
pnpm format-check         # Check only

# Type checking
pnpm type-check           # All packages
pnpm type-check:core      # Core only
```

#### Pre-commit & Pre-push

```bash
# Quick pre-commit check (build + lint + test)
pnpm pc

# Pre-commit with auto-fix
pnpm pcf

# Thorough pre-push check
pnpm prepush              # build + lint + type-check + test
```

### Cleanup Scripts

```bash
# Remove all node_modules
pnpm cleanup

# Remove all dist folders
pnpm clean:dist

# Clear Turbo cache
pnpm clean:cache

# Nuclear option: clean everything and rebuild
pnpm full-rebuild         # cleanup + install + build
```

### Maintenance Scripts

```bash
# Update all dependencies
pnpm upgrade-deps

# Verify everything works
pnpm verify-all           # Automated full verification
pnpm verify-all --skip-install
pnpm verify-all --parallel-tests

# Test all scripts work correctly
pnpm test-scripts         # Quick automated test of all scripts (~20s)
```

---

## Adding New Packages

### Creating a New Shared Config Package

```bash
# 1. Create directory structure
mkdir -p shared-configs/my-config/src

# 2. Create package.json
cat > shared-configs/my-config/package.json << 'EOF'
{
  "name": "@dbarrett24/my-config",
  "version": "1.0.0",
  "description": "Description of config",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  },
  "devDependencies": {
    "@dbarrett24/tsup-config": "workspace:*",
    "tsup": "^8.0.1"
  }
}
EOF

# 3. Create source files
touch shared-configs/my-config/src/index.ts
touch shared-configs/my-config/tsconfig.json
touch shared-configs/my-config/tsup.config.ts
touch shared-configs/my-config/README.md

# 4. Add to workspace
# Edit pnpm-workspace.yaml if needed

# 5. Install and build
pnpm install
pnpm --filter @dbarrett24/my-config build
```

### Creating a New Brand Library

```bash
# Use the template approach:
cp -r brand-libraries/basketball-training-ui brand-libraries/my-brand-ui

# Update package name and theme colors
# See GETTING_STARTED.md for detailed steps
```

---

## Running Tests

### Test Coverage Requirements

- **Applications**: 90% coverage minimum
- **Libraries**: 95% coverage minimum

### Writing Tests

Follow the testing philosophy documented in `.cursor/rules/quality/testing.mdc`:

```typescript
// ✅ GOOD: Test real behavior
it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeVisible();
});

// ✅ GOOD: Use userEvent for interactions
it('handles click', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

// ✅ GOOD: Direct Jotai store access
it('updates atom state', () => {
    const { result } = renderHook(() => useAtom(myAtom));

    act(() => {
        result.current[1]('new value');
    });

    expect(jotaiStore.get(myAtom)).toBe('new value');
});
```

### Testing Checklist

Before submitting a PR:

- [ ] All tests pass: `pnpm test`
- [ ] Coverage meets thresholds: `pnpm test-coverage`
- [ ] No TypeScript errors: `pnpm type-check`
- [ ] No lint errors: `pnpm lint`
- [ ] Storybook builds: `pnpm build-storybook:all`

---

## Publishing Packages

This monorepo uses **Changesets** for version management and publishing.

### Creating a Changeset

```bash
# Start the changeset wizard
pnpm cl

# Follow prompts:
# 1. Select packages that changed
# 2. Choose version bump (major/minor/patch)
# 3. Write changeset description
```

### Versioning Packages

```bash
# Update package.json versions based on changesets
pnpm ci:version

# This will:
# - Bump versions in package.json files
# - Update CHANGELOG.md files
# - Delete processed changeset files
```

### Publishing to npm

```bash
# Build and publish all changed packages
pnpm ci:publish

# This will:
# - Build all packages
# - Publish to npm registry
# - Push git tags
```

### Publishing Workflow

```bash
# 1. Make changes to packages
# ... code changes ...

# 2. Create changeset
pnpm cl

# 3. Commit changeset
git add .changeset
git commit -m "feat: add new feature"

# 4. Version packages (usually on main branch)
pnpm ci:version

# 5. Commit version changes
git add .
git commit -m "chore: version packages"

# 6. Build and publish
pnpm ci:publish

# 7. Push changes
git push --follow-tags
```

---

## Code Quality Standards

### TypeScript

- Strict mode enabled
- No `any` types in libraries
- Prefer types over interfaces
- Use const assertions instead of enums

See `.cursor/rules/core/typescript.mdc` for details.

### React Components

- Functional components only
- Named exports (no default exports except page.tsx)
- Arrow functions
- Props destructuring with types

See `.cursor/rules/core/react.mdc` for details.

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with Types suffix (e.g., `ButtonTypes.ts`)
- **Tests**: Same as source with `.spec.tsx` (e.g., `Button.spec.tsx`)

See `.cursor/rules/core/naming.mdc` for details.

### Testing

- No component mocking
- Direct store access (Jotai)
- Hook-level mocks (React Query)
- FormWrapper for form testing
- `toBeVisible()` over `toBeInTheDocument()`

See `.cursor/rules/quality/testing.mdc` for details.

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

### Build Dependency Issues

If Storybook shows "module not found" errors:

1. Check if you're importing from `dist/` (production) or `src/` (development)
2. Rebuild the dependency: `pnpm build:core` or `pnpm build:theme`
3. Restart Storybook

See `.cursor/rules/architecture/monorepo-builds.mdc` for details.

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

### Clean Slate

```bash
# Nuclear option: clean everything and rebuild
pnpm full-rebuild
```

---

## Code of Conduct

### Be Respectful

- Treat all contributors with respect
- Be open to feedback and constructive criticism
- Focus on what is best for the community

### Provide Constructive Feedback

- Be specific and actionable in code reviews
- Explain the "why" behind suggestions
- Acknowledge good work

### Collaborate Effectively

- Communicate clearly and promptly
- Ask questions when something is unclear
- Help others when you can

---

## Additional Resources

- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Detailed setup guide
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and design decisions
- **[README.md](./README.md)** - Project overview
- **`.cursor/rules/`** - Coding patterns and conventions

---

**Questions or Issues?**

- Check the documentation first
- Search existing issues
- Create a new issue with detailed information
- Reach out to maintainers

Thank you for contributing! 🎉

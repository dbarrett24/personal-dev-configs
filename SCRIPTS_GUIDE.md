# 📜 Scripts Guide

Quick reference for all available npm scripts in this monorepo.

## 🚀 Quick Start Scripts

### Development

```bash
# Start all dev servers in parallel (Storybooks + templates)
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

## 📦 Build Scripts

```bash
# Build everything
pnpm build

# Build individual packages
pnpm build:core           # Core components
pnpm build:basketball     # Basketball brand
pnpm build:professional   # Professional brand
pnpm build:theme          # Theme system
```

## 📖 Storybook Scripts

```bash
# Run individual Storybooks
pnpm storybook:core           # Port 6007
pnpm storybook:basketball     # Port 6006
pnpm storybook:professional   # Port 6006

# Run ALL Storybooks in parallel (great for comparing designs!)
pnpm storybook:all

# Build static Storybook for deployment
pnpm build-storybook:all
pnpm build-storybook:core
pnpm build-storybook:basketball
pnpm build-storybook:professional
```

### Port Reference

| Package                  | Port | Command                       |
|--------------------------|------|-------------------------------|
| Core Components          | 6007 | `pnpm storybook:core`         |
| Basketball Brand         | 6006 | `pnpm storybook:basketball`   |
| Professional Brand       | 6006 | `pnpm storybook:professional` |
| Next.js Template         | 3000 | `pnpm dev:nextjs`             |
| React Vite Template      | 5173 | `pnpm dev:vite`               |

> **Note:** Brand Storybooks use the same port (6006) but can't run simultaneously. Core uses 6007 to avoid conflicts.

## 🧪 Testing Scripts

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

## 🎨 Code Quality Scripts

### Linting

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

### Pre-commit & Pre-push

```bash
# Quick pre-commit check (build + lint + test)
pnpm pc

# Pre-commit with auto-fix
pnpm pcf

# Thorough pre-push check
pnpm prepush              # build + lint + type-check + test
```

## 🧹 Cleanup Scripts

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

## 🔧 Maintenance Scripts

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

## 🏗️ Project Generation Scripts

```bash
# Create new project from template
pnpm create-project

# Create new brand library
pnpm create-brand

# Update configs across all packages
pnpm update-configs
```

## 🔒 Security Scripts

```bash
# Validate cursor rules
pnpm security:validate

# Audit dependencies
pnpm security:audit

# Full security check
pnpm security:check       # validate + audit
```

## 📦 Publishing Scripts (CI/CD)

```bash
# Create changeset
pnpm cl

# Version packages
pnpm ci:version

# Publish to npm
pnpm ci:publish           # build + publish
```

## 💡 Common Workflows

### Starting Work on Core Components

```bash
# Option 1: Quick start (if deps already built)
pnpm dev:core

# Option 2: Safe start (builds deps first)
pnpm work:core
```

### Starting Work on a Brand Library

```bash
# Always use work:* scripts for brands (they depend on core + theme)
pnpm work:basketball
# or
pnpm work:professional
```

### Comparing All Brand Designs

```bash
# Run all Storybooks at once
pnpm storybook:all

# Then open:
# - http://localhost:6007 (Core)
# - http://localhost:6006 (Basketball or Professional - only one at a time)
```

### Running Tests While Developing

```bash
# Terminal 1: Development
pnpm dev:core

# Terminal 2: Tests in watch mode
pnpm test:watch:core
```

### Before Committing

```bash
# Quick check
pnpm pc

# Or with auto-fix
pnpm pcf
```

### Before Pushing

```bash
# Thorough check
pnpm prepush
```

### After Pulling Changes

```bash
# If dependencies changed
pnpm install && pnpm build

# Or use workflow scripts which handle this
pnpm work:basketball
```

### Troubleshooting Build Issues

```bash
# Clean and rebuild everything
pnpm full-rebuild

# Or step by step
pnpm cleanup
pnpm install
pnpm build
```

## 🎯 Script Naming Conventions

- **No suffix**: Runs on all packages (via Turbo)
  - `pnpm build`, `pnpm test`, `pnpm lint`
  
- **`:package`**: Runs on specific package
  - `pnpm build:core`, `pnpm test:basketball`
  
- **`:all`**: Explicitly runs on all packages in parallel
  - `pnpm dev:all`, `pnpm storybook:all`
  
- **`work:*`**: Workflow scripts that build dependencies first
  - `pnpm work:core`, `pnpm work:basketball`

## 📚 Additional Resources

- [Quick Start Guide](./QUICK_START.md)
- [Verification Checklist](./VERIFICATION_CHECKLIST.md)
- [Architecture Overview](./ARCHITECTURE.md)
- [Storybook Guide](./shared-configs/core-components/STORYBOOK_GUIDE.md)

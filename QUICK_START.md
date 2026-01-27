# 🚀 Quick Start Guide

Get up and running in 5 minutes!

## Step 1: Install and Build (2 min)

```bash
cd /Users/dbarr/Documents/Development/personal-dev-configs

# Install all dependencies
pnpm install

# Build all packages
pnpm build
```

## Step 2: Explore Storybook (1 min)

### Basketball Training UI

```bash
cd brand-libraries/basketball-training-ui
pnpm storybook
```

Opens http://localhost:6006 with:
- Button component (3 variants × 3 sizes)
- Interactive controls
- Auto-generated documentation

### Professional Brand UI

```bash
cd brand-libraries/professional-brand-ui
pnpm storybook
```

Opens http://localhost:6006 with:
- Button component (4 variants × 3 sizes)
- Blue professional theme
- Interactive controls

## Step 3: Run Tests (1 min)

```bash
cd /Users/dbarr/Documents/Development/personal-dev-configs

# Run all tests
pnpm test

# Run with coverage
pnpm test-coverage
```

## Step 4: Use in Your Project (1 min)

Create a new Next.js project:

```bash
# Copy the template
cp -r templates/nextjs-app ../my-basketball-app
cd ../my-basketball-app

# Install dependencies
pnpm install

# Start development
pnpm dev
```

Opens http://localhost:3000 with working Basketball Training UI components!

---

## Available Scripts

```bash
# Development
pnpm dev                # Start all dev servers
pnpm build             # Build all packages
pnpm test              # Run all tests

# Code Quality
pnpm lint              # Run all linters
pnpm lint-fix          # Fix linting issues
pnpm pc                # Pre-commit check (build + lint + test)
pnpm pcf               # Pre-commit fix (auto-fix + update tests)

# Maintenance
pnpm cleanup           # Remove all node_modules
pnpm full-rebuild      # Complete rebuild
pnpm upgrade-deps      # Update all dependencies

# Testing
pnpm test              # Run tests
pnpm test-update       # Update snapshots
pnpm test-coverage     # With coverage

# Changesets (for publishing)
pnpm cl                # Create changeset
pnpm ci:version        # Version packages
pnpm ci:publish        # Publish to npm
```

---

## Troubleshooting

### Issue: "tailwind-merge version error"

```bash
cd /Users/dbarr/Documents/Development/personal-dev-configs
pnpm install
```

### Issue: "Build fails"

```bash
# Clean rebuild
pnpm cleanup
pnpm install
pnpm build
```

### Issue: "Storybook won't start"

```bash
cd brand-libraries/basketball-training-ui
rm -rf node_modules .storybook-cache
pnpm install
pnpm storybook
```

---

## What's Included

### ✅ 8 Shared Config Packages
- prettier-config
- typescript-config
- eslint-config
- eslint-config-library
- jest-config
- jest-config-library
- testing-utils
- theme-system

### ✅ 2 Brand Libraries
- basketball-training-ui (Orange theme)
- professional-brand-ui (Blue theme)

### ✅ 1 Next.js Template
- Next.js 15 + App Router
- React Query + Jotai
- React Hook Form + Zod
- Tailwind CSS
- Full test setup

---

## Next Steps

1. **Explore components in Storybook**
2. **Add more components to brand libraries**
3. **Use configs in your projects**
4. **Publish to npm** (optional)

---

## Quick Reference

### Project Structure

```
personal-dev-configs/
├── shared-configs/       # 8 config packages
├── brand-libraries/      # 2 component libraries
├── templates/            # Project templates
├── cursor-rules/         # AI assistant rules (to be extracted)
└── scripts/              # Automation scripts (to be created)
```

### Key Files

- `README.md` - Main overview
- `GETTING_STARTED.md` - Detailed setup
- `FINAL_STATUS.md` - Current status
- `PROGRESS.md` - Implementation details

---

## Support

### Documentation
- Each package has its own README with examples
- Check GETTING_STARTED.md for detailed guides

### Common Tasks

**Add a new brand:**
```bash
cp -r brand-libraries/professional-brand-ui brand-libraries/my-brand-ui
cd brand-libraries/my-brand-ui
# Edit theme colors in src/theme/styles.css
# Update package.json name
```

**Use in new project:**
```bash
# Add to your package.json
{
  "dependencies": {
    "@dbarrett24/basketball-training-ui": "file:../personal-dev-configs/brand-libraries/basketball-training-ui"
  },
  "devDependencies": {
    "@dbarrett24/eslint-config": "file:../personal-dev-configs/shared-configs/eslint-config"
  }
}
```

---

**Ready to Go! 🎉**

You now have a production-ready monorepo with all the tooling from your professional experience!


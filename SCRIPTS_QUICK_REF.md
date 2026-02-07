# 🚀 Scripts Quick Reference

## Most Common Commands

```bash
# 🎯 Starting Development
pnpm work:core              # Work on core components
pnpm work:basketball        # Work on basketball brand
pnpm work:professional      # Work on professional brand

# 📖 View Storybooks
pnpm storybook:core         # Core (port 6007)
pnpm storybook:basketball   # Basketball (port 6006)
pnpm storybook:professional # Professional (port 6006)
pnpm storybook:all          # All at once

# 🧪 Testing
pnpm test                   # All tests
pnpm test:core              # Core only
pnpm test:watch:core        # Watch mode

# ✅ Before Commit
pnpm pc                     # Quick check
pnpm pcf                    # Check + auto-fix

# ✅ Before Push
pnpm prepush                # Full check

# 🧹 Cleanup
pnpm clean:dist             # Remove dist folders
pnpm full-rebuild           # Nuclear option
```

## All Scripts by Category

### 🏗️ Build
```bash
pnpm build                  # All packages
pnpm build:core
pnpm build:basketball
pnpm build:professional
pnpm build:theme
```

### 💻 Development
```bash
pnpm dev                    # All in parallel
pnpm dev:core
pnpm dev:basketball
pnpm dev:professional
pnpm dev:theme
pnpm dev:nextjs
pnpm dev:vite
```

### 📖 Storybook
```bash
pnpm storybook:core         # Port 6007
pnpm storybook:basketball   # Port 6006
pnpm storybook:professional # Port 6006
pnpm storybook:all          # All parallel
pnpm build-storybook:all    # Build static
```

### 🔄 Workflows (Build deps first)
```bash
pnpm work:core              # theme → core dev
pnpm work:basketball        # theme + core → basketball dev
pnpm work:professional      # theme + core → professional dev
```

### 🧪 Testing
```bash
pnpm test                   # All (parallel)
pnpm test-sequential        # All (sequential)
pnpm test:core
pnpm test:basketball
pnpm test:professional
pnpm test:nextjs
pnpm test:vite
pnpm test:watch:core        # Watch mode
pnpm test-update            # Update snapshots
pnpm test-coverage          # With coverage
pnpm test:changed           # Only changed
```

### 🎨 Code Quality
```bash
pnpm lint                   # All linters
pnpm lint-fix               # Auto-fix
pnpm type-check             # Type check all
pnpm type-check:core        # Type check core
pnpm format                 # Format all
pnpm format-check           # Check format
pnpm pc                     # Pre-commit check
pnpm pcf                    # Pre-commit fix
pnpm prepush                # Pre-push check
```

### 🧹 Cleanup
```bash
pnpm cleanup                # Remove node_modules
pnpm clean:dist             # Remove dist folders
pnpm clean:cache            # Clear Turbo cache
pnpm full-rebuild           # Clean + install + build
```

### 🔧 Maintenance
```bash
pnpm upgrade-deps           # Update dependencies
pnpm verify-all             # Full verification
pnpm test-scripts           # Test all scripts (~20s)
```

### 🏗️ Generators
```bash
pnpm create-project         # New project
pnpm create-brand           # New brand library
pnpm update-configs         # Update configs
```

### 🔒 Security
```bash
pnpm security:validate      # Validate rules
pnpm security:audit         # Audit deps
pnpm security:check         # Full check
```

### 📦 Publishing
```bash
pnpm cl                     # Create changeset
pnpm ci:version             # Version packages
pnpm ci:publish             # Publish to npm
```

## Port Reference

| Package              | Port | Command                       |
|----------------------|------|-------------------------------|
| Core Components      | 6007 | `pnpm storybook:core`         |
| Basketball Brand     | 6006 | `pnpm storybook:basketball`   |
| Professional Brand   | 6006 | `pnpm storybook:professional` |
| Next.js Template     | 3000 | `pnpm dev:nextjs`             |
| React Vite Template  | 5173 | `pnpm dev:vite`               |

## Common Workflows

**Starting fresh:**
```bash
pnpm install && pnpm build
pnpm work:basketball
```

**Quick development:**
```bash
pnpm dev:core
```

**Compare all brands:**
```bash
pnpm storybook:all
```

**Before committing:**
```bash
pnpm pcf
```

**Troubleshooting:**
```bash
pnpm full-rebuild
```

---

📚 **Full Documentation:** [SCRIPTS_GUIDE.md](./SCRIPTS_GUIDE.md)

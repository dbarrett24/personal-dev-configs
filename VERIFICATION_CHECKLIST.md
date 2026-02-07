# ✅ Verification Checklist

Run this to verify everything works:

## Automated Verification

```bash
# Full verification (recommended)
pnpm verify-all

# Skip install/build if already done
pnpm verify-all --skip-install

# Use parallel tests (faster but less readable)
pnpm verify-all --parallel-tests
```

This automated script runs:
1. ✅ Install and build (`pnpm install && pnpm build`)
2. ✅ Run all tests (`pnpm test-sequential`)
3. ✅ Lint everything (`pnpm lint`)
4. ✅ Type-check (`pnpm ts-check`)

## Manual Visual Checks

After automated checks pass, verify these manually:

### 5. Visual Checks (one at a time)

#### Core Components
```bash
cd shared-configs/core-components && pnpm storybook
# ✅ Check Button, Input components load
```

#### Basketball Brand UI
```bash
cd ../../brand-libraries/basketball-training-ui && pnpm storybook
# ✅ Check styled Button loads with theme
```

#### Professional Brand UI
```bash
cd ../professional-brand-ui && pnpm storybook
# ✅ Check styled Button loads with theme
```

#### Next.js Template
```bash
cd ../../templates/nextjs-app && pnpm dev
# ✅ Check homepage renders at http://localhost:3000
```

#### React Vite Template
```bash
cd ../react-vite && pnpm dev
# ✅ Check app renders at http://localhost:5173
```

---

## 📦 Port Reference

| Package              | Port | Command          | Purpose             |
| -------------------- | ---- | ---------------- | ------------------- |
| Core Components      | 6007 | `pnpm storybook` | Storybook (unstyled)|
| Basketball Brand     | 6006 | `pnpm storybook` | Storybook (styled)  |
| Professional Brand   | 6006 | `pnpm storybook` | Storybook (styled)  |
| Next.js Template     | 3000 | `pnpm dev`       | Development server  |
| React Vite Template  | 5173 | `pnpm dev`       | Development server  |

---

## Individual Commands

If you need to run steps individually:

```bash
# 1. Install and build
pnpm install && pnpm build

# 2. Run all tests (parallel - faster)
pnpm test

# 2. Run all tests (sequential - clearer output)
pnpm test-sequential

# 3. Lint everything
pnpm lint

# 4. Type-check
pnpm ts-check
```

## Quick Commands

```bash
# Pre-commit check (fast)
pnpm pc

# Pre-commit with fixes
pnpm pcf

# Test with coverage
pnpm test-coverage

# Update test snapshots
pnpm test-update

# Security check
pnpm security:check
```

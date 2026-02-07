# ✅ Scripts Testing Checklist

Use this checklist to verify all scripts work correctly after setup or major changes.

## 📋 Quick Test (5 minutes)

### Automated Quick Test

Run this single command to test all critical scripts:

```bash
pnpm test-scripts
```

This will automatically test:
- ✅ Build scripts (theme, core, basketball, professional)
- ✅ Test scripts (core, basketball, professional)
- ✅ Quality checks (type-check, lint)
- ✅ Dist folder verification

**Expected:** Should complete in ~20 seconds with summary of pass/fail.

### Manual Quick Test

Essential scripts that should always work:

```bash
# From project root: /Users/dbarr/Documents/Development/personal-dev-configs

# 1. Build scripts
□ pnpm build:theme              # Should complete in ~1s
□ pnpm build:core               # Should complete in ~2s
□ pnpm build:basketball         # Should complete in ~2s

# 2. Test scripts
□ pnpm test:core                # Should pass 29 tests

# 3. Workflow script
□ pnpm work:core                # Should build theme, then start dev (Ctrl+C to stop)

# 4. Quality checks
□ pnpm type-check:core          # May have known issues (see below)
```

**Expected Results:** All should complete successfully with exit code 0 (except dev which runs continuously).

### Known Pre-Existing Issues

These are codebase issues, not script issues. The scripts work correctly:

⚠️ **Brand library tests** (`test:basketball`, `test:professional`)
- Missing: `testing/setupTests.ts` file
- Scripts work fine, just need test setup files created

⚠️ **Type checking** (`type-check:core`)
- Issue in: `Input.stories.tsx:339` (type index issue)
- Scripts work fine, just need TypeScript fix

⚠️ **Linting** (`lint`)
- prettier-plugin-tailwindcss import issues in some packages
- Scripts work fine, just need plugin configuration fix

**The good news:** All build, dev, and workflow scripts work perfectly! ✅

---

## 🔍 Comprehensive Test (15-20 minutes)

### 1️⃣ Build Scripts

Test building individual packages:

```bash
□ pnpm build:theme
  ✓ Completes successfully
  ✓ Creates dist/ folder in shared-configs/theme-system/
  
□ pnpm build:core
  ✓ Completes successfully
  ✓ Creates dist/ folder in shared-configs/core-components/
  ✓ Outputs: ESM, CJS, and DTS files
  
□ pnpm build:basketball
  ✓ Completes successfully
  ✓ Creates dist/ folder in brand-libraries/basketball-training-ui/
  
□ pnpm build:professional
  ✓ Completes successfully
  ✓ Creates dist/ folder in brand-libraries/professional-brand-ui/
  
□ pnpm build
  ✓ Builds all packages via Turbo
  ✓ Shows cache hits on second run
```

**If any fail:** Check if dependencies are installed (`pnpm install`)

---

### 2️⃣ Development Scripts

Test that dev servers start (don't need to run fully, just verify they start):

```bash
□ pnpm dev:theme
  ✓ Starts tsup in watch mode
  ✓ Press Ctrl+C to stop
  
□ pnpm dev:core
  ✓ Starts tsup watch AND Storybook on port 6007
  ✓ Open http://localhost:6007 to verify
  ✓ Press Ctrl+C to stop
  
□ pnpm dev:basketball
  ✓ Starts tsup watch AND Storybook on port 6006
  ✓ Open http://localhost:6006 to verify
  ✓ Press Ctrl+C to stop
  
□ pnpm dev:professional
  ✓ Starts tsup watch AND Storybook on port 6006
  ✓ Press Ctrl+C to stop
  
□ pnpm dev:nextjs
  ✓ Starts Next.js dev server on port 3000
  ✓ Open http://localhost:3000 to verify
  ✓ Press Ctrl+C to stop
  
□ pnpm dev:vite
  ✓ Starts Vite dev server on port 5173
  ✓ Open http://localhost:5173 to verify
  ✓ Press Ctrl+C to stop
```

**Note:** Don't run `pnpm dev:all` or `pnpm storybook:all` yet - those start everything in parallel.

---

### 3️⃣ Workflow Scripts (Smart Dependencies)

These should build dependencies automatically:

```bash
□ pnpm work:core
  ✓ Step 1: Builds theme (should see tsup output)
  ✓ Step 2: Starts core dev (tsup watch + Storybook)
  ✓ Verify Storybook opens at http://localhost:6007
  ✓ Press Ctrl+C to stop
  
□ pnpm work:basketball
  ✓ Step 1: Builds theme
  ✓ Step 2: Builds core
  ✓ Step 3: Starts basketball dev
  ✓ Verify Storybook opens at http://localhost:6006
  ✓ Press Ctrl+C to stop
  
□ pnpm work:professional
  ✓ Step 1: Builds theme
  ✓ Step 2: Builds core
  ✓ Step 3: Starts professional dev
  ✓ Press Ctrl+C to stop
```

**Why these matter:** Use these when starting fresh or after pulling changes.

---

### 4️⃣ Storybook Scripts

Individual Storybook servers:

```bash
□ pnpm storybook:core
  ✓ Opens on http://localhost:6007
  ✓ Shows Button and Input components
  ✓ Press Ctrl+C to stop
  
□ pnpm storybook:basketball
  ✓ Opens on http://localhost:6006
  ✓ Shows styled Button component
  ✓ Orange basketball theme visible
  ✓ Press Ctrl+C to stop
  
□ pnpm storybook:professional
  ✓ Opens on http://localhost:6006
  ✓ Shows styled Button component
  ✓ Blue professional theme visible
  ✓ Press Ctrl+C to stop
```

Build static Storybooks:

```bash
□ pnpm build-storybook:core
  ✓ Creates storybook-static/ in core-components/
  
□ pnpm build-storybook:basketball
  ✓ Creates storybook-static/ in basketball-training-ui/
  
□ pnpm build-storybook:professional
  ✓ Creates storybook-static/ in professional-brand-ui/
```

---

### 5️⃣ Test Scripts

```bash
□ pnpm test:core
  ✓ Runs 29 tests (Button + Input)
  ✓ All tests pass
  
□ pnpm test:basketball
  ✓ Runs basketball brand tests
  ✓ All tests pass
  
□ pnpm test:professional
  ✓ Runs professional brand tests
  ✓ All tests pass
  
□ pnpm test:nextjs
  ✓ Runs Next.js template tests
  ✓ All tests pass
  
□ pnpm test:vite
  ✓ Runs Vite template tests
  ✓ All tests pass
  
□ pnpm test
  ✓ Runs all tests in parallel via Turbo
  ✓ Should be faster than sequential
  
□ pnpm test-sequential
  ✓ Runs all tests one by one
  ✓ Output is more readable
  
□ pnpm test-coverage
  ✓ Generates coverage reports
  ✓ Creates coverage/ folders
```

Optional test scripts:

```bash
□ pnpm test:watch:core
  ✓ Starts Jest in watch mode
  ✓ Press 'q' to quit
```

---

### 6️⃣ Quality Scripts

```bash
□ pnpm lint
  ✓ Runs ESLint + Prettier + TypeScript checks
  ✓ Should show no errors (or just warnings)
  
□ pnpm type-check
  ✓ Runs tsc --noEmit on all packages
  ✓ Should show no type errors
  
□ pnpm type-check:core
  ✓ Type checks only core components
  
□ pnpm pc
  ✓ Pre-commit check (build + lint + test)
  ✓ May take 1-2 minutes
```

Format scripts (may have prettier-plugin-tailwindcss issue, skip if fails):

```bash
□ pnpm format-check
  ⚠️  May fail with plugin error (known issue, safe to skip)
  
□ pnpm format
  ⚠️  May fail with plugin error (known issue, safe to skip)
```

---

### 7️⃣ Cleanup Scripts

```bash
□ pnpm clean:dist
  ✓ Removes all dist/ folders
  ✓ Run 'find . -name "dist" -type d' to verify (should be empty)
  
□ pnpm clean:cache
  ✓ Removes node_modules/.cache and Turbo cache
  ✓ Next builds will be slower (no cache)
```

**Don't test these unless needed:**
- `pnpm cleanup` - Removes ALL node_modules (requires reinstall)
- `pnpm full-rebuild` - Nuclear option (cleanup + install + build)

---

### 8️⃣ Parallel Scripts (Advanced)

⚠️ **Warning:** These start multiple processes. Have multiple terminal tabs ready or use `Ctrl+C` to stop all.

```bash
□ pnpm storybook:all
  ✓ Starts ALL 3 Storybooks in parallel
  ✓ Core: http://localhost:6007
  ✓ Basketball: http://localhost:6006
  ✓ Professional: Should fail (port 6006 already taken)
  ✓ Press Ctrl+C to stop all
  
□ pnpm dev:all
  ✓ Starts all dev servers (templates + Storybooks)
  ✓ Very resource intensive!
  ✓ Press Ctrl+C to stop all
```

**Note:** Brand Storybooks share port 6006, so only one can run at a time. This is expected.

---

## 🎯 Quick Smoke Test Script

Run this one-liner to test the most important scripts:

```bash
pnpm build:theme && \
pnpm build:core && \
pnpm test:core && \
pnpm type-check:core && \
echo "✅ All critical scripts working!"
```

Expected: All commands succeed, see "✅ All critical scripts working!"

---

## 🐛 Troubleshooting

### Script not found
```bash
# Verify package name
pnpm list --depth=0

# Check if script exists in package.json
cat package.json | grep "script-name"
```

### Port already in use
```bash
# Kill process on port 6006
lsof -ti:6006 | xargs kill -9

# Kill process on port 6007
lsof -ti:6007 | xargs kill -9
```

### Module not found errors
```bash
# Rebuild dependencies
pnpm build:theme
pnpm build:core
# Then try your command again
```

### Tests failing
```bash
# Update snapshots
pnpm test-update

# Run tests sequentially to see which fails
pnpm test-sequential
```

### Turbo cache issues
```bash
# Clear cache and rebuild
pnpm clean:cache
pnpm build
```

---

## ✅ Success Criteria

### Minimum Viable (Must Pass)
- ✅ `pnpm build:theme` completes
- ✅ `pnpm build:core` completes
- ✅ `pnpm test:core` passes all tests
- ✅ `pnpm storybook:core` opens successfully
- ✅ `pnpm work:core` builds deps and starts dev

### Full Success (All Scripts Working)
- ✅ All build scripts complete
- ✅ All dev scripts start successfully
- ✅ All test scripts pass
- ✅ All Storybook scripts work
- ✅ Workflow scripts build dependencies correctly
- ✅ Quality scripts run without errors

---

## 📊 Expected Timings

On a typical dev machine:

| Script | Expected Time |
|--------|---------------|
| `pnpm build:theme` | ~1s |
| `pnpm build:core` | ~2-3s |
| `pnpm build:basketball` | ~2-3s |
| `pnpm test:core` | ~5-6s |
| `pnpm work:core` | ~3s to start |
| `pnpm pc` | ~1-2 min |
| `pnpm build` (all) | ~10-15s (first run) |
| `pnpm build` (all) | ~1-2s (cached) |

---

## 💾 Checklist Results Template

Copy this to track your testing:

```markdown
## Test Results - [DATE]

### Quick Test (5 min)
- [ ] build:theme - ⏱️ _____s
- [ ] build:core - ⏱️ _____s
- [ ] test:core - ⏱️ _____s
- [ ] work:core - ✓ Started successfully

### Build Scripts
- [ ] All build scripts pass

### Dev Scripts
- [ ] All dev scripts start successfully

### Test Scripts
- [ ] All test scripts pass

### Quality Scripts
- [ ] lint passes
- [ ] type-check passes

### Issues Found
- None / List issues here

### Overall Status
- ✅ All scripts working / ⚠️  Some issues / ❌ Major problems
```

---

**Next Steps After Testing:**
1. ✅ Mark any failing scripts
2. 🐛 Debug failures using troubleshooting section
3. 📝 Update documentation if needed
4. 🎉 Start using the scripts in daily workflow!

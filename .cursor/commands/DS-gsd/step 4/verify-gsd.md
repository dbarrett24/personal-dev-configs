# GSD Stage 4: VERIFY - Testing & Validation

<!-- Type: verify-gsd | Category: GSD | Full: verify-gsd -->

Verify changes against the Spec, run comprehensive quality checks, and prepare for commit.

---

## ✅ WORKFLOW CONTEXT

**You are here**: SPEC ✅ → PLAN ✅ → BUILD ✅ (Prototype + Quality) → **VERIFY** ← YOU ARE HERE → RETRO

**What happens now**: I'll run comprehensive quality checks:
- TypeScript compilation
- Linting rules
- Test suite execution
- Manual testing checklist

**What you do next**: 
1. Review the quality gate results
2. Perform final manual testing in Storybook/browser
3. Confirm everything works as expected
4. I'll create a proper git commit with formatted message

**Expected output**: 
- All quality gates passing ✅
- Git commit created with changes
- Ready for PR/merge

**Confirmation question**: After quality checks pass, I'll show you a manual testing checklist. Once you confirm it all works, I'll commit the changes.

---

## Goal

Ensure code meets all requirements and passes all quality gates.

## Procedure

### 1. Read Context

**Locate Plan**:
```bash
git branch --show-current  # Extract ticket ID
```

**Read**: `.cursor/plans/[TICKET-ID].md` (All sections)

### 2. Pre-Flight Checklist

**MANDATORY: Re-read ALL cursor rules for verification standards**:
```bash
ls .cursor/rules/*.mdc
```

### 3. Project Detection

Before running checks, detect project configuration:

**Get Project Root**:
```bash
pwd
```

**Layer 1 - Direct package.json**:
- Check if CWD has `package.json` with `lint` and/or `test` scripts
- If yes → use these scripts directly

**Layer 2 - Turborepo Detection**:
- Look for `turbo.json` at CWD or parent
- Check for workspace config (`pnpm-workspace.yaml` or `workspaces` field)
- If root has turbo-orchestrated scripts, use them

**Detect Package Manager**:
- `pnpm-lock.yaml` → `pnpm`
- `yarn.lock` → `yarn`
- `package-lock.json` → `npm`
- `bun.lockb` → `bun`

**Detect Test Framework**:
- Check `package.json` devDependencies:
  - `vitest` → Vitest
  - `jest` → Jest
  - Neither → Generic test script

**Check Test Requirements**:
- `TZ=UTC` or `TEST_FORCE_UTC` → Apply timezone settings
- `cross-env` → Use cross-platform environment vars

**Store Detection Results**:
- `{PROJECT_ROOT}` → detected project root
- `{PKG_MGR}` → detected package manager
- `{LINT_CMD}` → `{PKG_MGR} run lint`
- `{LINT_FIX_CMD}` → `{PKG_MGR} run lint-fix` (if available)
- `{TEST_CMD}` → framework-appropriate test command

### 4. Spec Verification

**Compare against Sections 1-6**:

**Acceptance Criteria Check** (if from Jira):
- [ ] AC #1: [Description] - ✅/❌
- [ ] AC #2: [Description] - ✅/❌

**Success Criteria Check** (Section 6):
- [ ] Criterion 1 - ✅/❌
- [ ] Criterion 2 - ✅/❌

**Component Library Verification** (Section 4):
- [ ] Component structure follows conventions - ✅/❌
- [ ] Theme tokens properly applied - ✅/❌
- [ ] Build artifacts generated correctly - ✅/❌
- [ ] Storybook stories work - ✅/❌

### 5. Plan Verification

**Check Section 7 (Implementation Plan)**:
- Ensure ALL checkboxes are marked `[x]`
- If any `[ ]` remain, identify what's incomplete
- If any `[⚠️]` blockers exist, resolve or document

### 6. Comprehensive Quality Checks

Run all checks iteratively (up to 5 iterations each):

#### Check 1: Identify Changed Files

```bash
cd {PROJECT_ROOT}
git diff --name-only
git diff --cached --name-only
```

Combine results. If no files found, exit with "No changes to verify."

#### Check 2: Lint

**Run**:
```bash
cd {PROJECT_ROOT}
{LINT_CMD}
```

**Fix Issues**:
- Analyze lint errors and warnings
- Apply fixes (use `{LINT_FIX_CMD}` if available)
- Re-run `{LINT_CMD}`
- Continue for up to 5 iterations

**Log Results**:
- Errors: [count found] → [count remaining]
- Warnings: [count found] → [count remaining]
- Auto-fixed: [count]

#### Check 3: Tests

**Map Changed Files to Tests**:
- `Component.tsx` → find `Component.spec.tsx` or `Component.test.tsx`
- Build list of affected test files

**Run Targeted Tests**:

| Framework              | Command                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| Vitest                 | `cd {PROJECT_ROOT} && vitest run --coverage=false [test-files]`                                  |
| Vitest (with timezone) | `cd {PROJECT_ROOT} && cross-env TZ=UTC TEST_FORCE_UTC=true vitest run --coverage=false [test-files]` |
| Jest                   | `cd {PROJECT_ROOT} && jest [test-files]`                                                          |
| Generic                | `cd {PROJECT_ROOT} && {PKG_MGR} test -- [test-files]`                                             |

**Fix Issues**:
- Analyze test failures with full context
- Fix failing tests or source code
- Re-run the specific tests
- Continue for up to 5 iterations

**Log Results**:
- Tests run: [count]
- Passed: [count]
- Failed: [count] → [count remaining]

### 7. Manual Verification Checklist

Present to user for confirmation:

```markdown
### Manual Verification Checklist

**Storybook Testing** (if applicable):
- [ ] Navigate to affected stories in Storybook
- [ ] All stories render without errors
- [ ] Component props work as documented in controls
- [ ] Theme variants display correctly (if brand-specific)
- [ ] Responsive behavior works at different breakpoints
- [ ] No console errors or warnings
- [ ] Accessibility: Keyboard navigation works
- [ ] Accessibility: Screen reader announces correctly

**Build Verification**:
- [ ] Package builds successfully: `pnpm build:[package]`
- [ ] TypeScript compilation passes: `pnpm ts-check`
- [ ] No circular dependencies
- [ ] Build artifacts generated in dist/

**Cross-Package Testing** (if applicable):
- [ ] Dependent packages still work after changes
- [ ] App templates still render components correctly
- [ ] No breaking changes to public APIs

**Theme System Testing** (if theme changes):
- [ ] CSS variables applied correctly
- [ ] Brand themes inherit base tokens properly
- [ ] Dark mode works (if applicable)

**Config Package Testing** (if config changes):
- [ ] Config applies correctly to consumer packages
- [ ] No conflicts with existing configs
- [ ] Documentation updated for new patterns
```

### 8. Root Cause Analysis

Append to `.cursor/plans/[TICKET-ID].md`:

```markdown
---

## 10. Verification Results

> Verification completed: [timestamp]

### Spec Verification

#### Acceptance Criteria
- [x] AC #1: [Description]
- [x] AC #2: [Description]

#### Success Criteria
- [x] Criterion 1
- [x] Criterion 2

#### Component Library Verification
- [x] Component structure follows conventions
- [x] Theme tokens properly applied
- [x] Build artifacts generated correctly
- [x] Storybook stories work

### Quality Checks

#### Lint
- ✅/❌ Status: [PASS/PARTIAL/FAIL]
- Errors: [count found] → [count remaining]
- Warnings: [count found] → [count remaining]
- Auto-fixed: [count]

**Root Cause Analysis**:
- [Category]: [Number] issues
  - Root cause: [Analysis]
  - Fix approach: [What was done]

#### Tests
- ✅/❌ Status: [PASS/PARTIAL/FAIL]
- Tests run: [count]
- Passed: [count]
- Failed: [count] → [count remaining]
  - [Test name]: [Failure reason]

**Root Cause Analysis**:
- [Test failure]: [Number] issues
  - Root cause: [Analysis]
  - Fix approach: [What was done]

### Iterations Required
- Lint: [count] iterations
- Tests: [count] iterations

### Overall Status: PASS / PARTIAL / FAIL
```

### 9. Commit Preparation

**Draft Commit Message**:

Analyze what changed (from git diff) and generate:

```
<type>: <Description in imperative mood>

Ticket: [TICKET-ID]

Changes:
- [Key change 1]
- [Key change 2]

Tests: [Test status]
```

**Types**: `fix` | `feat` | `refactor` | `test` | `docs` | `chore`

### 10. Final Summary

```
## ✅ Verification Complete

### Files Verified: [count]
[List of files]

### Checks Performed:
- ✅/❌ Spec Verification: All criteria met
- ✅/❌ Lint: [status]
- ✅/❌ Tests: [X tests run, Y passed, Z failed]

### Iterations Required:
- Lint: [count]
- Tests: [count]

### Overall Status: PASS / PARTIAL / FAIL

[If PARTIAL or FAIL]
### Remaining Issues:
1. [Issue 1]
2. [Issue 2]

Recommendation: [Manual fix needed / Review required / etc.]

---

### 📝 Proposed Commit Message:

```
[Generated commit message]
```

---

**Action**: Shall I commit this now? (y/n)

**Next**: Run `/retro-gsd` to improve global rules based on this session.
```

## Important Notes

- **Project Detection**: Automatically detects package manager, test framework, special requirements
- **Monorepo Support**: Works from individual packages OR monorepo root with Turborepo
- **Parallel Reads**: Load files in batch, not sequentially
- **Max Iterations**: 5 per check type to prevent infinite loops
- **Timezone Handling**: Auto-detected from test scripts
- **Never Auto-Commit**: ALWAYS ask permission before committing (per workspace rules)

## Exit Conditions

- ✅ **Pass**: All checks pass, ready to commit
- ⚠️ **Partial**: Some issues fixed but some remain after 5 iterations
- ❌ **Fail**: Critical issues remain unfixed

# GSD Stage 3: BUILD - Code Execution (Two-Phase Approach)

<!-- Type: build-gsd | Category: GSD | Full: build-gsd -->

Execute the Implementation Plan step-by-step, writing code to the file system.

---

## 🔨 WORKFLOW CONTEXT

**You are here**: SPEC ✅ → PLAN ✅ → **BUILD (PROTOTYPE)** ← YOU ARE HERE → Quality → VERIFY → RETRO

**What happens now**: I'll create **working code** based on your plan:
- ✅ Implements core functionality
- ✅ TypeScript compiles
- ❌ Skips tests/linting (for speed)

**CRITICAL: Two-Phase Process**
1. **PROTOTYPE Phase** (now): Fast working code
2. **QUALITY Phase** (after you confirm): Tests + linting

**What you do next**: 
1. I'll stop at a checkpoint with testing instructions
2. You manually test the prototype in Storybook/browser
3. You tell me:
   - ✅ "Looks good, continue with quality" → I add tests/linting
   - 🔄 "Change X" → I update the prototype
   - ❌ "This is wrong, we need Y" → I revise the approach

**Expected output**: Working prototype code + manual testing instructions.

**⚠️ IMPORTANT**: I will NOT proceed to tests/linting until you confirm the prototype works correctly.

---

## Philosophy: Prototype First, Quality Second

BUILD now operates in TWO distinct phases:

1. **PROTOTYPE PHASE**: Get working code fast, skip tests/linting
2. **QUALITY PHASE**: Add tests, fix linting (only after user confirms prototype)

This prevents wasting time polishing code that might need architectural changes.

---

## PHASE 1: PROTOTYPE

### Goal
Create **functional prototype** as quickly as possible:
- ✅ Code compiles (TypeScript)
- ✅ Core functionality works
- ✅ Can be tested in Storybook or browser
- ❌ Skip new test files
- ❌ Skip updating existing tests
- ❌ Ignore linting warnings (non-critical)

### Procedure

#### 1. Read Plan
```bash
git branch --show-current  # Get ticket ID
```
Read `.cursor/plans/[TICKET-ID].md` Section 7: Implementation Plan

#### 2. Pre-Flight Checklist

**MANDATORY: Re-read ALL cursor rules**:
```bash
ls .cursor/rules/*.mdc
```

Ensure code will adhere to:
- Project-specific patterns and conventions
- Component library usage (Hammer UI)
- Import paths, naming conventions, code style
- Theme system patterns

#### 3. Prototype Execution Loop

For each implementation step:

**DO**:
- ✅ Implement business logic
- ✅ Create/modify components, hooks, utilities
- ✅ Add TypeScript types (required for compilation)
- ✅ Fix TypeScript compilation errors in NEW code
- ✅ Basic error handling (happy path focus)

**DON'T**:
- ❌ Create new test files (`.spec.ts`, `.test.tsx`)
- ❌ Update existing test files
- ❌ Fix pre-existing lint warnings in untouched code
- ❌ Add comprehensive error handling
- ❌ Optimize performance

**If Existing Tests Break**:
Comment them out with a TODO:
```typescript
// TODO: Update after prototype confirmation (BUILD Quality Phase)
describe.skip('ComponentName', () => {
  // ... existing tests
});
```

**Build Artifacts Reminder** (Reference: `.cursor/rules/architecture/monorepo-builds.mdc`):
- If you modified files in `src/` directories, note which packages need rebuilding
- Remember: Storybook imports from `dist/`, not `src/`
- User will need to rebuild before testing in Storybook

#### 4. Quick TypeScript Check

Run ONLY:
```bash
pnpm ts-check  # Or: tsc --noEmit
```

**Fix Only**:
- TypeScript errors in files YOU modified
- Ignore pre-existing errors in untouched files

#### 5. Progress Logging

Append to `.cursor/plans/[TICKET-ID].md`:

```markdown
---
## 8. Build Prototype Log

| Time | File | Action |
| :--- | :--- | :--- |
| [HH:MM] | `Component.tsx` | Implemented core logic |
| [HH:MM] | `useTheme.ts` | Added theme integration |
| [HH:MM] | `types.ts` | Added TypeScript definitions |

**Tests Skipped/Disabled**: 
- `Component.spec.tsx` - Marked with TODO
- `useTheme.spec.ts` - Marked with TODO

**Lint Warnings**: [count] (will address in Quality Phase)

**Packages Requiring Rebuild**:
- `@dbarrett24/core-components` - Modified src/ files
- `@dbarrett24/basketball-training-ui` - Modified theme files
```

#### 6. Prototype Checkpoint

**STOP and present to user**:

```
✅ BUILD PROTOTYPE Complete

**Modified Files**: [N]
**TypeScript**: ✅ Compiles
**Tests**: ⏭️ Skipped (marked with TODO)
**Linting**: ⏭️ Deferred to Quality Phase

---

## 🧪 Manual Testing Instructions

**What to test**: [Component/Feature description]

**How to test**:
1. Build the package(s): `pnpm build:[core|basketball|professional]`
2. Start Storybook: `pnpm storybook:[core|basketball|professional]`
3. Navigate to: [Story path in Storybook sidebar]
4. Perform: [Interaction steps]
5. Expected: [Expected behavior]

**Alternative: Test in App Template**:
1. Build the component package: `pnpm build:core`
2. Start app: `pnpm dev:nextjs` or `pnpm dev:vite`
3. Navigate to: [URL/route]
4. Expected: [Expected behavior]

**Test Checklist**:
- [ ] Component renders correctly
- [ ] Props work as expected
- [ ] Theme variants display correctly (if brand-specific)
- [ ] Responsive behavior works
- [ ] Accessibility (keyboard nav, screen reader)
- [ ] Edge cases (empty states, long content, errors)

**Build Dependency Reminder**:
If you modified files in `src/` directories, rebuild affected packages before testing:
```bash
# Example rebuild sequence
pnpm build:theme      # If theme-system changed
pnpm build:basketball # If brand theme changed
pnpm build:core       # If core components changed
```

Then restart Storybook to pick up the new dist/ files.

---

**⚠️ CHECKPOINT: Please test the prototype**

Once you've confirmed it works correctly, tell me:
- "Looks good, continue with quality" → I'll add tests & fix linting
- "Change X" → I'll update the prototype
- "This is wrong, we need Y" → I'll revise the approach

**Do NOT proceed to Quality Phase until user confirms prototype is correct.**
```

**CRITICAL**: Do NOT continue to Quality Phase automatically. Wait for user confirmation.

---

## PHASE 2: QUALITY (User-Triggered)

**Trigger**: User confirms prototype works and says "continue with quality" or "add tests now"

### Goal
Transform prototype into production-ready code:
- ✅ Comprehensive test coverage
- ✅ All linting rules pass
- ✅ Edge cases handled

### Procedure

#### 1. Test Writing

**Find skipped tests**:
```bash
rg "describe.skip" --type ts --type tsx
rg "TODO.*Quality Phase" --type ts --type tsx
```

**For each modified component/function**:
- Re-enable skipped tests (remove `.skip`)
- Update test assertions for changed behavior
- Add tests for new functionality
- Cover edge cases and error states

**Test Quality Standards**:
- Unit tests: ≥80% coverage for new code
- Component tests: render, props, interactions
- Theme tests: verify theme tokens apply correctly
- Accessibility tests: keyboard navigation, ARIA attributes

#### 2. Linting

Run and fix:
```bash
pnpm lint          # Identify all issues
pnpm lint-fix      # Auto-fix what's possible
```

**Fix manually**:
- Remove unused imports
- Fix naming conventions  
- Resolve type warnings
- Remove console.logs/debuggers

**Priority**:
1. Security vulnerabilities (MUST fix)
2. Code smells (SHOULD fix)
3. Style issues (NICE to fix)

#### 4. Final Verification

Run full quality suite:
```bash
pnpm ts-check      # Must pass
pnpm lint          # Must pass
pnpm test          # Must pass
```

#### 5. Quality Logging

Append to `.cursor/plans/[TICKET-ID].md`:

```markdown
---
## 9. Build Quality Log

**Tests Added/Updated**:
- `Component.spec.tsx`: Re-enabled + 3 new cases
- `useTheme.spec.ts`: Updated mocks for new structure

**Linting Fixed**:
- Removed unused imports (5 files)
- Fixed naming conventions (2 files)
- Coverage: 85%

**Final Quality Gates**:
- TypeScript: ✅ Pass
- Linting: ✅ Pass
- Tests: ✅ [N] passing
```

#### 6. Quality Completion

```
✅ BUILD QUALITY Complete

**Quality Gates**: All Passed ✅
- TypeScript: ✅ No errors
- Linting: ✅ Clean
- Tests: ✅ [N]/[N] passing

**Coverage**:
- Unit Tests: [N] added/updated
- Integration Tests: [N] added/updated

---

**Ready for VERIFY stage**: Run `/verify` to do final manual testing and commit.
```

---

## Important Notes

**Prototype Phase**:
- Speed is priority - user feedback is more valuable than perfect code
- User confirmation prevents wasted polish on wrong implementation
- TypeScript is required (serves as documentation)
- Remember build dependencies: src/ changes require package rebuilds

**Quality Phase**:
- Only runs AFTER user confirms prototype
- Comprehensive - don't skip tests "because it's obvious"
- Tests prevent regressions and enable confident refactoring

**Exit Conditions**:
- ✅ Prototype checkpoint reached → Wait for user
- ✅ Quality phase complete → Proceed to VERIFY
- 🔄 User requests changes → Return to Prototype phase

---

## Error Handling

If you encounter issues:

**Plan Ambiguity**:
- Stop execution
- Ask user for clarification
- Update plan before continuing

**Technical Blocker**:
- Document in build log
- Notify user and suggest solutions

**Pattern Violation**:
- Re-read relevant cursor rules
- Correct the approach
- Update plan if necessary

**Build Dependency Confusion**:
- Re-read `.cursor/rules/architecture/monorepo-builds.mdc`
- Clarify which packages need rebuilding
- Document in checkpoint instructions

--- End Command ---

# GSD Stage 2: PLAN - Architecture & Implementation

<!-- Type: plan-gsd | Category: GSD | Full: plan-gsd -->

Convert high-level SPEC into detailed, file-by-file implementation plan.

---

## 📋 WORKFLOW CONTEXT

**You are here**: SPEC ✅ → **PLAN** ← YOU ARE HERE → BUILD → VERIFY → RETRO

**What happens now**: I'll create a detailed, step-by-step implementation plan with:
- Files to create/modify with specific changes
- Order of operations to minimize breaking changes
- Dependencies and prerequisites
- Edge cases to handle

**What you do next**: Review the implementation plan. Confirm the approach makes sense for your architecture. If approved, run `/build` to start coding.

**Expected output**: Section 5 added to `.cursor/plans/[TICKET-ID].md` with actionable implementation steps.

**Confirmation question**: Does this architectural approach align with your system? Any concerns before I start coding?

---

## Goal

Append comprehensive implementation plan to `.cursor/plans/[TICKET-ID].md`

## Procedure

### 1. Read Context

**Locate Active Spec**:
```bash
git branch --show-current  # Extract ticket ID
```

**Read**: `.cursor/plans/[TICKET-ID].md` (Sections 1-6)

### 2. Pre-Flight Checklist

**MANDATORY: Re-read ALL cursor rules**:
```bash
ls .cursor/rules/*.mdc
```

Ensure the plan will comply with:
- Project-specific patterns and conventions
- Component library usage (Hammer UI patterns)
- Code style and architectural constraints
- Testing standards
- Monorepo build dependencies

### 3. Architectural Analysis

**Rules Verification**:
- Cross-reference plan against all `.cursor/rules/*.mdc` files
- Ensure adherence to project patterns

**Gap Analysis**:
- Are there missing specs or ambiguities?
- If YES → Ask user before planning
- If NO → Proceed

**Dependency Check** (Reference: `.cursor/rules/architecture/monorepo-builds.mdc`):
- Does this require updates to shared packages?
- Build dependency chain: theme-system → brand-libraries → core-components → apps
- Will this affect other parts of the monorepo?
- Are there breaking changes to consider?
- Will Storybook need rebuilding?

**Quality Gate Integration**:
- Identify test files that need updates
- Plan for lint compliance
- Consider Codacy patterns from project history

### 4. Create Implementation Plan

Append this section to `.cursor/plans/[TICKET-ID].md`:

```markdown
---

## 7. Implementation Plan

> Generated on [Date]

### Phase 1: Setup & Types

**Goal**: Establish data structures and type safety

- [ ] Create/Update `types/[feature].types.ts`
  - **Change**: [Describe the change]
  - **Reason**: [Why this change is needed]
  - **Dependencies**: [What this affects]

- [ ] Update component prop types
  - **Change**: [Describe the change]
  - **Reason**: [Why this change is needed]
  - **Dependencies**: [What this affects]

### Phase 2: Core Logic

**Goal**: Implement main feature functionality

- [ ] Refactor `Component.tsx`
  - **Change**: [Describe the change]
  - **Reason**: [Why this change is needed]
  - **Files Affected**: [List dependent files]
  - **Tests Required**: [What tests to add/update]

- [ ] Create `hooks/useFeature.ts`
  - **Change**: [Describe the change]
  - **Reason**: [Why this change is needed]
  - **Dependencies**: [What this uses]

- [ ] Update `utils/helper.ts`
  - **Change**: [Describe the change]
  - **Reason**: [Why this change is needed]

### Phase 3: Integration

**Goal**: Connect components and ensure proper integration

- [ ] Update parent components
  - **Files**: [List]
  - **Changes**: [Describe]

- [ ] Storybook integration
  - **Stories**: [List Storybook stories to create/update]
  - **Controls**: [Props to expose in Storybook]
  - **Variants**: [Different states/themes to demonstrate]

- [ ] Build artifact considerations
  - **Packages to rebuild**: [List packages with src/ changes]
  - **Build order**: [Specify if order matters]
  - **Storybook restart**: [Yes/No - if imports from dist/]

### Phase 4: Testing

**Goal**: Ensure quality and prevent regressions

- [ ] Unit tests for `Component.spec.tsx`
  - **Coverage**: [What behaviors to test]
  - **Edge Cases**: [Specific scenarios]

- [ ] Update integration tests
  - **Files**: [List test files]
  - **Scenarios**: [What to test]

- [ ] Storybook manual testing checklist
  - [ ] Component renders correctly in all themes
  - [ ] Props work as expected
  - [ ] Accessibility features work (keyboard nav, ARIA)
  - [ ] Responsive behavior
  - [ ] Edge cases (empty states, long content, etc.)

### Phase 5: Quality Gates

**Goal**: Pass all automated checks before commit

- [ ] Run Codacy analysis on modified files
  - Use `/verify-gsd` command

- [ ] Ensure lint passes
  - Auto-fix where possible

- [ ] Verify tests pass
  - All affected tests must pass

### Critical Questions

[Any ambiguities that need user input before coding]

- Q: [Question 1]
- Q: [Question 2]

### Estimated Complexity

- **Files to Modify**: [count]
- **Files to Create**: [count]
- **Tests to Write**: [count]
- **Packages to Rebuild**: [count]
- **Storybook Stories**: [count to create/update]
- **Complexity**: Low / Medium / High
- **Risk Level**: Low / Medium / High

### Risk Mitigation

- **Risk 1**: [Description]
  - **Mitigation**: [Strategy]

- **Risk 2**: [Description]
  - **Mitigation**: [Strategy]
```

### 5. Validate Plan

**Self-Check Questions**:
- Does every step have a clear change and reason?
- Are all dependencies identified?
- Are test requirements explicit?
- Are risks and mitigations documented?
- Does this follow project rules?
- Are build dependencies properly sequenced?
- Is Storybook integration addressed?

### 6. Completion

Output: "✅ Plan added to `.cursor/plans/[TICKET-ID].md`. Review the steps. If satisfied, run `/build-gsd` to execute."

## Important Notes

- **Rules-First**: Every decision must align with `.cursor/rules/*.mdc`
- **Specificity**: Each step should be actionable, not vague
- **Dependencies**: Explicitly track what affects what
- **Build Awareness**: Remember dist/ vs src/ and rebuild requirements
- **Testing**: Don't treat tests as an afterthought
- **Storybook**: Plan for story creation/updates
- **Risk-Aware**: Flag concerns upfront
- **User Input**: Ask critical questions before building

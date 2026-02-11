# GSD Stage 5: RETRO - Process Improvement

<!-- Type: retro-gsd | Category: GSD | Full: retro-gsd -->

Analyze the session to identify gaps in global cursor rules and propose improvements.

---

## 🔄 WORKFLOW CONTEXT

**You are here**: SPEC ✅ → PLAN ✅ → BUILD ✅ → VERIFY ✅ → **RETRO** ← YOU ARE HERE (FINAL STAGE)

**What happens now**: I'll analyze this entire GSD session to improve future workflows:
- What went well vs poorly
- Mistakes made and how to prevent them
- Missing patterns/rules that should be documented
- Process improvements for `.cursor/rules/`

**What you do next**: 
1. Review the retrospective findings
2. Approve any proposed rule updates
3. Close the ticket - you're done! 🎉

**Expected output**: 
- Section 11 added to `.cursor/plans/[TICKET-ID].md`
- Proposed updates to `.cursor/rules/*.mdc` (if needed)
- Documented learnings for future reference

**This closes the GSD cycle** - the workflow is complete after this stage.

---

## Goal

Learn from this session to improve future AI agent performance.

## Procedure

### 1. Load Session Context

**Locate Plan**:
```bash
git branch --show-current  # Extract ticket ID
```

**Read Entire Context File**: `.cursor/plans/[TICKET-ID].md`
- Section 1-6: SPEC (research, findings, component architecture, risks, success criteria)
- Section 7: PLAN (implementation plan)
- Section 8: BUILD PROTOTYPE LOG (execution notes, decisions)
- Section 9: BUILD QUALITY LOG (tests, linting fixes)
- Section 10: VERIFICATION (quality checks, issues found/fixed)

**Review Chat History**:
- What questions did the AI ask?
- What mistakes were made?
- What patterns were reinforced or violated?
- What context did the user provide that helped?

### 2. Pre-Flight Checklist

**MANDATORY: Read ALL current cursor rules**:
```bash
ls .cursor/rules/*.mdc
```

Understand the current state before proposing changes.

### 3. Session Analysis

Look for critical moments:

**Questions That Shouldn't Have Been Asked**:
- Information that *should* have been in a rule
- Patterns that exist in the codebase but aren't documented
- Project-specific conventions not captured

**Mistakes That Were Corrected**:
- AI made wrong assumptions about architecture
- AI violated a pattern that wasn't in rules
- User corrected an approach

**Patterns Reinforced**:
- Successful patterns used during implementation
- Shortcuts or utilities that worked well
- Testing approaches that were effective

**User-Provided Context**:
- Knowledge user shared that would help future sessions
- Edge cases or gotchas user warned about
- Business logic explanations

**Quality Issues**:
- Lint patterns that appeared multiple times
- Test patterns that needed explanation
- Common code quality patterns

### 4. Gap Analysis

Read all current rules and identify **missing** knowledge:

**Categories to Consider**:

**Component Patterns**:
- Component composition (how components extend/wrap each other)
- Prop forwarding patterns (ref forwarding, spreading props)
- Theme token usage (accessing design tokens correctly)
- Accessibility patterns (ARIA attributes, keyboard handling)
- Component file structure (where helpers live, co-location)
- Render prop patterns vs children patterns

**Theme System**:
- How brand tokens extend base tokens
- CSS variable naming conventions
- Theme switching mechanisms
- Dark mode patterns
- Media query patterns for responsive theming
- Custom property fallbacks

**Conventions**:
- Naming (variables, functions, files, directories)
- Imports (path aliases, ordering, grouping)
- File organization (where things live, co-location)
- Type definitions (where types live, naming conventions)

**Gotchas**:
- Legacy quirks (old code that can't be changed yet)
- Known issues (workarounds for bugs)
- Performance concerns (patterns to avoid)
- Browser compatibility (Safari specifics, mobile quirks)

**Storybook Patterns**:
- Story file naming and location
- Story structure (default export, named exports)
- Args and argTypes patterns
- Decorators and global types
- Story testing patterns

**Config Packages**:
- When to update shared configs vs local overrides
- How config changes propagate to consumers
- Testing config packages
- Version compatibility patterns

**Testing**:
- Test file naming and location
- Test utilities and helpers
- Mocking patterns (especially for theme context)
- Assertion styles
- Component testing patterns (React Testing Library)

**Monorepo-Specific**:
- When to use shared packages
- How to add dependencies
- Import patterns for cross-package references
- Build artifact management (dist/ vs src/)
- When to rebuild packages

### 5. Proposal Generation

For each gap, create a proposal:

```markdown
### Proposed Rule Change #[N]

**Action**: `CREATE` | `UPDATE` | `DELETE`
**File**: `.cursor/rules/[filename].mdc`

**Content to Add/Change**:
```
[The actual markdown content]
```

**Reason**: [Why this is needed based on this session]

**Evidence from Session**:
- [Specific example from SPEC/PLAN/BUILD/VERIFY]
- [What would have been different with this rule]

**Impact**:
- Future sessions will: [benefit]
- Reduces need for: [clarifying questions / user corrections]
```

### 6. Prioritization

Rank proposals by impact:

**High Priority** (Critical for next session):
- Prevents mistakes that happened this session
- Documents patterns used multiple times
- Captures component library logic essential for this feature area

**Medium Priority** (Nice to have):
- Improves efficiency (fewer questions)
- Clarifies ambiguous conventions
- Documents edge cases

**Low Priority** (Optional polish):
- Style preferences
- Minor optimizations
- Rare edge cases

### 7. Present Proposals

```
## 🔄 RETRO: Session Learning Analysis

### Session Summary
**Ticket**: [TICKET-ID]
**Duration**: [SPEC through VERIFY]
**Outcome**: [Success / Partial / Failed]

---

## 📊 Session Metrics

### Questions Asked: [count]
[List questions - mark which shouldn't have been necessary]

### Mistakes Made: [count]
[List mistakes and what caused them]

### Iterations Required:
- Lint: [count]
- Tests: [count]

### Patterns Used Successfully:
- [Pattern 1]
- [Pattern 2]

---

## 🔍 Gap Analysis

### Current Rules Status:
[List all existing rules and their coverage]

### Identified Gaps:
1. **[Category]**: [Gap description]
   - Evidence: [From session]
   - Impact: [What would improve]

2. **[Category]**: [Gap description]
   - Evidence: [From session]
   - Impact: [What would improve]

---

## 💡 Proposed Changes

### High Priority ([count])

#### Proposal 1: [Title]
**Action**: CREATE / UPDATE / DELETE
**File**: `.cursor/rules/[filename].mdc`

**Content**:
```
[Actual markdown content to add]
```

**Reason**: [Why based on session]

**Evidence**: [Specific examples from session]

---

#### Proposal 2: [Title]
[...]

---

### Medium Priority ([count])
[Similar format]

---

### Low Priority ([count])
[Similar format]

---

## 🎯 Recommendation

**Immediate Actions**:
1. Apply High Priority proposals
2. Review Medium Priority proposals

**Future Considerations**:
- [Long-term pattern to watch]
- [Potential rule that needs more evidence]

---

**Shall I apply these rule updates?**
- (a) Apply all High Priority
- (b) Apply selected proposals (tell me which)
- (c) Review and revise first
- (d) Skip for now
```

### 8. Apply Changes (if approved)

If user approves:

**For CREATE**:
- Write new `.cursor/rules/[filename].mdc` file
- Add frontmatter with description and glob patterns

**For UPDATE**:
- Read existing rule file
- Apply changes via `StrReplace`
- Maintain existing structure

**For DELETE**:
- Confirm with user (rare)
- Remove file or section

**After Each Change**:
- Report what was done
- Show before/after for updates

### 9. Final Summary

```
## ✅ RETRO Complete

### Rules Updated:
- Created: [count] files
- Updated: [count] files
- Deleted: [count] files

### Files Modified:
- `.cursor/rules/[file1].mdc` - [What changed]
- `.cursor/rules/[file2].mdc` - [What changed]

### Expected Impact:
- Future SPEC stages will: [improvement]
- Future PLAN stages will: [improvement]
- Future BUILD stages will: [improvement]
- Future VERIFY stages will: [improvement]

### Next Session Will Benefit From:
- [Specific improvement 1]
- [Specific improvement 2]

---

**GSD Workflow Complete for [TICKET-ID]** 🎉

Full session context preserved in: `.cursor/plans/[TICKET-ID].md`
```

## Important Notes

- **Evidence-Based**: Only propose rules based on concrete session evidence
- **Specific**: Rules should be actionable, not vague
- **Maintainable**: Keep rules focused and organized by category
- **User Approval**: NEVER apply rule changes without user permission
- **Impact Focus**: Prioritize proposals that prevent mistakes/questions
- **Context Preservation**: The plan file is the source of truth for analysis

## Categories for Rule Files

Suggested organization:

- `component-patterns.mdc` - Component structure, props, composition
- `theme-patterns.mdc` - Theme system usage, CSS variables, brand tokens
- `storybook-patterns.mdc` - Story structure, args, decorators
- `testing-patterns.mdc` - Test structure, mocking, assertions
- `config-packages.mdc` - Shared config patterns and usage
- `monorepo-conventions.mdc` - Cross-package patterns, build dependencies
- `gotchas-[feature].mdc` - Feature-specific quirks and workarounds
- `naming-conventions.mdc` - File, variable, function naming
- `import-patterns.mdc` - Import ordering, aliases, grouping

## Exit Conditions

- ✅ **Complete**: Rules updated, improvements documented
- ⏭️ **Skipped**: User chooses not to update rules (session still valuable)
- 🔄 **Revised**: User requests changes to proposals before applying

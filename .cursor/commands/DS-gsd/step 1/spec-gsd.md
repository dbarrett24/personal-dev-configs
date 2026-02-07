# GSD Stage 1: SPEC - Research & Requirements

<!-- Type: spec-gsd | Category: GSD | Full: spec-gsd -->

Research and document requirements in a persistent context file.

---

## 🎯 WORKFLOW CONTEXT

**You are here**: **SPEC** ← START → PLAN → BUILD → VERIFY → RETRO

**What happens now**: I'll research the requirements, analyze the codebase, and create a comprehensive context file at `.cursor/plans/[TICKET-ID].md` with:
- Jira ticket details (if applicable)
- Relevant files and current behavior
- Component library architecture analysis
- Constraints and risks
- Success criteria

**What you do next**: Review the spec file. If it looks good, run `/plan` to create the implementation strategy.

**Expected output**: `.cursor/plans/[TICKET-ID].md` with complete research findings.

---

## CRITICAL: IMMEDIATE FIRST ACTION

**When given a Jira URL or ticket key, IMMEDIATELY fetch the ticket as your FIRST action.**

### Step 1: Fetch Jira Ticket (if applicable)

**Jira Detection**:
- URL pattern: `https://dev.davebarrett.atlassian.net/browse/DS-####`
- Ticket pattern: `DS-####` or similar project keys
- Branch pattern: Extract from `git branch --show-current` (e.g., `DS-123`)

**IMMEDIATELY call MCP Atlassian**:
```json
{
  "server": "user-mcp-atlassian",
  "toolName": "jira_get_issue",
  "arguments": {
    "issue_key": "DS-####",
    "fields": "*all",
    "expand": "changelog,renderedFields",
    "comment_limit": 10
  }
}
```

**Download Attachments**:
- Download IMAGES (png, jpg, gif, webp)
- Download TEXT-READABLE files (txt, md, json, xml, csv)
- SKIP: videos, PDFs, binaries
- Use `jira_download_attachments` to `/tmp/jira-attachments`
- READ the downloaded files to understand context

**ABSOLUTE PROHIBITIONS**:
- NEVER use web search for Jira URLs
- NEVER skip fetching the ticket
- NEVER guess at ticket contents

## Goal

Create comprehensive context file: `.cursor/plans/[TICKET-ID].md`

## Procedure

### 1. Parse Ticket ID

**Branch Detection**:
```bash
git branch --show-current
```

Extract ticket ID from:
- Branch name: `DS-123`, `feature/DS-123-description`
- User's prompt if not in branch
- Jira URL if provided

**Confirm with user**: "I detected Ticket ID `DS-123`. Is this correct?"

**Action**: Create (or overwrite) `.cursor/plans/[TICKET-ID].md`

### 2. Pre-Flight Checklist

**MANDATORY: Read ALL cursor rules before proceeding**:
```bash
# Read all .mdc files in project .cursor/rules/
ls .cursor/rules/*.mdc
```

This ensures you understand:
- Project-specific patterns and conventions
- Component library usage (e.g., Hammer UI)
- Monorepo structure and build dependencies
- Theme system patterns

### 3. Research Phase

Use parallel tool calls for efficiency:

**Codebase Search**:
- `SemanticSearch` for conceptual searches ("Where is Button component implemented?")
- `Grep` for exact symbol/text searches (component names, function names)
- `Glob` to find files by pattern (`**/Button*`, `**/theme*`)
- `Read` to examine specific files

**MCP Resources**:
- **Hammer UI**: Call `user-hammer-ui.getResource` for component details
  - NEVER guess component props - always verify
  - Example: `{ "name": "Button" }`
- **Context7**: For external library docs if needed

**Component Library Verification** (Critical for personal-dev-configs):

Check these layers for alignment:

| Layer                | Relative Path                                | What to Look For                                               |
| :------------------- | :------------------------------------------- | :------------------------------------------------------------- |
| **Core Components**  | `./shared-configs/core-components/src/`      | Base unstyled components (Button, Input, Card, etc.)           |
| **Brand Libraries**  | `./brand-libraries/*/src/`                   | Brand-specific themed components (basketball, professional)    |
| **Config Packages**  | `./shared-configs/*/`                        | Shared tooling configs (eslint, jest, prettier, tsconfig)      |
| **Theme System**     | `./shared-configs/theme-system/src/`         | Design tokens, CSS variables, theme utilities                  |
| **App Templates**    | `./apps/*/`                                  | Next.js and Vite app examples using components                 |
| **Scripts**          | `./scripts/`                                 | Build automation (create-brand.ts, create-project.ts, etc.)    |

Verify:
- Component structure follows PascalCase conventions
- Theme tokens are properly applied
- Build artifacts (dist/) vs source files (src/)
- Storybook story patterns
- Test file coverage

**Build Dependency Check** (Reference: `.cursor/rules/architecture/monorepo-builds.mdc`):
- Identify dependency chain: theme-system → brand-libraries → core-components → apps
- Understand which packages need rebuilding if source files change
- Note Storybook import patterns (imports from dist/, not src/)

**Nuance Check**:
- Identify legacy behaviors not covered by standard rules
- Check for "weird" patterns in the code
- Review test files to understand expected behavior
- Check Storybook stories for usage examples

### 4. Write Context File

Create `.cursor/plans/[TICKET-ID].md` with this structure:

```markdown
# SPEC: [TICKET-ID] - [Brief Description]

> Generated on [Date]

## 1. Jira Ticket Summary (if applicable)

**Status**: [status] | **Priority**: [priority] | **Assignee**: [name]

### Description
[Ticket requirements from Jira]

### Acceptance Criteria
1. [AC #1]
2. [AC #2]

### Attachments Reviewed
- [List images/files analyzed, or "None"]

## 2. Context & Intent

[Summary of what needs to change and WHY]

## 3. Research Findings

### Relevant Files
- `path/to/file.tsx` - [Brief description]
- `path/to/file.ts` - [Brief description]

### Current Behavior
[How it works now]

### Similar Implementations
[Examples to reference]

### Architecture Context
[Patterns discovered]

### Constraints
- Tech stack constraints
- Monorepo boundaries
- Build dependency considerations
- Theme system constraints
- Component library patterns

### Rule References
- `.cursor/rules/[file].mdc` - [What applies]

## 4. Component Library Architecture (if applicable)

### Package Location
- Which package will be modified: [core-components | brand-libraries/* | theme-system | config package]

### Build Dependencies
- Packages that depend on this: [list]
- Packages this depends on: [list]
- Rebuild strategy: [from monorepo-builds.mdc]

### Theme Integration
- Uses theme tokens: [yes/no]
- Brand-specific: [yes/no - which brands?]
- CSS variables: [list relevant variables]

### Storybook Integration
- Story location: [path]
- Story structure: [existing pattern to follow]
- Interactive controls: [what props to expose]

## 5. Nuance & Risks

[Critical context NOT in rules: potential regressions, edge cases, legacy quirks]

## 6. Success Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

### 5. Clarifying Questions

**ONLY ASK IF TRULY UNCLEAR after thorough research:**
- Specific, targeted questions about requirements
- Clarification on edge cases
- Confirmation of acceptance criteria
- Missing information needed for implementation

**DO NOT ask questions that can be answered by:**
- Reading the code
- Checking existing patterns
- Reviewing similar features
- Looking at test files
- Checking Storybook stories

### 6. Completion

Output: "✅ Spec created at `.cursor/plans/[TICKET-ID].md`. Review it, then run `/plan-gsd` to proceed."

## Important Notes

- **Thoroughness**: Be comprehensive - don't skip investigation
- **Parallel Reads**: Use parallel tool calls to read multiple files efficiently
- **Pattern Following**: Review existing similar code first
- **Cite Specifics**: Reference specific files and line numbers
- **MCP-First**: Always use MCP for Jira/Hammer UI - never guess
- **Build Awareness**: Explicitly check build dependencies and dist/ vs src/ patterns
- **Context Persistence**: Everything goes into the plan file for future stages

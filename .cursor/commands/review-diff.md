# Automated Diff Review Command

## Usage

Run this command to automatically generate and review a diff:

```bash
git diff main -- ':!*.spec.tsx.snap' ':!pnpm-lock.yaml' > diff.txt && echo "Diff generated successfully! Ready for review."
```

## What this does:

1. Creates a diff between current branch and main
2. Saves it to `diff.txt`
3. The AI assistant will automatically analyze the diff for:
    - Breaking changes
    - Testing requirements
    - Risk areas
    - Deployment considerations

## Manual Review Process:

After running the command, ask the AI: "Can you review the changes in @diff.txt? What should I be double checking? Every bit of new code should have unit test coverage."

**IMPORTANT: The AI should ONLY analyze and report findings - NO code changes should be made during the review process.**

## Key Guidelines to Check:

### Testing Standards

- **Never mock components** - test actual behavior
- **Use .toBeVisible() over .toBeInTheDocument()**
- **Props pattern**: Always use `let props: ComponentProps<typeof ComponentName>` with `beforeEach`
- **Use describe and it**: Never use `test()` - use `it()` for consistency
- **Test file pattern**: `*.spec.tsx` for components, `*.spec.ts` for utilities

### TypeScript Standards

- **No `as any`** - use proper types or type guards
- **Use type over interface** for object shapes
- **Avoid enums** - use const objects with `as const`

### React Standards

- **Named exports only** (except Next.js pages)
- **Functional components only** - no class components
- **Arrow functions** for component definitions

## Alternative Commands:

- **Compare with specific branch**: `git diff <branch-name> -- ':!*.snap' ':!pnpm-lock.yaml' > diff.txt`
- **Include staged changes**: `git diff --cached -- ':!*.snap' ':!pnpm-lock.yaml' > diff.txt`
- **Compare specific files**: `git diff main -- path/to/file > diff.txt`

## Post-Review Commands:

- **Test coverage check**: `pnpm test --coverage`
- **Lint check**: `pnpm lint`
- **Type check**: `pnpm tsc --noEmit`

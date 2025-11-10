# Cursor AI Rules

Production-ready Cursor rules extracted from professional development experience.

## Available Rules

1. **typescript.mdc** - TypeScript patterns and best practices
2. **react.mdc** - React component patterns and conventions
3. **testing.mdc** - Testing patterns with React Testing Library
4. **naming.mdc** - File, directory, and variable naming conventions
5. **forms.mdc** - Form patterns with React Hook Form + Zod
6. **state.mdc** - State management with Jotai
7. **nextjs.mdc** - Next.js App Router patterns
8. **data-layer.mdc** - Data fetching with React Query

## How to Use

### Option 1: Add to Project .cursorrules

Copy the content from relevant `.mdc` files into your project's `.cursorrules` file:

```bash
# Copy all rules
cat cursor-rules/*.mdc > /path/to/your/project/.cursorrules

# Or copy specific rules
cat cursor-rules/typescript.mdc cursor-rules/react.mdc > /path/to/your/project/.cursorrules
```

### Option 2: Use as Reference

Keep these files as reference documentation for your development standards.

### Option 3: Create Workspace Rules

In Cursor, you can create workspace rules that apply to all projects:

1. Open Cursor Settings
2. Navigate to Rules
3. Add workspace-level rules
4. Copy content from these `.mdc` files

## Rule Categories

### Core Patterns (Use in Every Project)
- `typescript.mdc` - Type safety fundamentals
- `react.mdc` - Component patterns
- `naming.mdc` - Naming conventions

### Framework-Specific (Use When Applicable)
- `nextjs.mdc` - For Next.js projects
- `data-layer.mdc` - For React Query usage
- `forms.mdc` - For form-heavy applications
- `state.mdc` - For Jotai state management

### Quality Assurance (Essential)
- `testing.mdc` - Testing patterns and standards

## Customization

These rules are templates. Adapt them to your needs:

1. Replace `@yourname/*` with your actual package scope
2. Adjust coverage thresholds if needed
3. Add project-specific patterns
4. Remove rules that don't apply

## Key Principles

All rules follow these core principles:

- **Strict TypeScript** - No `any` types in production code
- **Functional React** - Only functional components, no classes
- **Named exports** - Except for Next.js pages
- **Arrow functions** - Consistent function syntax
- **High test coverage** - 90%+ for apps, 95%+ for libraries
- **Semantic naming** - Clear, descriptive names
- **Real behavior testing** - No component mocking

## Integration with Your Workflow

### New Project Setup

```bash
# Copy base rules
cp cursor-rules/typescript.mdc new-project/.cursorrules
cat cursor-rules/react.mdc >> new-project/.cursorrules
cat cursor-rules/naming.mdc >> new-project/.cursorrules
cat cursor-rules/testing.mdc >> new-project/.cursorrules

# Add framework rules as needed
cat cursor-rules/nextjs.mdc >> new-project/.cursorrules
cat cursor-rules/data-layer.mdc >> new-project/.cursorrules
```

### Existing Project

Review each rule and gradually adopt patterns that make sense for your project.

## Benefits

- **Consistency** - Same patterns across all projects
- **Quality** - Enforced best practices
- **Speed** - AI understands your preferences
- **Onboarding** - New developers see standards immediately
- **Maintainability** - Consistent codebase structure

## License

MIT - Feel free to adapt and use in your projects


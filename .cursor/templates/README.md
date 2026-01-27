# Cursor Templates

This directory contains template files that can be referenced by Cursor AI to generate consistent code patterns.

## Directory Structure

```
templates/
├── react/
│   ├── component.tsx           # Basic React component patterns
│   └── component-with-props.tsx # Component with typed props
├── data/
│   └── post-mutation.tsx       # React Query POST mutation patterns
├── testing/
│   └── form-wrapper.tsx        # FormWrapper for testing form components
└── README.md
```

## How to Use

### In Cursor AI Conversations

Reference templates directly in your prompts:

```
"Create a new component following the pattern in .cursor/templates/react/component-with-props.tsx"
```

### Template Purposes

#### React Templates

- **component.tsx**: Shows basic patterns for simple, stateful, and conditional components
- **component-with-props.tsx**: Demonstrates proper TypeScript props typing with JSDoc comments

#### Data Templates

- **post-mutation.tsx**: React Query mutation patterns for POST requests, file uploads, and error handling

#### Testing Templates

- **form-wrapper.tsx**: Helper for testing React Hook Form components with FormProvider context

## Best Practices

1. **Complete Examples**: Templates should be fully working code
2. **Type Safety**: Include proper TypeScript types
3. **Documentation**: Add JSDoc comments explaining usage
4. **Real Patterns**: Use actual project patterns, not generic examples
5. **Imports**: Show correct import paths

## When to Use What

| Need | Template | Alternative |
|------|----------|-------------|
| New component | `react/component.tsx` | - |
| Component with props | `react/component-with-props.tsx` | - |
| POST mutation | `data/post-mutation.tsx` | - |
| Form component test | `testing/form-wrapper.tsx` | - |
| GET query | See `data-layer.mdc` rule | - |

# @dbarrett24/eslint-config

Shared ESLint configuration for React/Next.js applications with TypeScript support.

## Installation

```bash
pnpm add -D @dbarrett24/eslint-config eslint prettier typescript
```

## Usage

Create `.eslintrc.js` in your project root:

```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    root: true,
};
```

### For Next.js Apps

Add Next.js specific rules:

```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    plugins: ['@next/eslint-plugin-next'],
    rules: {
        // Add Next.js specific import restrictions
        'no-restricted-imports': [
            'error',
            {
                paths: ['next/navigation', 'next/router', 'next/link'],
            },
        ],
    },
    root: true,
};
```

### With Type-Aware Linting (Recommended)

This shared config enables TypeScript type-aware rules (like `@typescript-eslint/no-unnecessary-condition`, `switch-exhaustiveness-check`, etc.) which catch more bugs but require type information to function.

**You MUST add `parserOptions.project` in your consuming package's `.eslintrc.js`:**

```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    parserOptions: {
        project: './tsconfig.json', // Required for type-aware rules
    },
    root: true,
};
```

#### Why parserOptions Must Be in Consuming Packages

The shared config **cannot** include `parserOptions.project` because:

1. **Different paths per package**: Each package has `tsconfig.json` at a different location relative to the shared config
2. **Relative path requirement**: TypeScript-ESLint requires a relative path from the `.eslintrc.js` location, not from the shared config in `node_modules`
3. **Monorepo structure**: In a monorepo, each package's structure is unique

**This is the standard pattern** recommended by TypeScript-ESLint for shared configurations.

#### If Test Files Are Excluded from tsconfig.json

Some packages exclude test files from their `tsconfig.json` to keep build artifacts clean. However, ESLint should still lint these files. Solution: create a separate TypeScript config for linting.

**Create `tsconfig.eslint.json` in your package root:**

```json
{
    "extends": "./tsconfig.json",
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

**Then reference it in `.eslintrc.js`:**

```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    parserOptions: {
        project: './tsconfig.eslint.json', // Use linting-specific config
    },
    root: true,
};
```

This pattern ensures test files are linted without including them in build outputs.

### Performance Considerations

**Type-aware linting is slower** than regular linting because it needs to load TypeScript's type checker. This is a worthwhile tradeoff for the additional type safety checks it provides.

**Performance impact:**
- Type-aware rules only run during `pnpm lint` (development)
- Does NOT affect build performance or runtime
- Typically adds 1-3 seconds to lint time per package

**To disable type-aware rules** (if performance is critical):
```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    // Don't add parserOptions.project
    rules: {
        // Disable specific type-aware rules
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
    },
    root: true,
};
```

## What's Included

### Plugins

- **@typescript-eslint** - TypeScript support
- **react** - React best practices
- **react-hooks** - React Hooks rules
- **jsx-a11y** - Accessibility rules
- **jest** - Jest testing rules
- **jest-dom** - jest-dom best practices
- **testing-library** - React Testing Library rules
- **prettier** - Prettier integration
- **import** - Import/export validation

### Key Rules

#### TypeScript
- Unused variables warning (except prefixed with `_`)
- `any` type warning (not error for flexibility)
- No module boundary types required

#### React
- No React import needed (new JSX transform)
- No prop-types (using TypeScript)
- Display name warning for debugging

#### Testing
- No jest.clearAllMocks() (automated in jest.config)
- Enforce Testing Library best practices
- No direct node access in tests

#### Imports
- Alphabetical ordering
- No duplicate imports
- Grouped by type (builtin, external, internal)

#### Code Quality
- Prefer const over let
- No var declarations
- Console warning (except warn/error)

## Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "lint-ts": "eslint src --cache",
    "lint-ts-fix": "eslint src --cache --fix"
  }
}
```

## Customization

Override rules in your `.eslintrc.js`:

```javascript
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    rules: {
        // Make specific rules stricter or more lenient
        '@typescript-eslint/no-explicit-any': 'error',
        'no-console': 'off',
    },
    root: true,
};
```

## Integration with Prettier

This config includes `eslint-config-prettier` to disable conflicting rules. Make sure to use `@dbarrett24/prettier-config` for consistent formatting.

## VS Code Integration

Install the ESLint extension and add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

## License

MIT


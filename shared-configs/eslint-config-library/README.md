# @yourname/eslint-config-library

Shared ESLint configuration for React component libraries with stricter rules for published packages.

## Installation

```bash
pnpm add -D @yourname/eslint-config-library eslint prettier typescript
```

## Usage

Create `.eslintrc.js` in your library root:

```javascript
module.exports = {
    extends: ['@yourname/eslint-config-library'],
    root: true,
};
```

## What's Different from @yourname/eslint-config

This library config extends the base config with stricter rules appropriate for published packages:

### Stricter Rules

- **No `any` types** - Error (not warning) for better type safety
- **No default exports** - Enforce named exports for better tree-shaking
- **No console statements** - Keep library code clean

### Exceptions

Test files (`*.spec.ts`, `*.test.tsx`) and Storybook files (`*.stories.tsx`) are exempt from:
- No default exports rule
- No `any` type rule
- No console rule

## Use Cases

Perfect for:
- Component libraries published to npm
- Shared utility libraries
- Design system packages
- Reusable UI components

## Example Structure

```javascript
// ✅ Good - Named exports
export const Button = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

// ❌ Bad - Default export
export default function Button() {
    return <button>Click me</button>;
}

// ❌ Bad - Console statement
export const utils = {
    log: (msg: string) => {
        console.log(msg); // Error in library code
    }
};

// ❌ Bad - Using any
export const process = (data: any) => { // Error
    return data;
};
```

## Scripts

Add to your library's `package.json`:

```json
{
  "scripts": {
    "lint-ts": "eslint src --cache",
    "lint-ts-fix": "eslint src --cache --fix"
  }
}
```

## Customization

Override rules as needed:

```javascript
module.exports = {
    extends: ['@yourname/eslint-config-library'],
    rules: {
        // Allow console.warn in specific cases
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
    root: true,
};
```

## License

MIT


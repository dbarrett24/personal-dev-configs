# @yourname/prettier-config

Shared Prettier configuration with Tailwind CSS support.

## Installation

```bash
pnpm add -D @yourname/prettier-config prettier
```

## Usage

In your `package.json`:

```json
{
  "prettier": "@yourname/prettier-config"
}
```

Or create a `.prettierrc.mjs`:

```javascript
import config from '@yourname/prettier-config';

export default config;
```

Or extend the config:

```javascript
import config from '@yourname/prettier-config';

export default {
    ...config,
    // Override specific options
    tabWidth: 2,
};
```

## Configuration

This config includes:

- **Single quotes** for strings
- **4-space tabs** for indentation
- **Semicolons** enabled
- **120 character** line width
- **Trailing commas** (ES5 style)
- **Single attribute per line** in JSX
- **Tailwind CSS plugin** for class sorting
- **`cn()` function** recognized for Tailwind classes

## Features

### Tailwind CSS Class Sorting

Automatically sorts Tailwind CSS classes in your JSX/TSX files:

```tsx
// Before
<div className="p-4 text-center bg-blue-500 mt-2">

// After (automatically sorted)
<div className="mt-2 bg-blue-500 p-4 text-center">
```

### cn() Function Support

The config recognizes the `cn()` utility function for conditional classes:

```tsx
<div className={cn('base-class', condition && 'conditional-class')}>
```

## Editor Integration

### VS Code

Install the Prettier extension and add to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint-prettier": "prettier --cache --check \"src/**/*.{json,js,jsx,ts,tsx}\"",
    "lint-prettier-fix": "prettier --cache --write \"src/**/*.{json,js,jsx,ts,tsx}\""
  }
}
```

## License

MIT


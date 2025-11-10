# @yourname/typescript-config

Shared TypeScript configurations for various project types.

## Installation

```bash
pnpm add -D @yourname/typescript-config typescript
```

## Usage

### For Next.js Apps

Create a `tsconfig.json` in your project root:

```json
{
  "extends": "@yourname/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### For React + Vite Apps

```json
{
  "extends": "@yourname/typescript-config/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### For Component Libraries

```json
{
  "extends": "@yourname/typescript-config/library.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### For Node.js/Backend Projects

```json
{
  "extends": "@yourname/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

## Available Configurations

### base.json

Base configuration for all TypeScript projects with:
- ES2020 target
- Strict mode enabled
- Common compiler options

### react.json

Extends `base.json` with:
- React JSX support (react-jsx transform)
- DOM libraries
- ESNext modules
- Bundler module resolution

### nextjs.json

Extends `react.json` with:
- JSX preserve (for Next.js)
- Path aliases (@/*)
- Next.js plugin
- Incremental compilation

### library.json

Extends `react.json` with:
- Declaration files generation
- Source maps
- Proper output directories
- Test files excluded

## Features

- **Strict Mode**: All configs have strict TypeScript checking enabled
- **Modern Target**: ES2020 for modern JavaScript features
- **Type Safety**: Strict null checks and no implicit any
- **Import Resolution**: ESM interop and synthetic default imports
- **Consistent Casing**: Force consistent file name casing

## Customization

You can override any option in your project's `tsconfig.json`:

```json
{
  "extends": "@yourname/typescript-config/nextjs.json",
  "compilerOptions": {
    "target": "ES2022",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

## License

MIT


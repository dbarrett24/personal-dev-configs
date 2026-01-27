# tsup-config Usage Guide

## 🎯 When to Use

Use `@dbarrett24/tsup-config` when building **component libraries** in your monorepo. This is for:

- ✅ Brand libraries (`basketball-training-ui`, `professional-brand-ui`)
- ✅ Shared component packages
- ✅ Any package that:
  - Contains React components
  - Uses workspace dependencies
  - Needs to be published to npm

**Don't use for:**
- ❌ Next.js applications (use Next.js's built-in bundler)
- ❌ React + Vite applications (use Vite's bundler)
- ❌ Configuration packages (use simple tsup directly)

---

## 📚 Real-World Examples

### Example 1: Basic Button Component

**File structure:**

```
basketball-training-ui/
├── src/
│   ├── components/
│   │   └── Button.tsx        # React component
│   └── index.ts               # Exports everything
└── tsup.config.ts
```

**tsup.config.ts:**

```typescript
import { makeConfig } from '@dbarrett24/tsup-config';

export default makeConfig(
    // Main entry (server-safe)
    { index: 'src/index.ts' },
    // Client components
    { button: 'src/components/Button.tsx' }
);
```

**What happens:**

1. `dist/index.js` - Re-exports without 'use client'
2. `dist/button.js` - Has `'use client';` at the top
3. `dist/package.json` - Resolves `@dbarrett24/theme-system` from `workspace:*` to `^1.0.0`

---

### Example 2: Multiple Components

**File structure:**

```
basketball-training-ui/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Card.tsx
│   ├── utils/
│   │   ├── helpers.ts        # Server-safe utilities
│   │   └── formatters.ts
│   └── index.ts
└── tsup.config.ts
```

**tsup.config.ts:**

```typescript
import { makeConfig } from '@dbarrett24/tsup-config';

export default makeConfig(
    // Server-safe entries
    {
        index: 'src/index.ts',
        utils: 'src/utils/index.ts',
    },
    // All client components
    {
        button: 'src/components/Button.tsx',
        input: 'src/components/Input.tsx',
        modal: 'src/components/Modal.tsx',
        card: 'src/components/Card.tsx',
    },
    // External dependencies (don't bundle these)
    {
        external: ['react', 'react-dom', '@dbarrett24/theme-system'],
    }
);
```

**Usage in consuming app:**

```tsx
// Import specific components (tree-shakeable)
import { Button } from '@dbarrett24/basketball-training-ui/button';
import { Input } from '@dbarrett24/basketball-training-ui/input';

// Or import everything
import { Button, Input } from '@dbarrett24/basketball-training-ui';
```

---

### Example 3: Mixed Server/Client Components

Some components can be used server-side (no hooks, no browser APIs):

**File structure:**

```
professional-brand-ui/
├── src/
│   ├── components/
│   │   ├── Button.tsx        # Client (uses useState)
│   │   ├── Badge.tsx         # Server-safe (just styles)
│   │   └── Icon.tsx          # Server-safe (just SVG)
│   └── index.ts
└── tsup.config.ts
```

**tsup.config.ts:**

```typescript
import { makeConfig } from '@dbarrett24/tsup-config';

export default makeConfig(
    // Server-safe components (NO 'use client')
    {
        index: 'src/index.ts',
        badge: 'src/components/Badge.tsx',
        icon: 'src/components/Icon.tsx',
    },
    // Client components (GETS 'use client')
    {
        button: 'src/components/Button.tsx',
    }
);
```

**Why this matters:**

```tsx
// app/page.tsx (Server Component in Next.js)
import { Badge } from '@dbarrett24/professional-brand-ui/badge'; // ✅ Works - no 'use client'
import { Icon } from '@dbarrett24/professional-brand-ui/icon'; // ✅ Works - no 'use client'
import { Button } from '@dbarrett24/professional-brand-ui/button'; // ⚠️ Makes this client-side

export default function Page() {
    return (
        <div>
            <Badge>New</Badge> {/* Server-rendered */}
            <Icon name="star" /> {/* Server-rendered */}
            <Button>Click me</Button> {/* Client-rendered */}
        </div>
    );
}
```

---

## 🧪 Testing Your Build

After running `pnpm build`, verify:

### 1. Check dist/ structure

```bash
ls -la brand-libraries/basketball-training-ui/dist/

# Expected output:
# package.json       - ✅ Auto-generated
# index.js           - ✅ Main entry
# index.d.ts         - ✅ Type definitions
# button.js          - ✅ Button component
# button.d.ts        - ✅ Button types
```

### 2. Verify 'use client' directive

```bash
head -n 3 brand-libraries/basketball-training-ui/dist/button.js

# Expected output:
# 'use client';
# 
# export const Button = ...
```

### 3. Check workspace resolution

```bash
cat brand-libraries/basketball-training-ui/dist/package.json | grep theme-system

# Expected in source package.json:
# "@dbarrett24/theme-system": "workspace:*"

# Expected in dist/package.json:
# "@dbarrett24/theme-system": "^1.0.0"
```

---

## 🔧 Common Patterns

### Pattern 1: Exporting Everything from Index

**src/index.ts:**

```typescript
// Re-export all components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Modal } from './components/Modal';

// Re-export utilities
export * from './utils/helpers';
export * from './utils/formatters';

// Re-export types
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
```

**tsup.config.ts:**

```typescript
export default makeConfig(
    { index: 'src/index.ts' },
    {
        button: 'src/components/Button.tsx',
        input: 'src/components/Input.tsx',
        modal: 'src/components/Modal.tsx',
    }
);
```

**Consumer usage:**

```tsx
// Option 1: Main bundle
import { Button, Input } from '@dbarrett24/basketball-training-ui';

// Option 2: Direct import (better tree-shaking)
import { Button } from '@dbarrett24/basketball-training-ui/button';
```

### Pattern 2: Barrel Exports per Category

**src/components/index.ts:**

```typescript
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';
```

**tsup.config.ts:**

```typescript
export default makeConfig(
    {
        index: 'src/index.ts',
        components: 'src/components/index.ts',
    },
    {
        button: 'src/components/Button.tsx',
        input: 'src/components/Input.tsx',
        modal: 'src/components/Modal.tsx',
    }
);
```

**Consumer usage:**

```tsx
// All components at once
import { Button, Input, Modal } from '@dbarrett24/basketball-training-ui/components';

// Or specific component
import { Button } from '@dbarrett24/basketball-training-ui/button';
```

---

## 🚨 Common Mistakes

### Mistake 1: Listing Client Components in Regular Entries

```typescript
// ❌ WRONG - Button won't get 'use client'
export default makeConfig({
    index: 'src/index.ts',
    button: 'src/components/Button.tsx', // Missing 'use client'!
});

// ✅ CORRECT
export default makeConfig(
    { index: 'src/index.ts' },
    { button: 'src/components/Button.tsx' } // Gets 'use client'
);
```

### Mistake 2: Not Marking Dependencies as External

```typescript
// ❌ WRONG - Bundles React (huge file size!)
export default makeConfig(
    { index: 'src/index.ts' },
    { button: 'src/components/Button.tsx' }
);

// ✅ CORRECT - React is external
export default makeConfig(
    { index: 'src/index.ts' },
    { button: 'src/components/Button.tsx' },
    {
        external: ['react', 'react-dom'],
    }
);
```

### Mistake 3: Forgetting to Add tsup-config Dependency

```json
// ❌ package.json missing devDependency
{
    "devDependencies": {
        "tsup": "^8.0.1"
        // Missing: "@dbarrett24/tsup-config"
    }
}

// ✅ CORRECT
{
    "devDependencies": {
        "@dbarrett24/tsup-config": "workspace:*",
        "tsup": "^8.0.1"
    }
}
```

---

## 🎓 Advanced Usage

### Using onSuccess Hook

Run custom logic after build:

```typescript
import { makeConfig } from '@dbarrett24/tsup-config';
import fs from 'fs';

export default makeConfig(
    { index: 'src/index.ts' },
    { button: 'src/components/Button.tsx' },
    {
        onSuccess: async () => {
            // Copy CSS to dist
            fs.copyFileSync('src/theme/styles.css', 'dist/styles.css');
            console.log('✅ Copied styles to dist/');
        },
    }
);
```

### Custom Format Options

```typescript
export default makeConfig(
    { index: 'src/index.ts' },
    { button: 'src/components/Button.tsx' },
    {
        format: ['esm'], // ESM only (no CommonJS)
        minify: true, // Minify output
        target: 'es2020', // Target specific JS version
    }
);
```

### Multiple Entry Points with Different Configs

```typescript
export default makeConfig(
    {
        // Server entries
        index: 'src/index.ts',
        'server-utils': 'src/utils/server.ts',
    },
    {
        // Client entries
        button: 'src/components/Button.tsx',
        modal: 'src/components/Modal.tsx',
    },
    {
        external: ['react', 'react-dom', '@dbarrett24/theme-system'],
        splitting: true, // Enable code splitting
        treeshake: true, // Remove unused code
    }
);
```

---

## 📊 Build Output Explanation

After running `pnpm build`, here's what you get:

```
dist/
├── package.json          # Auto-generated with resolved deps
├── index.js              # CommonJS main entry
├── index.mjs             # ESM main entry
├── index.d.ts            # TypeScript definitions
├── button.js             # Button component (has 'use client')
├── button.mjs            # ESM version
├── button.d.ts           # Button types
├── input.js
├── input.mjs
├── input.d.ts
└── ...
```

**File purposes:**

- **`.js`** - CommonJS format (for older Node.js)
- **`.mjs`** - ESM format (modern, tree-shakeable)
- **`.d.ts`** - TypeScript type definitions
- **`package.json`** - Cleaned manifest with resolved versions

---

## 🔗 Integration with Changesets

When publishing with changesets:

```bash
# 1. Make changes
# ...

# 2. Create changeset
pnpm changeset
# Choose packages and version bump

# 3. Version packages (updates package.json versions)
pnpm changeset version

# 4. Build all packages
pnpm build
# tsup-config resolves workspace:* → actual versions

# 5. Publish to npm
pnpm changeset publish
# Publishes with correct dependency versions!
```

**Why this matters:**

Without tsup-config, your published package would have:

```json
"dependencies": {
  "@dbarrett24/theme-system": "workspace:*"  // ❌ Invalid on npm!
}
```

With tsup-config, it resolves to:

```json
"dependencies": {
  "@dbarrett24/theme-system": "^1.0.0"  // ✅ Correct!
}
```

---

## 📖 See Also

- [README.md](./README.md) - Full API documentation
- [../../COMPARISON_SUMMARY.md](../../COMPARISON_SUMMARY.md) - Comparison with work configs
- [../../brand-libraries/basketball-training-ui/](../../brand-libraries/basketball-training-ui/) - Example usage


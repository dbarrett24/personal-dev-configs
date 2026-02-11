# @dbarrett24/theme-system

Centralized Tailwind CSS theme system with semantic design tokens, multi-brand support, and `cn()` utility function.

## Installation

```bash
pnpm add @dbarrett24/theme-system tailwindcss clsx tailwind-merge
```

## Features

- **Semantic color tokens** - `bg-primary-500`, `text-inverse`, `border-primary`, etc.
- **Semantic spacing** - `xs`, `sm`, `md`, `lg`, `xl` (Hammer UI-aligned scale)
- **cn() utility** - Merge Tailwind classes with proper conflict resolution
- **Multi-brand support** - TypeScript brand definitions + build-time CSS generation
- **CSS variable-based** - Easy theming with runtime flexibility

## Usage

### 1. Setup Tailwind Config

Use the base config as a preset in your `tailwind.config.js`:

```javascript
const baseConfig = require('@dbarrett24/theme-system/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [baseConfig],
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    // No need to duplicate theme config - baseConfig includes the full theme with plugin
};
```

### 2. Import Brand CSS

Import the pre-generated CSS for your brand:

```css
/* app/globals.css or src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import brand-specific theme CSS (generated at build time) */
@import '@dbarrett24/theme-system/css/BasketballTraining.css';

/* OR for Professional Brand: */
/* @import '@dbarrett24/theme-system/css/ProfessionalBrand.css'; */
```

The imported CSS contains all the CSS variables your brand needs (colors, spacing, typography, etc.). These variables use the `--color-*` naming convention and RGB triplet values for proper opacity support:

```css
/* Example of what's in the generated CSS: */
:root {
    --color-primary-500: 255 107 53; /* RGB triplet, not hex */
    --color-background-primary: 255 255 255;
    --color-text-primary: 26 26 26;
    --color-text-inverse: 255 255 255;
    /* ... many more variables */
}
```

### 3. Use Semantic Tokens

```tsx
import { cn } from '@dbarrett24/theme-system';

export const Card = ({ variant = 'default', children }) => {
    return (
        <div
            className={cn(
                'bg-background-primary border-border-primary',
                'p-md rounded-md',
                variant === 'highlighted' && 'border-primary-500'
            )}
        >
            {children}
        </div>
    );
};

export const Button = ({ variant, disabled, children }) => {
    return (
        <button
            className={cn(
                'px-lg py-sm rounded-button',
                'text-text-inverse bg-primary-500',
                'hover:bg-primary-700',
                disabled && 'bg-surface-300 cursor-not-allowed'
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
```

### 4. Using the cn() Utility

The `cn()` function combines `clsx` and `tailwind-merge` for powerful class merging:

```tsx
import { cn } from '@dbarrett24/theme-system';

// Basic usage
cn('px-2 py-1', 'rounded-md');
// => 'px-2 py-1 rounded-md'

// Conditional classes
cn('button', isActive && 'button-active', isDisabled && 'opacity-50');

// Object syntax
cn('button', {
    'bg-primary-500': variant === 'primary',
    'bg-secondary-500': variant === 'secondary',
});

// Tailwind conflict resolution (last wins)
cn('p-4', 'p-2');
// => 'p-2' (not 'p-4 p-2')

// Array support
cn(['flex', 'items-center'], 'gap-md');
```

## Multi-Brand Architecture

Brands are defined as **TypeScript files** that export theme values. CSS is **generated at build time** via tsup onSuccess hook.

### Adding a New Brand

1. Create a TypeScript definition in `src/themes/`:

```typescript
// src/themes/MyBrand.ts
import type { ThemeDefinition } from './types';

export const MyBrand: ThemeDefinition = {
    name: 'MyBrand',
    colors: {
        primary: {
            50: { r: 255, g: 245, b: 240 },
            500: { r: 255, g: 107, b: 53 },
            900: { r: 153, g: 64, b: 32 },
            // ... full scale
        },
        // ... other color families
    },
    // Typography, spacing overrides (if any), etc.
};
```

2. Register in `src/themes/index.ts`:

```typescript
export { MyBrand } from './MyBrand';
```

3. Register in `src/themes/writeToCSSFile.ts`:

```typescript
import { MyBrand } from './MyBrand';
// ... other imports

writeToCSSFile(MyBrand);
writeToCSSFile(BasketballTraining);
// ... etc.
```

4. Build the package:

```bash
pnpm build:theme
```

This generates `dist/css/MyBrand.css` that apps can import.

### How Build-Time Generation Works

```javascript
// tsup.config.ts (simplified)
export default defineConfig({
    // ... build config
    async onSuccess() {
        await import('./src/themes/writeToCSSFile');
        return undefined;
    },
});
```

**Benefits**:
- ✅ Single source of truth (TypeScript)
- ✅ Type-safe theme definitions
- ✅ No manual CSS maintenance
- ✅ CSS bundled with package distribution

## Semantic Token Reference

### Colors

**Primary/Secondary/Tertiary Scales** (500 is the main brand color):
- `bg-primary-50` through `bg-primary-900` - Lightest to darkest
- `bg-secondary-50` through `bg-secondary-900`
- `bg-tertiary-50` through `bg-tertiary-900`

**Status Colors**:
- `bg-success-{50-900}`, `text-success`, `border-success`
- `bg-critical-{50-900}`, `text-critical`, `border-critical`
- `bg-warning-{50-900}`, `text-warning`, `border-warning`
- `bg-info-{50-900}`, `text-info`, `border-info`

**Semantic Background**:
- `bg-background-primary` - Main background
- `bg-background-secondary` - Secondary surfaces
- `bg-background-tertiary` - Tertiary surfaces
- `bg-background-inverse` - Inverse background (e.g., dark on light theme)
- `bg-background-hover` - Hover state overlay (5% opacity)
- `bg-background-pressed` - Pressed state overlay (20% opacity)

**Semantic Text**:
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-inverse` - Inverse text (e.g., white on dark bg)
- `text-text-disabled` - Disabled text
- `text-text-inactive` - Inactive text

**Semantic Border**:
- `border-border-primary` - Primary borders
- `border-border-secondary` - Secondary borders
- `border-border-hover` - Hover state borders
- `border-border-selected` - Selected state borders

**Link Colors**:
- `text-link-primary` - Primary link color
- `text-link-hover` - Link hover state
- `text-link-pressed` - Link active/pressed state
- `text-link-inverse` - Links on dark backgrounds

**Icon Colors**:
- `text-icon-primary`, `text-icon-secondary` - Icon colors
- `text-icon-inverse` - Icons on dark backgrounds
- `text-icon-success/warning/critical/info` - Status icons

**Surface Colors** (neutral grayscale):
- `bg-surface-{50-900}` - Neutral surface colors

**Focus Outlines**:
- `outline-focus-primary` - Primary focus outline (typically blue)
- `outline-focus-inverse` - Inverse focus outline

### Spacing

Fixed pixel values (Hammer UI-aligned):

- `p-3xs`, `m-3xs`, `gap-3xs` - 2px
- `p-2xs`, `m-2xs`, `gap-2xs` - 4px
- `p-xs`, `m-xs`, `gap-xs` - 8px
- `p-sm`, `m-sm`, `gap-sm` - 16px
- `p-md`, `m-md`, `gap-md` - 24px
- `p-lg`, `m-lg`, `gap-lg` - 32px
- `p-xl`, `m-xl`, `gap-xl` - 48px
- `p-2xl`, `m-2xl`, `gap-2xl` - 64px
- `p-3xl`, `m-3xl`, `gap-3xl` - 128px

### Border Radius

Fixed and semantic values:

**Fixed Sizes**:
- `rounded-xs` - 2px
- `rounded-sm` - 4px
- `rounded-md` - 8px
- `rounded-lg` - 16px
- `rounded-xl` - 32px
- `rounded-full` - 9999px (fully rounded)

**Semantic Tokens** (CSS variable-based, customizable per brand):
- `rounded-button` - Button border radius
- `rounded-input` - Input field border radius
- `rounded-search-input` - Search input border radius
- `rounded-checkbox` - Checkbox border radius
- `rounded-container` - Container/card border radius

### Typography

**Font Families**:
- `font-primary` - Primary font (typically sans-serif)
- `font-mono` - Monospace font

**Font Sizes** (Component-specific):
- `text-[fontSizeButton100]` - Small button text
- `text-[fontSizeButton200]` - Regular button text
- _(More component-specific sizes available in cssVars)_

## Why Semantic Tokens?

1. **Consistency** - Same naming across all brands
2. **Flexibility** - Easy to theme per brand via CSS variables
3. **Maintainability** - Change brand theme in one place, components update automatically
4. **Dark mode ready** - CSS variables can be swapped at runtime
5. **Type safety** - TypeScript brand definitions prevent errors

## Architecture Benefits

**Centralized Theme System**:
- All brands share the same Tailwind plugin (consistent utilities)
- Brand differences expressed via CSS variable values
- No per-brand Tailwind config needed

**Build-Time Generation**:
- TypeScript definitions are the source of truth
- CSS generated automatically during package build
- Apps just import pre-generated CSS files

**Portability**:
- Components use semantic tokens (`bg-primary-500`)
- Same component works across all brands
- Brand switching is just a CSS import change

## License

MIT

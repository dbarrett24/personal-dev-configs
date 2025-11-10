# @yourname/theme-system

Base Tailwind CSS theme system with semantic tokens and `cn()` utility function.

## Installation

```bash
pnpm add @yourname/theme-system tailwindcss clsx tailwind-merge
```

## Features

- **Semantic color tokens** - `background-primary`, `text-primary`, `border-primary`, etc.
- **Semantic spacing** - `xs`, `sm`, `md`, `lg`, `xl`, etc.
- **cn() utility** - Merge Tailwind classes with proper conflict resolution
- **Multi-brand support** - Extend base theme for different brands
- **CSS variable-based** - Easy theming and dark mode support

## Usage

### 1. Setup Tailwind Config

Extend the base theme in your `tailwind.config.js`:

```javascript
const baseConfig = require('@yourname/theme-system/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme.extend,
            // Add brand-specific overrides
            colors: {
                ...baseConfig.theme.extend.colors,
                'brand-primary': '#FF5733',
            },
        },
    },
};
```

### 2. Define CSS Variables

Create a CSS file with your theme variables:

```css
/* app/globals.css */
:root {
    /* Background */
    --background-primary: #ffffff;
    --background-secondary: #f5f5f5;
    --background-tertiary: #e0e0e0;
    --background-inverse: #1a1a1a;
    --background-overlay: rgba(0, 0, 0, 0.5);

    /* Text */
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --text-tertiary: #999999;
    --text-inverse: #ffffff;
    --text-disabled: #cccccc;
    --text-link: #0066cc;
    --text-success: #22c55e;
    --text-warning: #f59e0b;
    --text-critical: #ef4444;
    --text-info: #3b82f6;

    /* Border */
    --border-primary: #d1d5db;
    --border-secondary: #e5e7eb;
    --border-focus: #3b82f6;
    --border-success: #22c55e;
    --border-warning: #f59e0b;
    --border-critical: #ef4444;
    --border-info: #3b82f6;

    /* Interactive */
    --interactive-primary: #3b82f6;
    --interactive-primary-hover: #2563eb;
    --interactive-primary-active: #1d4ed8;
    --interactive-secondary: #6b7280;
    --interactive-secondary-hover: #4b5563;
    --interactive-disabled: #9ca3af;

    /* Status */
    --status-success: #22c55e;
    --status-success-background: #f0fdf4;
    --status-warning: #f59e0b;
    --status-warning-background: #fffbeb;
    --status-critical: #ef4444;
    --status-critical-background: #fef2f2;
    --status-info: #3b82f6;
    --status-info-background: #eff6ff;
}

/* Dark mode example */
.dark {
    --background-primary: #1a1a1a;
    --background-secondary: #2a2a2a;
    --background-tertiary: #3a3a3a;
    --background-inverse: #ffffff;

    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-tertiary: #999999;
    --text-inverse: #1a1a1a;
}
```

### 3. Use Semantic Tokens

```tsx
import { cn } from '@yourname/theme-system';

export const Card = ({ variant = 'default', children }) => {
    return (
        <div
            className={cn(
                'bg-background-primary border-border-primary',
                'p-md rounded-md',
                variant === 'highlighted' && 'border-interactive-primary'
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
                'px-lg py-sm rounded-md',
                'text-text-inverse bg-interactive-primary',
                'hover:bg-interactive-primary-hover',
                disabled && 'bg-interactive-disabled cursor-not-allowed'
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
import { cn } from '@yourname/theme-system';

// Basic usage
cn('px-2 py-1', 'rounded-md');
// => 'px-2 py-1 rounded-md'

// Conditional classes
cn('button', isActive && 'button-active', isDisabled && 'opacity-50');

// Object syntax
cn('button', {
    'bg-interactive-primary': variant === 'primary',
    'bg-interactive-secondary': variant === 'secondary',
});

// Tailwind conflict resolution (last wins)
cn('p-4', 'p-2');
// => 'p-2' (not 'p-4 p-2')

// Array support
cn(['flex', 'items-center'], 'gap-md');
```

## Multi-Brand Architecture

Create brand-specific themes by extending the base:

```javascript
// tailwind.config.basketball.js
const baseConfig = require('@yourname/theme-system/tailwind.config');

module.exports = {
    ...baseConfig,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                // Basketball brand colors
                'brand-orange': '#FF6B35',
                'brand-black': '#1A1A1A',
            },
        },
    },
};
```

Then define brand CSS variables:

```css
/* basketball-theme.css */
:root {
    --interactive-primary: #FF6B35;
    --interactive-primary-hover: #E55A25;
    --text-link: #FF6B35;
    /* ... other brand-specific values */
}
```

## Semantic Token Reference

### Colors

**Background:**
- `bg-background-primary` - Main background
- `bg-background-secondary` - Secondary surfaces
- `bg-background-tertiary` - Tertiary surfaces
- `bg-background-inverse` - Inverse background
- `bg-background-overlay` - Overlay/modal backgrounds

**Text:**
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-tertiary` - Tertiary text
- `text-text-inverse` - Inverse text
- `text-text-disabled` - Disabled text
- `text-text-link` - Link text
- `text-text-success/warning/critical/info` - Status text

**Border:**
- `border-border-primary` - Primary borders
- `border-border-secondary` - Secondary borders
- `border-border-focus` - Focus states
- `border-border-success/warning/critical/info` - Status borders

**Interactive:**
- `bg-interactive-primary` - Primary buttons/actions
- `bg-interactive-primary-hover` - Hover state
- `bg-interactive-primary-active` - Active state
- `bg-interactive-secondary` - Secondary actions
- `bg-interactive-disabled` - Disabled state

### Spacing

- `p-3xs`, `m-3xs` - 2px
- `p-2xs`, `m-2xs` - 4px
- `p-xs`, `m-xs` - 8px
- `p-sm`, `m-sm` - 12px
- `p-md`, `m-md` - 16px
- `p-lg`, `m-lg` - 24px
- `p-xl`, `m-xl` - 32px
- `p-2xl`, `m-2xl` - 40px
- `p-3xl`, `m-3xl` - 48px
- `p-4xl`, `m-4xl` - 64px

### Border Radius

- `rounded-sm` - 4px
- `rounded-md` - 8px
- `rounded-lg` - 12px
- `rounded-xl` - 16px
- `rounded-full` - Full circle

## Why Semantic Tokens?

1. **Consistency** - Same naming across all brands
2. **Flexibility** - Easy to theme per brand
3. **Maintainability** - Change tokens, not every component
4. **Dark mode** - Just change CSS variables
5. **Type safety** - Consistent naming in code

## License

MIT


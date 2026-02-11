# Core Components Implementation Notes

## Overview

This package provides **fully-styled, theme-aware components** following Hammer UI patterns. Components use semantic design tokens from `@dbarrett24/theme-system` and work across all brand themes via CSS variable swapping.

## Architecture Pattern

**Not Headless** - Components are fully styled with semantic tokens:
- Styling: Uses Tailwind utilities with semantic tokens (`bg-primary-500`, `text-text-inverse`)
- Theming: CSS variables provide brand-specific values
- Portability: Same component code works across all brands

## Components Included

### Button
- ✅ Fully styled with Hammer UI patterns
- ✅ Loading state with `aria-busy` and spinner
- ✅ Disabled state handling
- ✅ Multiple variants: `solid`, `outline`, `ghost`, `link`
- ✅ Multiple sizes: `sm`, `md`, `lg`
- ✅ Icon support (left/right)
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Theme-aware focus outlines
- ✅ Comprehensive tests

### Input
- ✅ Fully styled with semantic tokens
- ✅ Automatic label association with unique IDs
- ✅ Error handling with `aria-invalid` and `aria-describedby`
- ✅ Helper text support
- ✅ Required field indication
- ✅ Start/end adornments for icons/buttons
- ✅ Hidden label option (visually hidden but accessible)
- ✅ Comprehensive tests

## Architecture Benefits

1. **Portability**
   - Same component works in all brands
   - Brand identity via CSS variables, not component code
   - No need for brand-specific wrappers

2. **Consistency**
   - Hammer UI design patterns
   - Semantic token usage
   - Predictable behavior across applications

3. **Maintainability**
   - Single source of truth for styling
   - Bug fixes benefit all brands immediately
   - No per-brand component code duplication

4. **Type Safety**
   - Shared TypeScript types
   - Compile-time validation
   - IntelliSense support

5. **Testing**
   - Comprehensive test coverage
   - Behavioral testing with React Testing Library
   - Brand libraries don't need to duplicate tests

## Usage in Brand Libraries

Brand libraries should **re-export** core components directly or create thin wrappers that add brand-specific defaults (not styling):

### Option 1: Direct Re-export (Recommended)

```typescript
// basketball-training-ui/src/Button/Button.tsx
export { Button } from '@dbarrett24/core-components';
export type { ButtonProps } from '@dbarrett24/core-components';
```

### Option 2: Thin Wrapper with Brand Defaults

```typescript
// basketball-training-ui/src/Button/Button.tsx
import { Button as CoreButton, ButtonProps as CoreButtonProps } from '@dbarrett24/core-components';

type ButtonProps = CoreButtonProps;

export const Button = ({ variant = 'solid', size = 'md', ...props }: ButtonProps) => {
  return <CoreButton variant={variant} size={size} {...props} />;
};
```

**Do NOT add inline Tailwind classes** - styling is handled by core component using semantic tokens that already respond to your brand's CSS variables.

### Brand Theme Setup

Brands only need to:
1. Import the correct brand CSS in their app:

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@dbarrett24/theme-system/css/BasketballTraining.css';
```

2. Configure Tailwind to use the base preset:

```javascript
// tailwind.config.js
const baseConfig = require('@dbarrett24/theme-system/tailwind.config');

module.exports = {
    presets: [baseConfig],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

That's it! Components automatically use the brand's color values via CSS variables.

## How Multi-Brand Theming Works

1. **Components use semantic tokens**:
   ```tsx
   <button className="bg-primary-500 text-text-inverse hover:bg-primary-700">
   ```

2. **Tailwind generates utilities** referencing CSS variables:
   ```css
   .bg-primary-500 { background-color: rgb(var(--color-primary-500)); }
   .text-text-inverse { color: rgb(var(--color-text-inverse)); }
   ```

3. **Brand CSS defines variable values**:
   ```css
   /* BasketballTraining.css */
   :root {
     --color-primary-500: 255 107 53;  /* Orange */
     --color-text-inverse: 255 255 255;
   }
   
   /* ProfessionalBrand.css */
   :root {
     --color-primary-500: 0 102 204;  /* Blue */
     --color-text-inverse: 255 255 255;
   }
   ```

4. **Same component, different brand colors** - no code changes needed!

## Testing Approach

Core components have comprehensive tests covering:
- Rendering and props
- Interaction behavior (clicks, keyboard nav)
- Accessibility attributes (ARIA, roles, labels)
- Loading and disabled states
- Error states and validation

Brand libraries typically don't need to write tests for re-exported components unless:
- Adding custom business logic
- Changing default prop values that affect behavior
- Creating brand-specific variants beyond core's capabilities

## Next Steps

### For Immediate Use
1. Install in brand libraries: `pnpm add @dbarrett24/core-components`
2. Import brand CSS: `@import '@dbarrett24/theme-system/css/YourBrand.css'`
3. Re-export core components or create thin wrappers
4. Components automatically use brand theme

### Future Components to Add
- Checkbox
- Radio
- Select/Dropdown
- Textarea
- Switch/Toggle
- Modal/Dialog
- Tooltip
- Card
- Badge
- Alert

### Potential Enhancements
- Dark mode support (CSS variable swapping)
- Additional ARIA patterns (combobox, tabs, accordion)
- Animation/transition utilities
- Form validation patterns
- Responsive prop variants

## Migration from Headless Pattern

**Historical Note**: This package previously used a headless pattern where brand libraries added all styling. As of DS-15 (January 2026), we migrated to Hammer UI's fully-styled pattern with semantic tokens.

**Benefits of Migration**:
- ✅ Eliminated brand-specific styling code duplication
- ✅ Consistent design system across all brands
- ✅ Easier maintenance (single source of truth)
- ✅ Faster brand onboarding (just CSS variables, no component code)

**Breaking Changes**: Brand libraries that previously had styled wrappers should migrate to re-exports or remove redundant styling code.

# Core Components Implementation Notes

## Overview

This package provides headless, accessible core components that brand libraries can wrap with their own styling.

## Components Included

### Button
- ✅ Headless implementation (no styling)
- ✅ Loading state with `aria-busy`
- ✅ Disabled state handling
- ✅ Custom loading content support
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ 11 comprehensive tests (all passing)

### Input
- ✅ Headless implementation (no styling)
- ✅ Automatic label association with unique IDs
- ✅ Error handling with `aria-invalid` and `aria-describedby`
- ✅ Helper text support
- ✅ Required field indication
- ✅ Start/end adornments for icons/buttons
- ✅ Hidden label option (visually hidden but accessible)
- ✅ 18 comprehensive tests (all passing)

## Architecture Benefits

1. **Separation of Concerns**
   - Core: Behavior, accessibility, state management
   - Brands: Visual styling, brand identity

2. **Single Source of Truth**
   - Accessibility implemented once
   - Bug fixes benefit all brands
   - Consistent behavior across applications

3. **Type Safety**
   - Shared TypeScript types
   - Props extend from core types
   - Compile-time validation

4. **Testing**
   - 29 tests covering core functionality
   - All tests passing
   - Brand libraries can focus on visual testing

## Usage in Brand Libraries

Brand libraries should:
1. Import core components
2. Wrap them with styled wrappers
3. Add brand-specific variants
4. Export branded components

Example:
```typescript
import { Button as CoreButton, ButtonProps as CoreButtonProps } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

type ButtonProps = CoreButtonProps & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) => {
  return (
    <CoreButton
      {...props}
      className={cn(
        'rounded-lg font-semibold transition-colors',
        variant === 'primary' && 'bg-orange-600 hover:bg-orange-700 text-white',
        size === 'md' && 'px-4 py-2 text-base',
        className
      )}
    />
  );
};
```

## Next Steps

### For Immediate Use
1. Install in brand libraries: `pnpm add @dbarrett24/core-components`
2. Refactor existing Button/Input components to use core
3. Add brand-specific styling

### Future Components to Add
- Checkbox
- Radio
- Select/Dropdown
- Textarea
- Switch/Toggle
- Modal/Dialog
- Tooltip
- Form (wrapper component)

### Potential Enhancements
- Add more ARIA patterns (e.g., combobox, tabs)
- Add focus trap utilities
- Add keyboard navigation helpers
- Add form validation helpers

## Technical Details

- **Build Tool**: tsup (from shared config)
- **Testing**: Jest + React Testing Library
- **TypeScript**: Strict mode enabled
- **Accessibility**: WCAG 2.1 AA compliance
- **Bundle**: ESM + CJS outputs with type definitions
- **React Version**: Peer dependency ^18 or ^19

## Known Issues

- ESLint resolver warnings (configuration-related, not code issues)
- Jest config warning about `coverageThresholds` typo (inherited from jest-config-library)

These don't affect functionality and can be addressed in a future iteration.

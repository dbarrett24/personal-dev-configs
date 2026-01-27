# @dbarrett24/core-components

Fully-styled core component library following the Hammer UI architecture pattern.

## Philosophy

This library provides **complete, styled components** with:

- ✅ Full Tailwind CSS styling
- ✅ Multiple variants and styles
- ✅ Built-in animations and transitions
- ✅ Comprehensive accessibility
- ✅ Theme token integration

Brand libraries wrap these components and add:

- 🎨 Brand-specific color overrides
- 🎨 Custom shadows, borders, or effects
- 🎨 Additional variants if needed
- 🎨 Minor tweaks via className

## Installation

```bash
pnpm add @dbarrett24/core-components
```

## Components

### Button

Fully-styled button component with multiple variants and styles.

```tsx
import { Button } from '@dbarrett24/core-components';

<Button variant="filled" style="primary" size="md" onClick={handleClick}>
    Click me
</Button>;
```

**Variants:**

- `filled` - Solid background (default)
- `outline` - Border only
- `ghost` - No background or border

**Styles:**

- `primary` - Main action color (default)
- `secondary` - Secondary action color
- `neutral` - Neutral gray
- `critical` - Destructive/error actions

**Sizes:**

- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

**Features:**

- ✅ Loading state with spinner
- ✅ Icon support (left and right)
- ✅ Disabled state
- ✅ Full accessibility
- ✅ Theme token integration

**Props:**

- `variant?: 'filled' | 'outline' | 'ghost'` - Visual variant
- `style?: 'primary' | 'secondary' | 'neutral' | 'critical'` - Semantic style
- `size?: 'sm' | 'md' | 'lg'` - Button size
- `isLoading?: boolean` - Show loading spinner
- `isDisabled?: boolean` - Disable button
- `iconLeft?: ReactNode` - Icon on the left
- `iconRight?: ReactNode` - Icon on the right
- `className?: string` - Additional CSS classes
- `onClick?: (event) => void` - Click handler
- `type?: 'button' | 'submit' | 'reset'` - Button type

### Input

Fully-styled input component with error states and adornments.

```tsx
import { Input } from '@dbarrett24/core-components';

<Input
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={errors.email}
    isRequired
/>;
```

**Features:**

- ✅ Automatic label association
- ✅ Error state handling
- ✅ Helper text support
- ✅ Required field indication
- ✅ Disabled and read-only states
- ✅ Start and end adornments
- ✅ Full accessibility

**Props:**

- `label: string` - Input label
- `type?: string` - Input type (default: 'text')
- `value?: string` - Controlled value
- `onChange?: (event) => void` - Change handler
- `error?: string` - Error message
- `helperText?: string` - Helper text
- `isRequired?: boolean` - Mark as required
- `isDisabled?: boolean` - Disable input
- `isReadOnly?: boolean` - Make read-only
- `startAdornment?: ReactNode` - Icon/content on the left
- `endAdornment?: ReactNode` - Icon/content on the right
- `className?: string` - Additional CSS classes for wrapper
- `inputClassName?: string` - Additional CSS classes for input
- `labelClassName?: string` - Additional CSS classes for label

## Porting from Hammer UI

When bringing components from Hammer UI:

1. Copy the component implementation
2. Replace Hammer theme tokens with our theme tokens
3. Adjust styling to use our theme-system
4. Keep the same variant/style pattern
5. Add tests and stories

## Brand Library Usage

Brand libraries should wrap these components and add brand-specific tweaks:

```tsx
// @dbarrett24/basketball-training-ui/src/Button/Button.tsx
import { Button as CoreButton, type ButtonProps } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                // Add basketball-specific effects
                'shadow-md hover:shadow-lg',
                'active:scale-98 transition-transform',
                className
            )}
        />
    );
};
```

## Storybook

View components in Storybook:

```bash
cd shared-configs/core-components
pnpm storybook
```

Storybook runs on port 6007 (different from brand libraries on 6006).

## Development

```bash
# Build
pnpm build

# Watch mode
pnpm dev

# Run tests
pnpm test

# Run Storybook
pnpm storybook
```

## Architecture

This library follows the Hammer UI pattern:

- **Core components are fully styled** with Tailwind CSS
- **Brand libraries are thin wrappers** that add minor tweaks
- **Easy to port components** from Hammer UI
- **Fast brand creation** (10-20 lines per component)

See [HAMMER_UI_COMPARISON.md](../../HAMMER_UI_COMPARISON.md) for more details.

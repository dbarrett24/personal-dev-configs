# @dbarrett24/professional-brand-ui

Professional brand component library with custom theme and Storybook.

## Installation

```bash
pnpm add @dbarrett24/professional-brand-ui
```

## Usage

```tsx
import { Button } from '@dbarrett24/professional-brand-ui';
import '@dbarrett24/theme-system/css/ProfessionalBrand.css';

export const App = () => {
    return (
        <div>
            <Button variant="solid">Get Started</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="ghost">Contact Us</Button>
            <Button variant="link">View Details</Button>
        </div>
    );
};
```

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Build library
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

## Brand Colors

- **Primary Blue**: `#3B82F6` - Professional trust color
- **Navy**: `#1E3A8A` - Dark accent
- **Slate**: `#475569` - Secondary text
- **Light**: `#F8FAFC` - Background

## Components

### Button

```tsx
<Button variant="primary" size="md">
    Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`

## License

MIT


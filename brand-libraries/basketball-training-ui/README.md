# @dbarrett24/basketball-training-ui

Basketball Training brand component library with custom theme and Storybook.

## Installation

```bash
pnpm add @dbarrett24/basketball-training-ui
```

## Usage

```tsx
import { Button } from '@dbarrett24/basketball-training-ui';
import '@dbarrett24/basketball-training-ui/dist/theme/styles.css';

export const App = () => {
    return (
        <div>
            <Button variant="primary">Start Training</Button>
            <Button variant="secondary">View Stats</Button>
            <Button variant="outline">Learn More</Button>
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

- **Primary Orange**: `#FF6B35` - Basketball brand color
- **Black**: `#1A1A1A` - Text and backgrounds
- **Court Wood**: `#C19A6B` - Basketball court accent

## Components

### Button

```tsx
<Button variant="primary" size="md">
    Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`

## License

MIT


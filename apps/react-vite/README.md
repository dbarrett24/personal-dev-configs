# React + Vite Template

Modern React SPA template with Vite, React Query, Jotai, React Hook Form, and Basketball Training UI components.

## Features

- ✅ **React 19** with concurrent features
- ✅ **Vite** for lightning-fast development
- ✅ **TypeScript 5.8** with strict mode
- ✅ **Tailwind CSS 3** with semantic tokens
- ✅ **React Query** for server state
- ✅ **Jotai** for client state
- ✅ **React Hook Form + Zod** for forms
- ✅ **Basketball Training UI** components
- ✅ **Jest + RTL** for testing
- ✅ **ESLint + Prettier** configured
- ✅ **90% test coverage** requirement

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

## Development

```bash
# Development
pnpm dev               # Start Vite dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run all linters
pnpm lint-fix         # Fix linting issues
pnpm ts-check         # Type check

# Testing
pnpm test             # Run tests
pnpm test-watch       # Watch mode
pnpm test-coverage    # With coverage
```

## Project Structure

```
react-vite/
├── src/
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point with providers
│   ├── index.css           # Global styles
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── data/               # React Query hooks
│   ├── atoms/              # Jotai atoms
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── index.html              # HTML template
└── vite.config.ts          # Vite configuration
```

## Adding Features

### 1. Add a Component

```tsx
// src/components/Card.tsx
import { cn } from '@dbarrett24/theme-system';

export const Card = ({ children, className }) => {
    return (
        <div className={cn(
            'bg-background-primary border-border-primary',
            'p-md rounded-md',
            className
        )}>
            {children}
        </div>
    );
};
```

### 2. Add React Query Hook

```typescript
// src/data/useGetPosts.ts
import { useQuery } from '@tanstack/react-query';

export const useGetPosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://api.example.com/posts');
            return res.json();
        },
    });
};
```

### 3. Add Jotai Atom

```typescript
// src/atoms/counterAtom.ts
import { atom } from 'jotai';

export const counterAtom = atom(0);
```

### 4. Add Form

```tsx
// src/components/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    message: z.string().min(10),
});

export const ContactForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <input {...register('email')} />
            <textarea {...register('message')} />
            <button type="submit">Submit</button>
        </form>
    );
};
```

## Testing

```tsx
// src/components/Card.spec.tsx
import { render, screen } from '@dbarrett24/testing-utils';
import { Card } from './Card';

describe('Card', () => {
    it('renders children', () => {
        render(<Card>Hello</Card>);
        expect(screen.getByText('Hello')).toBeVisible();
    });
});
```

## Deployment

### Build for Production

```bash
pnpm build
# Output in dist/
```

### Deploy to Vercel

```bash
vercel
```

### Deploy to Netlify

```bash
netlify deploy --prod --dir=dist
```

## Customization

### Change Brand Library

Replace `@dbarrett24/basketball-training-ui` with `@dbarrett24/professional-brand-ui`:

```bash
pnpm remove @dbarrett24/basketball-training-ui
pnpm add @dbarrett24/professional-brand-ui

# Update src/index.css
@import '@dbarrett24/professional-brand-ui/src/theme/styles.css';
```

### Add Custom Brand Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                'custom-primary': '#YOUR_COLOR',
            },
        },
    },
};
```

## Why Vite?

- ⚡️ **Instant server start** - No bundling in dev mode
- 🔥 **Hot Module Replacement** - Blazing fast updates
- 📦 **Optimized builds** - Uses Rollup for production
- 🛠️ **Rich plugin ecosystem** - Extensive ecosystem
- 🎯 **TypeScript support** - First-class TS support

## License

MIT


# Next.js App Template

Production-ready Next.js 15 template with App Router, React Query, Jotai, React Hook Form, and Basketball Training UI components.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **React 19** with concurrent features
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
pnpm dev                # Start dev server
pnpm build             # Build for production
pnpm start             # Start production server

# Code Quality
pnpm lint              # Run all linters
pnpm lint-fix          # Fix linting issues
pnpm ts-check          # Type check

# Testing
pnpm test              # Run tests
pnpm test-watch        # Watch mode
pnpm test-update       # Update snapshots
pnpm test-coverage     # With coverage
```

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
├── data/                   # React Query hooks
├── atoms/                  # Jotai atoms
├── providers/
│   └── Providers.tsx       # React Query + Jotai setup
├── utils/                  # Utility functions
└── testing/                # Test utilities
```

## Adding Features

### 1. Add a Component

```tsx
// components/Card.tsx
import { cn } from '@dbarrett24/theme-system';

export const Card = ({ children, className }) => {
    return (
        <div className={cn('border-border-primary bg-background-primary', 'rounded-md p-md', className)}>
            {children}
        </div>
    );
};
```

### 2. Add React Query Hook

```typescript
// data/posts/useGetPosts.ts
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
// atoms/counterAtom.ts
import { atom } from 'jotai';

export const counterAtom = atom(0);

export const incrementAtom = atom(
    (get) => get(counterAtom),
    (get, set) => set(counterAtom, get(counterAtom) + 1)
);
```

### 4. Add Form with React Hook Form

```tsx
// components/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@dbarrett24/basketball-training-ui';

const schema = z.object({
    email: z.string().email(),
    message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-md"
        >
            <input
                {...register('email')}
                placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea
                {...register('message')}
                placeholder="Message"
            />
            {errors.message && <span>{errors.message.message}</span>}

            <Button type="submit">Submit</Button>
        </form>
    );
};
```

## Testing

```tsx
// components/Card.spec.tsx
import { render, screen } from '@dbarrett24/testing-utils';
import { Card } from './Card';

describe('Card', () => {
    it('renders children', () => {
        render(<Card>Hello</Card>);
        expect(screen.getByText('Hello')).toBeVisible();
    });
});
```

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Docker

```dockerfile
FROM node:24-alpine
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build
CMD ["pnpm", "start"]
```

## Customization

### Change Brand Library

Replace `@dbarrett24/basketball-training-ui` with `@dbarrett24/professional-brand-ui`:

```bash
# Install
pnpm remove @dbarrett24/basketball-training-ui
pnpm add @dbarrett24/professional-brand-ui

# Update imports
# app/page.tsx
import { Button } from '@dbarrett24/professional-brand-ui';

# app/globals.css
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

## License

MIT

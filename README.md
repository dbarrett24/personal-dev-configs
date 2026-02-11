# Personal Development Configs

> Production-ready monorepo with reusable configurations, multi-brand component libraries, and project templates extracted from professional development experience.

## 📦 What's Included

### Shared Configuration Packages

All published to npm under `@dbarrett24/*` scope:

- **prettier-config** - Prettier with Tailwind CSS plugin
- **typescript-config** - TypeScript configs (base, react, nextjs, library)
- **eslint-config** - ESLint for React/Next.js applications
- **eslint-config-library** - Stricter ESLint for component libraries
- **jest-config** - Jest with 90% coverage for apps
- **jest-config-library** - Jest with 95% coverage for libraries
- **testing-utils** - Testing utilities (render, jotaiStore, React Query mocks, FormWrapper)
- **tsup-config** - Smart build wrapper (resolves workspace deps, adds 'use client')
- **theme-system** - Semantic design tokens and cn() utility

### Brand Component Libraries

- **basketball-training-ui** - Basketball Training brand components with Storybook
- **professional-brand-ui** - Professional brand components with Storybook

### Project Templates

- **nextjs-app** - Next.js 15 + App Router template
- **react-vite** - React + Vite SPA template

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm work:basketball     # Basketball brand
pnpm work:professional   # Professional brand
pnpm work:core           # Core components
```

### View Storybook

```bash
# Basketball Training UI (port 6006)
pnpm storybook:basketball

# Professional Brand UI (port 6006)
pnpm storybook:professional

# Core Components (port 6007)
pnpm storybook:core

# View all brands in parallel
pnpm storybook:all
```

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test-coverage

# Run specific package tests
pnpm test:core
pnpm test:basketball
pnpm test:professional
```

---

## 📖 Documentation

- **[Getting Started](./GETTING_STARTED.md)** - Complete setup and usage guide
- **[Contributing](./CONTRIBUTING.md)** - Development workflow and scripts reference
- **[Architecture](./ARCHITECTURE.md)** - System design and architecture decisions

---

## 🎨 Features

### Multi-Brand Architecture

Support multiple brands with shared configs:

```bash
personal-dev-configs/
├── shared-configs/           # Shared ESLint, Prettier, TypeScript, Jest
├── brand-libraries/
│   ├── basketball-training-ui/   # Orange basketball theme
│   └── professional-brand-ui/    # Blue professional theme
└── apps/                     # Project templates
```

### Semantic Design Tokens

Theme system with semantic naming for easy multi-brand support:

```tsx
import { cn } from '@dbarrett24/theme-system';

<button
    className={cn(
        'bg-primary-500 text-text-inverse',
        'hover:bg-primary-700',
        'px-lg py-sm rounded-md'
    )}
>
    Click me
</button>;
```

### Comprehensive Testing Utilities

```typescript
import { render, screen, userEvent, jotaiStore } from '@dbarrett24/testing-utils';
import { myAtom } from '@/atoms';

it('renders component', () => {
    jotaiStore.set(myAtom, 'test value');

    render(<MyComponent />);

    expect(screen.getByText('test value')).toBeVisible();
});
```

### React Query Integration

```typescript
import { querySuccessMock, queryErrorMock } from '@dbarrett24/testing-utils';

const useGetUserSpy = jest.spyOn(hooks, 'useGetUser');
useGetUserSpy.mockReturnValue({ ...querySuccessMock, data: mockUser });
```

### Version Management with Changesets

```bash
pnpm cl                 # Create changeset
pnpm ci:version         # Version packages
pnpm ci:publish         # Publish to npm
```

---

## 🛠️ Development Scripts

### Most Common Commands

```bash
# Development
pnpm work:basketball      # Work on basketball brand
pnpm work:professional    # Work on professional brand
pnpm work:core            # Work on core components

# Storybook
pnpm storybook:all        # All Storybooks in parallel

# Testing
pnpm test                 # All tests
pnpm test:watch:core      # Watch mode

# Quality checks
pnpm pc                   # Quick pre-commit check
pnpm pcf                  # Pre-commit check with auto-fix
pnpm prepush              # Full pre-push check

# Cleanup
pnpm clean:dist           # Remove dist folders
pnpm full-rebuild         # Nuclear option: clean + install + build
```

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for complete script documentation.

---

## 📝 Usage in Projects

### Install Published Packages

```bash
pnpm add @dbarrett24/basketball-training-ui @dbarrett24/theme-system
pnpm add -D @dbarrett24/eslint-config @dbarrett24/prettier-config @dbarrett24/typescript-config @dbarrett24/testing-utils
```

### Configure Your Project

```json
// package.json
{
    "prettier": "@dbarrett24/prettier-config",
    "devDependencies": {
        "@dbarrett24/eslint-config": "^1.0.0",
        "@dbarrett24/prettier-config": "^1.0.0",
        "@dbarrett24/typescript-config": "^1.0.0",
        "@dbarrett24/testing-utils": "^1.0.0"
    }
}
```

```javascript
// .eslintrc.js
module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    root: true,
};
```

```json
// tsconfig.json
{
    "extends": "@dbarrett24/typescript-config/nextjs.json"
}
```

```javascript
// jest.config.js
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
};
```

---

## 🎯 Design Philosophy

Extracted from professional development experience:

1. **Strict TypeScript** - No `any` types in libraries
2. **High test coverage** - 90%+ for apps, 95%+ for libraries
3. **Semantic naming** - Consistent patterns across all brands
4. **Modern tooling** - Vite, Storybook, pnpm, Turbo
5. **Best practices** - Arrow functions, nullish coalescing, named exports
6. **No component mocking** - Test real behavior with React Testing Library
7. **Direct testing** - Access Jotai store and React Query directly in tests

---

## 📚 Tech Stack

- **React 19** - Latest React with concurrent features
- **Next.js 15** - App Router with React Server Components
- **TypeScript 5.8** - Strict mode enabled
- **Tailwind CSS 3** - Utility-first styling
- **Jotai** - Atomic state management
- **React Query** - Server state management
- **React Hook Form** - Form management with Zod validation
- **Jest + RTL** - Testing with React Testing Library
- **Storybook 8** - Component development
- **pnpm** - Fast, efficient package manager
- **Turbo** - High-performance monorepo builds
- **Changesets** - Version management and publishing

---

## 🎨 Brand Examples

### Basketball Training UI

- **Primary Color**: Orange (#FF6B35)
- **Theme**: Sports, energy, action
- **Use Cases**: Training apps, sports analytics, coaching platforms

### Professional Brand UI

- **Primary Color**: Blue (#3B82F6)
- **Theme**: Trust, professionalism, clarity
- **Use Cases**: Portfolio sites, business apps, professional services

---

## 📦 Package Structure

Each shared config package follows this pattern:

```
package/
├── src/                 # Source TypeScript
├── dist/                # Built output (CJS + ESM)
├── package.json         # Published to npm
├── tsconfig.json        # TypeScript config
├── .eslintrc.js         # ESLint config
└── README.md            # Usage documentation
```

Each brand library includes:

```
brand-library/
├── src/
│   ├── components/      # React components
│   └── theme/          # Brand-specific theme
├── .storybook/         # Storybook configuration
├── dist/               # Built library
└── README.md           # Documentation
```

---

## 🔄 Workflow

### Creating a New Brand

1. Copy existing brand library structure
2. Update brand colors in theme/styles.css
3. Update tailwind.config.js with brand colors
4. Create branded components
5. Add Storybook stories
6. Write tests (95%+ coverage)
7. Publish to npm

### Using in a Project

1. Install brand library and configs
2. Import components: `import { Button } from '@dbarrett24/basketball-training-ui'`
3. Import theme: `import '@dbarrett24/theme-system/css/BasketballTraining.css'`
4. Use semantic tokens: `className="bg-primary-500 text-text-inverse"`

---

## 🧪 Testing Philosophy

From professional experience:

- ✅ **Test real behavior** - No component mocking
- ✅ **Use visible state** - Prefer `.toBeVisible()` over `.toBeInTheDocument()`
- ✅ **Direct queries** - `screen.getByText()` instead of variables
- ✅ **Real interactions** - `userEvent` instead of `fireEvent`
- ✅ **Direct store access** - `jotaiStore.get(atom)` in tests
- ✅ **Hook-level mocks** - Mock hooks, not fetch
- ✅ **FormWrapper** - Test form components with React Hook Form context
- ✅ **High coverage** - 90%+ apps, 95%+ libraries

---

## 🤝 Contributing

We welcome contributions! Please see **[CONTRIBUTING.md](./CONTRIBUTING.md)** for:

- Development workflow
- Available scripts
- Testing requirements
- Code quality standards
- Publishing process

---

## 📄 License

MIT

---

**Ready to build amazing projects with professional-grade tooling!** 🚀

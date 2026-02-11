# Architecture Overview

This document provides a visual overview of how all the pieces fit together in your personal development monorepo.

---

## 🏗️ Monorepo Structure

```
personal-dev-configs/
│
├── 📦 shared-configs/          # Reusable configuration packages
│   ├── prettier-config/        # Code formatting rules
│   ├── typescript-config/      # TypeScript compiler options
│   ├── eslint-config/          # Linting rules (apps)
│   ├── eslint-config-library/  # Stricter linting (libraries)
│   ├── jest-config/            # Testing framework (apps: 90% coverage)
│   ├── jest-config-library/    # Testing framework (libs: 95% coverage)
│   ├── testing-utils/          # Test helpers (render, mocks, etc.)
│   ├── tsup-config/            # Smart build wrapper (workspace deps, 'use client')
│   └── theme-system/           # Design tokens + cn() utility
│
├── 🎨 brand-libraries/         # Component libraries per brand
│   ├── basketball-training-ui/ # Basketball brand components + Storybook
│   └── professional-brand-ui/  # Professional brand components + Storybook
│
├── 📋 templates/               # Project starter templates
│   ├── nextjs-app/             # Next.js 15 + App Router
│   └── react-vite/             # React + Vite SPA
│
├── 🤖 cursor-rules/            # AI coding assistant patterns
│   ├── typescript.mdc          # TypeScript best practices
│   ├── react.mdc               # React patterns
│   ├── testing.mdc             # Testing philosophy
│   ├── naming.mdc              # File/variable naming
│   ├── forms.mdc               # React Hook Form + Zod
│   ├── state.mdc               # Jotai state management
│   ├── nextjs.mdc              # Next.js App Router
│   └── data-layer.mdc          # React Query patterns
│
└── 🛠️ scripts/                # Automation tools
    ├── create-project.ts       # Generate new project from template
    ├── create-brand.ts         # Scaffold new brand library
    └── update-configs.ts       # Update shared configs across packages
```

---

## 🔄 Dependency Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     Shared Configs Layer                      │
│  (Consumed by both Brand Libraries and Project Templates)    │
└───────────────────────────┬──────────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼                               ▼
┌───────────────────────┐       ┌──────────────────────┐
│   Brand Libraries     │       │  Project Templates   │
│ ─────────────────────│       │ ─────────────────────│
│ • basketball-training │       │ • nextjs-app         │
│ • professional-brand  │       │ • react-vite         │
│                       │       │                      │
│ Dependencies:         │       │ Dependencies:        │
│ ├─ theme-system       │       │ ├─ Brand library     │
│ ├─ typescript-config  │       │ ├─ theme-system      │
│ ├─ eslint-config-lib  │       │ ├─ typescript-config │
│ ├─ jest-config-lib    │       │ ├─ eslint-config     │
│ ├─ testing-utils      │       │ ├─ jest-config       │
│ └─ prettier-config    │       │ ├─ testing-utils     │
│                       │       │ └─ prettier-config   │
└───────────────────────┘       └──────────────────────┘
            │                               │
            └───────────────┬───────────────┘
                            ▼
                  ┌──────────────────┐
                  │  Your Apps/Sites │
                  │  ───────────────│
                  │  Use brand libs  │
                  │  + shared configs│
                  └──────────────────┘
```

---

## 🎯 Configuration Inheritance

### TypeScript Configuration

```
typescript-config/base.json
    │
    ├──> react.json (extends base)
    │       └──> Used by brand libraries + react-vite template
    │
    ├──> nextjs.json (extends react)
    │       └──> Used by nextjs-app template
    │
    └──> library.json (extends react + stricter)
            └──> Used by brand libraries for publishing
```

### ESLint Configuration

```
eslint-config/index.js
    │
    └──> eslint-config-library/index.js (extends + stricter)
            │
            └──> Enforces:
                 • No `any` types
                 • No default exports
                 • Stricter type checking
```

### Jest Configuration

```
jest-config/index.ts (90% coverage)
    └──> Used by: nextjs-app, react-vite

jest-config-library/index.ts (95% coverage)
    └──> Used by: basketball-training-ui, professional-brand-ui
```

---

## 🧩 Component Library Architecture

### Multi-Brand System

```
┌─────────────────────────────────────────────────────────────┐
│                     theme-system (Base)                      │
│  ────────────────────────────────────────────────────────── │
│  • Semantic tokens (colors, spacing, typography)            │
│  • cn() utility (clsx + tailwind-merge)                     │
│  • Base Tailwind config                                      │
│  • Shared styles.css                                         │
└────────────────────────────┬────────────────────────────────┘
                             │
                             │ extends
            ┌────────────────┴────────────────┐
            │                                 │
            ▼                                 ▼
┌──────────────────────┐        ┌──────────────────────┐
│ basketball-training  │        │  professional-brand  │
│ ──────────────────── │        │  ─────────────────── │
│ Theme overrides:     │        │  Theme overrides:    │
│ • Primary: #ff6600   │        │  • Primary: #0066cc  │
│ • Secondary: #4a4a4a │        │  • Secondary: #333   │
│ • Accent: #ffd700    │        │  • Accent: #6c757d   │
│                      │        │                      │
│ Components:          │        │  Components:         │
│ • Button             │        │  • Button            │
│ • Card               │        │  • Card              │
│ • Modal              │        │  • Modal             │
│ • Form controls      │        │  • Form controls     │
└──────────────────────┘        └──────────────────────┘
```

### Brand Library Internal Structure

```
basketball-training-ui/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.spec.tsx
│   │   └── Card/
│   │       ├── Card.tsx
│   │       └── Card.spec.tsx
│   │
│   ├── theme/              # Brand-specific theming
│   │   ├── styles.css      # CSS variables + Tailwind base
│   │   └── colors.ts       # Theme token overrides
│   │
│   └── utils/              # Shared utilities
│       └── index.ts
│
├── .storybook/             # Storybook configuration
│   ├── main.ts
│   └── preview.tsx
│
├── stories/                # Component documentation
│   ├── Button.stories.tsx
│   └── Card.stories.tsx
│
├── package.json            # Dependencies + scripts
├── tsconfig.json           # Extends @dbarrett24/typescript-config/library.json
├── tsup.config.ts          # Build configuration (generates dist/)
├── tailwind.config.js      # Extends theme-system + brand overrides
└── jest.config.js          # Extends @dbarrett24/jest-config-library
```

---

## 🎨 Theme Infrastructure

This project uses a comprehensive CSS variable-based theme system with multi-brand support, following industry-standard naming conventions.

### Key Files

**Core Theme System**:
- `shared-configs/theme-system/` - Core theme tokens and Tailwind plugin
  - `src/theme.ts` - TypeScript theme configuration (spacing, colors, border radius, font families)
  - `src/tailwind-plugin.ts` - Custom Tailwind utilities (typography, focus, autofill)
  - `src/cn.ts` - Class name utility (clsx + tailwind-merge)

**Brand Theme CSS**:
- `brand-libraries/basketball-training-ui/src/theme/styles.css` - Basketball brand CSS variables
- `brand-libraries/professional-brand-ui/src/theme/styles.css` - Professional brand CSS variables
- `apps/docs/.storybook/themes/default.css` - Neutral default theme for Storybook

### CSS Variable Naming Convention

All color variables use the `--color-*` prefix (industry standard):
- `--color-background-primary`, `--color-background-secondary`, etc.
- `--color-text-primary`, `--color-text-secondary`, etc.
- `--color-border-primary`, `--color-border-focus`, etc.
- `--color-link-primary`, `--color-link-hover`, etc.

Typography and component variables:
- `--font-family-primary`, `--font-family-secondary`
- `--font-weight-h1` through `--font-weight-caption`
- `--letter-spacing-h1` through `--letter-spacing-label-mini`
- `--button-border-radius`, `--input-border-radius`, etc.

### Custom Tailwind Utilities

All custom utilities use the `.hui-*` prefix:

**Focus Styles**:
- `.hui-focus-visible-outline` - Theme-aware focus ring (4px, uses border-focus color)
- `.hui-focus-visible-outline-inverse` - Inverse focus ring (white, 4px)

**Typography Classes**:
- `.hui-text-h1` through `.hui-text-h6` - Heading styles (responsive, brand-aware)
- `.hui-text-body-primary` - Standard body text (16px) - **Also used for inputs**
- `.hui-text-body-secondary` - Secondary body text (14px)
- `.hui-text-caption` - Caption text (12px)

**Form Utilities**:
- `.hui-autofill-transparent` - Removes yellow autofill background

### Spacing Scale

Modern spacing scale with larger values for improved visual hierarchy:

```
3xs → 2px   |  xs  → 8px   |  md  → 24px  |  xl  → 48px  |  3xl → 128px
2xs → 4px   |  sm  → 16px  |  lg  → 32px  |  2xl → 64px  |
```

Usage: `px-sm` (16px), `py-md` (24px), `gap-lg` (32px)

### Semantic Border Radius Tokens

Component-specific border radius:
- `rounded-button` → 8px
- `rounded-input` → 6px
- `rounded-container` → 12px
- `rounded-checkbox` → 4px
- `rounded-search-input` → 24px (pill shape)

### Usage Example

```tsx
import { cn } from '@dbarrett24/theme-system';

export const Button = () => (
  <button
    className={cn(
      'hui-focus-visible-outline',  // Theme-aware focus
      'rounded-button',              // Semantic border radius
      'px-sm py-xs',                 // Modern spacing scale
      'font-primary',                // Brand-aware font
      'bg-color-link-primary'        // Semantic color naming
    )}
  >
    Click me
  </button>
);
```

### Detailed Documentation

See `.cursor/rules/design-system/theme-infrastructure.mdc` for complete documentation including:
- All CSS variables with descriptions
- Migration notes (breaking changes)
- Usage patterns and examples
- Architecture decisions and rationale

---

## 🧪 Testing Architecture

### Testing Utilities Flow

```
testing-utils/src/
│
├── render.tsx                  # Custom render with providers
│   ├── createRenderFunc()      # Wraps React Testing Library render
│   └── createRenderHookFunc()  # Wraps React Testing Library renderHook
│
├── useQueryMock.ts             # React Query test utilities
│   ├── useQueryMock()          # Mock useQuery hook
│   └── useMutationMock()       # Mock useMutation hook
│
├── FormWrapper.tsx             # React Hook Form test wrapper
│   └── FormWrapper             # Provides form context for tests
│
├── jotaiStore.ts               # Jotai state management
│   ├── createTestStore()       # Create isolated test store
│   └── resetStore()            # Clear state between tests
│
└── windowMocks.ts              # Window/DOM mocks
    ├── mockWindowWidth()
    ├── mockWindowHeight()
    └── mockMatchMedia()

        │ consumed by
        ▼
┌──────────────────────────────────────────────────┐
│           Component Tests                         │
│  ─────────────────────────────────────────────── │
│  import { render, FormWrapper } from 'testing';  │
│                                                   │
│  const { asFragment } = render(                  │
│      <FormWrapper defaultValues={...}>           │
│          <MyForm />                              │
│      </FormWrapper>                              │
│  );                                              │
└──────────────────────────────────────────────────┘
```

### Test Pattern Example

```typescript
// MyComponent.spec.tsx
import { ComponentProps } from 'react';
import { render, screen, userEvent } from 'testing';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
    let props: ComponentProps<typeof MyComponent>;

    beforeEach(() => {
        props = {
            title: 'Test',
            onClick: jest.fn(),
        };
    });

    const getRender = () => render(<MyComponent {...props} />);

    it('renders correctly', () => {
        const { asFragment } = getRender();

        expect(screen.getByText('Test')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('handles click', async () => {
        getRender();

        await userEvent.click(screen.getByText('Test'));

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
```

---

## 🤖 Cursor Rules Integration

### AI-Assisted Development Flow

```
Developer writes code
        │
        ▼
Cursor AI reads .cursor/rules/
        │
        ├──> typescript.mdc    → Enforces type patterns
        ├──> react.mdc         → Suggests component patterns
        ├──> testing.mdc       → Generates test structure
        ├──> naming.mdc        → Validates file names
        ├──> forms.mdc         → React Hook Form + Zod patterns
        ├──> state.mdc         → Jotai atom patterns
        ├──> nextjs.mdc        → Next.js App Router patterns
        └──> data-layer.mdc    → React Query patterns
        │
        ▼
AI suggests code following
your work patterns!
```

### Example: Creating a New Component

**Without Cursor Rules:**

```typescript
// Developer might write:
export default function Button(props) {
    return <button {...props} />;
}
```

**With Cursor Rules:**

```typescript
// Cursor AI suggests:
type ButtonProps = {
    /** Button text to display */
    children: React.ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Visual variant */
    variant?: 'primary' | 'secondary';
};

/**
 * Button component for user interactions
 */
export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn('base-button', {
                'button-primary': variant === 'primary',
                'button-secondary': variant === 'secondary',
            })}
        >
            {children}
        </button>
    );
};

Button.displayName = 'Button';
```

---

## 🚀 Development Workflow

### Creating a New Project

```bash
# 1. Choose template
pnpm create-project

# Interactive prompts:
? Which template? nextjs-app
? Project name? my-new-app

# 2. Project is scaffolded
my-new-app/
├── package.json           # Includes all shared config dependencies
├── tsconfig.json          # Extends @dbarrett24/typescript-config/nextjs.json
├── .eslintrc.js           # Extends @dbarrett24/eslint-config
├── jest.config.js         # Extends @dbarrett24/jest-config
├── tailwind.config.js     # Extends @dbarrett24/basketball-training-ui
└── src/
    ├── app/
    ├── components/
    └── testing/

# 3. Dependencies auto-installed
pnpm install

# 4. Start developing!
pnpm dev
```

### Creating a New Brand

```bash
# 1. Run scaffold script
pnpm create-brand

# Interactive prompts:
? Brand name? "Fitness Coaching"
? Primary color? #00ff00
? Secondary color? #333333

# 2. Brand library created
brand-libraries/fitness-coaching-ui/
├── src/
│   ├── components/
│   ├── theme/
│   │   └── styles.css       # With your custom colors!
│   └── utils/
├── stories/
├── .storybook/
├── package.json
└── ...

# 3. Build and preview
cd brand-libraries/fitness-coaching-ui
pnpm build
pnpm storybook
```

---

## 📊 Build Process

### Monorepo Build Flow

```
pnpm build (root)
    │
    ├──> Turbo orchestrates builds
    │
    ├──> Phase 1: Shared Configs
    │    ├─ prettier-config       ✓
    │    ├─ typescript-config     ✓
    │    ├─ eslint-config         ✓
    │    ├─ eslint-config-library ✓
    │    ├─ jest-config           ✓
    │    ├─ jest-config-library   ✓
    │    ├─ theme-system          ✓ (tsup)
    │    └─ testing-utils         ✓ (tsup)
    │
    └──> Phase 2: Brand Libraries (depends on Phase 1)
         ├─ basketball-training-ui ✓ (tsup)
         └─ professional-brand-ui  ✓ (tsup)

Result:
    ├─ Each package has dist/ folder
    ├─ Type declarations (.d.ts) generated
    ├─ Source maps for debugging
    └─ Ready to publish to npm or use locally
```

---

## 🔑 Key Design Decisions

### 1. **Monorepo vs Polyrepo**

**Choice:** Monorepo with pnpm workspaces

**Why:**

- ✅ Single source of truth
- ✅ Atomic changes across packages
- ✅ Shared dependencies
- ✅ Consistent versioning
- ✅ Easier testing

### 2. **pnpm vs npm/yarn**

**Choice:** pnpm

**Why:**

- ✅ Faster installs
- ✅ Strict dependency resolution
- ✅ Disk space efficient
- ✅ Built-in workspace support
- ✅ Industry standard for monorepos

### 3. **Turbo vs Nx/Lerna**

**Choice:** Turbo

**Why:**

- ✅ Simpler configuration
- ✅ Intelligent caching
- ✅ Parallel execution
- ✅ Works great with pnpm

### 4. **tsup vs Rollup/webpack**

**Choice:** tsup (for libraries)

**Why:**

- ✅ Zero config for TypeScript
- ✅ Fast (powered by esbuild)
- ✅ Automatic type generation
- ✅ Tree-shaking built-in

### 5. **SWC vs Babel (for tests)**

**Choice:** SWC

**Why:**

- ✅ 20x faster than Babel
- ✅ Native TypeScript support
- ✅ Modern syntax support
- ✅ Used by Hammer UI

### 6. **Named Exports vs Default Exports**

**Choice:** Named exports only (except page.tsx)

**Why:**

- ✅ Better tree-shaking
- ✅ Easier to refactor
- ✅ Better IDE support
- ✅ Explicit imports

### 7. **Component Library per Brand vs Single Library**

**Choice:** Separate library per brand

**Why:**

- ✅ Independent versioning
- ✅ Smaller bundle sizes
- ✅ Easier to maintain
- ✅ Clear separation of concerns

### 8. **Semantic Tokens vs Direct Colors**

**Choice:** Semantic tokens (e.g., `background-primary` not `gray-100`)

**Why:**

- ✅ Easy theme switching
- ✅ Consistent naming
- ✅ Intent-based design
- ✅ Matches Hammer UI approach

---

## 🎯 Comparison to Work Repositories

### What's the Same

| Feature                        | Hammer UI | Wavebid A2O | Your Configs |
| ------------------------------ | --------- | ----------- | ------------ |
| TypeScript strict mode         | ✅        | ✅          | ✅           |
| Prettier config                | ✅        | ✅          | ✅           |
| ESLint base rules              | ✅        | ✅          | ✅           |
| Jest + React Testing Library   | ✅        | ✅          | ✅           |
| Tailwind CSS + semantic tokens | ✅        | ✅          | ✅           |
| Component-driven development   | ✅        | ✅          | ✅           |

### What's Better

| Feature                 | Work Repos   | Your Configs | Improvement            |
| ----------------------- | ------------ | ------------ | ---------------------- |
| React Query test utils  | ❌           | ✅           | Added `useQueryMock()` |
| Form test utils         | ❌           | ✅           | Added `FormWrapper`    |
| Library-specific ESLint | Partial      | ✅           | Stricter rules         |
| Jotai pattern           | Deprecated   | ✅           | Modern approach        |
| Build speed             | Babel (slow) | SWC (fast)   | 20x faster             |
| Cursor rules            | Scattered    | ✅           | Organized & documented |

### What's Missing (Optional)

| Feature             | Purpose                     | Priority             |
| ------------------- | --------------------------- | -------------------- |
| `tsup-config`       | Auto-resolve workspace deps | HIGH (if publishing) |
| `next/image` mock   | Test Next.js images         | MEDIUM               |
| Global setup        | One-time test env setup     | LOW                  |
| Import restrictions | Custom navigation wrapper   | LOW                  |

---

## 📚 Documentation Map

```
personal-dev-configs/
│
├── README.md                    # Start here! Overview + quick start
├── GETTING_STARTED.md           # Detailed setup guide
├── CONTRIBUTING.md              # Development workflow and scripts
├── ARCHITECTURE.md              # This file! System design overview
└── SECURITY.md                  # Security disclosure policy
```

---

## 🎓 Learning Resources

### Understanding the Stack

**TypeScript:**

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

**React Patterns:**

- [React Docs (New)](https://react.dev/)
- [Patterns.dev](https://www.patterns.dev/)

**Testing:**

- [React Testing Library Docs](https://testing-library.com/react)
- [Testing JavaScript](https://testingjavascript.com/)

**Monorepo Management:**

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo Docs](https://turbo.build/repo/docs)

**Component Libraries:**

- [Storybook Docs](https://storybook.js.org/docs)
- [Design Systems with Storybook](https://storybook.js.org/tutorials/design-systems-for-developers/)

### Your Work Repositories (Reference)

- **Hammer UI:** Component library architecture, testing patterns, build configs
- **Wavebid A2O:** Next.js patterns, i18n setup, coverage thresholds

---

## ✅ Next Steps

### Immediate:

1. Review `CONTRIBUTING.md` for development workflow
2. Decide if you need `tsup-config` (are you publishing to npm?)
3. Try `pnpm create-project` to generate a new app

### Short Term:

1. Build your first personal project with these configs
2. Create a new brand for a specific use case
3. Customize theme tokens for your brand

### Long Term:

1. Publish brand libraries to npm (if desired)
2. Create more project templates (mobile, Electron, etc.)
3. Share configs with others or make them public

---

## 🎉 Congratulations!

You've successfully extracted and enhanced professional-grade development tooling from your work experience. You now have:

- ✅ Reusable configuration packages
- ✅ Multi-brand component library system
- ✅ Project templates for rapid development
- ✅ AI-assisted development patterns
- ✅ Professional testing infrastructure
- ✅ Automated workflows

**You're ready to build amazing personal projects!** 🚀

---

## 8. Design Decisions & Rationale

This section documents key architectural decisions, their rationale, and the patterns extracted from professional experience at Hammer UI and Wavebid A2O.

### Multi-Brand Architecture

**Decision:** Use fully-styled core components with thin brand wrapper approach (Hammer UI pattern), not headless components.

**Rationale:**

- Our brands are **moderately different** (not radically different) - primarily colors, shadows, and spacing
- Enables **fast brand creation** - ~90% less code per brand component (10-20 lines vs 60+ lines)
- **Consistent UX** across all brands through shared core structure
- **Easy customization** via className tweaks when needed
- **Maintainable** - fix once in core, all brands benefit

**Code Example:**

```typescript
// Core Component (~150 lines, fully styled)
export const Button = ({ variant = 'filled', style = 'primary', size = 'md', className, ...props }) => {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center font-semibold rounded-md transition-colors',
                variant === 'filled' && style === 'primary' &&
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover',
                // ... 12 more variant/style combinations
                size === 'md' && 'px-md py-xs text-base gap-sm',
                className
            )}
            {...props}
        />
    );
};

// Brand Wrapper (~15 lines, adds brand-specific effects)
export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                'shadow-md hover:shadow-lg',              // Brand depth
                'active:scale-98 transition-transform',   // Brand animation
                className
            )}
        />
    );
};
```

**When to Use Hammer UI Style:**

- ✅ Brands share a design language
- ✅ Differences are primarily colors, shadows, spacing
- ✅ Want fast brand creation
- ✅ Need consistency across brands

**When to Use Headless Instead:**

- ❌ Brands have radically different designs
- ❌ Each brand has unique interaction patterns
- ❌ Design systems are completely independent

### Semantic Token Strategy

**Decision:** Two-tier token system (base tokens + semantic tokens) with class-based brand selectors (`.brand-basketball`) over data attributes.

**Rationale:**

- **Intent-based naming** - `bg-interactive-primary` is more meaningful than `bg-orange-600`
- **Easy theme switching** - Change one CSS variable, update entire brand
- **Consistent across brands** - Same token names, different values
- **Better for AI assistance** - Semantic names convey purpose
- **Class selectors** provide better browser compatibility and specificity control

**Token Structure:**

```css
/* Base tokens (theme-system) */
:root {
    --color-primary-50: #fff5f0;
    --color-primary-500: #ff6600;
    --spacing-sm: 0.5rem;
}

/* Semantic tokens (brand-specific) */
.brand-basketball {
    --interactive-primary: var(--color-primary-500);
    --text-inverse: white;
}

.brand-professional {
    --interactive-primary: #0066cc;
    --text-inverse: white;
}
```

**Benefits:**

- Switch brands by changing CSS class, not rewriting components
- Theme values centralized in CSS, not scattered in components
- Dark mode support through CSS variable updates
- Matches Hammer UI approach (proven at scale)

### Build System Choices

#### Why pnpm Workspaces?

**Decision:** pnpm over npm/yarn for monorepo management

**Rationale:**

- **20-30x faster** installs than npm
- **Strict dependency resolution** - prevents phantom dependencies
- **Disk space efficient** - hard links to global store
- **Built-in workspace support** - no additional tools needed
- **Industry standard** for modern monorepos

#### Why Turbo?

**Decision:** Turbo over Nx/Lerna for build orchestration

**Rationale:**

- **Simpler configuration** - minimal turbo.json, mostly "just works"
- **Intelligent caching** - rebuilds only what changed
- **Parallel execution** - utilizes all CPU cores
- **Great pnpm integration** - designed to work together
- **Used at scale** - Vercel's tool powering Next.js monorepos

#### Why tsup?

**Decision:** tsup over Rollup/webpack for library builds

**Rationale:**

- **Zero config** for TypeScript libraries
- **Fast** - powered by esbuild (10-100x faster than webpack)
- **Automatic type generation** - .d.ts files included
- **Tree-shaking built-in** - smaller bundle sizes
- **Multiple formats** - CJS, ESM, and types in one command

#### Why @swc/jest over babel-jest?

**Decision:** SWC transformer instead of Babel for Jest

**Rationale:**

- **20x faster** test execution vs babel-jest
- **Native TypeScript support** - no Babel config needed
- **Modern syntax support** - decorators, top-level await
- **Matches Hammer UI approach** - proven reliable
- **Aligns with TypeScript's JSX transform** - consistent tooling

**Configuration:**

```javascript
// jest.config.js
transform: {
    '^.+\\.(t|j)sx?$': [
        '@swc/jest',
        {
            jsc: {
                transform: {
                    react: {
                        runtime: 'automatic', // No React imports needed
                    },
                },
            },
        },
    ],
},
```

### Testing Philosophy

**Decision:** No component mocking, direct store access, hook-level mocks

**Rationale:**

- **Test real behavior** - More confidence, catches integration bugs
- **Simpler tests** - Less mocking code, easier to understand
- **Direct Jotai store access** - `jotaiStore.get(atom)` is clearer than prop drilling
- **Hook-level React Query mocks** - Mock `useGetUser()`, not `fetch()`
- **FormWrapper** for forms - Provides form context without manual setup

**Patterns Extracted from Wavebid A2O:**

```typescript
// ✅ GOOD: Direct store access
it('updates atom state', () => {
    jotaiStore.set(myAtom, 'test value');
    render(<Component />);
    expect(screen.getByText('test value')).toBeVisible();
});

// ✅ GOOD: Hook-level mock
const useGetUserSpy = jest.spyOn(hooks, 'useGetUser');
useGetUserSpy.mockReturnValue({ ...querySuccessMock, data: mockUser });

// ✅ GOOD: FormWrapper for forms
render(
    <FormWrapper defaultValues={{ name: 'John' }}>
        <MyForm />
    </FormWrapper>
);
```

**Why Not Standard Practices:**

- Jotai encourages direct store access in tests (documented in their docs)
- Component mocking hides integration bugs
- Hook-level mocking is cleaner than mocking fetch/axios
- These patterns work at scale at Wavebid A2O

### Config Package Enhancements

**Decision:** Add features beyond Hammer UI and Wavebid A2O

**Enhancements Made:**

1. **React Query Testing Support** (not in Hammer UI):

    ```typescript
    export const useQueryMock = () =>
        jest.fn().mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: false,
            error: null,
        });
    ```

2. **React Hook Form Testing Support** (not in Hammer UI):

    ```typescript
    export const FormWrapper = ({ children, defaultValues }) => {
        const methods = useForm({ defaultValues });
        return <FormProvider {...methods}>{children}</FormProvider>;
    };
    ```

3. **Stricter Library ESLint** (more strict than Hammer UI):

    ```javascript
    'no-explicit-any': 'error',        // No `any` types in libraries
    'no-default-exports': 'error',     // Named exports only
    ```

4. **Modern Jotai Pattern** (Hammer UI uses deprecated singleton):
    ```typescript
    // Modern approach with createStore()
    export const jotaiStore = createStore();
    ```

**Rationale:**

- Fill gaps discovered during professional work
- Modern best practices (Jotai createStore)
- Testing utilities for common scenarios
- Stricter rules for published libraries

### Patterns Extracted From Work Repositories

#### From Hammer UI

**What We Adopted:**

- Fully-styled component library architecture
- Semantic token system for theming
- Changesets for version management
- Storybook for component development
- tsup for building libraries
- Multi-brand support through CSS variables

**What We Improved:**

- More comprehensive testing utilities
- Stricter ESLint rules for libraries
- Better test coverage thresholds
- Faster builds (SWC instead of Babel)

#### From Wavebid A2O

**What We Adopted:**

- Direct Jotai store testing approach
- Hook-level React Query mocking
- High test coverage culture (90%+ apps, 95%+ libraries)
- i18n patterns (for future use)
- No component mocking philosophy
- FormWrapper pattern for form testing

**What We Improved:**

- Extracted patterns into reusable packages
- Documented patterns in cursor rules
- Generalized beyond project-specific needs
- Removed project-specific restrictions

### Coverage Threshold Strategy

**Decision:** Different thresholds for apps vs libraries

**Apps: 90% coverage minimum**

- User-facing code with more edge cases
- May have experimental features
- Rapid iteration more important than perfection

**Libraries: 95% coverage minimum**

- Published code used by multiple consumers
- Breaking changes are expensive
- Stability more important than speed

**Rationale:**

- Matches Wavebid A2O's production standards
- Higher bar for published libraries makes sense
- Provides confidence for npm publishing
- Catches bugs before they reach consumers

### Alternative Approaches Considered

#### Headless Components (Not Chosen)

**Considered:** Building unstyled core components, styling in each brand

**Why We Didn't:**

- Would require 60+ lines per brand per component
- Brands would diverge over time (consistency issues)
- More maintenance burden
- Harder to port Hammer UI components
- Our brands are not radically different (moderate differences only)

#### Data Attributes for Theming (Not Chosen)

**Considered:** `data-theme="basketball"` instead of `.brand-basketball`

**Why We Didn't:**

- Class selectors have better browser support
- Better specificity control
- Easier to inspect in devtools
- Hammer UI uses classes (proven approach)
- Slight performance benefit (classes are faster to match)

#### Babel for Tests (Not Chosen)

**Considered:** Using babel-jest like some projects

**Why We Didn't:**

- SWC is 20x faster
- Babel requires additional configuration
- SWC has native TypeScript support
- Modern tool, actively maintained
- Hammer UI uses SWC successfully

#### Publishing All Configs to npm Immediately (Not Chosen)

**Considered:** Publishing before battle-testing

**Why We Didn't:**

- Want to validate patterns in real projects first
- May discover gaps or issues
- Easier to iterate when not published
- Can always publish later once stable
- No rush - personal projects are priority

### Key Takeaways

1. **Extract, Don't Invent**: Patterns come from proven professional work (Hammer UI, Wavebid A2O)
2. **Moderate Customization**: Hammer UI approach fits our needs (brands are similar)
3. **Modern Tooling**: SWC, pnpm, tsup - chose modern over legacy when possible
4. **Testing Culture**: High coverage, real behavior, direct store access
5. **Semantic Everything**: Tokens, naming, structure all intent-based
6. **AI-Friendly**: Cursor rules encode patterns for AI assistance

These decisions create a professional-grade foundation for personal projects while remaining maintainable and understandable.

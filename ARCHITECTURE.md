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

| Feature | Hammer UI | Wavebid A2O | Your Configs |
|---------|-----------|-------------|--------------|
| TypeScript strict mode | ✅ | ✅ | ✅ |
| Prettier config | ✅ | ✅ | ✅ |
| ESLint base rules | ✅ | ✅ | ✅ |
| Jest + React Testing Library | ✅ | ✅ | ✅ |
| Tailwind CSS + semantic tokens | ✅ | ✅ | ✅ |
| Component-driven development | ✅ | ✅ | ✅ |

### What's Better

| Feature | Work Repos | Your Configs | Improvement |
|---------|-----------|--------------|-------------|
| React Query test utils | ❌ | ✅ | Added `useQueryMock()` |
| Form test utils | ❌ | ✅ | Added `FormWrapper` |
| Library-specific ESLint | Partial | ✅ | Stricter rules |
| Jotai pattern | Deprecated | ✅ | Modern approach |
| Build speed | Babel (slow) | SWC (fast) | 20x faster |
| Cursor rules | Scattered | ✅ | Organized & documented |

### What's Missing (Optional)

| Feature | Purpose | Priority |
|---------|---------|----------|
| `tsup-config` | Auto-resolve workspace deps | HIGH (if publishing) |
| `next/image` mock | Test Next.js images | MEDIUM |
| Global setup | One-time test env setup | LOW |
| Import restrictions | Custom navigation wrapper | LOW |

---

## 📚 Documentation Map

```
personal-dev-configs/
│
├── README.md                    # Start here! Overview + quick start
├── GETTING_STARTED.md           # Detailed setup guide
├── QUICK_START.md               # Common tasks reference
│
├── COMPARISON_SUMMARY.md        # Quick comparison with work repos (5 min)
├── CONFIG_COMPARISON.md         # Detailed config analysis (15 min)
├── ARCHITECTURE.md              # This file! System design overview
│
├── COMPLETE.md                  # 100% completion summary
├── PROGRESS.md                  # Implementation checklist
└── STATUS.md                    # Visual progress dashboard
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

1. Review `COMPARISON_SUMMARY.md` to understand gaps
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


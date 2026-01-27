# Core Components vs Brand Libraries: Structure Comparison

## Purpose & Philosophy

### `@dbarrett24/core-components` (New!)
**Purpose**: Headless component library providing behavior and accessibility
- ✅ **What it includes**: Logic, state management, accessibility, event handling
- ❌ **What it excludes**: Visual styling, brand-specific variants, colors

### `@dbarrett24/basketball-training-ui` & `@dbarrett24/professional-brand-ui`
**Purpose**: Styled component libraries with brand identity
- ✅ **What they include**: Visual styling, brand variants, themed colors
- ✅ **Built on**: Core components (will be after refactoring)

---

## Directory Structure Comparison

### Core Components (Shared Config)
```
shared-configs/core-components/
├── .storybook/                    # ✨ TO BE ADDED
│   ├── main.ts
│   └── preview.tsx
├── src/
│   ├── Button/
│   │   ├── Button.tsx             # Headless implementation
│   │   ├── Button.types.ts        # Props interface
│   │   ├── Button.spec.tsx        # Unit tests
│   │   └── Button.stories.tsx     # ✨ TO BE ADDED
│   ├── Input/
│   │   ├── Input.tsx              # Headless implementation
│   │   ├── Input.types.ts         # Props interface
│   │   ├── Input.spec.tsx         # Unit tests
│   │   └── Input.stories.tsx      # ✨ TO BE ADDED
│   └── index.ts                   # Exports
├── testing/
│   └── setupTests.ts
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── jest.config.js
└── .eslintrc.js
```

### Brand Library (e.g., Basketball Training UI)
```
brand-libraries/basketball-training-ui/
├── .storybook/
│   ├── main.ts                    # ✅ EXISTS
│   └── preview.tsx                # ✅ EXISTS (includes theme CSS)
├── src/
│   ├── components/
│   │   ├── Button.tsx             # Styled wrapper
│   │   ├── Button.spec.tsx        # Unit tests
│   │   └── Button.stories.tsx    # ✅ EXISTS (brand variants)
│   ├── theme/
│   │   └── styles.css             # ✅ Tailwind CSS + brand tokens
│   └── index.ts
├── dist/                          # Built output
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── jest.config.js
├── postcss.config.js              # ✅ PostCSS for Tailwind
├── tailwind.config.js             # ✅ Brand-specific theme
└── .eslintrc.js
```

---

## Key Differences

### 1. **Component Implementation**

#### Core Components (Headless)
```typescript
// NO STYLING - Just behavior & accessibility
export const Button = ({
    children,
    isDisabled = false,
    isLoading = false,
    onClick,
    className,  // Accepts className from consumer
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={isDisabled || isLoading}
            onClick={onClick}
            aria-busy={isLoading}
            className={className}  // Styling controlled by consumer
            {...props}
        >
            {children}
        </button>
    );
};
```

#### Brand Library (Styled)
```typescript
// FULL STYLING - Brand identity applied
export const Button = ({
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                'font-semibold rounded-md transition-colors',
                
                // Brand variant styles
                variant === 'primary' && 'bg-interactive-primary text-text-inverse',
                variant === 'outline' && 'border-2 border-interactive-primary',
                
                // Size styles
                size === 'md' && 'px-md py-xs text-base',
                
                className
            )}
            {...props}
        />
    );
};
```

### 2. **Dependencies**

| Feature | Core Components | Brand Libraries |
|---------|----------------|-----------------|
| **React** | ✅ Peer dependency | ✅ Peer dependency |
| **Theme System** | ❌ No dependency | ✅ Depends on `@dbarrett24/theme-system` |
| **Tailwind CSS** | ❌ No Tailwind | ✅ Full Tailwind setup |
| **PostCSS** | ❌ Not needed | ✅ Required for Tailwind |
| **Storybook** | 🔄 TO BE ADDED | ✅ Full setup |
| **Jest/RTL** | ✅ Full test suite | ✅ Full test suite |

### 3. **Package.json Scripts**

| Script | Core Components | Brand Libraries |
|--------|----------------|-----------------|
| `build` | ✅ tsup only | ✅ tsup only |
| `dev` | ✅ tsup watch | ✅ Concurrent: tsup + storybook |
| `test` | ✅ Jest | ✅ Jest |
| `storybook` | 🔄 TO BE ADDED | ✅ `storybook dev -p 6006` |
| `build-storybook` | 🔄 TO BE ADDED | ✅ Build static storybook |

### 4. **Storybook Stories**

#### Core Components (Will Show Unstyled Behavior)
```typescript
// Shows headless components with minimal styling
export const Primary: Story = {
    args: {
        children: 'Click me',
        isDisabled: false,
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        children: 'Submit',
        isLoading: true,
    },
};
```

#### Brand Library (Shows Brand Variants)
```typescript
// Shows fully styled brand components
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Start Training',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex gap-md">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
        </div>
    ),
};
```

---

## Usage Pattern (After Integration)

### Step 1: Core Component Provides Foundation
```typescript
// @dbarrett24/core-components
export const Button = ({ isLoading, className, ... }) => {
    // Handles: accessibility, loading state, events
    return <button aria-busy={isLoading} className={className} ... />;
};
```

### Step 2: Brand Library Wraps & Styles
```typescript
// @dbarrett24/basketball-training-ui
import { Button as CoreButton } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

export const Button = ({ variant, size, ...props }) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                'font-semibold rounded-md',
                variant === 'primary' && 'bg-orange-600 hover:bg-orange-700',
                size === 'md' && 'px-4 py-2',
            )}
        />
    );
};
```

### Step 3: Applications Use Brand Libraries
```typescript
// Your Next.js app
import { Button } from '@dbarrett24/basketball-training-ui';

export const MyPage = () => {
    return <Button variant="primary" size="lg">Play Now</Button>;
};
```

---

## Benefits of This Architecture

### For Core Components
- ✅ **Single source of truth** for behavior
- ✅ **Accessibility** implemented once
- ✅ **Bug fixes** benefit all brands
- ✅ **Testability** at the behavior level
- ✅ **Framework agnostic** styling

### For Brand Libraries
- ✅ **Focus on design** not behavior
- ✅ **Rapid development** with reliable foundation
- ✅ **Brand consistency** through styled variants
- ✅ **Visual testing** in Storybook
- ✅ **Type safety** from core types

### For Applications
- ✅ **Complete components** ready to use
- ✅ **Brand switching** by changing imports
- ✅ **Consistent UX** across all brands
- ✅ **Battle-tested** behavior

---

## Next Steps

### For Core Components
1. ✅ Add Storybook configuration
2. ✅ Create .stories.tsx files for each component
3. ✅ Document behavior patterns
4. 🔄 Add more core components (Checkbox, Select, etc.)

### For Brand Libraries
1. 🔄 Refactor to use core components
2. 🔄 Remove duplicated behavior logic
3. 🔄 Focus stories on visual variants
4. 🔄 Add brand-specific composite components

---

## File Size Comparison

### Core Components
- **Focus**: Small, focused on behavior
- **Bundle**: ~10-15KB (minified)
- **No CSS**: Zero styling overhead

### Brand Libraries
- **Focus**: Visual polish and brand identity
- **Bundle**: ~20-30KB (minified + CSS)
- **CSS**: Tailwind utility classes included

---

## Summary

| Aspect | Core Components | Brand Libraries |
|--------|----------------|-----------------|
| **Purpose** | Behavior & A11y | Visual Styling |
| **Styling** | None (headless) | Full Tailwind |
| **Storybook** | Behavioral docs | Visual showcase |
| **Dependencies** | Minimal | Theme system + CSS |
| **Updates** | Rare (stable API) | Frequent (design changes) |
| **Testing Focus** | Unit tests (behavior) | Visual regression |
| **Consumers** | Brand libraries | Applications |

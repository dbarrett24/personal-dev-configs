# Storybook Integration Guide

## Overview

Core components are documented in the **centralized Storybook instance** located at `apps/docs/`. This single Storybook showcases components from all packages (core and brand-specific) with theme switching capability.

## Running Storybook

### Development Mode

From the workspace root:
```bash
# Run centralized Storybook
pnpm storybook:core

# Or run brand-specific Storybook variants
pnpm storybook:basketball
pnpm storybook:professional
```

Storybook will be available at: **http://localhost:6006**

### Build Static Storybook
```bash
pnpm build-storybook:core
pnpm build-storybook:basketball
pnpm build-storybook:professional
```

This creates static sites in `apps/docs/storybook-static/` that can be deployed.

## Architecture

### Centralized Storybook (apps/docs/)

**Single Location**: All stories live in `apps/docs/stories/`
- Core component stories: `apps/docs/stories/core/`
- Brand-specific stories: `apps/docs/stories/basketball/`, `apps/docs/stories/professional/`

**Theme Switching**: Storybook includes a theme selector to preview components with different brand themes:
- Default (neutral theme)
- Basketball Training (orange primary)
- Professional Brand (blue primary)

**Benefits**:
- ✅ Single source of truth for component documentation
- ✅ Easy brand comparison side-by-side
- ✅ No duplicate Storybook configurations
- ✅ Consistent documentation patterns

### Component Pattern

Components are **fully-styled, theme-aware** (not headless):
- Use semantic tokens from `@dbarrett24/theme-system`
- Work across all brands via CSS variable swapping
- No need for inline styling in stories

## Story Structure

### Typical Story File

```typescript
// apps/docs/stories/core/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dbarrett24/core-components';

const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
    args: {
        children: 'Solid Button',
        variant: 'solid',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        variant: 'outline',
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading...',
        isLoading: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex gap-md">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};
```

### No Inline Styling Needed

Components are already styled with semantic tokens, so stories don't need to add styling:

```typescript
// ✅ CORRECT - Component uses semantic tokens
export const Primary: Story = {
    args: {
        children: 'Click Me',
        variant: 'solid',
    },
};

// ❌ AVOID - No need for inline classes (component is already styled)
export const Primary: Story = {
    args: {
        children: 'Click Me',
        className: 'bg-blue-500 text-white px-4 py-2', // Redundant!
    },
};
```

### Theme Switching in Stories

Use Storybook's theme selector (in toolbar) to preview components with different brand themes. No code changes needed in stories - CSS variables automatically swap.

## Documentation Features

### Auto-Generated Docs
Storybook automatically generates documentation from:
- ✅ JSDoc comments on components
- ✅ TypeScript prop types
- ✅ Story descriptions
- ✅ ArgTypes definitions

### Controls Panel
Interactive controls allow you to:
- Change prop values in real-time
- Test different states
- Verify accessibility attributes
- See event handlers fire (Actions panel)

### Accessibility Testing
Storybook includes accessibility audits via `@storybook/addon-a11y`:
- ✅ ARIA attribute validation
- ✅ Color contrast checking
- ✅ Keyboard navigation testing
- ✅ Screen reader compatibility

## Using Storybook for Development

### 1. Testing New Core Components
When adding a new component to `@dbarrett24/core-components`:

1. Create the component:
```
shared-configs/core-components/src/
├── MyComponent/
│   ├── MyComponent.tsx
│   ├── MyComponent.types.ts
│   └── MyComponent.spec.tsx
```

2. Build the core-components package:
```bash
pnpm build:core
```

3. Create stories in centralized location:
```
apps/docs/stories/core/
└── MyComponent.stories.tsx
```

4. Run Storybook:
```bash
pnpm storybook:core
```

5. View at http://localhost:6006 under "Core/MyComponent"

### 2. Verifying Accessibility
Use Storybook's accessibility addon to:
- Check ARIA attributes
- Verify keyboard navigation
- Test screen reader support
- Validate color contrast
- Test focus management

### 3. Testing Across Brands
Use the theme selector in Storybook's toolbar to:
- Switch between brand themes
- Verify component appearance with different color schemes
- Ensure semantic tokens are used correctly
- Test responsive behavior

### 4. Documenting Behavior
Stories serve as living documentation:
- Show all possible states (default, loading, disabled, error)
- Demonstrate proper usage patterns
- Provide interactive examples
- Explain accessibility features

## Configuration Files

### `apps/docs/.storybook/main.ts`
Configures Storybook:
- Story file locations: `../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- Addons: essentials, a11y, interactions
- Framework: React + Vite

### `apps/docs/.storybook/preview.tsx`
Configures story rendering:
- Theme decorator (for theme switching)
- Global styles (CSS imports)
- Control matchers
- Background options
- Viewport configurations

### `apps/docs/.storybook/themes/`
Theme definitions for Storybook UI customization (not component themes)

## Best Practices

### DO:
- ✅ Show all component states (default, loading, disabled, error, etc.)
- ✅ Document accessibility features in story descriptions
- ✅ Use semantic prop values (`variant="solid"`, not arbitrary classes)
- ✅ Group related stories under proper categories (`Core/`, `Basketball/`, etc.)
- ✅ Write JSDoc comments for auto-generated docs
- ✅ Test components across all brand themes using theme selector

### DON'T:
- ❌ Add inline Tailwind classes to stories (components are already styled)
- ❌ Create separate Storybook instances per package
- ❌ Duplicate stories for each brand (use theme switcher instead)
- ❌ Test visual appearance manually (use visual regression tools)
- ❌ Skip accessibility testing (use built-in a11y addon)

## Brand Libraries and Storybook

### How Brand Components Appear in Storybook

Brand libraries (basketball-training-ui, professional-brand-ui) typically **re-export** core components:

```typescript
// brand-libraries/basketball-training-ui/src/Button/Button.tsx
export { Button } from '@dbarrett24/core-components';
export type { ButtonProps } from '@dbarrett24/core-components';
```

Stories for these can either:
1. **Reuse core stories** with theme selector (recommended)
2. Create brand-specific stories if there's unique behavior/customization

### Brand-Specific Stories (When Needed)

Only create brand-specific stories if:
- Brand adds custom variants beyond core
- Brand has unique component behavior
- Brand has specific usage patterns to document

Example structure:
```
apps/docs/stories/
├── core/
│   ├── Button.stories.tsx       # Core component stories
│   └── Input.stories.tsx
├── basketball/
│   └── CustomCard.stories.tsx   # Basketball-only component
└── professional/
    └── Dashboard.stories.tsx    # Professional-only component
```

## Build Dependencies

**Important**: Storybook imports from package `dist/` directories, not `src/`.

Before viewing components in Storybook, ensure packages are built:

```bash
# Build theme system (required by all)
pnpm build:theme

# Build core components
pnpm build:core

# Build brand libraries (if testing brand-specific components)
pnpm build:basketball
pnpm build:professional
```

**Development Workflow**:
1. Make changes to component source (`src/`)
2. Rebuild the package: `pnpm build:core`
3. Restart Storybook or wait for hot reload
4. View updated component

**Tip**: Use watch mode during active development:
```bash
# Terminal 1: Watch and rebuild on changes
cd shared-configs/core-components
pnpm build --watch

# Terminal 2: Run Storybook
pnpm storybook:core
```

## Next Steps

1. **View Storybook**: `pnpm storybook:core` from workspace root
2. **Browse Stories**: Navigate to http://localhost:6006
3. **Try Theme Switching**: Use toolbar theme selector to see components with different brands
4. **Add New Components**: Follow the pattern above for new core components
5. **Run Accessibility Audits**: Use the A11y addon tab for each story

## Integration with CI/CD

### Build Static Storybook
```bash
pnpm build-storybook:core
pnpm build-storybook:basketball
pnpm build-storybook:professional
```

### Deploy Options
- **Vercel/Netlify**: Auto-deploy from `apps/docs/storybook-static/`
- **Chromatic**: Visual regression testing + hosting
- **GitHub Pages**: Deploy static build
- **S3 + CloudFront**: Static hosting

### Recommended CI Setup
```yaml
- name: Build packages (required for Storybook)
  run: pnpm build

- name: Build Storybook
  run: pnpm build-storybook:core
  
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./apps/docs/storybook-static
```

## Troubleshooting

### Stories Not Showing
1. Ensure package is built: `pnpm build:core`
2. Check story file location matches glob pattern in `.storybook/main.ts`
3. Restart Storybook dev server

### Components Look Unstyled
1. Verify theme CSS is imported in `.storybook/preview.tsx`
2. Check that theme-system package is built: `pnpm build:theme`
3. Ensure Tailwind classes are generating (check browser DevTools)

### Theme Switching Not Working
1. Verify theme decorator is configured in `.storybook/preview.tsx`
2. Check that all brand CSS files exist in `theme-system/dist/css/`
3. Rebuild theme-system if CSS files are missing

### Build Errors
1. Clean and rebuild: `pnpm clean && pnpm build`
2. Check for TypeScript errors: `pnpm ts-check`
3. Verify all dependencies are installed: `pnpm install`

## Resources

- [Storybook Documentation](https://storybook.js.org/docs/react)
- [Storybook Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)
- [Theme Switching in Storybook](https://storybook.js.org/docs/react/essentials/toolbars-and-globals)
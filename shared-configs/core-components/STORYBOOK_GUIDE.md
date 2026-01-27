# Storybook Integration Guide

## Overview

Storybook has been added to `@dbarrett24/core-components` to showcase the headless components' behavior, accessibility features, and usage patterns.

## Running Storybook

### Development Mode
```bash
cd shared-configs/core-components

# Run Storybook only
pnpm storybook

# Run both Storybook and build watch (recommended for development)
pnpm dev
```

Storybook will be available at: **http://localhost:6007**

> Note: Port 6007 is used to avoid conflicts with brand libraries (which use 6006)

### Build Static Storybook
```bash
pnpm build-storybook
```

This creates a static site in `storybook-static/` that can be deployed.

## What's Included

### Stories for Each Component

#### Button Stories (`src/Button/Button.stories.tsx`)
- ✅ Default (unstyled)
- ✅ With basic styling (example)
- ✅ Disabled state
- ✅ Loading state
- ✅ Loading with custom content
- ✅ With aria-label
- ✅ Submit type
- ✅ All states showcase
- ✅ Brand library wrapper example

#### Input Stories (`src/Input/Input.stories.tsx`)
- ✅ Default (unstyled)
- ✅ With basic styling (example)
- ✅ Required field
- ✅ With error state
- ✅ With helper text
- ✅ Disabled state
- ✅ Read-only state
- ✅ Hidden label
- ✅ With start adornment
- ✅ With end adornment
- ✅ Controlled component
- ✅ All states showcase
- ✅ Brand library wrapper example

## Key Differences from Brand Library Storybook

### Core Components Storybook (Port 6007)
**Purpose**: Demonstrate behavior and accessibility
- Shows headless components
- Focuses on props and states
- Includes minimal inline styling for visibility
- Demonstrates how to wrap components
- Documents accessibility features

### Brand Library Storybook (Port 6006)
**Purpose**: Visual showcase and design system
- Shows fully styled components
- Focuses on visual variants
- Uses Tailwind CSS classes
- Demonstrates brand identity
- Includes theme/CSS imports

## Story Structure

### Minimal Inline Styling for Visibility

Because core components are headless, stories include minimal inline styling:

```typescript
// Just enough styling to make the component visible in Storybook
export const WithBasicStyling: Story = {
    args: {
        children: 'Styled Button',
        className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
    },
};
```

**Important**: This is ONLY for Storybook demonstration. Real usage should apply styling via brand libraries.

### Brand Wrapper Examples

Each component includes a "Brand Library Example" story showing proper wrapping:

```typescript
export const BrandLibraryExample: Story = {
    render: () => {
        // Demonstrates how brand libraries should wrap core components
        const BrandButton = ({ variant = 'primary', ...props }) => {
            const variants = {
                primary: 'px-4 py-2 bg-blue-600 text-white rounded-lg',
                secondary: 'px-4 py-2 bg-gray-600 text-white rounded-lg',
            };
            
            return <Button {...props} className={variants[variant]} />;
        };

        return (
            <div className="flex gap-4">
                <BrandButton variant="primary">Primary</BrandButton>
                <BrandButton variant="secondary">Secondary</BrandButton>
            </div>
        );
    },
};
```

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
Storybook includes the `@storybook/addon-essentials` which provides:
- ✅ Accessibility audits (a11y addon)
- ✅ Viewport testing
- ✅ Dark mode testing
- ✅ Controls for all props

## Using Storybook for Development

### 1. Testing New Components
When adding a new core component:
1. Create the component (`MyComponent.tsx`)
2. Create the types (`MyComponent.types.ts`)
3. Create tests (`MyComponent.spec.tsx`)
4. Create stories (`MyComponent.stories.tsx`)
5. Run `pnpm dev` to see it in Storybook

### 2. Verifying Accessibility
Use Storybook's accessibility addon to:
- Check ARIA attributes
- Verify keyboard navigation
- Test screen reader support
- Validate color contrast (minimal in core)

### 3. Documenting Behavior
Stories serve as living documentation:
- Show all possible states
- Demonstrate proper usage
- Provide copy-paste examples
- Explain accessibility features

## Configuration Files

### `.storybook/main.ts`
Configures Storybook:
- Story file locations
- Addons to load
- Framework (React + Vite)

### `.storybook/preview.tsx`
Configures story rendering:
- Background colors
- Control matchers
- Global decorators
- Default parameters

## Best Practices

### DO:
- ✅ Show all component states
- ✅ Document accessibility features
- ✅ Include behavior examples
- ✅ Demonstrate proper wrapping patterns
- ✅ Use minimal inline styling for visibility

### DON'T:
- ❌ Add complex styling systems
- ❌ Include brand-specific themes
- ❌ Use Tailwind config (no tailwind.config.js)
- ❌ Import CSS files (headless!)
- ❌ Test visual appearance (that's for brand libraries)

## Comparison with Brand Library Storybook

| Feature | Core Components | Brand Libraries |
|---------|----------------|-----------------|
| **Port** | 6007 | 6006 |
| **Purpose** | Behavior docs | Visual showcase |
| **Styling** | Minimal inline | Full Tailwind CSS |
| **Stories Focus** | States & props | Visual variants |
| **CSS Import** | None | `theme/styles.css` |
| **Tailwind Config** | ❌ No | ✅ Yes |
| **Theme System** | ❌ No | ✅ Yes |
| **Decorators** | Simple wrapper | Theme provider |

## Next Steps

1. **Run Storybook**: `cd shared-configs/core-components && pnpm storybook`
2. **View Stories**: Navigate to http://localhost:6007
3. **Explore Components**: Check out Button and Input stories
4. **Add More Components**: Follow the same pattern for new components

## Integration with CI/CD

### Build Static Storybook
```bash
pnpm build-storybook
```

### Deploy Options
- **GitHub Pages**: Deploy `storybook-static/`
- **Netlify**: Auto-deploy from `storybook-static/`
- **Chromatic**: Visual regression testing
- **S3 + CloudFront**: Static hosting

### Recommended Setup
Add to your CI pipeline:
```yaml
- name: Build Storybook
  run: pnpm build-storybook
  
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./storybook-static
```

## Troubleshooting

### Port Already in Use
If port 6007 is busy, modify `.storybook/main.ts`:
```typescript
// Change port in package.json scripts
"storybook": "storybook dev -p 6008"
```

### Stories Not Showing
Ensure your stories match the glob pattern:
```typescript
// .storybook/main.ts
stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)']
```

### React Import Errors
Make sure components import React:
```typescript
import React from 'react';
```

## Resources

- [Storybook Documentation](https://storybook.js.org/docs/react)
- [Storybook Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)

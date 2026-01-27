# Hammer UI Architecture Comparison

## Why We Chose the Hammer UI Pattern

After careful consideration, we adopted the Hammer UI architecture pattern over headless components for our core component library. This document explains the rationale and compares the approaches.

## Architecture Decision

### Hammer UI Style (Our Choice)

**Core components are fully styled** with:
- Complete Tailwind CSS classes
- Multiple variants (filled, outline, ghost)
- Multiple styles (primary, secondary, neutral, critical)
- Built-in loading states
- Icon support
- Theme token integration

**Brand libraries are thin wrappers** that:
- Re-export core components
- Add minor styling tweaks (shadows, borders, animations)
- Override specific variants if needed
- Focus on brand identity, not behavior

### Why This Works for Us

1. **Easier Component Porting**: Can bring Hammer UI components with minimal changes - just swap theme tokens
2. **Faster Brand Creation**: New brands are ~90% less code per component (10-20 lines vs 60+ lines)
3. **Consistent Design**: All brands share core structure and patterns
4. **Moderate Customization**: Perfect for brands that are similar but distinct (our use case)
5. **Maintained Flexibility**: Can still override deeply when needed via className

## When to Use Each Approach

### Hammer Style (Our Choice)
✅ **Use when:**
- Brands share a design language
- Differences are primarily colors, shadows, spacing
- Want fast brand creation
- Need consistency across brands
- Moderate customization is sufficient

### Headless Style
✅ **Use when:**
- Brands have radically different designs
- Need maximum flexibility
- Each brand has unique interaction patterns
- Design systems are completely independent

## Code Comparison

### Hammer UI Approach (What We Built)

**Core Component** (~150 lines, fully styled):
```typescript
// @dbarrett24/core-components/src/Button/Button.tsx
export const Button = ({ 
    variant = 'filled',
    style = 'primary',
    size = 'md',
    className,
    ...props 
}) => {
    return (
        <button
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                'font-semibold rounded-md',
                'transition-colors duration-200',
                
                // Variant + Style combinations
                variant === 'filled' && style === 'primary' && 
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover',
                // ... 12 more variant/style combinations
                
                // Size styles
                size === 'sm' && 'px-sm py-2xs text-sm gap-xs',
                size === 'md' && 'px-md py-xs text-base gap-sm',
                size === 'lg' && 'px-lg py-sm text-lg gap-md',
                
                className
            )}
            {...props}
        />
    );
};
```

**Brand Wrapper** (~15 lines, adds tweaks):
```typescript
// @dbarrett24/basketball-training-ui/src/Button/Button.tsx
export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                // Add basketball-specific effects
                'shadow-md hover:shadow-lg',
                'active:scale-98 transition-transform',
                className
            )}
        />
    );
};
```

### Headless Approach (Alternative)

**Core Component** (~60 lines, no styling):
```typescript
// Core provides behavior only
export const Button = ({ className, ...props }) => {
    return <button className={className} {...props} />;
};
```

**Brand Implementation** (~60 lines per brand):
```typescript
// Each brand implements full styling
export const Button = ({ variant, size, ...props }) => {
    return (
        <CoreButton
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                // ... 50+ lines of styling per brand
            )}
            {...props}
        />
    );
};
```

## Styling and Animation Per Brand

With the Hammer UI approach, styling and animating per brand is **easy**:

### Basketball Training Brand
```typescript
// Just add brand-specific effects
className={cn(
    'shadow-md hover:shadow-lg',           // Depth
    'active:scale-98 transition-transform', // Playful animation
    className
)}
```

### Professional Brand
```typescript
// Different effects for professional feel
className={cn(
    'shadow-sm',      // Subtle shadow
    'rounded-sm',     // Sharp corners
    className
)}
```

### When You Need More Customization

If a brand needs a completely custom variant:
```typescript
export const Button = ({ variant, ...props }) => {
    // Custom implementation for special case
    if (variant === 'special') {
        return <CustomButton {...props} />;
    }
    
    // Use core for standard cases
    return <CoreButton variant={variant} {...props} />;
};
```

## Benefits After Refactoring

1. **Easier Hammer Porting**: Copy components, swap theme tokens, done
2. **Faster Brands**: ~90% less code per brand component
3. **Consistent UX**: All brands share patterns
4. **Easy Customization**: Add className tweaks when needed
5. **Maintainable**: Fix once in core, all brands benefit
6. **Professional**: Components look good immediately

## Comparison to Hammer UI Repository

Our architecture closely mirrors the Hammer UI pattern:

### Similarities
- ✅ Fully-styled core components
- ✅ Multiple variants and styles
- ✅ Brand libraries as thin wrappers
- ✅ Theme token integration
- ✅ Consistent API across brands

### Our Adaptations
- 🔧 Uses our theme-system instead of Hammer's theme
- 🔧 Different variant names (filled/outline/ghost vs Hammer's variants)
- 🔧 Integrated with our existing tooling (tsup, jest, storybook)
- 🔧 Tailored to our specific brand needs

## Conclusion

The Hammer UI architecture pattern is the right choice for our needs because:
1. Our brands are **moderately different** (not radically different)
2. We want **fast brand creation**
3. We plan to **port components from Hammer UI**
4. We value **consistency** across brands
5. We need **easy styling and animation** per brand

This approach gives us the best balance of consistency, flexibility, and development speed.

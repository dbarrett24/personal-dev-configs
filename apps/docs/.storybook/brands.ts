/**
 * Brand Registry for Storybook Theme Switcher
 *
 * This file centralizes brand metadata and CSS class mappings.
 * Each brand corresponds to a published brand library package.
 *
 * To add a new brand:
 * 1. Add brand to Brand type union
 * 2. Add CSS class mapping to brandsToCSSClass
 * 3. Add human-readable label to brandLabels
 * 4. Import brand CSS in preview.tsx
 */

export type Brand = 'default' | 'basketball' | 'professional';

/**
 * Maps brand identifiers to their CSS class selectors
 * These classes are defined in each brand's theme CSS file
 */
export const brandsToCSSClass: Record<Brand, string> = {
    default: 'brand-default',
    basketball: 'brand-basketball',
    professional: 'brand-professional',
};

/**
 * Human-readable labels for Storybook UI
 */
export const brandLabels: Record<Brand, string> = {
    default: 'Default (Neutral)',
    basketball: 'Basketball Training',
    professional: 'Professional Brand',
};

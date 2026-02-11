/**
 * CSS variable wrapping utilities for Tailwind CSS configuration
 *
 * These utilities handle the conversion of CSS custom property names
 * into proper var() references, with optional opacity support for
 * Tailwind's alpha modifier syntax (e.g., `bg-primary-500/50`).
 *
 * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/utils/wrapVar.ts
 */

/** Wraps a CSS variable name in var() */
export const wrapVar = (value: string): string => `var(${value})`;

/** Wraps a CSS variable name in rgb(var()) */
export const wrapVarRgb = (value: string): string => `rgb(var(${value}))`;

/** Wraps a variable reference with a fixed percentage opacity */
export const wrapOpacity = (wrappedVariable: string, percentOpacity: number): string =>
    `rgb(${wrappedVariable} / ${percentOpacity}%)`;

/** Wraps a variable reference with Tailwind's alpha-value placeholder for dynamic opacity */
export const wrapVariableOpacity = (wrappedVariable: string): string => `rgb(${wrappedVariable} / <alpha-value>)`;

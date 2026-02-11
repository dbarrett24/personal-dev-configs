/**
 * Border radius configuration for Tailwind CSS
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/borderRadius.ts
 */

// @see https://tailwindcss.com/docs/customizing-colors#using-css-variables

import {
    buttonBorderRadius,
    checkboxBorderRadius,
    containerBorderRadius,
    inputBorderRadius,
    searchInputBorderRadius,
} from './cssVars';
import { wrapVar } from '../utils/wrapVar';

export const borderRadius = {
    button: wrapVar(buttonBorderRadius),
    checkbox: wrapVar(checkboxBorderRadius),
    container: wrapVar(containerBorderRadius),
    full: '9999px',
    input: wrapVar(inputBorderRadius),
    lg: '16px',
    md: '8px',
    none: '0',
    'search-input': wrapVar(searchInputBorderRadius),
    sm: '4px',
    xl: '32px',
    xs: '2px',
} as const;

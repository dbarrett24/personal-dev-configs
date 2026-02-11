/**
 * Box shadow configuration for Tailwind CSS
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/boxShadow.ts
 */

import { shadow01, shadow02, shadow03, shadow04, shadow05 } from './cssVars';
import { wrapVar } from '../utils/wrapVar';

// @see https://tailwindcss.com/docs/customizing-colors#using-css-variables

export const boxShadow: Record<string, string> = {
    '01': wrapVar(shadow01),
    '02': wrapVar(shadow02),
    '03': wrapVar(shadow03),
    '04': wrapVar(shadow04),
    '05': wrapVar(shadow05),
};

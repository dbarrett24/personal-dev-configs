/**
 * Font family configuration for Tailwind CSS
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/fontFamily.ts
 */

import { fontFamilyPrimary, fontFamilySecondary } from './cssVars';
import { wrapVar } from '../utils/wrapVar';

export const fontFamily = {
    primary: wrapVar(fontFamilyPrimary),
    secondary: wrapVar(fontFamilySecondary),
};

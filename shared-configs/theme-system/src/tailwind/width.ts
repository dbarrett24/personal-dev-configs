/**
 * Layout width configuration for Tailwind CSS
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/width.ts
 */

import { widthDense, widthPage } from './cssVars';
import { wrapVar } from '../utils/wrapVar';

export const width = {
    dense: wrapVar(widthDense),
    page: wrapVar(widthPage),
} as const;

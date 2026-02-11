/**
 * Typography component classes for Tailwind CSS plugin
 *
 * Defines .hui-text-* and .hui-link-* utility classes that apply
 * complete typography styles (font, size, weight, spacing, line-height).
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/text.ts
 */

import {
    fontWeightBodyPrimary,
    fontWeightBodySecondary,
    fontWeightCaption,
    fontWeightH1,
    fontWeightH2,
    fontWeightH3,
    fontWeightH4,
    fontWeightH5,
    fontWeightH6,
    fontWeightLabelMini,
    fontWeightLabelStrong,
    letterSpacingBodyPrimary,
    letterSpacingBodySecondary,
    letterSpacingCaption,
    letterSpacingH1,
    letterSpacingH1Mobile,
    letterSpacingH2,
    letterSpacingH2Mobile,
    letterSpacingH3,
    letterSpacingH3Mobile,
    letterSpacingH4,
    letterSpacingH5,
    letterSpacingH6,
    letterSpacingLabelMini,
    letterSpacingLabelStrong,
    textTransformH6,
    textTransformLabelMini,
} from './cssVars';
import { fontFamily } from './fontFamily';
import { screens } from './screens';
import { wrapVar } from '../utils/wrapVar';
import { CSSRuleObject } from 'tailwindcss/types/config';

export const textComponents = {
    '.hui-link-md': {
        fontFamily: fontFamily.primary,
        fontSize: '16px',
        fontWeight: wrapVar(fontWeightBodyPrimary),
        letterSpacing: wrapVar(letterSpacingBodyPrimary),
        lineHeight: '24px',
    },
    '.hui-link-sm': {
        fontFamily: fontFamily.primary,
        fontSize: '14px',
        fontWeight: wrapVar(fontWeightBodyPrimary),
        letterSpacing: wrapVar(letterSpacingBodyPrimary),
        lineHeight: '22px',
    },
    '.hui-link-xs': {
        fontFamily: fontFamily.primary,
        fontSize: '12px',
        fontWeight: wrapVar(fontWeightBodyPrimary),
        letterSpacing: wrapVar(letterSpacingBodyPrimary),
        lineHeight: '18px',
    },
    '.hui-text-body-primary': {
        fontFamily: fontFamily.primary,
        fontSize: '16px',
        fontWeight: wrapVar(fontWeightBodyPrimary),
        letterSpacing: wrapVar(letterSpacingBodyPrimary),
        lineHeight: '24px',
    },
    '.hui-text-body-secondary': {
        fontFamily: fontFamily.primary,
        fontSize: '14px',
        fontWeight: wrapVar(fontWeightBodySecondary),
        letterSpacing: wrapVar(letterSpacingBodySecondary),
        lineHeight: '22px',
    },
    '.hui-text-caption': {
        fontFamily: fontFamily.primary,
        fontSize: '12px',
        fontWeight: wrapVar(fontWeightCaption),
        letterSpacing: wrapVar(letterSpacingCaption),
        lineHeight: '18px',
    },
    '.hui-text-h1': {
        fontFamily: fontFamily.secondary,
        fontSize: '32px',
        fontWeight: wrapVar(fontWeightH1),
        letterSpacing: wrapVar(letterSpacingH1),
        lineHeight: '48px',
        [`@media (width < ${screens.smMax.max})`]: {
            fontSize: '24px',
            letterSpacing: wrapVar(letterSpacingH1Mobile),
            lineHeight: '36px',
        },
    },
    '.hui-text-h2': {
        fontFamily: fontFamily.secondary,
        fontSize: '24px',
        fontWeight: wrapVar(fontWeightH2),
        letterSpacing: wrapVar(letterSpacingH2),
        lineHeight: '36px',
        [`@media (width < ${screens.smMax.max})`]: {
            fontSize: '20px',
            letterSpacing: wrapVar(letterSpacingH2Mobile),
            lineHeight: '30px',
        },
    },
    '.hui-text-h3': {
        fontFamily: fontFamily.secondary,
        fontSize: '20px',
        fontWeight: wrapVar(fontWeightH3),
        letterSpacing: wrapVar(letterSpacingH3),
        lineHeight: '30px',
        [`@media (width < ${screens.smMax.max})`]: {
            fontSize: '16px',
            letterSpacing: wrapVar(letterSpacingH3Mobile),
            lineHeight: '24px',
        },
    },
    '.hui-text-h4': {
        fontFamily: fontFamily.secondary,
        fontSize: '16px',
        fontWeight: wrapVar(fontWeightH4),
        letterSpacing: wrapVar(letterSpacingH4),
        lineHeight: '24px',
    },
    '.hui-text-h5': {
        fontFamily: fontFamily.primary,
        fontSize: '16px',
        fontWeight: wrapVar(fontWeightH5),
        letterSpacing: wrapVar(letterSpacingH5),
        lineHeight: '24px',
    },
    '.hui-text-h6': {
        fontFamily: fontFamily.primary,
        fontSize: '14px',
        fontWeight: wrapVar(fontWeightH6),
        letterSpacing: wrapVar(letterSpacingH6),
        lineHeight: '22px',
        textTransform: wrapVar(textTransformH6),
    },
    '.hui-text-label-mini': {
        fontFamily: fontFamily.primary,
        fontSize: '12px',
        fontWeight: wrapVar(fontWeightLabelMini),
        letterSpacing: wrapVar(letterSpacingLabelMini),
        lineHeight: '14px',
        textTransform: wrapVar(textTransformLabelMini),
    },
    '.hui-text-label-mini-strong': {
        fontFamily: fontFamily.primary,
        fontSize: '12px',
        fontWeight: wrapVar(fontWeightLabelStrong),
        letterSpacing: wrapVar(letterSpacingLabelMini),
        lineHeight: '14px',
        textTransform: wrapVar(textTransformLabelMini),
    },
    '.hui-text-label-strong': {
        fontFamily: fontFamily.primary,
        fontSize: '14px',
        fontWeight: wrapVar(fontWeightLabelStrong),
        letterSpacing: wrapVar(letterSpacingLabelStrong),
        lineHeight: '22px',
    },
} satisfies Record<string, CSSRuleObject>;

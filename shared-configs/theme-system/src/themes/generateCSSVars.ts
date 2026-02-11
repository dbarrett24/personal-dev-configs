import type * as CSSVars from '../tailwind/cssVars';
import { StepObject, steps } from '../utils/color';

export type CSSVariables = (typeof CSSVars)[keyof typeof CSSVars];
export type NonColorCSSVariables = Exclude<
    CSSVariables,
    | '--color-primary-50'
    | '--color-primary-100'
    | '--color-primary-200'
    | '--color-primary-300'
    | '--color-primary-400'
    | '--color-primary-500'
    | '--color-primary-600'
    | '--color-primary-700'
    | '--color-primary-800'
    | '--color-primary-900'
    | '--color-secondary-50'
    | '--color-secondary-100'
    | '--color-secondary-200'
    | '--color-secondary-300'
    | '--color-secondary-400'
    | '--color-secondary-500'
    | '--color-secondary-600'
    | '--color-secondary-700'
    | '--color-secondary-800'
    | '--color-secondary-900'
    | '--color-tertiary-50'
    | '--color-tertiary-100'
    | '--color-tertiary-200'
    | '--color-tertiary-300'
    | '--color-tertiary-400'
    | '--color-tertiary-500'
    | '--color-tertiary-600'
    | '--color-tertiary-700'
    | '--color-tertiary-800'
    | '--color-tertiary-900'
    | '--color-info-50'
    | '--color-info-100'
    | '--color-info-200'
    | '--color-info-300'
    | '--color-info-400'
    | '--color-info-500'
    | '--color-info-600'
    | '--color-info-700'
    | '--color-info-800'
    | '--color-info-900'
    | '--color-success-50'
    | '--color-success-100'
    | '--color-success-200'
    | '--color-success-300'
    | '--color-success-400'
    | '--color-success-500'
    | '--color-success-600'
    | '--color-success-700'
    | '--color-success-800'
    | '--color-success-900'
    | '--color-critical-50'
    | '--color-critical-100'
    | '--color-critical-200'
    | '--color-critical-300'
    | '--color-critical-400'
    | '--color-critical-500'
    | '--color-critical-600'
    | '--color-critical-700'
    | '--color-critical-800'
    | '--color-critical-900'
    | '--color-warning-50'
    | '--color-warning-100'
    | '--color-warning-200'
    | '--color-warning-300'
    | '--color-warning-400'
    | '--color-warning-500'
    | '--color-warning-600'
    | '--color-warning-700'
    | '--color-warning-800'
    | '--color-warning-900'
    | '--color-surface-50'
    | '--color-surface-100'
    | '--color-surface-200'
    | '--color-surface-300'
    | '--color-surface-400'
    | '--color-surface-500'
    | '--color-surface-600'
    | '--color-surface-700'
    | '--color-surface-800'
    | '--color-surface-900'
>;

export type ColorAliases =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'surface';
export type ColorAliasesObject = Record<ColorAliases, StepObject>;

export const makeColorCSSVarsFromObject = (colors: ColorAliasesObject): Record<string, string> => {
    const colorVars: Record<string, string> = {};
    for (const [key, value] of Object.entries(colors)) {
        for (const shade of steps) {
            const varName = `--color-${key}-${shade}`;
            colorVars[varName] = `${value[shade]}`;
        }
    }

    return colorVars;
};

export const generateCSSVars = (vars: Record<string, string>, className: string): string => {
    const classBlock = `.${className} {\n${Object.entries(vars)
        .map(([key, value]) => `    ${key}: ${value};`)
        .join('\n')}\n}`;

    const rootBlock = `:root {\n${Object.entries(vars)
        .map(([key, value]) => `    ${key}: ${value};`)
        .join('\n')}\n}`;

    return `${classBlock}\n\n${rootBlock}`;
};

import { cn } from '@dbarrett24/theme-system';

/**
 * Color class constants shared between Button and IconButton components.
 * Each constant represents a combination of variant (filled/outlined/transparent) and style (primary/critical/neutral/inverse).
 */

export const filledPrimaryClasses = cn(
    'bg-primary-500 text-text-inverse outline-transparent hover:bg-primary-700 active:bg-primary-900 disabled:cursor-not-allowed disabled:bg-background-disabled aria-busy:cursor-not-allowed aria-busy:bg-primary-500 aria-busy:text-transparent'
);

export const filledCriticalClasses = cn(
    'bg-critical-500 text-text-inverse outline-transparent hover:bg-critical-700 active:bg-critical-900 disabled:cursor-not-allowed disabled:bg-background-disabled aria-busy:cursor-not-allowed aria-busy:bg-critical-500 aria-busy:text-transparent'
);

export const filledNeutralClasses = cn(
    'bg-surface-500 text-text-inverse outline-transparent hover:bg-surface-700 active:bg-surface-900 disabled:cursor-not-allowed disabled:bg-background-disabled aria-busy:cursor-not-allowed aria-busy:bg-surface-500 aria-busy:text-transparent'
);

export const filledInverseClasses = cn(
    'bg-surface-50 text-primary-500 outline-transparent focus:hui-focus-visible-outline-inverse hover:bg-surface-100 active:bg-surface-200 disabled:cursor-not-allowed disabled:bg-background-disabled aria-busy:cursor-not-allowed aria-busy:text-transparent'
);

export const outlinedNeutralClasses = cn(
    'bg-background-primary text-surface-500 outline outline-1 outline-current hover:bg-surface-100 hover:text-surface-700 active:bg-surface-200 active:text-surface-900 disabled:cursor-not-allowed disabled:bg-background-disabled disabled:outline-border-disabled aria-busy:cursor-not-allowed aria-busy:bg-background-primary aria-busy:text-transparent aria-busy:outline-surface-500'
);
export const outlinedPrimaryClasses = cn(
    'bg-background-primary text-primary-500 outline outline-1 outline-current hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-900 disabled:cursor-not-allowed disabled:bg-background-disabled disabled:outline-border-disabled aria-busy:cursor-not-allowed aria-busy:bg-background-primary aria-busy:text-transparent aria-busy:outline-primary-500'
);

export const outlinedCriticalClasses = cn(
    'bg-background-primary text-critical-500 outline outline-1 outline-current hover:bg-critical-100 hover:text-critical-700 active:bg-critical-200 active:text-critical-900 disabled:cursor-not-allowed disabled:bg-background-disabled disabled:outline-border-disabled aria-busy:cursor-not-allowed aria-busy:bg-background-primary aria-busy:text-transparent aria-busy:outline-critical-500'
);

export const outlinedInverseClasses = cn(
    'outline-solid bg-transparent text-icon-inverse outline outline-1 outline-surface-50 focus:hui-focus-visible-outline-inverse hover:bg-background-hover-inverse focus:outline-focus-inverse active:bg-background-pressed-inverse disabled:cursor-not-allowed disabled:text-text-disabled disabled:outline-border-disabled aria-busy:cursor-not-allowed aria-busy:text-transparent'
);

export const transparentPrimaryClasses = cn(
    'bg-transparent text-primary-500 outline-transparent hover:bg-background-hover hover:text-primary-700 active:bg-background-pressed active:text-primary-900 disabled:cursor-not-allowed disabled:bg-transparent aria-busy:cursor-not-allowed aria-busy:bg-background-pressed aria-busy:text-transparent'
);

export const transparentCriticalClasses = cn(
    'bg-transparent text-critical-500 outline-transparent hover:bg-background-hover hover:text-critical-700 active:bg-background-pressed active:text-critical-900 disabled:cursor-not-allowed disabled:bg-transparent aria-busy:cursor-not-allowed aria-busy:bg-background-pressed aria-busy:text-transparent'
);

export const transparentNeutralClasses = cn(
    'bg-transparent text-surface-500 outline-transparent hover:bg-background-hover hover:text-surface-700 active:bg-background-pressed active:text-surface-900 disabled:cursor-not-allowed disabled:bg-transparent aria-busy:cursor-not-allowed aria-busy:bg-background-pressed aria-busy:text-transparent'
);

export const transparentInverseClasses = cn(
    'bg-transparent text-icon-inverse outline-transparent focus:hui-focus-visible-outline-inverse hover:bg-background-hover-inverse active:bg-background-pressed-inverse disabled:cursor-not-allowed disabled:bg-transparent aria-busy:cursor-not-allowed aria-busy:text-transparent'
);

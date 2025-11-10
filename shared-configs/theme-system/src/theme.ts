/**
 * Base theme configuration with semantic tokens
 *
 * Extracted from Hammer UI theme patterns - semantic naming for colors and sizing
 */

export const baseTheme = {
    colors: {
        // Background colors
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        'background-inverse': 'var(--background-inverse)',
        'background-overlay': 'var(--background-overlay)',

        // Text colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',
        'text-disabled': 'var(--text-disabled)',
        'text-link': 'var(--text-link)',
        'text-success': 'var(--text-success)',
        'text-warning': 'var(--text-warning)',
        'text-critical': 'var(--text-critical)',
        'text-info': 'var(--text-info)',

        // Border colors
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-focus': 'var(--border-focus)',
        'border-success': 'var(--border-success)',
        'border-warning': 'var(--border-warning)',
        'border-critical': 'var(--border-critical)',
        'border-info': 'var(--border-info)',

        // Interactive colors
        'interactive-primary': 'var(--interactive-primary)',
        'interactive-primary-hover': 'var(--interactive-primary-hover)',
        'interactive-primary-active': 'var(--interactive-primary-active)',
        'interactive-secondary': 'var(--interactive-secondary)',
        'interactive-secondary-hover': 'var(--interactive-secondary-hover)',
        'interactive-disabled': 'var(--interactive-disabled)',

        // Status colors
        'status-success': 'var(--status-success)',
        'status-success-background': 'var(--status-success-background)',
        'status-warning': 'var(--status-warning)',
        'status-warning-background': 'var(--status-warning-background)',
        'status-critical': 'var(--status-critical)',
        'status-critical-background': 'var(--status-critical-background)',
        'status-info': 'var(--status-info)',
        'status-info-background': 'var(--status-info-background)',
    },

    spacing: {
        // Semantic spacing tokens
        '3xs': 'var(--spacing-3xs, 0.125rem)', // 2px
        '2xs': 'var(--spacing-2xs, 0.25rem)', // 4px
        xs: 'var(--spacing-xs, 0.5rem)', // 8px
        sm: 'var(--spacing-sm, 0.75rem)', // 12px
        md: 'var(--spacing-md, 1rem)', // 16px
        lg: 'var(--spacing-lg, 1.5rem)', // 24px
        xl: 'var(--spacing-xl, 2rem)', // 32px
        '2xl': 'var(--spacing-2xl, 2.5rem)', // 40px
        '3xl': 'var(--spacing-3xl, 3rem)', // 48px
        '4xl': 'var(--spacing-4xl, 4rem)', // 64px
    },

    borderRadius: {
        none: '0',
        sm: 'var(--radius-sm, 0.25rem)', // 4px
        md: 'var(--radius-md, 0.5rem)', // 8px
        lg: 'var(--radius-lg, 0.75rem)', // 12px
        xl: 'var(--radius-xl, 1rem)', // 16px
        full: '9999px',
    },

    fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
    },
};

export type Theme = typeof baseTheme;


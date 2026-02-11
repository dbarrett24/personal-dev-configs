/**
 * Base theme configuration with semantic tokens
 *
 * Extracted from Hammer UI theme patterns - semantic naming for colors and sizing
 */

export const baseTheme = {
    borderRadius: {
        // Semantic component tokens
        button: 'var(--button-border-radius)',
        checkbox: 'var(--checkbox-border-radius)',
        container: 'var(--container-border-radius)',
        full: '9999px',
        input: 'var(--input-border-radius)',
        lg: 'var(--radius-lg, 0.75rem)', // 12px
        md: 'var(--radius-md, 0.5rem)', // 8px
        none: '0',
        'search-input': 'var(--search-input-border-radius)',
        sm: 'var(--radius-sm, 0.25rem)', // 4px
        xl: 'var(--radius-xl, 1rem)', // 16px
        xs: '2px',
    },

    colors: {
        // Background colors
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',
        'background-tertiary': 'var(--color-background-tertiary)',
        'background-inverse': 'var(--color-background-inverse)',
        'background-overlay': 'var(--color-background-overlay)',

        // Text colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'text-inverse': 'var(--color-text-inverse)',
        'text-disabled': 'var(--color-text-disabled)',
        'text-link': 'var(--color-text-link)',
        'text-success': 'var(--color-text-success)',
        'text-warning': 'var(--color-text-warning)',
        'text-critical': 'var(--color-text-critical)',
        'text-info': 'var(--color-text-info)',

        // Border colors
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-focus': 'var(--color-border-focus)',
        'border-success': 'var(--color-border-success)',
        'border-warning': 'var(--color-border-warning)',
        'border-critical': 'var(--color-border-critical)',
        'border-info': 'var(--color-border-info)',

        // Link/Interactive colors (using --color-link-* from CSS)
        'interactive-primary': 'var(--color-link-primary)',
        'interactive-primary-hover': 'var(--color-link-hover)',
        'interactive-primary-active': 'var(--color-link-pressed)',
        'interactive-secondary': 'var(--color-link-secondary)',
        'interactive-secondary-hover': 'var(--color-link-secondary)',
        'interactive-disabled': 'var(--color-link-disabled)',

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

    fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        primary: 'var(--font-family-primary)',
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: 'var(--font-family-secondary)',
        serif: ['Georgia', 'serif'],
    },

    fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    },

    spacing: {
        '2xl': 'var(--spacing-2xl, 4rem)', // 64px (was 40px)
        '2xs': 'var(--spacing-2xs, 0.25rem)', // 4px (unchanged)
        '3xl': 'var(--spacing-3xl, 8rem)', // 128px (was 48px)
        // Semantic spacing tokens
        '3xs': 'var(--spacing-3xs, 0.125rem)', // 2px (unchanged)
        lg: 'var(--spacing-lg, 2rem)', // 32px (was 24px)
        md: 'var(--spacing-md, 1.5rem)', // 24px (was 16px)
        sm: 'var(--spacing-sm, 1rem)', // 16px (was 12px)
        xl: 'var(--spacing-xl, 3rem)', // 48px (was 32px)
        xs: 'var(--spacing-xs, 0.5rem)', // 8px (unchanged)
    },
};

export type Theme = typeof baseTheme;

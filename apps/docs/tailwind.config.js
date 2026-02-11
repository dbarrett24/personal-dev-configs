const { themePlugin } = require('@dbarrett24/theme-system');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './stories/**/*.{ts,tsx,mdx}',
        './components/**/*.{ts,tsx}',
        './.storybook/**/*.{ts,tsx}',
        // Include component source for Tailwind class scanning
        '../../shared-configs/core-components/src/**/*.{ts,tsx}',
        '../../brand-libraries/*/src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            spacing: {
                '3xs': 'var(--spacing-3xs)',
                '2xs': 'var(--spacing-2xs)',
                xs: 'var(--spacing-xs)',
                sm: 'var(--spacing-sm)',
                md: 'var(--spacing-md)',
                lg: 'var(--spacing-lg)',
                xl: 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
                // Semantic component tokens
                button: 'var(--button-border-radius)',
                input: 'var(--input-border-radius)',
                container: 'var(--container-border-radius)',
                checkbox: 'var(--checkbox-border-radius)',
                'search-input': 'var(--search-input-border-radius)',
            },
            fontFamily: {
                primary: 'var(--font-family-primary)',
                secondary: 'var(--font-family-secondary)',
            },
            colors: {
                background: {
                    primary: 'var(--color-background-primary)',
                    secondary: 'var(--color-background-secondary)',
                    tertiary: 'var(--color-background-tertiary)',
                    inverse: 'var(--color-background-inverse)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    tertiary: 'var(--color-text-tertiary)',
                    inverse: 'var(--color-text-inverse)',
                    disabled: 'var(--color-text-disabled)',
                    link: 'var(--color-text-link)',
                },
                interactive: {
                    primary: 'var(--color-link-primary)',
                    'primary-hover': 'var(--color-link-hover)',
                    'primary-active': 'var(--color-link-pressed)',
                    secondary: 'var(--color-link-secondary)',
                    'secondary-hover': 'var(--color-link-secondary)',
                    disabled: 'var(--color-link-disabled)',
                },
                border: {
                    primary: 'var(--color-border-primary)',
                    secondary: 'var(--color-border-secondary)',
                    focus: 'var(--color-border-focus)',
                },
                status: {
                    success: 'var(--status-success)',
                    'success-bg': 'var(--status-success-background)',
                    warning: 'var(--status-warning)',
                    'warning-bg': 'var(--status-warning-background)',
                    critical: 'var(--status-critical)',
                    'critical-bg': 'var(--status-critical-background)',
                    info: 'var(--status-info)',
                    'info-bg': 'var(--status-info-background)',
                },
            },
        },
    },
    plugins: [themePlugin],
};

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
                '4xl': 'var(--spacing-4xl)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },
            colors: {
                background: {
                    primary: 'var(--background-primary)',
                    secondary: 'var(--background-secondary)',
                    tertiary: 'var(--background-tertiary)',
                    inverse: 'var(--background-inverse)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    tertiary: 'var(--text-tertiary)',
                    inverse: 'var(--text-inverse)',
                    disabled: 'var(--text-disabled)',
                    link: 'var(--text-link)',
                },
                interactive: {
                    primary: 'var(--interactive-primary)',
                    'primary-hover': 'var(--interactive-primary-hover)',
                    'primary-active': 'var(--interactive-primary-active)',
                    secondary: 'var(--interactive-secondary)',
                    'secondary-hover': 'var(--interactive-secondary-hover)',
                    disabled: 'var(--interactive-disabled)',
                },
                border: {
                    primary: 'var(--border-primary)',
                    secondary: 'var(--border-secondary)',
                    focus: 'var(--border-focus)',
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
    plugins: [],
};

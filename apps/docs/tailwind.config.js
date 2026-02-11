const baseConfig = require('@dbarrett24/theme-system/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Base config preset includes themePlugin with complete theme (colors, spacing, etc.)
    presets: [baseConfig],
    content: [
        './stories/**/*.{ts,tsx,mdx}',
        './components/**/*.{ts,tsx}',
        './.storybook/**/*.{ts,tsx}',
        // Include component source for Tailwind class scanning
        '../../shared-configs/core-components/src/**/*.{ts,tsx}',
        '../../brand-libraries/*/src/**/*.{ts,tsx}',
    ],
    // Additional Storybook-specific customizations can go here
    theme: {
        extend: {
            // Add Storybook-specific overrides here if needed
            colors: {
                // Storybook status colors
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
};

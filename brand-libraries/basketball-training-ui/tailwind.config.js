const baseConfig = require('@dbarrett24/theme-system/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                // Basketball brand colors
                'brand-orange': '#FF6B35',
                'brand-black': '#1A1A1A',
                'brand-white': '#FFFFFF',
                'brand-gray': '#6B7280',
                'brand-court': '#C19A6B', // Basketball court wood color
            },
        },
    },
};


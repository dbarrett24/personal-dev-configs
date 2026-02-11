const baseConfig = require('@dbarrett24/theme-system/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [baseConfig],
    content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Professional brand colors
                'brand-blue': '#3B82F6',
                'brand-navy': '#1E3A8A',
                'brand-slate': '#475569',
                'brand-gray': '#6B7280',
                'brand-light': '#F8FAFC',
            },
        },
    },
};


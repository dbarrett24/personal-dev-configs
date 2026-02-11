import baseConfig from '@dbarrett24/theme-system/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
    // Base config preset includes themePlugin with complete theme (colors, spacing, etc.)
    presets: [baseConfig],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};

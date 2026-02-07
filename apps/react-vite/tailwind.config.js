import baseConfig from '@dbarrett24/theme-system/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
    ...baseConfig,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};


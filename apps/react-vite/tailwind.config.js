import baseConfig from '@dbarrett24/theme-system/tailwind.config';
import { themePlugin } from '@dbarrett24/theme-system';

/** @type {import('tailwindcss').Config} */
export default {
    presets: [baseConfig],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    plugins: [themePlugin],
};


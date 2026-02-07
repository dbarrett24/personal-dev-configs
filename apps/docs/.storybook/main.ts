import type { StorybookConfig } from '@storybook/react-vite';
import { getStories } from './storyConfiguration';

const config: StorybookConfig = {
    stories: getStories(),
    addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {},
};

export default config;

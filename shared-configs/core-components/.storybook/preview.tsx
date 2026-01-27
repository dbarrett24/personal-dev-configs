import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#ffffff',
                },
                {
                    name: 'dark',
                    value: '#1a1a1a',
                },
            ],
        },
        docs: {
            description: {
                component:
                    'Core components are headless - they provide behavior and accessibility without styling. Brand libraries should wrap these components to add visual styling.',
            },
        },
    },
};

export default preview;

import type { Preview } from '@storybook/react';
import '../src/theme/styles.css';

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
                {
                    name: 'court',
                    value: '#C19A6B',
                },
            ],
        },
    },
};

export default preview;


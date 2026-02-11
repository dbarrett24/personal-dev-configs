import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import { Brand, brandsToCSSClass, brandLabels } from './brands';

// Import global CSS with Tailwind directives and all theme variables
import './global.css';

/**
 * Theme decorator - applies brand CSS class to story wrapper
 * Extracts brand from Storybook globals and wraps story in branded container
 */
const withTheme: Decorator = (Story, context) => {
    const brand: Brand = context.globals.brand || 'default';
    const className = brandsToCSSClass[brand];

    return (
        <div
            className={className}
            style={{ minHeight: '100vh', padding: '1rem' }}
        >
            <Story />
        </div>
    );
};

const preview: Preview = {
    globalTypes: {
        brand: {
            name: 'Brand Theme',
            description: 'Select a brand theme to preview components',
            defaultValue: 'default',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    { value: 'default', title: brandLabels.default, icon: 'circle' },
                    { value: 'basketball', title: brandLabels.basketball, icon: 'circle' },
                    {
                        value: 'professional',
                        title: brandLabels.professional,
                        icon: 'circle',
                    },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [withTheme],
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
                    'Core components provide behavior and accessibility. Brand libraries wrap these components to add visual styling.',
            },
        },
    },
};

export default preview;

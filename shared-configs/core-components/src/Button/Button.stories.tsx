import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

/**
 * Fully-styled Button component following Hammer UI architecture.
 *
 * This component includes complete Tailwind styling with multiple variants and styles.
 * Brand libraries can wrap this component and add minor tweaks via className.
 *
 * ## Features
 * - ✅ Multiple variants: filled, outline, ghost
 * - ✅ Multiple styles: primary, secondary, neutral, critical
 * - ✅ Three sizes: sm, md, lg
 * - ✅ Loading state with spinner
 * - ✅ Icon support (left and right)
 * - ✅ Full accessibility support
 * - ✅ Theme token integration
 */
const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'outline', 'ghost'],
            description: 'Visual variant of the button',
        },
        style: {
            control: 'select',
            options: ['primary', 'secondary', 'neutral', 'critical'],
            description: 'Semantic style of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        children: {
            control: 'text',
            description: 'Button content',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        isLoading: {
            control: 'boolean',
            description: 'Whether the button is in a loading state',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Default button with primary filled variant
 */
export const Default: Story = {
    args: {
        children: 'Click me',
        variant: 'filled',
        style: 'primary',
        size: 'md',
    },
};

/**
 * All variants and styles showcase
 */
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 'bold' }}>Filled Variants</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button variant="filled" style="primary">
                        Primary
                    </Button>
                    <Button variant="filled" style="secondary">
                        Secondary
                    </Button>
                    <Button variant="filled" style="neutral">
                        Neutral
                    </Button>
                    <Button variant="filled" style="critical">
                        Critical
                    </Button>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 'bold' }}>Outline Variants</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button variant="outline" style="primary">
                        Primary
                    </Button>
                    <Button variant="outline" style="secondary">
                        Secondary
                    </Button>
                    <Button variant="outline" style="neutral">
                        Neutral
                    </Button>
                    <Button variant="outline" style="critical">
                        Critical
                    </Button>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 'bold' }}>Ghost Variants</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button variant="ghost" style="primary">
                        Primary
                    </Button>
                    <Button variant="ghost" style="secondary">
                        Secondary
                    </Button>
                    <Button variant="ghost" style="neutral">
                        Neutral
                    </Button>
                    <Button variant="ghost" style="critical">
                        Critical
                    </Button>
                </div>
            </div>
        </div>
    ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

/**
 * Buttons with icons
 */
export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button iconLeft="🔍">Search</Button>
            <Button iconRight="→">Next</Button>
            <Button iconLeft="←" iconRight="→">
                Both
            </Button>
        </div>
    ),
};

/**
 * Loading states
 */
export const Loading: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button isLoading size="sm">
                Small Loading
            </Button>
            <Button isLoading size="md">
                Medium Loading
            </Button>
            <Button isLoading size="lg">
                Large Loading
            </Button>
        </div>
    ),
};

/**
 * Disabled states
 */
export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button isDisabled variant="filled" style="primary">
                Disabled Filled
            </Button>
            <Button isDisabled variant="outline" style="primary">
                Disabled Outline
            </Button>
            <Button isDisabled variant="ghost" style="primary">
                Disabled Ghost
            </Button>
        </div>
    ),
};

/**
 * Example of how brand libraries wrap this component
 */
export const BrandLibraryExample: Story = {
    render: () => {
        // This is how a brand library would create a styled wrapper
        const BasketballButton = ({ className, ...props }: any) => {
            return (
                <Button
                    {...props}
                    className={`shadow-md hover:shadow-lg active:scale-98 transition-transform ${className || ''}`}
                />
            );
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                        Basketball Training Brand (adds shadow + scale animation)
                    </h3>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <BasketballButton variant="filled" style="primary">
                            Start Training
                        </BasketballButton>
                        <BasketballButton variant="outline" style="primary">
                            View Stats
                        </BasketballButton>
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'This demonstrates how brand libraries wrap the core Button to add brand-specific effects.',
            },
        },
    },
};

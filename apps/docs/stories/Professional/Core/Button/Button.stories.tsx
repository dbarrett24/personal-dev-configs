import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dbarrett24/professional-brand-ui/Button';

const meta: Meta<typeof Button> = {
    title: 'Professional/Core Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'outline', 'ghost'],
            description: 'Button variant style',
        },
        style: {
            control: 'select',
            options: ['primary', 'secondary', 'neutral', 'critical'],
            description: 'Semantic style of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Button size',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
    args: {
        variant: 'filled',
        style: 'primary',
        children: 'Get Started',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        style: 'primary',
        children: 'Contact Us',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        style: 'primary',
        children: 'View Details',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        children: 'Disabled Button',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="gap-lg flex flex-col">
            <div className="gap-md flex">
                <Button
                    variant="filled"
                    style="primary"
                >
                    Filled Primary
                </Button>
                <Button
                    variant="filled"
                    style="secondary"
                >
                    Filled Secondary
                </Button>
                <Button
                    variant="outline"
                    style="primary"
                >
                    Outline
                </Button>
                <Button
                    variant="ghost"
                    style="primary"
                >
                    Ghost
                </Button>
            </div>
            <div className="gap-md flex">
                <Button
                    variant="filled"
                    style="primary"
                    size="sm"
                >
                    Small
                </Button>
                <Button
                    variant="filled"
                    style="primary"
                >
                    Medium
                </Button>
                <Button
                    variant="filled"
                    style="primary"
                    size="lg"
                >
                    Large
                </Button>
            </div>
            <div className="gap-md flex">
                <Button
                    variant="filled"
                    style="primary"
                    isDisabled
                >
                    Disabled Filled
                </Button>
                <Button
                    variant="outline"
                    style="primary"
                    isDisabled
                >
                    Disabled Outline
                </Button>
            </div>
        </div>
    ),
};

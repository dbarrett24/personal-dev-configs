import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost'],
            description: 'Button variant style',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Button size',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Get Started',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Learn More',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Contact Us',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
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
        disabled: true,
        children: 'Disabled Button',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-lg">
            <div className="flex gap-md">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex gap-md">
                <Button
                    variant="primary"
                    size="sm"
                >
                    Small
                </Button>
                <Button variant="primary">Medium</Button>
                <Button
                    variant="primary"
                    size="lg"
                >
                    Large
                </Button>
            </div>
            <div className="flex gap-md">
                <Button
                    variant="primary"
                    disabled
                >
                    Disabled Primary
                </Button>
                <Button
                    variant="outline"
                    disabled
                >
                    Disabled Outline
                </Button>
            </div>
        </div>
    ),
};


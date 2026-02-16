import type { IconProps } from '@dbarrett24/core-components/Icons/IconBase';
import { LoadingSpinner } from '@dbarrett24/core-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    args: {
        color: 'inverse',
        size: 'md',
    },
    argTypes: {
        color: {
            control: 'select',
            defaultValue: { summary: 'inverse' },
            description: 'The color of the spinner.',
            options: [
                'primary',
                'secondary',
                'info',
                'success',
                'warning',
                'critical',
                'disabled',
                'inverse',
                'inherit',
            ],
            type: 'string',
        },
        size: {
            control: 'select',
            defaultValue: { summary: 'md' },
            description: 'The size of the spinner.',
            options: ['xs', 'sm', 'md', 'lg'],
            type: 'string',
        },
    },
    component: LoadingSpinner,
    title: 'Core/Icons/LoadingSpinner',
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
    render: (args) => (
        <div className="gap-lg flex items-center">
            {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
                <div
                    className="gap-sm flex flex-col items-center"
                    key={size}
                >
                    <LoadingSpinner
                        {...args}
                        color="primary"
                        size={size}
                    />
                    <span className="text-text-secondary text-xs">{size}</span>
                </div>
            ))}
        </div>
    ),
};

export const Colors: Story = {
    render: (args) => (
        <div className="gap-lg flex items-center">
            {(['primary', 'secondary', 'info', 'success', 'warning', 'critical', 'disabled', 'inherit'] as const).map(
                (color) => (
                    <div
                        className="gap-sm flex flex-col items-center"
                        key={color}
                    >
                        <LoadingSpinner
                            {...args}
                            color={color}
                            size="md"
                        />
                        <span className="text-text-secondary text-xs">{color}</span>
                    </div>
                )
            )}
        </div>
    ),
};

export const OnDarkBackground: Story = {
    render: (args) => (
        <div className="bg-background-inverse gap-lg p-lg flex items-center rounded-md">
            {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
                <div
                    className="gap-sm flex flex-col items-center"
                    key={size}
                >
                    <LoadingSpinner
                        {...args}
                        color="inverse"
                        size={size}
                    />
                    <span className="text-text-inverse text-xs">{size}</span>
                </div>
            ))}
        </div>
    ),
};

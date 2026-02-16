import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dbarrett24/basketball-training-ui/Button';
import { Info } from '@dbarrett24/core-components/Icons';

const meta: Meta<typeof Button> = {
    title: 'Basketball/Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div className="brand-basketball p-8">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Button',
        disabled: false,
        loading: false,
        size: 'md',
        style: 'primary',
        variant: 'filled',
    },
    argTypes: {
        children: {
            description: 'Text on the Button',
            control: 'text',
        },
        disabled: {
            description: 'Disable button styles / onClick disabled',
            control: 'boolean',
        },
        loading: {
            description: 'Disables the button and adds a loading state',
            control: 'boolean',
        },
        size: {
            description: 'Size of the button',
            control: 'select',
            options: ['md', 'sm'],
        },
        style: {
            description: 'The style of the button (color palette)',
            control: 'select',
            options: ['primary', 'critical', 'neutral', 'inverse'],
        },
        variant: {
            description: 'The variant of the button',
            control: 'select',
            options: ['filled', 'outlined', 'transparent'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => (
        <>
            {args.style === 'inverse' ? (
                <div className="bg-background-info-dark p-md">
                    <Button {...args} />
                </div>
            ) : (
                <Button {...args} />
            )}
        </>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-lg">
            <div>
                <h3 className="mb-md text-lg font-semibold">Filled Buttons (with shadow-md)</h3>
                <div className="flex gap-md">
                    <Button
                        style="primary"
                        variant="filled"
                    >
                        Primary
                    </Button>
                    <Button
                        style="critical"
                        variant="filled"
                    >
                        Critical
                    </Button>
                    <Button
                        style="neutral"
                        variant="filled"
                    >
                        Neutral
                    </Button>
                </div>
            </div>

            <div>
                <h3 className="mb-md text-lg font-semibold">Outlined Buttons (with shadow-md)</h3>
                <div className="flex gap-md">
                    <Button
                        style="primary"
                        variant="outlined"
                    >
                        Primary
                    </Button>
                    <Button
                        style="critical"
                        variant="outlined"
                    >
                        Critical
                    </Button>
                    <Button
                        style="neutral"
                        variant="outlined"
                    >
                        Neutral
                    </Button>
                </div>
            </div>

            <div>
                <h3 className="mb-md text-lg font-semibold">Transparent Buttons (with shadow-md)</h3>
                <div className="flex gap-md">
                    <Button
                        style="primary"
                        variant="transparent"
                    >
                        Primary
                    </Button>
                    <Button
                        style="critical"
                        variant="transparent"
                    >
                        Critical
                    </Button>
                    <Button
                        style="neutral"
                        variant="transparent"
                    >
                        Neutral
                    </Button>
                </div>
            </div>

            <div className="bg-background-info-dark p-md">
                <h3 className="mb-md text-lg font-semibold text-white">Inverse Buttons</h3>
                <div className="flex gap-md">
                    <Button
                        style="inverse"
                        variant="filled"
                    >
                        Filled
                    </Button>
                    <Button
                        style="inverse"
                        variant="outlined"
                    >
                        Outlined
                    </Button>
                    <Button
                        style="inverse"
                        variant="transparent"
                    >
                        Transparent
                    </Button>
                </div>
            </div>
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex gap-md">
            <Button iconLeft={Info}>Icon Left</Button>
            <Button iconRight={Info}>Icon Right</Button>
            <Button
                iconLeft={Info}
                iconRight={Info}
            >
                Both Icons
            </Button>
        </div>
    ),
};

export const FormExample: Story = {
    render: () => (
        <form
            className="rounded-container bg-background-secondary p-lg"
            onSubmit={(e) => {
                e.preventDefault();
                alert('Basketball form submitted!');
            }}
        >
            <h3 className="mb-md text-lg font-semibold">Player Registration</h3>
            <div className="flex flex-col gap-md">
                <input
                    className="rounded-container border-2 border-border-primary px-md py-sm"
                    placeholder="Player Name"
                    type="text"
                />
                <input
                    className="rounded-container border-2 border-border-primary px-md py-sm"
                    placeholder="Jersey Number"
                    type="number"
                />
                <div className="flex gap-md">
                    <Button type="submit">Register Player</Button>
                    <Button
                        type="button"
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    ),
};

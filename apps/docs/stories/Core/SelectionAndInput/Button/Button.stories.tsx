import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dbarrett24/core-components/Button';
import { Info } from '@dbarrett24/core-components/Icons';
import { AllButtonsStory } from './AllButtonsStory';

const meta: Meta<typeof Button> = {
    title: 'Core/SelectionAndInput/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Button',
        dataTestId: 'Button',
        disabled: false,
        iconLeft: undefined,
        iconRight: undefined,
        iconStyle: 'bold',
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
        dataTestId: {
            description: 'Custom test ID for targeting in tests',
            control: 'text',
            table: { defaultValue: { summary: "'Button'" } },
        },
        disabled: {
            description: 'Disable button styles / onClick disabled',
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } },
        },
        iconLeft: {
            description: 'Icon to display on the left',
            control: false,
        },
        iconRight: {
            description: 'Icon to display on the right',
            control: false,
        },
        iconStyle: {
            description: 'The style of the icon',
            control: 'select',
            options: ['regular', 'fill', 'bold', 'duotone'],
            table: { defaultValue: { summary: "'bold'" } },
        },
        loading: {
            description: 'Disables the button and adds a loading state',
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } },
        },
        size: {
            description: 'Size of the button',
            control: 'select',
            options: ['md', 'sm'],
            table: { defaultValue: { summary: "'md'" } },
        },
        style: {
            description: 'The style of the button (color palette)',
            control: 'select',
            options: ['primary', 'critical', 'neutral', 'inverse'],
            table: { defaultValue: { summary: "'primary'" } },
        },
        variant: {
            description: 'The variant of the button',
            control: 'select',
            options: ['filled', 'outlined', 'transparent'],
            table: { defaultValue: { summary: "'filled'" } },
        },
        onClick: {
            action: 'Button Clicked',
            table: {
                disable: true,
            },
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
    render: (args) => <AllButtonsStory {...args} />,
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
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
            <div className="flex gap-md">
                <Button
                    iconLeft={Info}
                    size="sm"
                >
                    Small Icon Left
                </Button>
                <Button
                    iconRight={Info}
                    size="sm"
                >
                    Small Icon Right
                </Button>
            </div>
        </div>
    ),
};

export const LoadingStates: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <div className="flex gap-md">
                <Button loading>Loading Filled</Button>
                <Button
                    loading
                    variant="outlined"
                >
                    Loading Outlined
                </Button>
                <Button
                    loading
                    variant="transparent"
                >
                    Loading Transparent
                </Button>
            </div>
            <div className="flex gap-md">
                <Button
                    loading
                    style="critical"
                >
                    Loading Critical
                </Button>
                <Button
                    loading
                    style="neutral"
                >
                    Loading Neutral
                </Button>
            </div>
            <div className="bg-background-info-dark p-md">
                <Button
                    loading
                    style="inverse"
                >
                    Loading Inverse
                </Button>
            </div>
        </div>
    ),
};

export const DisabledStates: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <div className="flex gap-md">
                <Button disabled>Disabled Filled</Button>
                <Button
                    disabled
                    variant="outlined"
                >
                    Disabled Outlined
                </Button>
                <Button
                    disabled
                    variant="transparent"
                >
                    Disabled Transparent
                </Button>
            </div>
            <div className="flex gap-md">
                <Button
                    disabled
                    style="critical"
                >
                    Disabled Critical
                </Button>
                <Button
                    disabled
                    style="neutral"
                >
                    Disabled Neutral
                </Button>
            </div>
            <div className="bg-background-info-dark p-md">
                <Button
                    disabled
                    style="inverse"
                >
                    Disabled Inverse
                </Button>
            </div>
        </div>
    ),
};

export const PolymorphicAs: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <Button as="button">Button Element</Button>
            <Button
                as="a"
                href="https://example.com"
                target="_blank"
            >
                Anchor Element
            </Button>
            <Button as="div">Div Element</Button>
        </div>
    ),
};

export const FormContext: Story = {
    render: () => (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted!');
            }}
        >
            <div className="flex flex-col gap-md">
                <input
                    className="rounded-container border-2 border-border-primary px-md py-sm"
                    placeholder="Enter some text..."
                    type="text"
                />
                <div className="flex gap-md">
                    <Button type="submit">Submit</Button>
                    <Button
                        type="button"
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="reset"
                        variant="transparent"
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </form>
    ),
};

export const OutlineDebug: Story = {
    render: () => (
        <div className="flex flex-col gap-lg p-lg">
            <div>
                <h3 className="mb-md text-lg font-bold">Outlined Buttons - Check for visible outline border</h3>
                <div className="flex gap-md rounded-lg bg-background-secondary p-lg">
                    <Button
                        style="primary"
                        variant="outlined"
                    >
                        Primary Outlined
                    </Button>
                    <Button
                        style="critical"
                        variant="outlined"
                    >
                        Critical Outlined
                    </Button>
                    <Button
                        style="neutral"
                        variant="outlined"
                    >
                        Neutral Outlined
                    </Button>
                </div>
            </div>
            <div>
                <h3 className="mb-md text-lg font-bold">Compare: Filled (no outline) vs Outlined (with outline)</h3>
                <div className="flex gap-md rounded-lg bg-background-secondary p-lg">
                    <Button
                        style="primary"
                        variant="filled"
                    >
                        Filled Primary
                    </Button>
                    <Button
                        style="primary"
                        variant="outlined"
                    >
                        Outlined Primary
                    </Button>
                </div>
            </div>
            <div className="bg-background-info-dark p-lg">
                <h3 className="mb-md text-lg font-bold text-white">Inverse Outlined (dark background)</h3>
                <Button
                    style="inverse"
                    variant="outlined"
                >
                    Inverse Outlined
                </Button>
            </div>
        </div>
    ),
};

export const CustomTestIds: Story = {
    render: () => (
        <div className="flex flex-col gap-lg p-lg">
            <div>
                <h3 className="mb-md text-lg font-bold">Custom dataTestId prop for testing</h3>
                <p className="mb-md text-sm text-text-secondary">
                    Each button has a custom <code className="rounded bg-background-subdued px-xs">dataTestId</code>{' '}
                    for targeted testing. Inspect elements to see the values.
                </p>
                <div className="flex gap-md">
                    <Button dataTestId="submit-order">Submit Order</Button>
                    <Button
                        dataTestId="cancel-order"
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        dataTestId="delete-order"
                        style="critical"
                        variant="transparent"
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div>
                <h3 className="mb-md text-lg font-bold">Default dataTestId (no prop provided)</h3>
                <p className="mb-md text-sm text-text-secondary">
                    Without specifying <code className="rounded bg-background-subdued px-xs">dataTestId</code>, the
                    default value is <code className="rounded bg-background-subdued px-xs">&quot;Button&quot;</code>.
                </p>
                <Button>Default Test ID</Button>
            </div>
            <div className="rounded-lg bg-background-info p-md">
                <p className="text-sm">
                    <strong>Testing Pattern:</strong> Use <code>screen.getByTestId(&apos;submit-order&apos;)</code>{' '}
                    to target specific buttons in your tests.
                </p>
            </div>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';

/**
 * Headless Input component providing core behavior and accessibility.
 *
 * This component is intentionally unstyled. Brand libraries should wrap this
 * component with their own styling using the className props.
 *
 * ## Features
 * - ✅ Automatic label association with unique IDs
 * - ✅ Error handling with aria-invalid
 * - ✅ Helper text support
 * - ✅ Required field indication
 * - ✅ Start/end adornments for icons/buttons
 * - ✅ Screen reader support
 */
const meta: Meta<typeof Input> = {
    title: 'Core/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text (required for accessibility)',
        },
        hideLabel: {
            control: 'boolean',
            description: 'Visually hide label (still accessible to screen readers)',
        },
        error: {
            control: 'text',
            description: 'Error message to display',
        },
        helperText: {
            control: 'text',
            description: 'Helper text to display below input',
        },
        isRequired: {
            control: 'boolean',
            description: 'Whether the input is required',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        isReadOnly: {
            control: 'boolean',
            description: 'Whether the input is read-only',
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
            description: 'Input type',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Basic input with default props.
 * Note: This input has no styling - consumers should add their own via className props.
 */
export const Default: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
    },
};

/**
 * Input with minimal styling to demonstrate usage.
 */
export const WithBasicStyling: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        inputClassName:
            'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
    },
};

/**
 * Required input field with asterisk indicator.
 */
export const Required: Story = {
    args: {
        label: 'Password',
        type: 'password',
        isRequired: true,
        placeholder: 'Enter your password',
        inputClassName: 'w-full px-3 py-2 border border-gray-300 rounded',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
    },
};

/**
 * Input with error state and message.
 * Note the aria-invalid attribute for accessibility.
 */
export const WithError: Story = {
    args: {
        label: 'Email',
        type: 'email',
        error: 'Please enter a valid email address',
        inputClassName:
            'w-full px-3 py-2 border-2 border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
        errorClassName: 'mt-1 text-sm text-red-600',
    },
};

/**
 * Input with helper text.
 */
export const WithHelperText: Story = {
    args: {
        label: 'Password',
        type: 'password',
        helperText: 'Must be at least 8 characters long',
        inputClassName: 'w-full px-3 py-2 border border-gray-300 rounded',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
        helperTextClassName: 'mt-1 text-sm text-gray-500',
    },
};

/**
 * Disabled input.
 */
export const Disabled: Story = {
    args: {
        label: 'Email',
        type: 'email',
        isDisabled: true,
        value: 'disabled@example.com',
        inputClassName: 'w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-400',
    },
};

/**
 * Read-only input.
 */
export const ReadOnly: Story = {
    args: {
        label: 'Username',
        type: 'text',
        isReadOnly: true,
        value: 'johndoe',
        inputClassName: 'w-full px-3 py-2 border border-gray-300 rounded bg-gray-50',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
    },
};

/**
 * Input with visually hidden label (still accessible to screen readers).
 */
export const HiddenLabel: Story = {
    args: {
        label: 'Search',
        hideLabel: true,
        placeholder: 'Search...',
        inputClassName: 'w-full px-3 py-2 border border-gray-300 rounded',
    },
};

/**
 * Input with start adornment (icon).
 */
export const WithStartAdornment: Story = {
    args: {
        label: 'Search',
        placeholder: 'Search...',
        startAdornment: <span style={{ marginRight: '8px' }}>🔍</span>,
        inputClassName: 'flex-1 px-3 py-2 border border-gray-300 rounded',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
        wrapperClassName: 'flex flex-col',
    },
};

/**
 * Input with end adornment (button).
 */
export const WithEndAdornment: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        endAdornment: (
            <button
                type="button"
                style={{
                    marginLeft: '8px',
                    padding: '4px 8px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Show
            </button>
        ),
        inputClassName: 'flex-1 px-3 py-2 border border-gray-300 rounded',
        labelClassName: 'block mb-1 text-sm font-medium text-gray-700',
    },
};

/**
 * Controlled input with React state.
 */
export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <div>
                <Input
                    label="Email"
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter your email"
                    inputClassName="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                />
                <p style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>Value: {value || '(empty)'}</p>
            </div>
        );
    },
};

/**
 * Demonstrates all states of the input.
 */
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Default (No Styling)</h3>
                <Input
                    label="Email"
                    placeholder="Enter email"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>With Styling</h3>
                <Input
                    label="Email"
                    placeholder="Enter email"
                    inputClassName="w-full px-3 py-2 border border-gray-300 rounded"
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Required</h3>
                <Input
                    label="Email"
                    isRequired
                    placeholder="Enter email"
                    inputClassName="w-full px-3 py-2 border border-gray-300 rounded"
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>With Error</h3>
                <Input
                    label="Email"
                    error="This field is required"
                    inputClassName="w-full px-3 py-2 border-2 border-red-500 rounded"
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                    errorClassName="mt-1 text-sm text-red-600"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>With Helper Text</h3>
                <Input
                    label="Password"
                    type="password"
                    helperText="Must be at least 8 characters"
                    inputClassName="w-full px-3 py-2 border border-gray-300 rounded"
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                    helperTextClassName="mt-1 text-sm text-gray-500"
                />
            </div>

            <div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Disabled</h3>
                <Input
                    label="Email"
                    isDisabled
                    value="disabled@example.com"
                    inputClassName="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
                    labelClassName="block mb-1 text-sm font-medium text-gray-400"
                />
            </div>
        </div>
    ),
};

/**
 * Example of how brand libraries should wrap this component.
 */
export const BrandLibraryExample: Story = {
    render: () => {
        // This is how a brand library would create a styled wrapper
        const BrandInput = ({ variant = 'default', ...props }: any) => {
            const baseStyles = 'w-full px-3 py-2 border rounded focus:outline-none focus:ring-2';
            const variants = {
                default: `${baseStyles} border-gray-300 focus:ring-blue-500`,
                error: `${baseStyles} border-red-500 focus:ring-red-500`,
                success: `${baseStyles} border-green-500 focus:ring-green-500`,
            };

            return (
                <Input
                    {...props}
                    inputClassName={variants[variant]}
                    labelClassName="block mb-1 text-sm font-medium text-gray-700"
                    errorClassName="mt-1 text-sm text-red-600"
                    helperTextClassName="mt-1 text-sm text-gray-500"
                />
            );
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
                <BrandInput
                    label="Email"
                    variant="default"
                    placeholder="Default variant"
                />
                <BrandInput
                    label="Email"
                    variant="error"
                    error="Invalid email address"
                />
                <BrandInput
                    label="Email"
                    variant="success"
                    helperText="Looks good!"
                />
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'This demonstrates how brand libraries should wrap the core Input component to add their own styling and variants.',
            },
        },
    },
};

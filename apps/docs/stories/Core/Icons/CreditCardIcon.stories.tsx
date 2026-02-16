import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardIcon, type CardBrands } from '@dbarrett24/core-components/Icons/CreditCardIcon';

/**
 * Credit Card Icon component for displaying payment method brands.
 *
 * This component renders SVG icons for various credit card brands including
 * Visa, Mastercard, American Express, Discover, and more. It includes special
 * icons for alternative payment methods like cash, check, and wire transfer.
 *
 * ## Features
 * - ✅ 11 card brand variants
 * - ✅ Fixed aspect ratio (30x20)
 * - ✅ Inline SVG for optimal performance
 * - ✅ Automatic fallback to "other" for invalid brands
 * - ✅ Theme-compatible styling via className
 */
const meta: Meta<typeof CreditCardIcon> = {
    title: 'Core/Icons/Credit Card Icon',
    component: CreditCardIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        brand: {
            control: 'select',
            options: [
                'amex',
                'cash',
                'check',
                'diners',
                'discover',
                'jcb',
                'mastercard',
                'money-order',
                'other',
                'visa',
                'wire-transfer',
            ],
            description: 'The credit card brand to display',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply',
        },
    },
};

export default meta;
type Story = StoryObj<typeof CreditCardIcon>;

/**
 * Default credit card icon showing Visa
 */
export const Default: Story = {
    args: {
        brand: 'visa',
    },
};

/**
 * All credit card brand variants
 */
export const AllBrands: Story = {
    render: () => {
        const brands: { brand: CardBrands; label: string }[] = [
            { brand: 'visa', label: 'Visa' },
            { brand: 'mastercard', label: 'Mastercard' },
            { brand: 'amex', label: 'American Express' },
            { brand: 'discover', label: 'Discover' },
            { brand: 'diners', label: 'Diners Club' },
            { brand: 'jcb', label: 'JCB' },
            { brand: 'cash', label: 'Cash' },
            { brand: 'check', label: 'Check' },
            { brand: 'money-order', label: 'Money Order' },
            { brand: 'wire-transfer', label: 'Wire Transfer' },
            { brand: 'other', label: 'Other / Unknown' },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    {brands.map(({ brand, label }) => (
                        <div
                            key={brand}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '16px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                            }}
                        >
                            <CreditCardIcon brand={brand} />
                            <span
                                style={{
                                    fontSize: '12px',
                                    color: '#6b7280',
                                    textAlign: 'center',
                                }}
                            >
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

/**
 * Custom sizing via className
 */
export const CustomSize: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <CreditCardIcon
                    brand="visa"
                    className="h-[10px] w-[15px]"
                />
                <span style={{ fontSize: '11px', color: '#6b7280' }}>Small</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <CreditCardIcon brand="visa" />
                <span style={{ fontSize: '11px', color: '#6b7280' }}>Default (20x30)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <CreditCardIcon
                    brand="visa"
                    className="h-[40px] w-[60px]"
                />
                <span style={{ fontSize: '11px', color: '#6b7280' }}>Large</span>
            </div>
        </div>
    ),
};

/**
 * Usage in payment forms
 */
export const PaymentFormExample: Story = {
    render: () => (
        <div
            style={{
                padding: '24px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                maxWidth: '400px',
            }}
        >
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>Payment Method</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                    { brand: 'visa' as CardBrands, last4: '4242', expiry: '12/25' },
                    { brand: 'mastercard' as CardBrands, last4: '5555', expiry: '03/26' },
                    { brand: 'amex' as CardBrands, last4: '0005', expiry: '08/24' },
                ].map(({ brand, expiry, last4 }) => (
                    <button
                        key={brand}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            background: 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                        }}
                        type="button"
                    >
                        <CreditCardIcon brand={brand} />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>•••• {last4}</div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>Expires {expiry}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Example of how to use CreditCardIcon in a payment method selector',
            },
        },
    },
};

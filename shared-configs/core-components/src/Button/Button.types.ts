import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button visual variant
 */
export type ButtonVariant = 'filled' | 'outline' | 'ghost';

/**
 * Button semantic style
 */
export type ButtonStyle = 'primary' | 'secondary' | 'neutral' | 'critical';

/**
 * Button size
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
    /**
     * Visual variant of the button
     * @default 'filled'
     */
    variant?: ButtonVariant;

    /**
     * Semantic style of the button
     * @default 'primary'
     */
    style?: ButtonStyle;

    /**
     * Size of the button
     * @default 'md'
     */
    size?: ButtonSize;

    /**
     * Button content
     */
    children: ReactNode;

    /**
     * Whether the button is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the button is in a loading state
     */
    isLoading?: boolean;

    /**
     * Icon to display on the left side
     */
    iconLeft?: ReactNode;

    /**
     * Icon to display on the right side
     */
    iconRight?: ReactNode;

    /**
     * Button type attribute
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Accessible label for screen readers
     */
    ariaLabel?: string;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Callback when button is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Test ID for testing
     */
    testId?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'children' | 'onClick' | 'className' | 'style'>;

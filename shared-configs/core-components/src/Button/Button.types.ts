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
     * Accessible label for screen readers
     */
    ariaLabel?: string;

    /**
     * Button content
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Icon to display on the left side
     */
    iconLeft?: ReactNode;

    /**
     * Icon to display on the right side
     */
    iconRight?: ReactNode;

    /**
     * Whether the button is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the button is in a loading state
     */
    isLoading?: boolean;

    /**
     * Callback when button is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Size of the button
     * @default 'md'
     */
    size?: ButtonSize;

    /**
     * Semantic style of the button
     * @default 'primary'
     */
    style?: ButtonStyle;

    /**
     * Test ID for testing
     */
    testId?: string;

    /**
     * Button type attribute
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Visual variant of the button
     * @default 'filled'
     */
    variant?: ButtonVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'children' | 'onClick' | 'className' | 'style'>;

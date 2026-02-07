import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = {
    /**
     * Content to render after the input (e.g., icon, button)
     */
    endAdornment?: ReactNode;

    /**
     * Error message to display
     */
    error?: string;

    /**
     * Additional CSS class for error message
     */
    errorClassName?: string;

    /**
     * Helper text to display below the input
     */
    helperText?: string;

    /**
     * Additional CSS class for helper text
     */
    helperTextClassName?: string;

    /**
     * Whether to visually hide the label (still accessible to screen readers)
     */
    hideLabel?: boolean;

    /**
     * Additional CSS class for the input element
     */
    inputClassName?: string;

    /**
     * Whether the input is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the input is read-only
     */
    isReadOnly?: boolean;

    /**
     * Whether the input is required
     */
    isRequired?: boolean;

    /**
     * Input label text (required for accessibility)
     */
    label: string;

    /**
     * Additional CSS class for the label
     */
    labelClassName?: string;

    /**
     * Content to render before the input (e.g., icon)
     */
    startAdornment?: ReactNode;

    /**
     * Test ID for testing
     */
    testId?: string;

    /**
     * Additional CSS class for the wrapper
     */
    wrapperClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'readOnly' | 'required' | 'className'>;

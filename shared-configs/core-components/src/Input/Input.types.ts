import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = {
    /**
     * Input label text (required for accessibility)
     */
    label: string;

    /**
     * Whether to visually hide the label (still accessible to screen readers)
     */
    hideLabel?: boolean;

    /**
     * Error message to display
     */
    error?: string;

    /**
     * Helper text to display below the input
     */
    helperText?: string;

    /**
     * Whether the input is required
     */
    isRequired?: boolean;

    /**
     * Whether the input is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the input is read-only
     */
    isReadOnly?: boolean;

    /**
     * Additional CSS class for the input element
     */
    inputClassName?: string;

    /**
     * Additional CSS class for the wrapper
     */
    wrapperClassName?: string;

    /**
     * Additional CSS class for the label
     */
    labelClassName?: string;

    /**
     * Additional CSS class for error message
     */
    errorClassName?: string;

    /**
     * Additional CSS class for helper text
     */
    helperTextClassName?: string;

    /**
     * Content to render before the input (e.g., icon)
     */
    startAdornment?: ReactNode;

    /**
     * Content to render after the input (e.g., icon, button)
     */
    endAdornment?: ReactNode;

    /**
     * Test ID for testing
     */
    testId?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'readOnly' | 'required' | 'className'>;

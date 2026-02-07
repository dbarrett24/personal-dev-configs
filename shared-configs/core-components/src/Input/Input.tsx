import { InputProps } from './Input.types';
import { cn } from '@dbarrett24/theme-system';
import { useId } from 'react';

/**
 * Fully-styled Input component following Hammer UI architecture.
 *
 * Provides complete styling with error states, helper text, and adornments.
 * Brand libraries can wrap this and add minor tweaks via className.
 *
 * Features:
 * - Full Tailwind CSS styling
 * - Automatic label association with unique IDs
 * - Error state handling with visual feedback
 * - Helper text support
 * - Required field indication
 * - Disabled and read-only states
 * - Start and end adornments for icons/buttons
 * - Full accessibility support
 * - Theme token integration
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={errors.email}
 * />
 * ```
 */
export const Input = ({
    endAdornment,
    error,
    helperText,
    hideLabel = false,
    id: providedId,
    inputClassName,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    label,
    labelClassName,
    startAdornment,
    testId,
    wrapperClassName,
    ...restProps
}: InputProps) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const hasError = Boolean(error);
    const describedBy = [hasError ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ');

    return (
        <div
            className={cn('flex flex-col gap-xs', wrapperClassName)}
            data-testid={testId}
        >
            {label && (
                <label
                    className={cn(
                        'text-sm font-medium text-text-primary',
                        isDisabled && 'text-text-disabled opacity-60',
                        hideLabel && 'sr-only',
                        labelClassName
                    )}
                    htmlFor={id}
                >
                    {label}
                    {isRequired && (
                        <span
                            aria-hidden="true"
                            className="text-critical-500 ml-1"
                        >
                            *
                        </span>
                    )}
                </label>
            )}

            <div className="relative flex items-center">
                {startAdornment && (
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-md flex items-center"
                    >
                        {startAdornment}
                    </span>
                )}

                <input
                    aria-describedby={describedBy || undefined}
                    aria-invalid={hasError}
                    aria-required={isRequired}
                    className={cn(
                        // Base styles
                        'w-full rounded-md',
                        'border-2 border-border-primary',
                        'text-text-primary placeholder:text-text-tertiary',
                        'transition-colors duration-200',
                        'text-base',

                        // Padding (adjust for adornments)
                        startAdornment ? 'pl-xl' : 'pl-md',
                        endAdornment ? 'pr-xl' : 'pr-md',
                        'py-xs',

                        // Focus styles
                        'focus:outline-none focus:ring-2 focus:ring-offset-0',
                        'focus:border-interactive-primary focus:ring-interactive-primary',

                        // Error styles
                        hasError && 'border-critical-500 focus:border-critical-500 focus:ring-critical-500',

                        // Disabled styles
                        isDisabled && 'bg-surface-disabled cursor-not-allowed opacity-60',

                        // Read-only styles
                        isReadOnly && 'bg-surface-secondary cursor-default',

                        inputClassName
                    )}
                    disabled={isDisabled}
                    id={id}
                    readOnly={isReadOnly}
                    required={isRequired}
                    {...restProps}
                />

                {endAdornment && (
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-md flex items-center"
                    >
                        {endAdornment}
                    </span>
                )}
            </div>

            {hasError && (
                <span
                    className="text-critical-500 text-sm font-medium"
                    id={errorId}
                    role="alert"
                >
                    {error}
                </span>
            )}

            {helperText && !hasError && (
                <span
                    className="text-sm text-text-secondary"
                    id={helperId}
                >
                    {helperText}
                </span>
            )}
        </div>
    );
};

Input.displayName = 'Input';

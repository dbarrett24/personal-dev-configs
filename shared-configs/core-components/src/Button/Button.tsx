'use client';

import { Props } from './Button.types';
import {
    filledCriticalClasses,
    filledInverseClasses,
    filledNeutralClasses,
    filledPrimaryClasses,
    outlinedCriticalClasses,
    outlinedInverseClasses,
    outlinedNeutralClasses,
    outlinedPrimaryClasses,
    transparentCriticalClasses,
    transparentInverseClasses,
    transparentNeutralClasses,
    transparentPrimaryClasses,
} from './buttonColorClasses';
import { iconSizesToPixels } from '../Icons/IconBase';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { cn } from '@dbarrett24/theme-system';
import { forwardRef, MouseEventHandler, useCallback, useMemo } from 'react';

/**
 * A wonderful HUI button. Inherits all props from a normal HTML button.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
    (
        {
            as: Component = 'button',
            children,
            className,
            dataTestId = 'Button',
            disabled = false,
            iconLeft: IconLeft,
            iconRight: IconRight,
            iconStyle = 'bold',
            inlineStyles,
            loading = false,
            onClick: onClickProp,
            size = 'md',
            style = 'primary',
            variant = 'filled',
            ...rest
        },
        ref
    ) => {
        const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
            (e) => {
                if (!disabled && !loading && onClickProp) {
                    onClickProp(e);
                }

                // Handle the case where the button is in a Form and shouldnt trigger the form's onSubmit callback
                if (disabled || loading) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            },
            [disabled, loading, onClickProp]
        );

        const colorClasses = useMemo(
            () => ({
                [filledCriticalClasses]: variant === 'filled' && style === 'critical',
                [filledInverseClasses]: variant === 'filled' && style === 'inverse',
                [filledNeutralClasses]: variant === 'filled' && style === 'neutral',
                [filledPrimaryClasses]: variant === 'filled' && style === 'primary',
                [outlinedCriticalClasses]: variant === 'outlined' && style === 'critical',
                [outlinedInverseClasses]: variant === 'outlined' && style === 'inverse',
                [outlinedNeutralClasses]: variant === 'outlined' && style === 'neutral',
                [outlinedPrimaryClasses]: variant === 'outlined' && style === 'primary',
                [transparentCriticalClasses]: variant === 'transparent' && style === 'critical',
                [transparentInverseClasses]: variant === 'transparent' && style === 'inverse',
                [transparentNeutralClasses]: variant === 'transparent' && style === 'neutral',
                [transparentPrimaryClasses]: variant === 'transparent' && style === 'primary',
            }),
            [style, variant]
        );

        const sizeClasses = useMemo(
            () =>
                cn({
                    'gap-[4px] px-sm py-[13px] leading-[8px]': size === 'sm',
                    'gap-[6px] px-md py-sm align-text-bottom leading-[10px]': size === 'md',
                }),
            [size]
        );

        const iconClasses = cn('absolute group-aria-busy:text-transparent');

        return (
            <Component
                aria-busy={loading}
                aria-live="polite"
                className={cn(
                    'hui-focus-visible-outline relative flex max-w-full items-center justify-center whitespace-nowrap rounded-button text-center font-primary tracking-[var(--letter-spacing-button)] outline outline-1 -outline-offset-1 transition-colors disabled:text-text-disabled',
                    colorClasses,
                    sizeClasses,
                    className
                )}
                data-testid={dataTestId}
                disabled={disabled && !loading}
                onClick={onClick}
                ref={ref}
                style={{
                    fontSize: size === 'sm' ? 'var(--font-size-button-200)' : 'var(--font-size-button-100)',
                    fontWeight: 'var(--font-weight-button)',
                    textTransform: 'var(--text-transform-button)',
                    ...inlineStyles,
                }}
                {...rest}
            >
                {IconLeft && (
                    <div
                        className="relative flex items-center justify-center"
                        style={{ width: `${size === 'md' ? iconSizesToPixels['sm'] : iconSizesToPixels['xs']}px` }}
                    >
                        <IconLeft
                            className={iconClasses}
                            size={size === 'md' ? 'sm' : 'xs'}
                            style={iconStyle}
                        />
                    </div>
                )}

                {children}
                {IconRight && (
                    <div
                        className="relative flex items-center justify-center"
                        style={{ width: `${size === 'md' ? iconSizesToPixels['sm'] : iconSizesToPixels['xs']}px` }}
                    >
                        <IconRight
                            className={iconClasses}
                            size={size === 'md' ? 'sm' : 'xs'}
                            style={iconStyle}
                        />
                    </div>
                )}

                {loading && (
                    <LoadingSpinner
                        className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform', {
                            'text-critical-500': variant !== 'filled' && style === 'critical',
                            'text-icon-inverse':
                                (variant === 'filled' && style !== 'inverse') ||
                                ((variant === 'outlined' || variant === 'transparent') && style === 'inverse'),
                            'text-primary-500':
                                (variant !== 'filled' && style === 'primary') ||
                                (variant === 'filled' && style === 'inverse'),
                            'text-surface-500': variant !== 'filled' && style === 'neutral',
                        })}
                        color="inherit"
                        size={size === 'md' ? 'sm' : 'xs'}
                    />
                )}
            </Component>
        );
    }
);

Button.displayName = 'Button';

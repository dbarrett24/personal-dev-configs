import { AnyIcon } from '../../Icons/anyIcon';
import { cn } from '@dbarrett24/theme-system';
import { forwardRef, HTMLProps, MouseEventHandler, ReactNode, useCallback } from 'react';

type InlineButtonStyle = 'primary' | 'critical' | 'neutral' | 'inverse';

type InlineStyles = {
    inlineStyles?: HTMLProps<HTMLDivElement>['style'];
};

const downSizeIconSize = {
    md: 'sm',
    sm: 'xs',
    xs: 'xs',
} as const;

type Props = {
    children: ReactNode;
    /**
     * Optional className to add to the button.
     */
    className?: string;
    /**
     * Optional icon to show alongside the component.
     *
     * Usage:
     * ```tsx
     * <InlineButton icon={Info} />
     * ```
     */
    icon?: AnyIcon;
    /**
     * Optional location for the icon's rendering. Requires `icon` prop to do anything
     *
     * Usage:
     * ```tsx
     * <InlineButton icon={Info} iconPlacement="right" />
     * ```
     *
     * @default 'left'
     */
    iconPlacement?: 'left' | 'right';
    /**
     * Optional style for the icon's rendering.
     */
    iconStyle?: 'fill' | 'bold' | 'regular' | 'duotone';
    /**
     * Optional loading state trigger. Disables button and adds a loading state.
     *
     * @default false
     */
    loading?: boolean;
    /**
     * The size of the inline button to render.
     *
     * sm = small
     * md = medium (default)
     */
    size?: 'md' | 'sm' | 'xs';
    /**
     * Button style. This matches a color palette in the theme.
     *
     * @default 'primary'
     */
    style?: InlineButtonStyle;
    /**
     * The type of the button.
     *
     * @default 'button'
     */
    type?: 'button' | 'reset' | 'submit';
} & Omit<HTMLProps<HTMLButtonElement>, 'style' | 'size' | 'as'> &
    InlineStyles;

export const InlineButton = forwardRef<HTMLButtonElement, Props>(
    (
        {
            children,
            className,
            disabled = false,
            icon: Icon,
            iconPlacement = 'left',
            iconStyle,
            loading = false,
            onClick: onClickProp,
            size = 'md',
            style = 'primary',
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

        return (
            <button
                aria-busy={loading}
                aria-live="polite"
                className={cn(
                    // GENERAL
                    'hui-text-body-primary inline-flex w-min cursor-pointer items-center gap-2xs whitespace-nowrap border-none bg-transparent p-0 tracking-[0.5px] outline-none',
                    // FOCUS
                    'focus-visible:hui-focus-visible-outline focus-visible:underline',
                    {
                        'focus-visible:hui-focus-visible-outline-inverse': style === 'inverse',
                    },
                    // HOVER
                    'hover:underline',
                    { 'hover:no-underline': disabled || loading },
                    // DISABLED
                    'disabled:cursor-not-allowed disabled:text-text-disabled',
                    // SIZE
                    'h-[24px] text-base',
                    {
                        'h-[20px] text-xs leading-4': size === 'xs',
                        'h-[22px] text-sm leading-5': size === 'sm',
                    },
                    // STYLE
                    {
                        'text-link-primary hover:text-primary-700 active:text-primary-900': style === 'primary',
                        'text-link-secondary hover:text-surface-700 active:text-surface-900': style === 'neutral',
                        'text-text-critical hover:text-critical-700 active:text-critical-900': style === 'critical',
                        'text-text-inverse hover:text-surface-100 active:text-surface-200': style === 'inverse',
                    },
                    className
                )}
                data-hui-id="InlineButton"
                disabled={disabled || loading}
                onClick={onClick}
                ref={ref}
                {...rest}
            >
                {Icon && iconPlacement === 'left' && (
                    <Icon
                        color="inherit"
                        size={downSizeIconSize[size]}
                        style={iconStyle}
                    />
                )}
                {children}
                {Icon && iconPlacement === 'right' && (
                    <Icon
                        color="inherit"
                        size={downSizeIconSize[size]}
                        style={iconStyle}
                    />
                )}
            </button>
        );
    }
);

InlineButton.displayName = 'InlineButton';

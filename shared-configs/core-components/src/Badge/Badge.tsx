import type { BadgeProps } from './Badge.types';
import { cn } from '@dbarrett24/theme-system';
import { useMemo } from 'react';

const convertBadgeSizeToIconSize = {
    md: 'sm',
    sm: 'sm',
    xs: 'xs',
} as const;

export const Badge = ({
    children,
    className,
    color = 'neutral',
    'data-testid': dataTestId,
    dense = false,
    emphasis = 'subtle',
    iconLeft: IconLeft,
    iconRight: IconRight,
    iconStyle = 'regular',
    id,
    round = false,
    size = 'md',
}: BadgeProps) => {
    const classes = useMemo(
        () =>
            cn(
                // GENERAL
                'flex w-fit min-w-fit items-center justify-center',
                // PADDING AND TEXT SIZE
                {
                    'hui-text-body-primary h-[30px] px-xs': size === 'md',
                    'hui-text-body-secondary h-[24px] px-xs': size === 'sm',
                    'hui-text-caption h-[18px] min-w-[18px] px-[5px]': size === 'xs' && dense,
                    'hui-text-caption h-[18px] px-xs': size === 'xs' && !dense,
                },
                // TEXT & BORDER COLOR
                'text-text-inverse',
                {
                    'border border-solid': emphasis !== 'bold',
                    'border-border-critical text-text-critical': color === 'critical' && emphasis === 'subtle',
                    'border-border-info text-background-info-dark': color === 'info' && emphasis === 'subtle',
                    'border-border-secondary text-surface-500': color === 'neutral' && emphasis === 'subtle',
                    'border-border-success text-background-success-dark': color === 'success' && emphasis === 'subtle',
                    'border-border-warning text-text-warning': color === 'warning' && emphasis === 'subtle',
                    'border-transparent text-text-primary': color === 'warning' && emphasis === 'bold',
                },
                // RADIUS
                'rounded-sm',
                {
                    'rounded-xl': round,
                },
                // BACKGROUND COLOR
                {
                    'bg-background-critical-dark': color === 'critical' && emphasis === 'bold',
                    'bg-background-critical-light': color === 'critical' && emphasis === 'subtle',
                    'bg-background-info-dark': color === 'info' && emphasis === 'bold',
                    'bg-background-info-light': color === 'info' && emphasis === 'subtle',
                    'bg-background-success-dark': color === 'success' && emphasis === 'bold',
                    'bg-background-success-light': color === 'success' && emphasis === 'subtle',
                    'bg-background-warning-dark': color === 'warning' && emphasis === 'bold',
                    'bg-background-warning-light': color === 'warning' && emphasis === 'subtle',
                    'bg-surface-100': color === 'neutral' && emphasis === 'subtle',
                    'bg-surface-500': color === 'neutral' && emphasis === 'bold',
                },

                className
            ),
        [className, color, dense, emphasis, round, size]
    );

    return (
        <div
            className={classes}
            data-testid={dataTestId}
            id={id}
        >
            {IconLeft && (
                <IconLeft
                    className={cn({
                        'mr-2xs': Boolean(children),
                    })}
                    color="inherit"
                    size={convertBadgeSizeToIconSize[size]}
                    style={iconStyle}
                />
            )}
            {children}
            {IconRight && (
                <IconRight
                    className={cn({
                        'ml-2xs': Boolean(children),
                    })}
                    color="inherit"
                    size={convertBadgeSizeToIconSize[size]}
                    style={iconStyle}
                />
            )}
        </div>
    );
};

Badge.displayName = 'Badge';

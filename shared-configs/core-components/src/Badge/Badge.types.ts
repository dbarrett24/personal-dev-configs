import type { AnyIcon } from '../Icons/anyIcon';
import type { IconComponent } from '../Icons/IconBase';
import type { ComponentProps, ReactNode } from 'react';

/** Color variant of the badge. */
export type BadgeColor = 'neutral' | 'critical' | 'success' | 'info' | 'warning';

/** Emphasis mode: bold (filled) or subtle (light with border). */
export type BadgeEmphasis = 'bold' | 'subtle';

/** Size of the badge. */
export type BadgeSize = 'md' | 'sm' | 'xs';

export type BadgeProps = {
    /** Content to display inside the badge. */
    children?: string | ReactNode;
    /** Additional CSS class name. */
    className?: string;
    /**
     * Color variant of the badge.
     * @default 'neutral'
     */
    color?: BadgeColor;
    /** Test ID for the badge. */
    'data-testid'?: string;
    /**
     * Reduces padding for xs size badges.
     * @default false
     */
    dense?: boolean;
    /**
     * Emphasis mode: bold (filled) or subtle (light with border).
     * @default 'subtle'
     */
    emphasis?: BadgeEmphasis;
    /** Optional icon to display on the left side. */
    iconLeft?: AnyIcon;
    /** Optional icon to display on the right side. */
    iconRight?: AnyIcon;
    /**
     * Icon style variant.
     * @default 'regular'
     */
    iconStyle?: ComponentProps<IconComponent>['style'];
    /** HTML id attribute. */
    id?: string;
    /**
     * Apply pill-shaped border radius.
     * @default false
     */
    round?: boolean;
    /**
     * Size of the badge.
     * @default 'md'
     */
    size?: BadgeSize;
};

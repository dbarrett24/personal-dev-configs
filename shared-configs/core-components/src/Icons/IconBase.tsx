import {
    colorIconCritical,
    colorIconDisabled,
    colorIconInfo,
    colorIconInverse,
    colorIconPrimary,
    colorIconSecondary,
    colorIconSuccess,
    colorIconWarning,
} from '@dbarrett24/theme-system';
import { cloneElement, forwardRef, ForwardRefExoticComponent, HTMLProps } from 'react';

export const iconSizesToPixels = {
    lg: 44,
    md: 30,
    sm: 20,
    xs: 14,
} as const;

export const getColor = (color: IconProps['color']) => {
    switch (color) {
        case 'critical':
            return `rgb(var(${colorIconCritical}))`;
        case 'disabled':
            return `rgb(var(${colorIconDisabled}))`;
        case 'info':
            return `rgb(var(${colorIconInfo}))`;
        case 'inverse':
            return `rgb(var(${colorIconInverse}))`;
        case 'primary':
            return `rgb(var(${colorIconPrimary}))`;
        case 'secondary':
            return `rgb(var(${colorIconSecondary}))`;
        case 'success':
            return `rgb(var(${colorIconSuccess}))`;
        case 'warning':
            return `rgb(var(${colorIconWarning}))`;
        case 'inherit':
        case undefined:
        default:
            return undefined;
    }
};

const getDisplayName = (name: string | undefined) => {
    if (!name) {
        return '';
    }
    return name.replace(/([A-Z])/g, ' $1').trim();
};

export type IconWeight = 'regular' | 'bold' | 'fill' | 'duotone';

export type IconProps = Omit<
    HTMLProps<SVGSVGElement>,
    'className' | 'color' | 'size' | 'style' | 'ref' | '$withoutAriaLabel'
> & {
    /**
     * If passed, the aria-label will not be set on the icon and is expected to be set by the parent component.
     *
     * @default false
     */
    $withoutAriaLabel?: boolean;
    className?: string;
    /**
     * Style the icon with any of the following colors. 'inherit' is a special value that uses the current color of the parent element.
     *
     * @default 'primary'
     */
    color?: 'critical' | 'disabled' | 'info' | 'inverse' | 'primary' | 'secondary' | 'success' | 'warning' | 'inherit';
    customStyles?: React.CSSProperties;
    displayName?: string;
    /**
     * The key for height and width of icon based on the following mapping
     *
     * ```
     * 'ExtraSmall' _ '14px'
     * 'Small' ______ '20px'
     * 'Medium' _____ '30px'
     * 'Large' ______ '44px'
     * ```
     *
     * @default 'md'
     */
    size?: keyof typeof iconSizesToPixels;
    /**
     * The weight of the icon
     *
     * @default 'regular'
     */
    style?: Exclude<IconWeight, 'light' | 'thin'>;
};

export type IconComponent = ForwardRefExoticComponent<IconProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconBase = forwardRef<SVGSVGElement, IconProps & { weights: Record<string, React.ReactElement<any>> }>(
    (
        {
            $withoutAriaLabel,
            className,
            color,
            customStyles,
            displayName,
            size = 'md',
            style = 'regular',
            weights,
            ...rest
        },
        ref
    ) => {
        const selectedWeight = weights[style];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!selectedWeight) {
            // eslint-disable-next-line no-console
            console.warn(`IconBase: No weight found for style "${style}" for icon "${displayName}"`);
            return null;
        }
        return cloneElement(selectedWeight, {
            // Use aria-label that is passed in or the icon name if `without-aria-label` is false
            'aria-label': $withoutAriaLabel ? rest['aria-label'] : getDisplayName(displayName),
            className,
            fill: getColor(color) ?? 'currentColor',
            height: iconSizesToPixels[size],
            ref,
            style: { minHeight: iconSizesToPixels[size], minWidth: iconSizesToPixels[size], ...customStyles },
            width: iconSizesToPixels[size],
            ...rest,
        });
    }
);

IconBase.displayName = 'IconBase';

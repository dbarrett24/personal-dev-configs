import type { AnyIcon } from '../Icons/anyIcon';
import type { IconComponent } from '../Icons/IconBase';
import type { ComponentProps, ElementType, HTMLProps } from 'react';

export type ButtonStyle = 'primary' | 'critical' | 'neutral' | 'inverse';
export type ButtonVariant = 'filled' | 'outlined' | 'transparent';

export type InlineStyles = {
    inlineStyles?: HTMLProps<HTMLDivElement>['style'];
};

export type Props = {
    as?: ElementType;
    /**
     * Optional test ID for targeting in tests.
     *
     * @default 'Button'
     *
     * Usage:
     * ```tsx
     * <Button dataTestId="submit-form">Submit</Button>
     * ```
     */
    dataTestId?: string;
    /**
     * Optional icon to show alongside the left of the component.
     *
     * Usage:
     * ```tsx
     * <Button iconLeft={HeartStraight} />
     * ```
     */
    iconLeft?: AnyIcon;
    /**
     * Optional icon to show alongside the right of the component.
     *
     * Usage:
     * ```tsx
     * <Button iconRight={HeartStraight} />
     * ```
     */
    iconRight?: AnyIcon;
    /**
     * Optional icon style to show alongside the component.
     *
     * Usage:
     * ```tsx
     * <Button iconStyle="fill" />
     * ```
     */
    iconStyle?: ComponentProps<IconComponent>['style'];

    /**
     * Optional loading state trigger. Disables button and adds a loading state.
     *
     * @default false
     */
    loading?: boolean;
    /**
     * Button size.
     *
     * @default 'md'
     */
    size?: 'md' | 'sm';
    /**
     * Button style. This matches a color palette in the theme.
     *
     * @default 'primary'
     */
    style?: ButtonStyle;
    type?: 'button' | 'submit' | 'reset';
    /**
     * What kind of button to render. `filled`, `outlined`, or `transparent`.
     *
     * @default 'filled'
     */
    variant?: ButtonVariant;
} & Omit<HTMLProps<HTMLButtonElement>, 'style' | 'size' | 'as'> &
    InlineStyles;

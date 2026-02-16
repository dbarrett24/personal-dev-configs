import { Button as CoreButton, type ButtonProps as CoreButtonProps } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

export type ButtonProps = CoreButtonProps;

type Props = CoreButtonProps;

export const Button = ({ className, ...props }: Props) => (
    <CoreButton
        className={cn('shadow-md', className)}
        {...props}
    />
);

Button.displayName = 'BasketballButton';

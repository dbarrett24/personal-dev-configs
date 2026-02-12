import { SpinnerGap } from '../Icons';
import { ComponentProps } from 'react';

export const LoadingSpinner = ({ className, color = 'inverse', size, ...rest }: ComponentProps<typeof SpinnerGap>) => {
    return (
        <span className={className}>
            <SpinnerGap
                className="animate-spin"
                color={color}
                data-testid="loading-spinner-animation"
                size={size}
                style="bold"
                {...rest}
            />
        </span>
    );
};

LoadingSpinner.displayName = 'LoadingSpinner';

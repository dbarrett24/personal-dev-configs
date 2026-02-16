import { Button } from './Button';
import { render, screen } from '@dbarrett24/testing-utils';

describe('Professional Button', () => {
    it('should render with rounded-sm className', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('rounded-sm');
    });

    it('should forward all props to CoreButton', () => {
        const onClick = jest.fn();

        render(
            <Button
                dataTestId="test-button"
                onClick={onClick}
            >
                Test Button
            </Button>
        );

        const button = screen.getByTestId('test-button');
        expect(button).toBeVisible();
        expect(button).toHaveTextContent('Test Button');
    });

    it('should work with filled variant and primary style', () => {
        render(
            <Button
                style="primary"
                variant="filled"
            >
                Primary Filled
            </Button>
        );

        expect(screen.getByRole('button')).toBeVisible();
    });

    it('should work with outlined variant and critical style', () => {
        render(
            <Button
                style="critical"
                variant="outlined"
            >
                Critical Outlined
            </Button>
        );

        expect(screen.getByRole('button')).toBeVisible();
    });

    it('should work with transparent variant and neutral style', () => {
        render(
            <Button
                style="neutral"
                variant="transparent"
            >
                Neutral Transparent
            </Button>
        );

        expect(screen.getByRole('button')).toBeVisible();
    });

    it('should handle disabled state', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should handle loading state', () => {
        render(<Button loading>Loading Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(screen.getByTestId('loading-spinner-animation')).toBeVisible();
    });

    it('should merge custom className with rounded-sm', () => {
        render(<Button className="custom-class">Custom Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('rounded-sm');
        expect(button).toHaveClass('custom-class');
    });
});

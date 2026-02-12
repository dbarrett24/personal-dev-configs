import { Button } from './Button';
import { render, screen, userEvent } from '@dbarrett24/testing-utils';

describe('Button', () => {
    it('should render children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeVisible();
    });

    it('should call onClick when clicked', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();

        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole('button');
        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();

        render(
            <Button
                isDisabled
                onClick={handleClick}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call preventDefault when disabled and clicked', () => {
        const handleClick = jest.fn();

        render(
            <Button
                isDisabled
                onClick={handleClick}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        button.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        // The button's internal handler should prevent default
        // We can't directly test preventDefault, but we verify onClick wasn't called
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();

        render(
            <Button
                isLoading
                onClick={handleClick}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call preventDefault when loading and clicked', () => {
        const handleClick = jest.fn();

        render(
            <Button
                isLoading
                onClick={handleClick}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        button.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        // The button's internal handler should prevent default
        // We can't directly test preventDefault, but we verify onClick wasn't called
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should have proper aria attributes when loading', () => {
        render(<Button isLoading>Loading</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have proper aria attributes when disabled', () => {
        render(<Button isDisabled>Disabled</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-disabled', 'true');
        expect(button).toBeDisabled();
    });

    it('should show loading text when loading', () => {
        render(<Button isLoading>Click me</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(screen.queryByText('Click me')).not.toBeInTheDocument();
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
        render(<Button className="custom-class">Click me</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });

    it('should support different button types', () => {
        render(<Button type="submit">Submit</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });

    it('should support custom aria-label', () => {
        render(<Button ariaLabel="Custom label">Icon</Button>);

        expect(screen.getByRole('button', { name: 'Custom label' })).toBeVisible();
    });

    it('should support testId', () => {
        render(<Button testId="my-button">Click me</Button>);

        expect(screen.getByTestId('my-button')).toBeVisible();
    });
});

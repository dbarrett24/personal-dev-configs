import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
    it('should render children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
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
                onClick={handleClick}
                isDisabled={true}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();

        render(
            <Button
                onClick={handleClick}
                isLoading={true}
            >
                Click me
            </Button>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should have proper aria attributes when loading', () => {
        render(<Button isLoading={true}>Loading</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have proper aria attributes when disabled', () => {
        render(<Button isDisabled={true}>Disabled</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-disabled', 'true');
        expect(button).toBeDisabled();
    });

    it('should show loading spinner when loading', () => {
        render(
            <Button isLoading={true}>Click me</Button>
        );

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(screen.queryByText('Click me')).not.toBeInTheDocument();
        // Spinner is rendered (SVG element)
        expect(button.querySelector('svg')).toBeInTheDocument();
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

        expect(screen.getByRole('button', { name: 'Custom label' })).toBeInTheDocument();
    });

    it('should support testId', () => {
        render(<Button testId="my-button">Click me</Button>);

        expect(screen.getByTestId('my-button')).toBeInTheDocument();
    });
});

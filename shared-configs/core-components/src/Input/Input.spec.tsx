import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
    it('should render with label', () => {
        render(<Input label="Email" />);

        expect(screen.getByLabelText('Email')).toBeVisible();
    });

    it('should associate label with input via htmlFor', () => {
        render(
            <Input
                id="username-input"
                label="Username"
            />
        );

        const input = screen.getByLabelText('Username');
        expect(input).toHaveAttribute('id', 'username-input');
    });

    it('should generate unique ID when not provided', () => {
        render(
            <>
                <Input label="First Name" />
                <Input label="Last Name" />
            </>
        );

        const firstInput = screen.getByLabelText('First Name');
        const lastInput = screen.getByLabelText('Last Name');

        expect(firstInput.id).toBeTruthy();
        expect(lastInput.id).toBeTruthy();
        expect(firstInput.id).not.toBe(lastInput.id);
    });

    it('should show required indicator', () => {
        render(
            <Input
                isRequired
                label="Email"
            />
        );

        expect(screen.getByText('Email')).toBeVisible();
        expect(screen.getByText('*')).toBeVisible();
    });

    it('should handle disabled state', () => {
        render(
            <Input
                isDisabled
                label="Email"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toBeDisabled();
    });

    it('should handle readonly state', () => {
        render(
            <Input
                isReadOnly
                label="Email"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('readonly');
    });

    it('should display error message', () => {
        render(
            <Input
                error="Invalid email"
                label="Email"
            />
        );

        expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
    });

    it('should have aria-invalid when error is present', () => {
        render(
            <Input
                error="Invalid email"
                label="Email"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should associate error with input via aria-describedby', () => {
        render(
            <Input
                error="Invalid email"
                id="email-input"
                label="Email"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('email-input-error'));
    });

    it('should display helper text', () => {
        render(
            <Input
                helperText="Must be at least 8 characters"
                label="Password"
            />
        );

        expect(screen.getByText('Must be at least 8 characters')).toBeVisible();
    });

    it('should not display helper text when error is present', () => {
        render(
            <Input
                error="Error message"
                helperText="Helper text"
                label="Password"
            />
        );

        expect(screen.getByText('Error message')).toBeVisible();
        expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });

    it('should visually hide label when hideLabel is true', () => {
        render(
            <Input
                hideLabel
                label="Search"
            />
        );

        const label = screen.getByText('Search');
        expect(label).toHaveClass('sr-only');
    });

    it('should render start adornment', () => {
        render(
            <Input
                label="Search"
                startAdornment={
                    <span
                        aria-label="search icon"
                        role="img"
                    >
                        🔍
                    </span>
                }
            />
        );

        expect(screen.getByLabelText('search icon')).toBeVisible();
    });

    it('should render end adornment', () => {
        render(
            <Input
                endAdornment={<button type="button">Show</button>}
                label="Password"
            />
        );

        // Button is wrapped in aria-hidden span, so we need to query by text
        expect(screen.getByText('Show')).toBeVisible();
    });

    it('should handle onChange event', async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Input
                label="Email"
                onChange={handleChange}
            />
        );

        const input = screen.getByLabelText('Email');
        await user.type(input, 'test@example.com');

        expect(handleChange).toHaveBeenCalled();
    });

    it('should apply custom classNames', () => {
        render(
            <Input
                inputClassName="input-class"
                label="Email"
                labelClassName="label-class"
                testId="email-wrapper"
                wrapperClassName="wrapper-class"
            />
        );

        const wrapper = screen.getByTestId('email-wrapper');
        expect(wrapper).toHaveClass('wrapper-class');
    });

    it('should support testId', () => {
        render(
            <Input
                label="Email"
                testId="email-input"
            />
        );

        expect(screen.getByTestId('email-input')).toBeVisible();
    });

    it('should mark as required with aria-required', () => {
        render(
            <Input
                isRequired
                label="Email"
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeRequired();
        expect(input).toBeRequired();
    });
});

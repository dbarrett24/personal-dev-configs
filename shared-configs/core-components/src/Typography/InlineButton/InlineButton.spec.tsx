import { InlineButton } from './InlineButton';
import { HeartStraight, Lock } from '../../Icons';
import { render, screen, userEvent } from '@dbarrett24/testing-utils';
import { ComponentProps } from 'react';

const testText = 'inline button test';
let onClick = jest.fn();
let onSubmit = jest.fn();

describe('InlineButton', () => {
    let props: ComponentProps<typeof InlineButton>;

    beforeEach(() => {
        props = {
            children: testText,
            onClick,
        };
    });

    it('should prevent onClick on disabled', async () => {
        render(
            <InlineButton
                disabled
                {...props}
            />
        );

        await userEvent.click(screen.getByRole('button'));

        expect(props.onClick).not.toHaveBeenCalled();
    });

    it('should prevent onSubmit and onClick on disabled', async () => {
        render(
            <form onSubmit={onSubmit}>
                <InlineButton
                    disabled
                    {...props}
                />
            </form>
        );

        await userEvent.click(screen.getByRole('button'));

        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should prevent onClick on loading', async () => {
        render(
            <InlineButton
                loading
                {...props}
            />
        );

        await userEvent.click(screen.getByRole('button'));

        expect(props.onClick).not.toHaveBeenCalled();
    });

    it('should prevent onSubmit and onClick on loading', async () => {
        render(
            <form onSubmit={onSubmit}>
                <InlineButton
                    loading
                    {...props}
                />
            </form>
        );

        await userEvent.click(screen.getByRole('button'));

        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should prevent onSubmit and onClick on loading and disabled', async () => {
        render(
            <form onSubmit={onSubmit}>
                <InlineButton
                    disabled
                    loading
                    {...props}
                />
            </form>
        );

        await userEvent.click(screen.getByRole('button'));

        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('loading should supercede disabled', async () => {
        render(
            <InlineButton
                disabled
                loading
                {...props}
            />
        );

        await userEvent.click(screen.getByRole('button'));

        expect(props.onClick).not.toHaveBeenCalled();
    });

    it('should have aria-busy when loading', () => {
        render(
            <InlineButton
                loading
                {...props}
            />
        );

        expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('should have aria-live polite', () => {
        render(<InlineButton {...props} />);

        expect(screen.getByRole('button')).toHaveAttribute('aria-live', 'polite');
    });

    describe.each`
        size    | expectedHeight
        ${'xs'} | ${'h-[20px]'}
        ${'sm'} | ${'h-[22px]'}
        ${'md'} | ${'h-[24px]'}
    `('size $size', ({ expectedHeight, size }) => {
        it('should render with correct size classes', () => {
            render(
                <InlineButton
                    {...props}
                    size={size}
                />
            );

            const button = screen.getByRole('button');
            expect(button).toHaveClass(expectedHeight);
        });

        it('should put icons on the left', () => {
            const { asFragment } = render(
                <InlineButton
                    {...props}
                    icon={HeartStraight}
                    iconPlacement="left"
                    size={size}
                >
                    I am a wonderful inline button
                </InlineButton>
            );

            expect(asFragment()).toMatchSnapshot();
        });

        it('should put icons on the right', () => {
            const { asFragment } = render(
                <InlineButton
                    {...props}
                    icon={Lock}
                    iconPlacement="right"
                    size={size}
                >
                    I am a wonderful inline button
                </InlineButton>
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });

    it.each(['primary', 'neutral', 'critical', 'inverse'] as const)('should match snapshot for %s style', (style) => {
        const { asFragment } = render(
            <InlineButton
                {...props}
                style={style}
            />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(screen.getByText(testText)).toBeVisible();
        expect(screen.getByRole('button')).toBeVisible();
        expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should render with icon and custom iconStyle', () => {
        const { asFragment } = render(
            <InlineButton
                {...props}
                icon={HeartStraight}
                iconStyle="bold"
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle click events when enabled', async () => {
        render(<InlineButton {...props} />);

        await userEvent.click(screen.getByRole('button'));

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('should render with type attribute when provided', () => {
        render(
            <InlineButton
                {...props}
                type="submit"
            />
        );

        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('should accept a ref', () => {
        const refMock = jest.fn();
        render(
            <InlineButton
                {...props}
                ref={refMock}
            />
        );
        expect(refMock).toHaveBeenCalled();
    });
});

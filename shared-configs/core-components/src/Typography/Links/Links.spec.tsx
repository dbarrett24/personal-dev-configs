import * as allExports from './Links';
import { render, screen } from '@dbarrett24/testing-utils';

const testText = 'Click this link';

describe('Link Components', () => {
    const allLinks = Object.keys(allExports)
        .filter(
            // Remove all non-component exports
            // @ts-expect-error we can't type the exports
            // eslint-disable-next-line import/namespace
            (exp) => Boolean(allExports[exp].displayName)
        )
        .map((name) => ({ name }));

    describe.each(allLinks)('$name', ({ name }) => {
        // Get the actual component
        // @ts-expect-error we can't type the exports
        // eslint-disable-next-line import/namespace
        const Component = allExports[name];

        it('should render', () => {
            const { asFragment } = render(<Component>{testText}</Component>);
            expect(asFragment()).toMatchSnapshot();
            expect(screen.getByText(testText)).toBeVisible();
        });

        it.each(['xs', 'sm', 'md'])('should render with size %s', (size) => {
            const { asFragment } = render(<Component size={size}>{testText}</Component>);
            expect(asFragment()).toMatchSnapshot();
            expect(screen.getByText(testText)).toBeVisible();
        });

        it('should handle disabled state', () => {
            const { asFragment } = render(<Component disabled>{testText}</Component>);
            expect(asFragment()).toMatchSnapshot();
        });

        it('should accept a ref', () => {
            const refMock = jest.fn();
            render(<Component ref={refMock}>{testText}</Component>);
            expect(refMock).toHaveBeenCalled();
        });
    });
});

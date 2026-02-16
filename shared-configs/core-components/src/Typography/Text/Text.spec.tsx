import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyPrimary,
    BodySecondary,
    Caption,
    LabelMini,
    LabelMiniStrong,
    LabelStrong,
} from './Text';
import { render } from '@dbarrett24/testing-utils';

describe('Text Components', () => {
    describe('H1', () => {
        it('should render', () => {
            expect(render(<H1>Test</H1>).asFragment()).toMatchSnapshot();
        });

        it('should accept a ref', () => {
            const refMock = jest.fn();
            render(<H1 ref={refMock}>Test</H1>);
            expect(refMock).toHaveBeenCalled();
        });

        it('should render with custom color', () => {
            expect(render(<H1 color="critical">Test</H1>).asFragment()).toMatchSnapshot();
        });
    });

    describe('H2', () => {
        it('should render', () => {
            expect(render(<H2>Test</H2>).asFragment()).toMatchSnapshot();
        });
    });

    describe('H3', () => {
        it('should render', () => {
            expect(render(<H3>Test</H3>).asFragment()).toMatchSnapshot();
        });
    });

    describe('H4', () => {
        it('should render', () => {
            expect(render(<H4>Test</H4>).asFragment()).toMatchSnapshot();
        });
    });

    describe('H5', () => {
        it('should render', () => {
            expect(render(<H5>Test</H5>).asFragment()).toMatchSnapshot();
        });
    });

    describe('H6', () => {
        it('should render', () => {
            expect(render(<H6>Test</H6>).asFragment()).toMatchSnapshot();
        });
    });

    describe('BodyPrimary', () => {
        it('should render', () => {
            expect(render(<BodyPrimary>Test</BodyPrimary>).asFragment()).toMatchSnapshot();
        });

        it('should accept a ref', () => {
            const refMock = jest.fn();
            render(<BodyPrimary ref={refMock}>Test</BodyPrimary>);
            expect(refMock).toHaveBeenCalled();
        });
    });

    describe('BodySecondary', () => {
        it('should render', () => {
            expect(render(<BodySecondary>Test</BodySecondary>).asFragment()).toMatchSnapshot();
        });
    });

    describe('Caption', () => {
        it('should render', () => {
            expect(render(<Caption>Test</Caption>).asFragment()).toMatchSnapshot();
        });
    });

    describe('LabelMini', () => {
        it('should render', () => {
            expect(render(<LabelMini>Test</LabelMini>).asFragment()).toMatchSnapshot();
        });
    });

    describe('LabelMiniStrong', () => {
        it('should render', () => {
            expect(render(<LabelMiniStrong>Test</LabelMiniStrong>).asFragment()).toMatchSnapshot();
        });
    });

    describe('LabelStrong', () => {
        it('should render', () => {
            expect(render(<LabelStrong>Test</LabelStrong>).asFragment()).toMatchSnapshot();
        });
    });
});

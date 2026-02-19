import { AuctionBadge } from './AuctionBadge';
import { render, screen } from '@dbarrett24/testing-utils';
import { ComponentProps } from 'react';

describe('AuctionBadge', () => {
    let props: ComponentProps<typeof AuctionBadge>;

    beforeEach(() => {
        props = {
            viewers: 100,
        };
    });

    const getRender = () => render(<AuctionBadge {...props} />);

    it('renders live state by default', () => {
        const { asFragment } = getRender();

        expect(screen.getByTestId('auction-badge')).toBeVisible();
        expect(screen.getByText('LIVE')).toBeVisible();
        expect(screen.getByText('100')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders with video icon when hasVideo is true', () => {
        props.hasVideo = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('video-camera-icon')).toBeVisible();
        expect(screen.getByText('LIVE')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders paused state with pause icon', () => {
        props.isPaused = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('pause-icon')).toBeVisible();
        expect(screen.getByText('PAUSED')).toBeVisible();
        expect(screen.getByText('100')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders closing state without icons or viewer count', () => {
        props.isClosing = true;

        const { asFragment } = getRender();

        expect(screen.queryByTestId('video-camera-icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('pause-icon')).not.toBeInTheDocument();
        expect(screen.getByText('CLOSING')).toBeVisible();
        expect(screen.queryByText('100')).not.toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('does not show video icon when paused', () => {
        props.hasVideo = true;
        props.isPaused = true;

        getRender();

        expect(screen.queryByTestId('video-camera-icon')).not.toBeInTheDocument();
        expect(screen.getByTestId('pause-icon')).toBeVisible();
    });

    it('does not show pause icon when closing', () => {
        props.isPaused = true;
        props.isClosing = true;

        getRender();

        expect(screen.queryByTestId('pause-icon')).not.toBeInTheDocument();
        expect(screen.getByText('CLOSING')).toBeVisible();
    });

    it('does not show video icon when closing', () => {
        props.hasVideo = true;
        props.isClosing = true;

        getRender();

        expect(screen.queryByTestId('video-camera-icon')).not.toBeInTheDocument();
        expect(screen.getByText('CLOSING')).toBeVisible();
    });

    it('renders with custom className', () => {
        props.className = 'custom-class';

        getRender();

        expect(screen.getByTestId('auction-badge')).toHaveClass('custom-class');
    });

    it('displays correct viewer count', () => {
        props.viewers = 245;

        getRender();

        expect(screen.getByText('245')).toBeVisible();
    });

    it('uses default viewer count of 1 when not provided', () => {
        props.viewers = undefined as any;

        getRender();

        expect(screen.getByText('1')).toBeVisible();
    });

    it('shows dot separator when not closing', () => {
        getRender();

        const badge = screen.getByTestId('auction-badge');
        expect(badge).toBeVisible();
        expect(screen.getByText('100')).toBeVisible();
    });

    it('does not show dot separator when closing', () => {
        props.isClosing = true;

        getRender();

        expect(screen.getByText('CLOSING')).toBeVisible();
        expect(screen.queryByText('100')).not.toBeInTheDocument();
    });

    it('renders live state with video and viewer count', () => {
        props.hasVideo = true;
        props.viewers = 500;

        const { asFragment } = getRender();

        expect(screen.getByTestId('video-camera-icon')).toBeVisible();
        expect(screen.getByText('LIVE')).toBeVisible();
        expect(screen.getByText('500')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });
});

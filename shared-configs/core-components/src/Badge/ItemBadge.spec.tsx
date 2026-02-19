import { ItemBadge } from './ItemBadge';
import { render, screen } from '@dbarrett24/testing-utils';
import { ComponentProps } from 'react';

describe('ItemBadge', () => {
    let props: ComponentProps<typeof ItemBadge>;

    beforeEach(() => {
        props = {};
    });

    const getRender = () => render(<ItemBadge {...props} />);

    it('renders featured state', () => {
        props.isFeatured = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.getByText('FEATURED')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders live state without viewers', () => {
        props.isLive = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.getByText('LIVE')).toBeVisible();
        expect(screen.queryByText(/\d+/)).not.toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders live state with viewers when viewers > 0', () => {
        props.isLive = true;
        props.viewers = 126;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.getByText('LIVE')).toBeVisible();
        expect(screen.getByText('126')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('does not show viewers when viewers is 0', () => {
        props.isLive = true;
        props.viewers = 0;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.queryByText('0')).not.toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders extended state', () => {
        props.isExtended = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.getByText('EXTENDED')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders sold state', () => {
        props.isSold = true;

        const { asFragment } = getRender();

        expect(screen.getByTestId('item-badge')).toBeVisible();
        expect(screen.getByText('SOLD')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('prioritizes sold over extended', () => {
        props.isSold = true;
        props.isExtended = true;

        getRender();

        expect(screen.getByText('SOLD')).toBeVisible();
        expect(screen.queryByText('EXTENDED')).not.toBeInTheDocument();
    });

    it('prioritizes sold over live', () => {
        props.isSold = true;
        props.isLive = true;
        props.viewers = 100;

        getRender();

        expect(screen.getByText('SOLD')).toBeVisible();
        expect(screen.queryByText('LIVE')).not.toBeInTheDocument();
        expect(screen.queryByText('100')).not.toBeInTheDocument();
    });

    it('prioritizes sold over featured', () => {
        props.isSold = true;
        props.isFeatured = true;

        getRender();

        expect(screen.getByText('SOLD')).toBeVisible();
        expect(screen.queryByText('FEATURED')).not.toBeInTheDocument();
    });

    it('prioritizes extended over live', () => {
        props.isExtended = true;
        props.isLive = true;
        props.viewers = 100;

        getRender();

        expect(screen.getByText('EXTENDED')).toBeVisible();
        expect(screen.queryByText('LIVE')).not.toBeInTheDocument();
        expect(screen.queryByText('100')).not.toBeInTheDocument();
    });

    it('prioritizes extended over featured', () => {
        props.isExtended = true;
        props.isFeatured = true;

        getRender();

        expect(screen.getByText('EXTENDED')).toBeVisible();
        expect(screen.queryByText('FEATURED')).not.toBeInTheDocument();
    });

    it('prioritizes live over featured', () => {
        props.isLive = true;
        props.isFeatured = true;

        getRender();

        expect(screen.getByText('LIVE')).toBeVisible();
        expect(screen.queryByText('FEATURED')).not.toBeInTheDocument();
    });

    it('renders with custom className for featured', () => {
        props.isFeatured = true;
        props.className = 'custom-class';

        getRender();

        expect(screen.getByTestId('item-badge')).toHaveClass('custom-class');
    });

    it('renders with custom className for live', () => {
        props.isLive = true;
        props.className = 'custom-class';

        getRender();

        expect(screen.getByTestId('item-badge')).toHaveClass('custom-class');
    });

    it('renders with custom className for extended', () => {
        props.isExtended = true;
        props.className = 'custom-class';

        getRender();

        expect(screen.getByTestId('item-badge')).toHaveClass('custom-class');
    });

    it('renders with custom className for sold', () => {
        props.isSold = true;
        props.className = 'custom-class';

        getRender();

        expect(screen.getByTestId('item-badge')).toHaveClass('custom-class');
    });

    it('displays correct viewer count for live items', () => {
        props.isLive = true;
        props.viewers = 245;

        getRender();

        expect(screen.getByText('245')).toBeVisible();
    });

    it('handles all states set to true with correct priority', () => {
        props.isFeatured = true;
        props.isLive = true;
        props.isExtended = true;
        props.isSold = true;
        props.viewers = 100;

        getRender();

        expect(screen.getByText('SOLD')).toBeVisible();
        expect(screen.queryByText('EXTENDED')).not.toBeInTheDocument();
        expect(screen.queryByText('LIVE')).not.toBeInTheDocument();
        expect(screen.queryByText('FEATURED')).not.toBeInTheDocument();
    });
});

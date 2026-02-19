import { Badge } from './Badge';
import { HeartStraight, ShareNetwork } from '../Icons';
import { render } from '@dbarrett24/testing-utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Badge>;

describe('Badge', () => {
    describe.each<Props['emphasis']>(['bold', 'subtle'])('renders emphasis: %s,', (emphasis) => {
        describe.each<Props['color']>(['critical', 'info', 'neutral', 'success', 'warning'])('color: %s,', (color) => {
            describe.each<Props['round']>([true, false])('round: %s,', (round) => {
                it.each<Props['size']>(['md', 'sm', 'xs'])('size: %s', (size) => {
                    expect(
                        render(
                            <Badge
                                color={color}
                                emphasis={emphasis}
                                round={round}
                                size={size}
                            >
                                Badge
                            </Badge>
                        ).asFragment()
                    ).toMatchSnapshot();
                });
            });
        });
    });

    it('should work with default values and single icon', () => {
        expect(
            render(
                <Badge
                    iconLeft={HeartStraight}
                    iconRight={ShareNetwork}
                />
            ).asFragment()
        ).toMatchSnapshot();
    });

    it('should work with data-testid', () => {
        expect(render(<Badge data-testid="test-id" />).getByTestId('test-id')).toBeInTheDocument();
    });
});

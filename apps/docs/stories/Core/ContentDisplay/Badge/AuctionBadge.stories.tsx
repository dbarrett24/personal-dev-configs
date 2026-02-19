import type { Meta, StoryObj } from '@storybook/react';
import { AuctionBadge } from '@dbarrett24/core-components/Badge/AuctionBadge';

const meta: Meta<typeof AuctionBadge> = {
    args: {
        hasVideo: true,
        isClosing: false,
        isPaused: false,
        viewers: 126,
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Optional className for custom styling and positioning',
            name: 'className',
            type: { name: 'string' },
        },
        hasVideo: {
            control: 'boolean',
            description: 'Whether the auction has video streaming capabilities',
            name: 'hasVideo',
            type: { name: 'boolean' },
        },
        isClosing: {
            control: 'boolean',
            description: 'Whether the auction is currently closing',
            name: 'isClosing',
            type: { name: 'boolean' },
        },
        isPaused: {
            control: 'boolean',
            description: 'Whether the auction is currently paused',
            name: 'isPaused',
            type: { name: 'boolean' },
        },
        viewers: {
            control: 'number',
            description: 'Number of viewers currently watching the auction',
            name: 'viewers',
            type: { name: 'number' },
        },
    },
    component: AuctionBadge,
    title: 'Badge/AuctionBadge',
};

export default meta;

type Story = StoryObj<typeof AuctionBadge>;

export const _AuctionBadge: Story = {};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <AuctionBadge
                isClosing={false}
                isPaused={false}
                viewers={126}
            />
            <AuctionBadge
                hasVideo
                isClosing={false}
                isPaused={false}
                viewers={245}
            />
            <AuctionBadge
                isClosing={false}
                isPaused
                viewers={132}
            />
            <AuctionBadge
                isClosing
                isPaused={false}
                viewers={0}
            />
        </div>
    ),
};

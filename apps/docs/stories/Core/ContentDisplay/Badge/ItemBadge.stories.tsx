import type { Meta, StoryObj } from '@storybook/react';
import { ItemBadge } from '@dbarrett24/core-components/Badge/ItemBadge';

const meta: Meta<typeof ItemBadge> = {
    args: {
        isFeatured: false,
        isLive: true,
        viewers: 126,
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Optional className for custom styling and positioning',
            name: 'className',
            type: { name: 'string' },
        },
        isExtended: {
            control: 'boolean',
            description: 'Whether the item bidding has been extended',
            name: 'isExtended',
            type: { name: 'boolean' },
        },
        isFeatured: {
            control: 'boolean',
            description: 'Whether the item is featured',
            name: 'isFeatured',
            type: { name: 'boolean' },
        },
        isLive: {
            control: 'boolean',
            description: 'Whether the item is currently live',
            name: 'isLive',
            type: { name: 'boolean' },
        },
        isSold: {
            control: 'boolean',
            description: 'Whether the item has been sold',
            name: 'isSold',
            type: { name: 'boolean' },
        },
        viewers: {
            control: 'number',
            description: 'Number of viewers currently watching (only shown when isLive and > 0)',
            name: 'viewers',
            type: { name: 'number' },
        },
    },
    component: ItemBadge,
    title: 'Badge/ItemBadge',
};

export default meta;

type Story = StoryObj<typeof ItemBadge>;

export const _ItemBadge: Story = {};

export const _ItemBadgeVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-md">
            <ItemBadge isFeatured />
            <ItemBadge isLive />
            <ItemBadge
                isLive
                viewers={126}
            />
            <ItemBadge isExtended />
            <ItemBadge isSold />
        </div>
    ),
};

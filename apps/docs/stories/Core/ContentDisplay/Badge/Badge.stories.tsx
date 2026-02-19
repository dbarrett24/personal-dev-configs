import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@dbarrett24/core-components/Badge';
import { HeartStraight, Star } from '@dbarrett24/core-components/Icons';
import { AllBadgesStory } from './AllBadgesStory';

const meta: Meta<typeof Badge> = {
    args: {
        children: 'Badge',
        color: 'neutral',
        emphasis: 'bold',
        round: true,
        size: 'md',
    },
    argTypes: {
        children: {
            description: 'Inner content of badge',
            name: 'children',
            type: { name: 'string' },
        },
        color: {
            control: 'select',
            description: 'Color options',
            name: 'color',
            options: ['neutral', 'critical', 'success', 'info', 'warning'],
            type: { name: 'string' },
        },
        emphasis: {
            control: 'select',
            description: 'What empphasis to render',
            name: 'emphasis',
            options: ['bold', 'subtle'],
            type: { name: 'string' },
        },
        round: {
            description: 'Add border radius to badge',
            name: 'round',
            type: { name: 'boolean' },
        },
        size: {
            control: 'select',
            description: 'What size to render. Small icons are for MD and SM badges, XS icons for XS Badges only.',
            name: 'size',
            options: ['md', 'sm', 'xs'],
            type: { name: 'string' },
        },
    },
    component: Badge,
    title: 'Badge',
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const DefaultBadge: Story = {};
export const WithIcons: Story = {
    args: {
        iconLeft: HeartStraight,
        iconRight: Star,
    },
};
export const OnlyIcon: Story = {
    args: {
        children: '',
        iconLeft: HeartStraight,
    },
};
export const AllBadges: Story = {
    render: (args) => <AllBadgesStory {...args} />,
};

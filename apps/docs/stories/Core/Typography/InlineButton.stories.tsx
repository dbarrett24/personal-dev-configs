import { AllInlineButtonsStory } from './AllInlineButtonsStory';
import { Info } from '@dbarrett24/core-components/Icons';
import { InlineButton } from '@dbarrett24/core-components/Typography/InlineButton';
import { Meta, StoryObj } from '@storybook/react';

export default {
    args: {
        children: 'Inline Button Text',
        disabled: false,
        iconPlacement: 'left',
        size: 'md',
    },
    argTypes: {
        children: { description: 'Rendered Button Text', name: 'children', type: 'string' },
        disabled: { table: { defaultValue: { summary: 'false' } }, type: 'boolean' },
        iconPlacement: {
            control: 'select',
            description: 'Select the position of the icon',
            options: ['left', 'right'],
            table: { defaultValue: { summary: '"left"' } },
        },
        size: {
            control: 'select',
            description: 'Size of the inline button',
            options: ['md', 'sm', 'xs'],
            table: { defaultValue: { summary: '"md"' } },
        },
    },
    component: InlineButton,
    title: 'Typography/Inline Button',
} as Meta<typeof InlineButton>;

export const _InlineButton: StoryObj<typeof InlineButton> = {
    args: {
        icon: Info,
    },
};

export const _AllInlineButtons: StoryObj<typeof InlineButton> = {
    render: (args) => <AllInlineButtonsStory {...args} />,
};

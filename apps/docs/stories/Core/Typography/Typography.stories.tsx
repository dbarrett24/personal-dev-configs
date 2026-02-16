import {
    BodyPrimary,
    BodySecondary,
    Caption,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    LabelMini,
    LabelMiniStrong,
    LabelStrong,
    Link,
    WeakLink,
    MonochromeLink,
    InverseLink,
    SubtleLink,
    SubtleWeakLink,
    SubtleMonochromeLink,
    SubtleInverseLink,
} from '@dbarrett24/core-components';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

export default {
    args: {
        children: 'Text',
    },
    argTypes: {
        children: { description: 'Rendered text', name: 'children', type: 'string' },
    },
    component: BodyPrimary,
    title: 'Typography',
} as Meta<ComponentProps<typeof BodyPrimary>>;

export const _BodyPrimary: StoryObj<ComponentProps<typeof BodyPrimary>> = {
    render: (args) => <BodyPrimary {...args} />,
};

export const _BodySecondary: StoryObj<ComponentProps<typeof BodySecondary>> = {
    render: (args) => <BodySecondary {...args} />,
};

export const _Caption: StoryObj<ComponentProps<typeof Caption>> = {
    render: (args) => <Caption {...args} />,
};

export const _H1: StoryObj<ComponentProps<typeof H1>> = {
    name: 'H1',
    render: (args) => <H1 {...args} />,
};

export const _H2: StoryObj<ComponentProps<typeof H2>> = {
    name: 'H2',
    render: (args) => <H2 {...args} />,
};

export const _H3: StoryObj<ComponentProps<typeof H3>> = {
    name: 'H3',
    render: (args) => <H3 {...args} />,
};

export const _H4: StoryObj<ComponentProps<typeof H4>> = {
    name: 'H4',
    render: (args) => <H4 {...args} />,
};

export const _H5: StoryObj<ComponentProps<typeof H5>> = {
    name: 'H5',
    render: (args) => <H5 {...args} />,
};

export const _H6: StoryObj<ComponentProps<typeof H6>> = {
    name: 'H6',
    render: (args) => <H6 {...args} />,
};

export const _LabelMini: StoryObj<ComponentProps<typeof LabelMini>> = {
    render: (args) => <LabelMini {...args} />,
};

export const _LabelMiniStrong: StoryObj<ComponentProps<typeof LabelMiniStrong>> = {
    render: (args) => <LabelMiniStrong {...args} />,
};

export const _LabelStrong: StoryObj<ComponentProps<typeof LabelStrong>> = {
    render: (args) => <LabelStrong {...args} />,
};

export const _Link: StoryObj<ComponentProps<typeof Link>> = {
    render: (args) => <Link {...args} />,
};

export const _LinkMd: StoryObj<ComponentProps<typeof Link>> = {
    render: (args) => (
        <Link
            {...args}
            size="md"
        />
    ),
};

export const _LinkSm: StoryObj<ComponentProps<typeof Link>> = {
    render: (args) => (
        <Link
            {...args}
            size="sm"
        />
    ),
};

export const _LinkXs: StoryObj<ComponentProps<typeof Link>> = {
    render: (args) => (
        <Link
            {...args}
            size="xs"
        />
    ),
};

export const _WeakLink: StoryObj<ComponentProps<typeof WeakLink>> = {
    render: (args) => <WeakLink {...args} />,
};

export const _MonochromeLink: StoryObj<ComponentProps<typeof MonochromeLink>> = {
    render: (args) => <MonochromeLink {...args} />,
};

export const _InverseLink: StoryObj<ComponentProps<typeof InverseLink>> = {
    render: (args) => (
        <div style={{ background: '#1f2937', padding: '16px' }}>
            <InverseLink {...args} />
        </div>
    ),
};

export const _SubtleLink: StoryObj<ComponentProps<typeof SubtleLink>> = {
    render: (args) => <SubtleLink {...args} />,
};

export const _SubtleWeakLink: StoryObj<ComponentProps<typeof SubtleWeakLink>> = {
    render: (args) => <SubtleWeakLink {...args} />,
};

export const _SubtleMonochromeLink: StoryObj<ComponentProps<typeof SubtleMonochromeLink>> = {
    render: (args) => <SubtleMonochromeLink {...args} />,
};

export const _SubtleInverseLink: StoryObj<ComponentProps<typeof SubtleInverseLink>> = {
    render: (args) => (
        <div style={{ background: '#1f2937', padding: '16px' }}>
            <SubtleInverseLink {...args} />
        </div>
    ),
};

import {
    GoogleSocialIconSmall,
    GoogleSocialIconMedium,
} from '@dbarrett24/core-components/Icons/socialIcons/googleSocialIcon';
import {
    FacebookSocialIconSmall,
    FacebookSocialIconMedium,
} from '@dbarrett24/core-components/Icons/socialIcons/facebookSocialIcon';
import {
    AppleSocialIconSmall,
    AppleSocialIconMedium,
} from '@dbarrett24/core-components/Icons/socialIcons/appleSocialIcon';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Social Media Icons for third-party authentication.
 *
 * These icons follow official brand guidelines and are available in two sizes:
 * - Small (20px)
 * - Medium (30px)
 */

type SocialIconsStoryProps = {
    size: 'Small' | 'Medium';
};

const SocialIconsStory = ({ size }: SocialIconsStoryProps) => {
    const GoogleIcon = size === 'Small' ? GoogleSocialIconSmall : GoogleSocialIconMedium;
    const FacebookIcon = size === 'Small' ? FacebookSocialIconSmall : FacebookSocialIconMedium;
    const AppleIcon = size === 'Small' ? AppleSocialIconSmall : AppleSocialIconMedium;

    return (
        <div style={{ display: 'flex', gap: '24px' }}>
            <GoogleIcon />
            <FacebookIcon />
            <AppleIcon />
        </div>
    );
};

const meta: Meta<typeof SocialIconsStory> = {
    title: 'Icons/Social Icons',
    component: SocialIconsStory,
    args: {
        size: 'Medium',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['Small', 'Medium'],
            description: 'Size of the social icons',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SocialIconsStory>;

export const _SocialIcons: Story = {};

export const _GoogleSmall: Story = {
    render: () => <GoogleSocialIconSmall />,
};

export const _GoogleMedium: Story = {
    render: () => <GoogleSocialIconMedium />,
};

export const _FacebookSmall: Story = {
    render: () => <FacebookSocialIconSmall />,
};

export const _FacebookMedium: Story = {
    render: () => <FacebookSocialIconMedium />,
};

export const _AppleSmall: Story = {
    render: () => <AppleSocialIconSmall />,
};

export const _AppleMedium: Story = {
    render: () => <AppleSocialIconMedium />,
};

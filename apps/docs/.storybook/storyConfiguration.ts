/**
 * Story Configuration - STORYBOOK_KEY-based filtering
 *
 * Controls which stories are loaded based on the STORYBOOK_KEY environment variable.
 * This enables running brand-specific or unified Storybook instances.
 *
 * Usage:
 *   STORYBOOK_KEY=core storybook dev        → Core component stories only
 *   STORYBOOK_KEY=basketball storybook dev  → Basketball brand stories
 *   STORYBOOK_KEY=professional storybook dev → Professional brand stories
 *   STORYBOOK_KEY=all storybook dev         → All stories from all brands
 */

type StoryEntry = {
    directory: string;
    titlePrefix: string;
    files?: string;
};

type StorybookConfig = {
    defaultTheme: string;
    stories: StoryEntry[];
};

const storybookStories: Record<string, StorybookConfig> = {
    core: {
        defaultTheme: 'default',
        stories: [
            { directory: '../stories/Core/SelectionAndInput', titlePrefix: 'Selection and Input' },
            { directory: '../stories/Core/Infrastructure', titlePrefix: 'Infrastructure' },
        ],
    },
    basketball: {
        defaultTheme: 'basketball',
        stories: [{ directory: '../stories/Basketball/Core', titlePrefix: 'Core' }],
    },
    professional: {
        defaultTheme: 'professional',
        stories: [{ directory: '../stories/Professional/Core', titlePrefix: 'Core' }],
    },
    all: {
        defaultTheme: 'default',
        stories: [
            { directory: '../stories/Core/SelectionAndInput', titlePrefix: 'Core/Selection and Input' },
            { directory: '../stories/Core/Infrastructure', titlePrefix: 'Core/Infrastructure' },
            { directory: '../stories/Basketball/Core', titlePrefix: 'Basketball/Core' },
            { directory: '../stories/Professional/Core', titlePrefix: 'Professional/Core' },
        ],
    },
};

/** Stories that appear in ALL Storybook instances */
const consistentStories: StoryEntry[] = [{ directory: '../stories/Shared/GetStarted', titlePrefix: 'Get Started' }];

/**
 * Returns the story configuration for the current STORYBOOK_KEY.
 * Falls back to 'core' if no key is set.
 */
export const getStories = (): StoryEntry[] => {
    const key = process.env.STORYBOOK_KEY || 'core';
    const config = storybookStories[key] || storybookStories.core;
    return [...consistentStories, ...config.stories];
};

/**
 * Returns the default theme for the current STORYBOOK_KEY.
 */
export const getDefaultTheme = (): string => {
    const key = process.env.STORYBOOK_KEY || 'core';
    const config = storybookStories[key] || storybookStories.core;
    return config.defaultTheme;
};

'use client';

import { H1, H2, H3, BodyPrimary, Caption } from '@dbarrett24/core-components';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorRow, TitleRow } from './ColorTokens.helpers';

const ColorTokensPage = () => {
    return (
        <div className="p-lg">
            <H1 className="mb-md">Design System Color Tokens</H1>
            <Caption className="mb-xl">
                Comprehensive documentation of all color tokens available in the theme system.
            </Caption>

            {/* Background Tokens */}
            <H2 className="mb-sm mt-xl">Background Tokens</H2>
            <BodyPrimary className="mb-md">
                These tokens style the backgrounds of pages and other large UI surfaces. Normally used with the
                &quot;bg-&quot; prefix.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="background-primary"
                description="The default background color of the user interface."
            />
            <ColorRow
                name="background-secondary"
                description="Use for backgrounds of smaller secondary sections of the user interface."
            />
            <ColorRow
                name="background-tertiary"
                description="Alternative for backgrounds of smaller secondary sections of the user interface."
            />
            <ColorRow
                name="background-inverse"
                description="Use for high contrast page or component backgrounds."
            />
            <ColorRow
                name="background-subdued"
                description="Use for backgrounds of smaller secondary sections of the user interface."
            />
            <ColorRow
                name="background-hover"
                opacity={5}
                description="The hover state color for elements with the highest level of prominence."
            />
            <ColorRow
                name="background-hover-inverse"
                opacity={5}
                description="The hover state inverse color for elements with the highest level of prominence."
            />
            <ColorRow
                name="background-overlay"
                opacity={40}
                description="The overlay color for modals and other UI elements that need to be visually separated from the rest of the page."
            />
            <ColorRow
                name="background-pressed"
                description="The pressed state color for interactive elements."
                opacity={20}
            />
            <ColorRow
                name="background-pressed-inverse"
                opacity={20}
                description="The pressed state inverse color for interactive elements."
            />
            <ColorRow
                name="background-disabled"
                description="Background color for disabled UI elements."
            />
            <ColorRow
                name="background-info-light"
                description="Light background for informational content."
            />
            <ColorRow
                name="background-info-dark"
                description="Dark background for informational content."
            />
            <ColorRow
                name="background-success-light"
                description="Light background for success messaging."
            />
            <ColorRow
                name="background-success-dark"
                description="Dark background for success messaging."
            />
            <ColorRow
                name="background-critical-light"
                description="Light background for critical/error messaging."
            />
            <ColorRow
                name="background-critical-dark"
                description="Dark background for critical/error messaging."
            />
            <ColorRow
                name="background-warning-light"
                description="Light background for warning messaging."
            />
            <ColorRow
                name="background-warning-dark"
                description="Dark background for warning messaging."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div className="bg-background-primary">
      <p>Hello World</p>
    </div>
  );
};`}</code>
            </pre>

            {/* Text Tokens */}
            <H2 className="mb-sm mt-xl">Text Tokens</H2>
            <BodyPrimary className="mb-md">
                These tokens describe the colors that can be applied to text. They are usually styled through the color
                prop on text components, otherwise normally used with the &quot;text-&quot; Tailwind prefix.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="text-primary"
                description="Default text color for primary content."
            />
            <ColorRow
                name="text-secondary"
                description="Text color for secondary content."
            />
            <ColorRow
                name="text-inverse"
                description="Text color for content on dark backgrounds."
            />
            <ColorRow
                name="text-critical"
                description="Text color for critical/error messaging."
            />
            <ColorRow
                name="text-info"
                description="Text color for informational content."
            />
            <ColorRow
                name="text-success"
                description="Text color for success messaging."
            />
            <ColorRow
                name="text-warning"
                description="Text color for warning messaging."
            />
            <ColorRow
                name="text-inactive"
                description="Text color for inactive elements."
            />
            <ColorRow
                name="text-disabled"
                description="Text color for disabled elements."
            />
            <ColorRow
                name="link-primary"
                description="Default color for links."
            />
            <ColorRow
                name="link-secondary"
                description="Secondary link color."
            />
            <ColorRow
                name="link-monochrome"
                description="Monochrome link color."
            />
            <ColorRow
                name="link-hover"
                description="Link hover state color."
            />
            <ColorRow
                name="link-pressed"
                description="Link pressed state color."
            />
            <ColorRow
                name="link-disabled"
                description="Link disabled state color."
            />
            <ColorRow
                name="link-inverse"
                description="Link color on dark backgrounds."
            />
            <ColorRow
                name="link-inverse-hover"
                description="Link hover color on dark backgrounds."
            />
            <ColorRow
                name="link-inverse-pressed"
                description="Link pressed color on dark backgrounds."
            />
            <ColorRow
                name="link-inverse-disabled"
                description="Link disabled color on dark backgrounds."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return <span className="text-text-primary">Hello World</span>;
};`}</code>
            </pre>

            {/* Icon Tokens */}
            <H2 className="mb-sm mt-xl">Icon Tokens</H2>
            <BodyPrimary className="mb-md">
                These tokens describe the colors that can be applied to icons. Usually styled through the color prop on
                icon components, otherwise normally used with the &quot;fill-&quot; Tailwind prefix.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="icon-primary"
                description="Default icon color."
            />
            <ColorRow
                name="icon-secondary"
                description="Secondary icon color."
            />
            <ColorRow
                name="icon-inverse"
                description="Icon color on dark backgrounds."
            />
            <ColorRow
                name="icon-info"
                description="Icon color for informational content."
            />
            <ColorRow
                name="icon-success"
                description="Icon color for success states."
            />
            <ColorRow
                name="icon-warning"
                description="Icon color for warning states."
            />
            <ColorRow
                name="icon-critical"
                description="Icon color for critical/error states."
            />
            <ColorRow
                name="icon-disabled"
                description="Icon color for disabled states."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return <Info className="fill-icon-primary" />;
};`}</code>
            </pre>

            {/* Border Tokens */}
            <H2 className="mb-sm mt-xl">Border Tokens</H2>
            <BodyPrimary className="mb-md">
                These tokens describe the colors that can be applied to borders. Usually applied with the
                &quot;border-&quot; Tailwind prefix.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="border-primary"
                description="Default color used for outlines and borders."
            />
            <ColorRow
                name="border-secondary"
                description="The color for any visual divider or any other UI element."
            />
            <ColorRow
                name="border-tertiary"
                description="Use for borders and outlines that are a bit more delicate or intentionally subdued in the UI."
            />
            <ColorRow
                name="border-inverse"
                description="Use for borders on dark or high contrast backgrounds."
            />
            <ColorRow
                name="border-black"
                description="Use for borders to create a high contrast between elements in a layout."
            />
            <ColorRow
                name="border-info"
                description="Use for borders in context of informational messaging and content."
            />
            <ColorRow
                name="border-success"
                description="Use for borders in context of success messaging and content."
            />
            <ColorRow
                name="border-critical"
                description="Use for borders in context of critical messaging and content."
            />
            <ColorRow
                name="border-warning"
                description="Use for borders in context of warning messaging and content."
            />
            <ColorRow
                name="border-disabled"
                description="Use for borders of disabled UI elements."
            />
            <ColorRow
                name="border-hover"
                description="The hover state color for borders of interactive UI elements."
            />
            <ColorRow
                name="border-selected"
                description="The selected state color for borders of interactive UI elements."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      {/* Typical usage */}
      <div className="border border-border-primary">Hello World</div>
      {/* Use x, y, l, r, t, b to control which side */}
      <div className="border-y border-border-primary">Hello World</div>
      {/* Use solid to be more specific on the border style */}
      <div className="border border-solid border-border-primary">Hello World</div>
    </div>
  );
};`}</code>
            </pre>

            {/* Focus Tokens */}
            <H2 className="mb-sm mt-xl">Focus Tokens</H2>
            <BodyPrimary className="mb-md">
                These tokens describe the colors that can be applied to borders of components while in their focus
                state. Usually applied with focus utility classes.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                opacity={50}
                name="focus-primary"
                description="Applied to borders around interactive UI elements in the focus state."
            />
            <ColorRow
                name="focus-inverse"
                opacity={50}
                description="Applied to borders around interactive UI elements in the focus state on dark backgrounds."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <button className="focus:ring-2 focus:ring-focus-primary">
      Focusable Button
    </button>
  );
};`}</code>
            </pre>

            {/* Shadow Tokens */}
            <H2 className="mb-sm mt-xl">Shadow Tokens</H2>
            <BodyPrimary className="mb-md">
                Shadow tokens for elevation and depth. Use these to create visual hierarchy.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="shadow-01"
                description="Smallest shadow for subtle elevation."
            />
            <ColorRow
                name="shadow-02"
                description="Small shadow for cards and buttons."
            />
            <ColorRow
                name="shadow-03"
                description="Medium shadow for modals and popovers."
            />
            <ColorRow
                name="shadow-04"
                description="Large shadow for prominent elements."
            />
            <ColorRow
                name="shadow-05"
                description="Top shadow (inverted)."
            />

            <H3 className="mb-sm mt-md">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div className="shadow-01">
      Card with subtle shadow
    </div>
  );
};`}</code>
            </pre>

            {/* Color Palette */}
            <H2 className="mb-sm mt-xl">All Common Interface Variables</H2>
            <BodyPrimary className="mb-md">
                These are the alias tokens used to fill the named tokens above. If a named token from the preset list
                does not suit your needs, explore alternative options using the common interface variables. Make sure to
                always follow WCAG 2.0 standards for contrast compliance.
            </BodyPrimary>

            <TitleRow />
            <ColorRow
                name="primary-50"
                description="Lightest shade of primary color."
            />
            <ColorRow
                name="primary-100"
                description="Very light primary color."
            />
            <ColorRow
                name="primary-200"
                description="Light primary color."
            />
            <ColorRow
                name="primary-300"
                description="Medium-light primary color."
            />
            <ColorRow
                name="primary-400"
                description="Medium primary color."
            />
            <ColorRow
                name="primary-500"
                description="Base primary color."
            />
            <ColorRow
                name="primary-600"
                description="Medium-dark primary color."
            />
            <ColorRow
                name="primary-700"
                description="Dark primary color."
            />
            <ColorRow
                name="primary-800"
                description="Very dark primary color."
            />
            <ColorRow
                name="primary-900"
                description="Darkest shade of primary color."
            />

            <div className="mt-md" />

            <ColorRow
                name="secondary-50"
                description="Lightest shade of secondary color."
            />
            <ColorRow
                name="secondary-100"
                description="Very light secondary color."
            />
            <ColorRow
                name="secondary-200"
                description="Light secondary color."
            />
            <ColorRow
                name="secondary-300"
                description="Medium-light secondary color."
            />
            <ColorRow
                name="secondary-400"
                description="Medium secondary color."
            />
            <ColorRow
                name="secondary-500"
                description="Base secondary color."
            />
            <ColorRow
                name="secondary-600"
                description="Medium-dark secondary color."
            />
            <ColorRow
                name="secondary-700"
                description="Dark secondary color."
            />
            <ColorRow
                name="secondary-800"
                description="Very dark secondary color."
            />
            <ColorRow
                name="secondary-900"
                description="Darkest shade of secondary color."
            />

            <div className="mt-md" />

            <ColorRow
                name="tertiary-50"
                description="Lightest shade of tertiary color."
            />
            <ColorRow
                name="tertiary-100"
                description="Very light tertiary color."
            />
            <ColorRow
                name="tertiary-200"
                description="Light tertiary color."
            />
            <ColorRow
                name="tertiary-300"
                description="Medium-light tertiary color."
            />
            <ColorRow
                name="tertiary-400"
                description="Medium tertiary color."
            />
            <ColorRow
                name="tertiary-500"
                description="Base tertiary color."
            />
            <ColorRow
                name="tertiary-600"
                description="Medium-dark tertiary color."
            />
            <ColorRow
                name="tertiary-700"
                description="Dark tertiary color."
            />
            <ColorRow
                name="tertiary-800"
                description="Very dark tertiary color."
            />
            <ColorRow
                name="tertiary-900"
                description="Darkest shade of tertiary color."
            />

            <div className="mt-md" />

            <ColorRow
                name="info-50"
                description="Lightest shade of info color."
            />
            <ColorRow
                name="info-100"
                description="Very light info color."
            />
            <ColorRow
                name="info-200"
                description="Light info color."
            />
            <ColorRow
                name="info-300"
                description="Medium-light info color."
            />
            <ColorRow
                name="info-400"
                description="Medium info color."
            />
            <ColorRow
                name="info-500"
                description="Base info color."
            />
            <ColorRow
                name="info-600"
                description="Medium-dark info color."
            />
            <ColorRow
                name="info-700"
                description="Dark info color."
            />
            <ColorRow
                name="info-800"
                description="Very dark info color."
            />
            <ColorRow
                name="info-900"
                description="Darkest shade of info color."
            />

            <div className="mt-md" />

            <ColorRow
                name="success-50"
                description="Lightest shade of success color."
            />
            <ColorRow
                name="success-100"
                description="Very light success color."
            />
            <ColorRow
                name="success-200"
                description="Light success color."
            />
            <ColorRow
                name="success-300"
                description="Medium-light success color."
            />
            <ColorRow
                name="success-400"
                description="Medium success color."
            />
            <ColorRow
                name="success-500"
                description="Base success color."
            />
            <ColorRow
                name="success-600"
                description="Medium-dark success color."
            />
            <ColorRow
                name="success-700"
                description="Dark success color."
            />
            <ColorRow
                name="success-800"
                description="Very dark success color."
            />
            <ColorRow
                name="success-900"
                description="Darkest shade of success color."
            />

            <div className="mt-md" />

            <ColorRow
                name="critical-50"
                description="Lightest shade of critical/error color."
            />
            <ColorRow
                name="critical-100"
                description="Very light critical color."
            />
            <ColorRow
                name="critical-200"
                description="Light critical color."
            />
            <ColorRow
                name="critical-300"
                description="Medium-light critical color."
            />
            <ColorRow
                name="critical-400"
                description="Medium critical color."
            />
            <ColorRow
                name="critical-500"
                description="Base critical color."
            />
            <ColorRow
                name="critical-600"
                description="Medium-dark critical color."
            />
            <ColorRow
                name="critical-700"
                description="Dark critical color."
            />
            <ColorRow
                name="critical-800"
                description="Very dark critical color."
            />
            <ColorRow
                name="critical-900"
                description="Darkest shade of critical color."
            />

            <div className="mt-md" />

            <ColorRow
                name="warning-50"
                description="Lightest shade of warning color."
            />
            <ColorRow
                name="warning-100"
                description="Very light warning color."
            />
            <ColorRow
                name="warning-200"
                description="Light warning color."
            />
            <ColorRow
                name="warning-300"
                description="Medium-light warning color."
            />
            <ColorRow
                name="warning-400"
                description="Medium warning color."
            />
            <ColorRow
                name="warning-500"
                description="Base warning color."
            />
            <ColorRow
                name="warning-600"
                description="Medium-dark warning color."
            />
            <ColorRow
                name="warning-700"
                description="Dark warning color."
            />
            <ColorRow
                name="warning-800"
                description="Very dark warning color."
            />
            <ColorRow
                name="warning-900"
                description="Darkest shade of warning color."
            />

            <div className="mt-md" />

            <ColorRow
                name="surface-50"
                description="Lightest shade of surface/neutral color."
            />
            <ColorRow
                name="surface-100"
                description="Very light surface color."
            />
            <ColorRow
                name="surface-200"
                description="Light surface color."
            />
            <ColorRow
                name="surface-300"
                description="Medium-light surface color."
            />
            <ColorRow
                name="surface-400"
                description="Medium surface color."
            />
            <ColorRow
                name="surface-500"
                description="Base surface color."
            />
            <ColorRow
                name="surface-600"
                description="Medium-dark surface color."
            />
            <ColorRow
                name="surface-700"
                description="Dark surface color."
            />
            <ColorRow
                name="surface-800"
                description="Very dark surface color."
            />
            <ColorRow
                name="surface-900"
                description="Darkest shade of surface color."
            />

            <H3 className="mb-sm mt-xl">Code Example</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return <span className="text-surface-500">Hello World</span>;
};`}</code>
            </pre>

            {/* Related Documentation */}
            <H2 className="mb-sm mt-xl">Related Documentation</H2>
            <BodyPrimary>
                <ul className="list-disc pl-lg">
                    <li>Typography Components</li>
                    <li>Theme Infrastructure</li>
                    <li>Spacing Tokens</li>
                </ul>
            </BodyPrimary>
        </div>
    );
};

const meta: Meta<typeof ColorTokensPage> = {
    title: 'Infrastructure/Color Tokens',
    component: ColorTokensPage,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Comprehensive documentation of all color tokens available in the design system. Use these tokens to ensure consistent theming across all components.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ColorTokensPage>;

export const _ColorTokens: Story = {};

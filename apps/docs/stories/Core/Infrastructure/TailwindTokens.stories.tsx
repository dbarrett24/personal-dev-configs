'use client';

import {
    H1,
    H2,
    H3,
    H4,
    BodyPrimary,
    Caption,
    LabelStrong,
} from '@dbarrett24/core-components';
import type { Meta, StoryObj } from '@storybook/react';

const TailwindTokensPage = () => {
    return (
        <div className="p-lg">
            <H1 className="mb-md">Design System Tailwind Tokens</H1>
            <Caption className="mb-xl">
                Custom tokens used in the Tailwind configuration, including spacing, responsive breakpoints, border
                radius, widths, and text component classes.
            </Caption>

            <BodyPrimary className="mb-xl">
                Although Tailwind CSS is a utility-first CSS framework, we have added custom tokens that align with our
                design system and platform themes.
            </BodyPrimary>

            {/* Spacing Tokens */}
            <H2 className="mb-sm mt-xl">Spacing Tokens</H2>
            <BodyPrimary className="mb-md">
                Custom spacing scale that can be used with any Tailwind utility that accepts spacing values. These
                tokens ensure consistent spacing throughout your application.
            </BodyPrimary>

            <H3 className="mb-sm mt-md">Available Spacing Tokens</H3>
            <div className="mb-md overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-border-secondary">
                            <th className="p-sm text-left">
                                <LabelStrong>Token</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Value</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Example Usage</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Result</LabelStrong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>3xs</code>
                            </td>
                            <td className="p-sm">2px</td>
                            <td className="p-sm">
                                <code>m-3xs</code>
                            </td>
                            <td className="p-sm">
                                <code>margin: 2px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>2xs</code>
                            </td>
                            <td className="p-sm">4px</td>
                            <td className="p-sm">
                                <code>p-2xs</code>
                            </td>
                            <td className="p-sm">
                                <code>padding: 4px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xs</code>
                            </td>
                            <td className="p-sm">8px</td>
                            <td className="p-sm">
                                <code>gap-xs</code>
                            </td>
                            <td className="p-sm">
                                <code>gap: 8px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>sm</code>
                            </td>
                            <td className="p-sm">16px</td>
                            <td className="p-sm">
                                <code>mt-sm</code>
                            </td>
                            <td className="p-sm">
                                <code>margin-top: 16px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>md</code>
                            </td>
                            <td className="p-sm">24px</td>
                            <td className="p-sm">
                                <code>pb-md</code>
                            </td>
                            <td className="p-sm">
                                <code>padding-bottom: 24px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>lg</code>
                            </td>
                            <td className="p-sm">32px</td>
                            <td className="p-sm">
                                <code>mx-lg</code>
                            </td>
                            <td className="p-sm">
                                <code>margin-left/right: 32px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xl</code>
                            </td>
                            <td className="p-sm">48px</td>
                            <td className="p-sm">
                                <code>py-xl</code>
                            </td>
                            <td className="p-sm">
                                <code>padding-top/bottom: 48px</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>2xl</code>
                            </td>
                            <td className="p-sm">64px</td>
                            <td className="p-sm">
                                <code>space-y-2xl</code>
                            </td>
                            <td className="p-sm">
                                <code>margin-top: 64px (child spacing)</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>3xl</code>
                            </td>
                            <td className="p-sm">128px</td>
                            <td className="p-sm">
                                <code>h-3xl</code>
                            </td>
                            <td className="p-sm">
                                <code>height: 128px</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <H3 className="mb-sm mt-md">Usage Examples</H3>

            <H4 className="mb-xs mt-sm">Margin</H4>
            <pre className="mb-md rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      {/* Single side margins */}
      <div className="mt-sm">Margin top: 16px</div>
      <div className="mr-md">Margin right: 24px</div>
      <div className="mb-lg">Margin bottom: 32px</div>
      <div className="ml-xl">Margin left: 48px</div>

      {/* Multiple side margins */}
      <div className="mx-sm">Horizontal margin: 16px</div>
      <div className="my-md">Vertical margin: 24px</div>
      <div className="m-lg">All sides margin: 32px</div>
    </div>
  );
};`}</code>
            </pre>

            <H4 className="mb-xs mt-sm">Padding</H4>
            <pre className="mb-md rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      {/* Single side padding */}
      <div className="pt-xs">Padding top: 8px</div>
      <div className="pr-sm">Padding right: 16px</div>
      <div className="pb-md">Padding bottom: 24px</div>
      <div className="pl-lg">Padding left: 32px</div>

      {/* Multiple side padding */}
      <div className="px-sm">Horizontal padding: 16px</div>
      <div className="py-md">Vertical padding: 24px</div>
      <div className="p-xl">All sides padding: 48px</div>
    </div>
  );
};`}</code>
            </pre>

            <H4 className="mb-xs mt-sm">Gap (Flexbox/Grid)</H4>
            <pre className="mb-md rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      <div className="flex gap-xs">Gap: 8px</div>
      <div className="grid grid-cols-2 gap-sm">Grid gap: 16px</div>
      <div className="flex flex-col gap-md">Column gap: 24px</div>
    </div>
  );
};`}</code>
            </pre>

            <H4 className="mb-xs mt-sm">Width and Height</H4>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      <div className="h-sm w-sm">Width & Height: 16px</div>
      <div className="h-md w-xl">Width: 48px, Height: 24px</div>
      <div className="min-h-2xl">Min height: 64px</div>
      <div className="max-w-3xl">Max width: 128px</div>
    </div>
  );
};`}</code>
            </pre>

            {/* Screen Tokens */}
            <H2 className="mb-sm mt-xl">Screen Tokens (Responsive Breakpoints)</H2>
            <BodyPrimary className="mb-md">
                Custom responsive breakpoints that can be used as prefixes for responsive design. These breakpoints help
                create consistent responsive behavior across your application.
            </BodyPrimary>

            <H3 className="mb-sm mt-md">Available Screen Tokens</H3>
            <div className="mb-md overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-border-secondary">
                            <th className="p-sm text-left">
                                <LabelStrong>Token</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Breakpoint</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Description</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Example Usage</LabelStrong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>mobile</code>
                            </td>
                            <td className="p-sm">max: 480px</td>
                            <td className="p-sm">Mobile devices only</td>
                            <td className="p-sm">
                                <code>mobile:hidden</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>mobileSmall</code>
                            </td>
                            <td className="p-sm">max: 380px</td>
                            <td className="p-sm">Small mobile devices</td>
                            <td className="p-sm">
                                <code>mobileSmall:text-sm</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xsMax</code>
                            </td>
                            <td className="p-sm">max: 768px</td>
                            <td className="p-sm">Extra small screens and below</td>
                            <td className="p-sm">
                                <code>xsMax:text-sm</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>desktop</code>
                            </td>
                            <td className="p-sm">min: 769px</td>
                            <td className="p-sm">Desktop and larger</td>
                            <td className="p-sm">
                                <code>desktop:flex</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>smMin</code>
                            </td>
                            <td className="p-sm">min: 769px</td>
                            <td className="p-sm">Small screens and up</td>
                            <td className="p-sm">
                                <code>smMin:block</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>smMax</code>
                            </td>
                            <td className="p-sm">max: 1023px</td>
                            <td className="p-sm">Small screens and below</td>
                            <td className="p-sm">
                                <code>smMax:hidden</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>mdMin</code>
                            </td>
                            <td className="p-sm">min: 1024px</td>
                            <td className="p-sm">Medium screens and up</td>
                            <td className="p-sm">
                                <code>mdMin:grid-cols-2</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>mdMax</code>
                            </td>
                            <td className="p-sm">max: 1248px</td>
                            <td className="p-sm">Medium screens and below</td>
                            <td className="p-sm">
                                <code>mdMax:px-sm</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>lgMin</code>
                            </td>
                            <td className="p-sm">min: 1249px</td>
                            <td className="p-sm">Large screens and up</td>
                            <td className="p-sm">
                                <code>lgMin:container</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>lgMax</code>
                            </td>
                            <td className="p-sm">max: 1644px</td>
                            <td className="p-sm">Large screens and below</td>
                            <td className="p-sm">
                                <code>lgMax:max-w-full</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xlMin</code>
                            </td>
                            <td className="p-sm">min: 1645px</td>
                            <td className="p-sm">Extra large screens and up</td>
                            <td className="p-sm">
                                <code>xlMin:px-2xl</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>tabletMin</code>
                            </td>
                            <td className="p-sm">min: 954px</td>
                            <td className="p-sm">Tablet portrait and up</td>
                            <td className="p-sm">
                                <code>tabletMin:flex-row</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>tabletMax</code>
                            </td>
                            <td className="p-sm">max: 954px</td>
                            <td className="p-sm">Tablet portrait and below</td>
                            <td className="p-sm">
                                <code>tabletMax:flex-col</code>
                            </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>print</code>
                            </td>
                            <td className="p-sm">print</td>
                            <td className="p-sm">Print media</td>
                            <td className="p-sm">
                                <code>print:hidden</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <H3 className="mb-sm mt-md">Usage Examples</H3>

            <H4 className="mb-xs mt-sm">Responsive Layout</H4>
            <pre className="mb-md rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div className="flex flex-col smMin:flex-row smMin:gap-sm mdMin:gap-md lgMin:gap-lg mobile:gap-2xs">
      <div className="w-full smMin:w-1/2 mdMin:w-1/3 lgMin:w-1/4">
        Responsive width
      </div>
    </div>
  );
};`}</code>
            </pre>

            <H4 className="mb-xs mt-sm">Responsive Typography</H4>
            <pre className="mb-md rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <h1 className="text-2xl smMin:text-3xl mdMin:text-4xl lgMin:text-5xl">
      Responsive heading
    </h1>
  );
};`}</code>
            </pre>

            <H4 className="mb-xs mt-sm">Hide/Show Elements</H4>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <div>
      {/* Show only on mobile */}
      <div className="block smMin:hidden">Mobile only content</div>

      {/* Hide on mobile, show on desktop */}
      <div className="hidden smMin:block">Desktop content</div>

      {/* Show different layouts */}
      <div className="flex flex-col mdMin:flex-row lgMin:grid lgMin:grid-cols-3">
        Responsive layout changes
      </div>
    </div>
  );
};`}</code>
            </pre>

            {/* Border Radius Tokens */}
            <H2 className="mb-sm mt-xl">Border Radius Tokens</H2>
            <BodyPrimary className="mb-md">
                Custom border radius tokens that can be used with Tailwind&apos;s <code>rounded-</code> utilities.
                These tokens ensure consistent corner rounding throughout your application.
            </BodyPrimary>

            <H3 className="mb-sm mt-md">Available Border Radius Tokens</H3>
            <div className="mb-md overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-border-secondary">
                            <th className="p-sm text-left">
                                <LabelStrong>Token</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Value</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Type</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Description</LabelStrong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>none</code>
                            </td>
                            <td className="p-sm">0</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">No border radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xs</code>
                            </td>
                            <td className="p-sm">2px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Extra small radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>sm</code>
                            </td>
                            <td className="p-sm">4px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Small radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>md</code>
                            </td>
                            <td className="p-sm">8px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Medium radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>lg</code>
                            </td>
                            <td className="p-sm">16px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Large radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>xl</code>
                            </td>
                            <td className="p-sm">32px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Extra large radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>full</code>
                            </td>
                            <td className="p-sm">9999px</td>
                            <td className="p-sm">Fixed</td>
                            <td className="p-sm">Fully rounded (circular)</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>button</code>
                            </td>
                            <td className="p-sm">Theme Value</td>
                            <td className="p-sm">Variable</td>
                            <td className="p-sm">Button-specific radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>checkbox</code>
                            </td>
                            <td className="p-sm">Theme Value</td>
                            <td className="p-sm">Variable</td>
                            <td className="p-sm">Checkbox-specific radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>input</code>
                            </td>
                            <td className="p-sm">Theme Value</td>
                            <td className="p-sm">Variable</td>
                            <td className="p-sm">Input-specific radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>search-input</code>
                            </td>
                            <td className="p-sm">Theme Value</td>
                            <td className="p-sm">Variable</td>
                            <td className="p-sm">Search input-specific radius</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>container</code>
                            </td>
                            <td className="p-sm">Theme Value</td>
                            <td className="p-sm">Variable</td>
                            <td className="p-sm">Container-specific radius</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <H3 className="mb-sm mt-md">Usage Examples</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <>
      {/* All corners */}
      <div className="rounded-sm">Small radius on all corners</div>
      <div className="rounded-container">Container-specific radius</div>
      <div className="rounded-full">Fully rounded/circular</div>

      {/* Specific sides */}
      <div className="rounded-t-md">Top corners medium radius</div>
      <div className="rounded-b-lg">Bottom corners large radius</div>

      {/* Component-specific usage */}
      <button className="rounded-button bg-primary-500 p-sm text-white">
        Button with consistent radius
      </button>
      <input className="rounded-input border border-border-primary p-xs" />
    </>
  );
};`}</code>
            </pre>

            {/* Width Tokens */}
            <H2 className="mb-sm mt-xl">Width Tokens</H2>
            <BodyPrimary className="mb-md">
                Custom width tokens that work with all Tailwind width utilities (<code>w-</code>, <code>max-w-</code>,{' '}
                <code>min-w-</code>). These tokens help create consistent container widths and layout constraints
                across your application.
            </BodyPrimary>

            <H3 className="mb-sm mt-md">Available Width Tokens</H3>
            <div className="mb-md overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-border-secondary">
                            <th className="p-sm text-left">
                                <LabelStrong>Token</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Value</LabelStrong>
                            </th>
                            <th className="p-sm text-left">
                                <LabelStrong>Description</LabelStrong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>page</code>
                            </td>
                            <td className="p-sm">1644px</td>
                            <td className="p-sm">Maximum width for page-level layouts</td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                            <td className="p-sm">
                                <code>dense</code>
                            </td>
                            <td className="p-sm">1200px</td>
                            <td className="p-sm">Medium width for dense content layouts</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <H3 className="mb-sm mt-md">Usage Examples</H3>
            <pre className="mb-xl rounded-md bg-background-secondary p-md">
                <code>{`const ExampleComponent = () => {
  return (
    <>
      {/* Maximum width (most common) */}
      <div className="mx-auto w-full max-w-page px-sm">
        Content constrained to page width, centered with padding
      </div>

      {/* Dense content container */}
      <div className="mx-auto w-full max-w-dense">
        Dense content layout
      </div>

      {/* Responsive width */}
      <div className="w-full lgMin:max-w-page mdMin:max-w-dense">
        Responsive container
      </div>

      {/* Full-width background with constrained content */}
      <div className="w-full bg-surface-100">
        <div className="mx-auto max-w-page px-sm py-md">
          Constrained content with full-width background
        </div>
      </div>
    </>
  );
};`}</code>
            </pre>

            {/* Best Practices */}
            <H2 className="mb-sm mt-xl">Best Practices</H2>

            <H3 className="mb-sm mt-md">Spacing</H3>
            <BodyPrimary className="mb-md">
                <ul className="list-disc space-y-xs pl-lg">
                    <li>Use the custom spacing tokens instead of arbitrary values for consistency</li>
                    <li>Consider the visual hierarchy when choosing spacing values</li>
                    <li>Use consistent spacing patterns throughout your application</li>
                </ul>
            </BodyPrimary>

            <H3 className="mb-sm mt-md">Responsive Design</H3>
            <BodyPrimary className="mb-md">
                <ul className="list-disc space-y-xs pl-lg">
                    <li>Design mobile-first, then enhance for larger screens</li>
                    <li>
                        Use <code>min-width</code> breakpoints (<code>smMin</code>, <code>mdMin</code>, etc.) for
                        progressive enhancement
                    </li>
                    <li>
                        Use <code>max-width</code> breakpoints (<code>mobile</code>, <code>smMax</code>, etc.)
                        sparingly for specific mobile-only styles
                    </li>
                    <li>Test your responsive designs across different screen sizes</li>
                    <li>
                        Consider tablet-specific breakpoints (<code>tabletMin</code>, <code>tabletMax</code>) for
                        optimal tablet experience
                    </li>
                </ul>
            </BodyPrimary>

            {/* Related Documentation */}
            <H2 className="mb-sm mt-xl">Related Documentation</H2>
            <BodyPrimary>
                <ul className="list-disc pl-lg">
                    <li>Color Tokens</li>
                    <li>Typography Components</li>
                    <li>Theme Infrastructure</li>
                </ul>
            </BodyPrimary>
        </div>
    );
};

const meta: Meta<typeof TailwindTokensPage> = {
    title: 'Infrastructure/Tailwind Tokens',
    component: TailwindTokensPage,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Custom Tailwind tokens for spacing, responsive breakpoints, border radius, and layout widths. These tokens ensure consistency across the design system.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TailwindTokensPage>;

export const _TailwindTokens: Story = {};

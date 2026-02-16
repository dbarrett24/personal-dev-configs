import type { Meta, StoryObj } from '@storybook/react';

/**
 * Theme Infrastructure Test Stories
 *
 * ⚠️ **DEV TOOL**: These stories are for verifying and documenting the theme system.
 * They're not production components, but serve as living documentation and testing tools.
 *
 * **Purpose**:
 * - Verify CSS variables are defined correctly
 * - Test custom Tailwind utilities (.hui-* classes)
 * - Validate semantic tokens (rounded-button, font-primary, etc.)
 * - Check typography system integration
 * - Test focus styles and accessibility features
 *
 * **Use Cases**:
 * - Debugging theme issues
 * - Verifying new brand theme implementations
 * - Onboarding developers to the theme system
 * - Quick reference for available utilities
 */

const meta: Meta = {
    title: 'Infrastructure/Theme System',
    parameters: {
        docs: {
            description: {
                component:
                    '**DEV TOOL**: Living documentation for the theme system infrastructure. ' +
                    'Use these stories to verify theme integration, test utilities, and understand the theme architecture.',
            },
        },
    },
};

export default meta;

type Story = StoryObj;

/**
 * CSS Variables Test
 *
 * Open DevTools → Elements → Select an element below → Computed tab
 * Search for these variables to verify they exist:
 * - --color-background-primary
 * - --font-family-primary
 * - --font-weight-h1
 * - --button-border-radius
 * - --spacing-sm (should be 1rem / 16px)
 * - --spacing-md (should be 1.5rem / 24px)
 */
export const CSSVariables: Story = {
    render: () => (
        <div className="space-y-4 p-8">
            <h2 className="mb-4 text-xl font-bold">CSS Variables Test</h2>
            <p className="text-text-secondary mb-4 text-sm">
                Open DevTools → Elements → Select any element → Computed tab → Search for variables
            </p>

            <div className="bg-background-secondary space-y-2 rounded-md p-4">
                <div
                    data-testid="color-test"
                    className="bg-background-primary border-border-primary border p-2"
                >
                    Background uses --color-background-primary
                </div>
                <div
                    data-testid="spacing-test"
                    className="px-sm py-md bg-background-tertiary"
                >
                    Padding: px-sm (16px) py-md (24px)
                </div>
                <div
                    data-testid="border-radius-test"
                    className="rounded-button bg-link-primary p-4 text-white"
                >
                    Border radius uses --button-border-radius (8px)
                </div>
            </div>

            <div className="mt-4 rounded border border-yellow-200 bg-yellow-50 p-4">
                <strong>How to verify:</strong>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm">
                    <li>Right-click any element above → Inspect</li>
                    <li>In DevTools, go to "Computed" tab</li>
                    <li>
                        Search for: <code className="bg-gray-100 px-1">--color-</code>
                    </li>
                    <li>Verify variables exist and have correct values</li>
                </ol>
            </div>
        </div>
    ),
};

/**
 * Typography Classes Test
 *
 * Visual check: Each heading should have different sizes and styles
 * DevTools check: Inspect each heading to see font-family, font-weight, letter-spacing CSS variables
 */
export const TypographyClasses: Story = {
    render: () => (
        <div className="space-y-4 p-8">
            <h2 className="mb-4 text-xl font-bold">Typography Classes Test</h2>

            <div className="space-y-4">
                <h1
                    className="hui-text-h1"
                    data-testid="h1"
                >
                    Heading 1 (.hui-text-h1)
                </h1>
                <h2
                    className="hui-text-h2"
                    data-testid="h2"
                >
                    Heading 2 (.hui-text-h2)
                </h2>
                <h3
                    className="hui-text-h3"
                    data-testid="h3"
                >
                    Heading 3 (.hui-text-h3)
                </h3>
                <h4
                    className="hui-text-h4"
                    data-testid="h4"
                >
                    Heading 4 (.hui-text-h4)
                </h4>
                <h5
                    className="hui-text-h5"
                    data-testid="h5"
                >
                    Heading 5 (.hui-text-h5)
                </h5>
                <h6
                    className="hui-text-h6"
                    data-testid="h6"
                >
                    Heading 6 (.hui-text-h6)
                </h6>
                <p
                    className="hui-text-body-primary"
                    data-testid="body-primary"
                >
                    Body Primary Text (.hui-text-body-primary) - 16px
                </p>
                <p
                    className="hui-text-body-secondary"
                    data-testid="body-secondary"
                >
                    Body Secondary Text (.hui-text-body-secondary) - 14px
                </p>
                <p
                    className="hui-text-caption"
                    data-testid="caption"
                >
                    Caption Text (.hui-text-caption) - 12px
                </p>
            </div>

            <div className="mt-8 rounded border border-blue-200 bg-blue-50 p-4">
                <strong>How to verify:</strong>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm">
                    <li>Visual: Each heading should have different size</li>
                    <li>Right-click any heading → Inspect</li>
                    <li>In Styles tab, see .hui-text-* rules applied</li>
                    <li>Check font-family uses var(--font-family-secondary) or var(--font-family-primary)</li>
                    <li>Check font-weight uses var(--font-weight-h1), etc.</li>
                </ol>
            </div>
        </div>
    ),
};

/**
 * Focus Styles Test
 *
 * Use keyboard TAB to focus each button and verify:
 * - Standard button gets theme color focus ring (4px)
 * - Inverse button gets white focus ring (4px)
 */
export const FocusStyles: Story = {
    render: () => (
        <div className="space-y-8 p-8">
            <h2 className="mb-4 text-xl font-bold">Focus Styles Test</h2>
            <p className="text-text-secondary mb-4 text-sm">
                Press TAB to focus each button and verify the focus ring appears
            </p>

            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium">Standard Focus Ring (theme color, 4px):</label>
                    <button
                        data-testid="focus-standard"
                        className="hui-focus-visible-outline px-sm py-xs rounded-button bg-link-primary text-white"
                    >
                        Tab to me - Standard Focus
                    </button>
                </div>

                <div className="bg-background-inverse rounded p-4">
                    <label className="text-text-inverse mb-2 block text-sm font-medium">
                        Inverse Focus Ring (white, 4px):
                    </label>
                    <button
                        data-testid="focus-inverse"
                        className="hui-focus-visible-outline-inverse px-sm py-xs rounded-button bg-background-inverse text-text-inverse border-border-inverse border"
                    >
                        Tab to me - Inverse Focus
                    </button>
                </div>
            </div>

            <div className="mt-4 rounded border border-green-200 bg-green-50 p-4">
                <strong>How to verify:</strong>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm">
                    <li>Click outside the buttons first</li>
                    <li>Press TAB key to focus first button</li>
                    <li>Verify 4px outline appears (theme color)</li>
                    <li>Press TAB again for second button</li>
                    <li>Verify 4px white outline appears</li>
                </ol>
            </div>
        </div>
    ),
};

/**
 * Semantic Tokens Test
 *
 * Verify Tailwind semantic tokens work:
 * - rounded-button (8px)
 * - rounded-input (6px)
 * - rounded-container (12px)
 * - font-primary
 * - font-secondary
 */
export const SemanticTokens: Story = {
    render: () => (
        <div className="space-y-4 p-8">
            <h2 className="mb-4 text-xl font-bold">Semantic Tokens Test</h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium">Border Radius Tokens:</label>
                    <div className="space-y-2">
                        <div
                            data-testid="rounded-button"
                            className="rounded-button bg-link-primary inline-block p-4 text-white"
                        >
                            rounded-button (8px)
                        </div>
                        <div
                            data-testid="rounded-input"
                            className="rounded-input bg-background-secondary border-border-primary border p-4"
                        >
                            rounded-input (6px)
                        </div>
                        <div
                            data-testid="rounded-container"
                            className="rounded-container bg-background-tertiary p-4"
                        >
                            rounded-container (12px)
                        </div>
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">Font Family Tokens:</label>
                    <div className="space-y-2">
                        <p
                            className="font-primary text-lg"
                            data-testid="font-primary"
                        >
                            font-primary (Inter) - Primary brand font
                        </p>
                        <p
                            className="font-secondary text-lg"
                            data-testid="font-secondary"
                        >
                            font-secondary (Georgia) - Secondary brand font
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 rounded border border-purple-200 bg-purple-50 p-4">
                <strong>How to verify:</strong>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm">
                    <li>Right-click each colored box → Inspect</li>
                    <li>In Styles tab, find border-radius value</li>
                    <li>Verify: button=8px, input=6px, container=12px</li>
                    <li>For fonts, check font-family in Computed tab</li>
                    <li>Should see var(--font-family-primary) or var(--font-family-secondary)</li>
                </ol>
            </div>
        </div>
    ),
};

/**
 * Spacing Scale Test
 *
 * Verify the new spacing scale is being used:
 * - sm = 16px (was 12px)
 * - md = 24px (was 16px)
 * - lg = 32px (was 24px)
 */
export const SpacingScale: Story = {
    render: () => (
        <div className="space-y-4 p-8">
            <h2 className="mb-4 text-xl font-bold">Spacing Scale Test</h2>

            <div className="space-y-4">
                <div className="border-border-primary inline-block border">
                    <div
                        data-testid="spacing-sm"
                        className="px-sm bg-info-100 border-info-500 border-r-4"
                    >
                        px-sm
                    </div>
                    <span className="text-text-secondary ml-2 text-xs">Should be 16px padding</span>
                </div>

                <div className="border-border-primary inline-block border">
                    <div
                        data-testid="spacing-md"
                        className="px-md bg-success-100 border-success-500 border-r-4"
                    >
                        px-md
                    </div>
                    <span className="text-text-secondary ml-2 text-xs">Should be 24px padding</span>
                </div>

                <div className="border-border-primary inline-block border">
                    <div
                        data-testid="spacing-lg"
                        className="px-lg bg-warning-100 border-warning-500 border-r-4"
                    >
                        px-lg
                    </div>
                    <span className="text-text-secondary ml-2 text-xs">Should be 32px padding</span>
                </div>

                <div className="border-border-primary inline-block border">
                    <div
                        data-testid="spacing-xl"
                        className="px-xl bg-critical-100 border-critical-500 border-r-4"
                    >
                        px-xl
                    </div>
                    <span className="text-text-secondary ml-2 text-xs">Should be 48px padding</span>
                </div>
            </div>

            <div className="mt-4 rounded border border-orange-200 bg-orange-50 p-4">
                <strong>How to verify:</strong>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm">
                    <li>Right-click any colored box → Inspect</li>
                    <li>In Computed tab, find "padding-left" and "padding-right"</li>
                    <li>Verify values: sm=16px, md=24px, lg=32px, xl=48px</li>
                    <li>
                        Or in Styles tab, see <code className="bg-gray-100 px-1">var(--spacing-sm)</code> etc.
                    </li>
                </ol>
            </div>
        </div>
    ),
};

/**
 * DS-15b Verification Checklist
 *
 * Complete manual testing checklist for the centralized theme system (DS-15b).
 * Use this story to verify the modular architecture, CSS generation, and theme switching.
 *
 * ✅ Mark each checkbox as you complete the test
 */
export const DS15bVerificationChecklist: Story = {
    render: () => (
        <div className="mx-auto max-w-5xl space-y-8 p-8">
            <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                <h1 className="mb-2 text-3xl font-bold">DS-15b: Centralized Theme System Verification</h1>
                <p className="text-lg text-gray-700">
                    Complete this checklist to verify the modular Tailwind plugin architecture and centralized CSS
                    generation.
                </p>
            </div>

            {/* Section 1: Theme Switching */}
            <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="border-b-2 border-gray-300 pb-2 text-2xl font-bold">✅ Section 1: Theme Switching</h2>

                <div className="space-y-3">
                    <div className="pl-6">
                        <h3 className="mb-2 text-lg font-semibold">Steps:</h3>
                        <ol className="ml-5 list-decimal space-y-2 text-sm">
                            <li>Open Storybook toolbar (top of page)</li>
                            <li>Find the theme switcher dropdown</li>
                            <li>
                                Switch to <strong>Basketball Training</strong> theme
                            </li>
                            <li>
                                Switch to <strong>Professional Brand</strong> theme
                            </li>
                            <li>
                                Switch to <strong>Default</strong> theme
                            </li>
                        </ol>
                    </div>

                    <div className="rounded border border-green-300 bg-green-50 p-4">
                        <h3 className="mb-2 font-semibold text-green-900">✅ Expected Outcomes:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-green-900">
                            <li>
                                <strong>Basketball Training</strong>: Orange primary colors (#FF6B35)
                            </li>
                            <li>
                                <strong>Professional Brand</strong>: Blue primary colors (#3B82F6)
                            </li>
                            <li>
                                <strong>Default</strong>: Gray primary colors (#6B7280)
                            </li>
                            <li>All theme switches happen instantly (no page reload)</li>
                            <li>No console errors during switching</li>
                        </ul>
                    </div>
                </div>

                {/* Visual Test Cards */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-primary-500 rounded-lg p-4 text-center text-white">
                        <div className="mb-2 font-bold">Primary Color</div>
                        <div className="text-xs">bg-primary-500</div>
                    </div>
                    <div className="bg-primary-700 rounded-lg p-4 text-center text-white">
                        <div className="mb-2 font-bold">Primary Hover</div>
                        <div className="text-xs">bg-primary-700</div>
                    </div>
                    <div className="bg-primary-900 rounded-lg p-4 text-center text-white">
                        <div className="mb-2 font-bold">Primary Active</div>
                        <div className="text-xs">bg-primary-900</div>
                    </div>
                </div>
            </section>

            {/* Section 2: Browser DevTools - CSS Variables */}
            <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="border-b-2 border-gray-300 pb-2 text-2xl font-bold">
                    ✅ Section 2: Browser DevTools - CSS Variables
                </h2>

                <div className="space-y-3">
                    <div className="pl-6">
                        <h3 className="mb-2 text-lg font-semibold">Steps:</h3>
                        <ol className="ml-5 list-decimal space-y-2 text-sm">
                            <li>
                                Right-click anywhere on this page → <strong>Inspect</strong>
                            </li>
                            <li>
                                In DevTools, click the <strong>&lt;html&gt;</strong> element
                            </li>
                            <li>
                                Switch to the <strong>Computed</strong> tab
                            </li>
                            <li>
                                In the filter box, type:{' '}
                                <code className="bg-gray-100 px-1 py-0.5">--color-primary</code>
                            </li>
                            <li>Scroll through the computed styles to see all CSS variables</li>
                        </ol>
                    </div>

                    <div className="rounded border border-green-300 bg-green-50 p-4">
                        <h3 className="mb-2 font-semibold text-green-900">✅ Expected Outcomes:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-green-900">
                            <li>
                                <code>--color-primary-500</code>: RGB values matching current theme
                            </li>
                            <li>
                                <strong>Basketball</strong>: <code>255 107 53</code> (orange)
                            </li>
                            <li>
                                <strong>Professional</strong>: <code>59 130 246</code> (blue)
                            </li>
                            <li>
                                <strong>Default</strong>: <code>107 114 128</code> (gray)
                            </li>
                            <li>
                                All palette shades visible: <code>--color-primary-50</code> through{' '}
                                <code>--color-primary-900</code>
                            </li>
                            <li>
                                Surface colors: <code>--color-surface-50</code> through <code>--color-surface-900</code>
                            </li>
                            <li>
                                Semantic tokens: <code>--color-background-primary</code>,{' '}
                                <code>--color-text-primary</code>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded border border-yellow-300 bg-yellow-50 p-4">
                        <h3 className="mb-2 font-semibold text-yellow-900">📋 Test Element:</h3>
                        <div
                            data-testid="css-var-test"
                            className="bg-primary-500 rounded-lg p-4 text-white"
                            style={{ fontSize: '14px' }}
                        >
                            Inspect me! Right-click → Inspect → Computed tab → Search{' '}
                            <code className="bg-primary-700 px-1 py-0.5">--color-</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Tailwind Utilities */}
            <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="border-b-2 border-gray-300 pb-2 text-2xl font-bold">✅ Section 3: Tailwind Utilities</h2>

                <div className="space-y-3">
                    <div className="pl-6">
                        <h3 className="mb-2 text-lg font-semibold">Steps:</h3>
                        <ol className="ml-5 list-decimal space-y-2 text-sm">
                            <li>
                                Right-click each colored box below → <strong>Inspect</strong>
                            </li>
                            <li>
                                In DevTools <strong>Styles</strong> tab, find the applied classes
                            </li>
                            <li>Verify color values resolve to RGB format</li>
                            <li>Test hover states by hovering over the boxes</li>
                            <li>Test opacity modifiers on the semi-transparent box</li>
                        </ol>
                    </div>

                    <div className="rounded border border-green-300 bg-green-50 p-4">
                        <h3 className="mb-2 font-semibold text-green-900">✅ Expected Outcomes:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-green-900">
                            <li>
                                <code>bg-primary-500</code> resolves to: <code>rgb(var(--color-primary-500))</code>
                            </li>
                            <li>
                                <code>hover:bg-primary-700</code> changes color on hover
                            </li>
                            <li>
                                <code>bg-primary-500/50</code> shows 50% opacity: <code>rgb(... / 0.5)</code>
                            </li>
                            <li>
                                All palette utilities work: <code>bg-surface-200</code>, <code>text-critical-500</code>
                            </li>
                            <li>
                                Semantic utilities work: <code>bg-background-primary</code>,{' '}
                                <code>text-text-secondary</code>
                            </li>
                        </ul>
                    </div>

                    {/* Test Elements */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 text-sm font-medium">Standard Color</div>
                            <div
                                data-testid="tailwind-primary"
                                className="bg-primary-500 hover:bg-primary-700 cursor-pointer rounded-lg p-4 text-center text-white transition-colors"
                            >
                                bg-primary-500
                                <br />
                                hover:bg-primary-700
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-sm font-medium">Opacity Modifier (50%)</div>
                            <div
                                data-testid="tailwind-opacity"
                                className="bg-primary-500/50 border-primary-500 rounded-lg border-2 p-4 text-center text-gray-900"
                            >
                                bg-primary-500/50
                                <br />
                                (50% opacity)
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-sm font-medium">Surface Colors</div>
                            <div
                                data-testid="tailwind-surface"
                                className="bg-surface-200 text-surface-900 border-surface-400 rounded-lg border p-4 text-center"
                            >
                                bg-surface-200
                                <br />
                                text-surface-900
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-sm font-medium">Critical Colors</div>
                            <div
                                data-testid="tailwind-critical"
                                className="bg-critical-500 hover:bg-critical-700 cursor-pointer rounded-lg p-4 text-center text-white transition-colors"
                            >
                                bg-critical-500
                                <br />
                                hover:bg-critical-700
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Typography Classes */}
            <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="border-b-2 border-gray-300 pb-2 text-2xl font-bold">✅ Section 4: Typography Classes</h2>

                <div className="space-y-3">
                    <div className="pl-6">
                        <h3 className="mb-2 text-lg font-semibold">Steps:</h3>
                        <ol className="ml-5 list-decimal space-y-2 text-sm">
                            <li>Visually verify each heading has different size and weight</li>
                            <li>
                                Right-click <strong>Heading 1</strong> → <strong>Inspect</strong>
                            </li>
                            <li>
                                In <strong>Styles</strong> tab, find{' '}
                                <code className="bg-gray-100 px-1">.hui-text-h1</code> rule
                            </li>
                            <li>
                                Verify it uses CSS variables: <code>var(--font-weight-h1)</code>
                            </li>
                            <li>Resize browser window to test responsive typography</li>
                        </ol>
                    </div>

                    <div className="rounded border border-green-300 bg-green-50 p-4">
                        <h3 className="mb-2 font-semibold text-green-900">✅ Expected Outcomes:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-green-900">
                            <li>H1: 32px on desktop, 24px on mobile (line-height: 48px/36px)</li>
                            <li>H2: 24px on desktop, 20px on mobile (line-height: 36px/30px)</li>
                            <li>H3: 20px on desktop, 16px on mobile (line-height: 30px/24px)</li>
                            <li>H4-H6: 16px/14px (no responsive sizing)</li>
                            <li>
                                H1-H4 use <code>var(--font-family-secondary)</code>
                            </li>
                            <li>
                                H5-H6 and body text use <code>var(--font-family-primary)</code>
                            </li>
                            <li>Responsive breakpoint at 1023px (smMax) - test by resizing</li>
                        </ul>
                    </div>

                    {/* Test Elements */}
                    <div className="mt-4 space-y-3 rounded bg-gray-50 p-4">
                        <h1
                            className="hui-text-h1"
                            data-testid="typography-h1"
                        >
                            Heading 1 (.hui-text-h1)
                        </h1>
                        <h2
                            className="hui-text-h2"
                            data-testid="typography-h2"
                        >
                            Heading 2 (.hui-text-h2)
                        </h2>
                        <h3
                            className="hui-text-h3"
                            data-testid="typography-h3"
                        >
                            Heading 3 (.hui-text-h3)
                        </h3>
                        <p
                            className="hui-text-body-primary"
                            data-testid="typography-body"
                        >
                            Body Primary (.hui-text-body-primary) - This is the standard body text size at 16px
                        </p>
                        <p
                            className="hui-text-caption"
                            data-testid="typography-caption"
                        >
                            Caption (.hui-text-caption) - Smaller text at 12px
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5: Console & Errors */}
            <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="border-b-2 border-gray-300 pb-2 text-2xl font-bold">
                    ✅ Section 5: Console Errors & Warnings
                </h2>

                <div className="space-y-3">
                    <div className="pl-6">
                        <h3 className="mb-2 text-lg font-semibold">Steps:</h3>
                        <ol className="ml-5 list-decimal space-y-2 text-sm">
                            <li>
                                Open DevTools → <strong>Console</strong> tab
                            </li>
                            <li>Clear console (click 🚫 icon)</li>
                            <li>Switch between all 3 themes</li>
                            <li>Navigate to different stories</li>
                            <li>Check console after each action</li>
                        </ol>
                    </div>

                    <div className="rounded border border-green-300 bg-green-50 p-4">
                        <h3 className="mb-2 font-semibold text-green-900">✅ Expected Outcomes:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-green-900">
                            <li>
                                <strong>Zero errors</strong> - No red error messages
                            </li>
                            <li>
                                <strong>Zero warnings</strong> about missing CSS variables
                            </li>
                            <li>
                                <strong>Zero warnings</strong> about failed CSS imports
                            </li>
                            <li>Theme switching should be silent (no logs)</li>
                            <li>Story navigation should be clean</li>
                        </ul>
                    </div>

                    <div className="rounded border border-red-300 bg-red-50 p-4">
                        <h3 className="mb-2 font-semibold text-red-900">❌ Common Issues to Check For:</h3>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-red-900">
                            <li>"Cannot find module '@dbarrett24/theme-system/css/...'" → Build theme-system</li>
                            <li>"CSS variable --color-* is not defined" → Check CSS import order</li>
                            <li>"Failed to load resource" → Check dist/css/ files exist</li>
                            <li>React errors about hooks → Unrelated to theme system</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Summary */}
            <section className="rounded-lg border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50 p-6">
                <h2 className="mb-4 text-2xl font-bold">🎉 Verification Complete!</h2>
                <p className="mb-4 text-lg">
                    If all sections above pass, the DS-15b centralized theme system is working correctly.
                </p>
                <div className="rounded border border-gray-300 bg-white p-4">
                    <h3 className="mb-2 font-semibold">Architecture Verified:</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm">
                        <li>✅ Modular Tailwind plugin structure (10 files)</li>
                        <li>✅ Centralized CSS generation (3 brand CSS files)</li>
                        <li>✅ Build-time CSS generation via tsup</li>
                        <li>✅ Programmatic color generation with tinycolor2</li>
                        <li>✅ Type-safe CSS variable constants</li>
                        <li>✅ Peer dependency model for brand libraries</li>
                    </ul>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                    See{' '}
                    <code className="rounded bg-gray-100 px-2 py-1">.cursor/plans/DS-15b-verification-guide.md</code>{' '}
                    for full documentation.
                </div>
            </section>
        </div>
    ),
};

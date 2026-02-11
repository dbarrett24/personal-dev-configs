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
            <h2 className="text-xl font-bold mb-4">CSS Variables Test</h2>
            <p className="text-sm text-text-secondary mb-4">
                Open DevTools → Elements → Select any element → Computed tab → Search for variables
            </p>
            
            <div className="space-y-2 bg-background-secondary p-4 rounded-md">
                <div data-testid="color-test" className="p-2 bg-color-background-primary border border-color-border-primary">
                    Background uses --color-background-primary
                </div>
                <div data-testid="spacing-test" className="px-sm py-md bg-background-tertiary">
                    Padding: px-sm (16px) py-md (24px)
                </div>
                <div data-testid="border-radius-test" className="rounded-button bg-color-link-primary text-white p-4">
                    Border radius uses --button-border-radius (8px)
                </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <strong>How to verify:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
                    <li>Right-click any element above → Inspect</li>
                    <li>In DevTools, go to "Computed" tab</li>
                    <li>Search for: <code className="bg-gray-100 px-1">--color-</code></li>
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
            <h2 className="text-xl font-bold mb-4">Typography Classes Test</h2>
            
            <div className="space-y-4">
                <h1 className="hui-text-h1" data-testid="h1">
                    Heading 1 (.hui-text-h1)
                </h1>
                <h2 className="hui-text-h2" data-testid="h2">
                    Heading 2 (.hui-text-h2)
                </h2>
                <h3 className="hui-text-h3" data-testid="h3">
                    Heading 3 (.hui-text-h3)
                </h3>
                <h4 className="hui-text-h4" data-testid="h4">
                    Heading 4 (.hui-text-h4)
                </h4>
                <h5 className="hui-text-h5" data-testid="h5">
                    Heading 5 (.hui-text-h5)
                </h5>
                <h6 className="hui-text-h6" data-testid="h6">
                    Heading 6 (.hui-text-h6)
                </h6>
                <p className="hui-text-body-primary" data-testid="body-primary">
                    Body Primary Text (.hui-text-body-primary) - 16px
                </p>
                <p className="hui-text-body-secondary" data-testid="body-secondary">
                    Body Secondary Text (.hui-text-body-secondary) - 14px
                </p>
                <p className="hui-text-caption" data-testid="caption">
                    Caption Text (.hui-text-caption) - 12px
                </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
                <strong>How to verify:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
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
            <h2 className="text-xl font-bold mb-4">Focus Styles Test</h2>
            <p className="text-sm text-text-secondary mb-4">
                Press TAB to focus each button and verify the focus ring appears
            </p>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Standard Focus Ring (theme color, 4px):
                    </label>
                    <button
                        data-testid="focus-standard"
                        className="hui-focus-visible-outline px-sm py-xs rounded-button bg-color-link-primary text-white"
                    >
                        Tab to me - Standard Focus
                    </button>
                </div>

                <div className="bg-gray-900 p-4 rounded">
                    <label className="block text-sm font-medium mb-2 text-white">
                        Inverse Focus Ring (white, 4px):
                    </label>
                    <button
                        data-testid="focus-inverse"
                        className="hui-focus-visible-outline-inverse px-sm py-xs rounded-button bg-gray-800 text-white"
                    >
                        Tab to me - Inverse Focus
                    </button>
                </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                <strong>How to verify:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
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
            <h2 className="text-xl font-bold mb-4">Semantic Tokens Test</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Border Radius Tokens:
                    </label>
                    <div className="space-y-2">
                        <div
                            data-testid="rounded-button"
                            className="rounded-button bg-color-link-primary text-white p-4 inline-block"
                        >
                            rounded-button (8px)
                        </div>
                        <div
                            data-testid="rounded-input"
                            className="rounded-input bg-background-secondary border border-color-border-primary p-4"
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
                    <label className="block text-sm font-medium mb-2">
                        Font Family Tokens:
                    </label>
                    <div className="space-y-2">
                        <p className="font-primary text-lg" data-testid="font-primary">
                            font-primary (Inter) - Primary brand font
                        </p>
                        <p className="font-secondary text-lg" data-testid="font-secondary">
                            font-secondary (Georgia) - Secondary brand font
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded">
                <strong>How to verify:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
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
            <h2 className="text-xl font-bold mb-4">Spacing Scale Test</h2>

            <div className="space-y-4">
                <div className="border border-color-border-primary inline-block">
                    <div data-testid="spacing-sm" className="px-sm bg-blue-100 border-r-4 border-blue-500">
                        px-sm
                    </div>
                    <span className="text-xs text-text-secondary ml-2">Should be 16px padding</span>
                </div>

                <div className="border border-color-border-primary inline-block">
                    <div data-testid="spacing-md" className="px-md bg-green-100 border-r-4 border-green-500">
                        px-md
                    </div>
                    <span className="text-xs text-text-secondary ml-2">Should be 24px padding</span>
                </div>

                <div className="border border-color-border-primary inline-block">
                    <div data-testid="spacing-lg" className="px-lg bg-purple-100 border-r-4 border-purple-500">
                        px-lg
                    </div>
                    <span className="text-xs text-text-secondary ml-2">Should be 32px padding</span>
                </div>

                <div className="border border-color-border-primary inline-block">
                    <div data-testid="spacing-xl" className="px-xl bg-red-100 border-r-4 border-red-500">
                        px-xl
                    </div>
                    <span className="text-xs text-text-secondary ml-2">Should be 48px padding</span>
                </div>
            </div>

            <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded">
                <strong>How to verify:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1 text-sm">
                    <li>Right-click any colored box → Inspect</li>
                    <li>In Computed tab, find "padding-left" and "padding-right"</li>
                    <li>Verify values: sm=16px, md=24px, lg=32px, xl=48px</li>
                    <li>Or in Styles tab, see <code className="bg-gray-100 px-1">var(--spacing-sm)</code> etc.</li>
                </ol>
            </div>
        </div>
    ),
};

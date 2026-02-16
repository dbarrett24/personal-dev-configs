import { BodySecondary } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/core-components';
import { ComponentProps } from 'react';
import { Info } from '@dbarrett24/core-components/Icons';
import { InlineButton } from '@dbarrett24/core-components/Typography/InlineButton';

type InlineButtonStyle = ComponentProps<typeof InlineButton>['style'];
type InlineButtonSize = ComponentProps<typeof InlineButton>['size'];
type IconPlacement = ComponentProps<typeof InlineButton>['iconPlacement'];

type ColumnConfig = {
    iconPlacement: IconPlacement;
    label: string;
    size: InlineButtonSize;
};

type StyleConfig = {
    backgroundColor?: string;
    label: string;
    style: InlineButtonStyle;
};

const columns: ColumnConfig[] = [
    { iconPlacement: 'left', label: 'left md', size: 'md' },
    { iconPlacement: 'left', label: 'left sm', size: 'sm' },
    { iconPlacement: 'left', label: 'left xs', size: 'xs' },
    { iconPlacement: 'right', label: 'right md', size: 'md' },
    { iconPlacement: 'right', label: 'right sm', size: 'sm' },
    { iconPlacement: 'right', label: 'right xs', size: 'xs' },
];

const styles: StyleConfig[] = [
    { label: 'primary', style: 'primary' },
    { label: 'critical', style: 'critical' },
    { label: 'secondary', style: 'neutral' },
    { backgroundColor: 'bg-background-inverse', label: 'inverse', style: 'inverse' },
];

export const AllInlineButtonsStory = ({
    children = 'Inline Button Text',
    disabled,
    loading,
}: {
    children?: React.ReactNode;
    disabled?: ComponentProps<typeof InlineButton>['disabled'];
    loading?: ComponentProps<typeof InlineButton>['loading'];
}) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="hui-text-h5 mb-md">Inline Button Variants</div>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border-2 border-border-primary bg-background-secondary px-md py-sm" />
                        <th
                            className="border-2 border-border-primary bg-background-secondary px-md py-sm text-center"
                            colSpan={6}
                        >
                            <BodySecondary className="font-semibold">icon placement/size</BodySecondary>
                        </th>
                    </tr>
                    <tr>
                        <th className="border-2 border-border-primary bg-background-secondary px-md py-sm" />
                        {columns.map((col, index) => (
                            <th
                                className="border-2 border-border-primary bg-background-secondary px-md py-sm text-center"
                                key={index}
                            >
                                <BodySecondary className="font-normal">{col.label}</BodySecondary>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {styles.map((styleConfig, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="border-2 border-border-primary bg-background-secondary px-md py-sm">
                                <BodySecondary className="font-semibold">{styleConfig.label}</BodySecondary>
                            </td>
                            {columns.map((col, colIndex) => (
                                <td
                                    className={cn(
                                        'border-2 border-border-primary px-md py-md text-center',
                                        styleConfig.backgroundColor
                                    )}
                                    key={colIndex}
                                >
                                    <div className="flex items-center justify-center">
                                        <InlineButton
                                            disabled={disabled}
                                            icon={Info}
                                            iconPlacement={col.iconPlacement}
                                            loading={loading}
                                            onClick={() => {
                                                alert('clicked!');
                                            }}
                                            size={col.size}
                                            style={styleConfig.style}
                                        >
                                            {children}
                                        </InlineButton>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="hui-text-h6 mb-sm mt-xl">Props Reference</div>
            <div className="rounded-container bg-background-secondary p-md">
                <div className="grid gap-xs">
                    <BodySecondary>
                        <code className="text-text-subdued">icon</code>: AnyIcon (e.g., Info, Heart, etc.)
                    </BodySecondary>
                    <BodySecondary>
                        <code className="text-text-subdued">iconPlacement</code>: &quot;left&quot; | &quot;right&quot;
                    </BodySecondary>
                    <BodySecondary>
                        <code className="text-text-subdued">style</code>: &quot;primary&quot; | &quot;critical&quot; |
                        &quot;neutral&quot; | &quot;inverse&quot;
                    </BodySecondary>
                    <BodySecondary>
                        <code className="text-text-subdued">size</code>: &quot;md&quot; | &quot;sm&quot; |
                        &quot;xs&quot;
                    </BodySecondary>
                </div>
            </div>
        </div>
    );
};

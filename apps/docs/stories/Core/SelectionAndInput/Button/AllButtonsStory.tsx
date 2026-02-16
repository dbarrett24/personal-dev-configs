import { ComponentProps } from 'react';
import { Button } from '@dbarrett24/core-components/Button';
import { BodySecondary } from '@dbarrett24/core-components/Typography/Text';
import { cn } from '@dbarrett24/theme-system';

type ButtonStyle = ComponentProps<typeof Button>['style'];
type ButtonVariant = ComponentProps<typeof Button>['variant'];
type ButtonSize = ComponentProps<typeof Button>['size'];

type ColumnConfig = {
    label: string;
    size: ButtonSize;
    variant: ButtonVariant;
};

type StyleConfig = {
    backgroundColor?: string;
    label: string;
    style: ButtonStyle;
};

const columns: ColumnConfig[] = [
    { label: 'filled', size: 'md', variant: 'filled' },
    { label: 'filled small', size: 'sm', variant: 'filled' },
    { label: 'outline', size: 'md', variant: 'outlined' },
    { label: 'outline small', size: 'sm', variant: 'outlined' },
    { label: 'transparent', size: 'md', variant: 'transparent' },
    { label: 'transparent small', size: 'sm', variant: 'transparent' },
];

const styles: StyleConfig[] = [
    { label: 'primary', style: 'primary' },
    { label: 'critical', style: 'critical' },
    { label: 'secondary', style: 'neutral' },
    { backgroundColor: 'bg-background-info-dark', label: 'inverse', style: 'inverse' },
];

export const AllButtonsStory = ({
    children = 'BUTTON',
    disabled,
    loading,
}: {
    children?: React.ReactNode;
    disabled?: ComponentProps<typeof Button>['disabled'];
    loading?: ComponentProps<typeof Button>['loading'];
}) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="hui-text-h5 mb-md">Button Variants</div>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border-2 border-border-primary bg-background-secondary px-md py-sm" />
                        <th
                            className="border-2 border-border-primary bg-background-secondary px-md py-sm text-center"
                            colSpan={6}
                        >
                            <BodySecondary className="font-semibold">style/size</BodySecondary>
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
                                        <Button
                                            disabled={disabled}
                                            loading={loading}
                                            onClick={() => {
                                                alert('clicked!');
                                            }}
                                            size={col.size}
                                            style={styleConfig.style}
                                            variant={col.variant}
                                        >
                                            {children}
                                        </Button>
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
                        <code className="text-text-subdued">variant</code>: &quot;filled&quot; | &quot;outlined&quot; |
                        &quot;transparent&quot;
                    </BodySecondary>
                    <BodySecondary>
                        <code className="text-text-subdued">style</code>: &quot;primary&quot; | &quot;critical&quot; |
                        &quot;neutral&quot; | &quot;inverse&quot;
                    </BodySecondary>
                    <BodySecondary>
                        <code className="text-text-subdued">size</code>: &quot;md&quot; | &quot;sm&quot;
                    </BodySecondary>
                </div>
            </div>
        </div>
    );
};

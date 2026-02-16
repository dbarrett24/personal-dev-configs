'use client';

import { BodyPrimary, Caption, LabelStrong } from '@dbarrett24/core-components';
import { cn, wrapOpacity, wrapVar, wrapVarRgb } from '@dbarrett24/theme-system';
import { useEffect, useState } from 'react';

export const TitleRow = () => (
    <div className="mt-md grid grid-cols-12 gap-md border-b border-b-border-secondary pb-sm">
        <div className="col-span-2" />
        <LabelStrong className="col-span-3">Named Variable</LabelStrong>
        <LabelStrong className="col-span-3">Common Interface Value</LabelStrong>
        <LabelStrong className="col-span-4">Description</LabelStrong>
    </div>
);

// Color mappings for semantic tokens
const colorMappings: Record<string, string> = {
    // Background tokens
    background_primary: 'surface-50',
    background_secondary: 'secondary-50',
    background_tertiary: 'tertiary-50',
    background_inverse: 'primary-900',
    background_subdued: 'surface-100',
    background_hover: 'surface-900',
    background_hover_inverse: 'surface-50',
    background_overlay: 'surface-900',
    background_pressed: 'surface-900',
    background_pressed_inverse: 'surface-50',
    background_disabled: 'surface-200',
    background_info_light: 'info-50',
    background_info_dark: 'info-600',
    background_success_light: 'success-50',
    background_success_dark: 'success-900',
    background_critical_light: 'critical-50',
    background_critical_dark: 'critical-500',
    background_warning_light: 'warning-50',
    background_warning_dark: 'warning-500',
    // Text tokens
    text_primary: 'surface-900',
    text_secondary: 'surface-500',
    text_inverse: 'surface-50',
    text_critical: 'critical-400',
    text_info: 'info-700',
    text_success: 'success-700',
    text_warning: 'warning-800',
    text_inactive: 'surface-300',
    text_disabled: 'surface-200',
    link_primary: 'primary-500',
    link_secondary: 'secondary-500',
    link_monochrome: 'surface-900',
    link_hover: 'primary-700',
    link_pressed: 'primary-900',
    link_disabled: 'surface-300',
    link_inverse: 'surface-50',
    link_inverse_hover: 'surface-200',
    link_inverse_pressed: 'surface-300',
    link_inverse_disabled: 'surface-300',
    // Icon tokens
    icon_primary: 'surface-900',
    icon_secondary: 'surface-500',
    icon_inverse: 'surface-50',
    icon_info: 'info-400',
    icon_success: 'success-300',
    icon_warning: 'warning-300',
    icon_critical: 'critical-400',
    icon_disabled: 'surface-300',
    // Border tokens
    border_primary: 'surface-300',
    border_secondary: 'surface-200',
    border_tertiary: 'surface-100',
    border_inverse: 'surface-50',
    border_black: 'surface-900',
    border_info: 'info-400',
    border_success: 'success-300',
    border_critical: 'critical-400',
    border_warning: 'warning-300',
    border_disabled: 'surface-300',
    border_hover: 'primary-700',
    border_selected: 'primary-500',
    // Focus tokens
    focus_primary: 'primary-500',
    focus_inverse: 'surface-50',
    // Palette tokens - direct mapping
    ...Object.fromEntries(
        [
            'primary',
            'secondary',
            'tertiary',
            'info',
            'success',
            'critical',
            'warning',
            'surface',
        ].flatMap((color) =>
            ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => [
                `${color}_${shade}`,
                `${color}-${shade}`,
            ])
        )
    ),
};

export const ColorRow = ({
    description = 'Description',
    name,
    opacity,
}: {
    description?: string;
    name: string;
    opacity?: number;
}) => {
    const [computedValue, setComputedValue] = useState<string>('');
    const isInverse = name.includes('inverse') && name !== 'background-inverse';
    const isShadow = name.includes('shadow');
    const formattedName = name.replace(/-/g, '_');

    useEffect(() => {
        // Get the mapped value or use the name itself
        const mappedValue = colorMappings[formattedName] || formattedName.replace(/_/g, '-');
        setComputedValue(mappedValue);
    }, [formattedName]);

    return (
        <div
            className={cn(
                { 'bg-background-inverse': isInverse, 'py-lg': isShadow },
                'grid grid-cols-12 items-center gap-md border-b border-b-border-secondary p-xs'
            )}
        >
            <div
                className={cn('col-span-2 min-h-xl w-full', {
                    'border border-border-secondary': isInverse,
                })}
                style={{
                    backgroundColor: opacity
                        ? wrapOpacity(wrapVar(`--color-${name}`), opacity)
                        : wrapVarRgb(`--color-${name}`),
                    boxShadow: isShadow ? wrapVar(`--box-${name}`) : undefined,
                }}
            ></div>
            <BodyPrimary
                className="col-span-3"
                color={isInverse ? 'inverse' : 'primary'}
            >
                {name}
            </BodyPrimary>
            <div className="col-span-3">
                <code className="rounded bg-background-secondary px-xs py-xxs text-sm">
                    {computedValue || '--'}
                </code>
            </div>
            <Caption
                className="col-span-4"
                color={isInverse ? 'inverse' : 'primary'}
            >
                {description}
            </Caption>
        </div>
    );
};

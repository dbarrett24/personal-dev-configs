/**
 * CSS variable name constants for the theme system
 *
 * Central registry of all CSS custom property names used across brand themes.
 * These constants are imported by Tailwind config modules (colors.ts, boxShadow.ts, etc.)
 * to provide type-safe, refactor-friendly variable references.
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/cssVars.ts
 */

// shadow

export const shadow01 = '--box-shadow-01';
export const shadow02 = '--box-shadow-02';
export const shadow03 = '--box-shadow-03';
export const shadow04 = '--box-shadow-04';
export const shadow05 = '--box-shadow-05';

// fonts

export const fontFamilyPrimary = '--font-family-primary';
export const fontFamilySecondary = '--font-family-secondary';

// radii

export const buttonBorderRadius = '--button-border-radius';
export const checkboxBorderRadius = '--checkbox-border-radius';
export const inputBorderRadius = '--input-border-radius';
export const searchInputBorderRadius = '--search-input-border-radius';
export const containerBorderRadius = '--container-border-radius';

// widths

export const widthPage = '--width-page';
export const widthDense = '--width-dense';

// text

export const fontSizeButton100 = '--font-size-button-100';
export const fontSizeButton200 = '--font-size-button-200';

export const fontWeightH1 = '--font-weight-h1';
export const fontWeightH2 = '--font-weight-h2';
export const fontWeightH3 = '--font-weight-h3';
export const fontWeightH4 = '--font-weight-h4';
export const fontWeightH5 = '--font-weight-h5';
export const fontWeightH6 = '--font-weight-h6';
export const fontWeightBodyPrimary = '--font-weight-body-primary';
export const fontWeightBodySecondary = '--font-weight-body-secondary';
export const fontWeightLabelStrong = '--font-weight-label-strong';
export const fontWeightLabelMini = '--font-weight-label-mini';
export const fontWeightCaption = '--font-weight-caption';
export const fontWeightButton = '--font-weight-button';

export const letterSpacingH1 = '--letter-spacing-h1';
export const letterSpacingH1Mobile = '--letter-spacing-h1-mobile';
export const letterSpacingH2 = '--letter-spacing-h2';
export const letterSpacingH2Mobile = '--letter-spacing-h2-mobile';
export const letterSpacingH3 = '--letter-spacing-h3';
export const letterSpacingH3Mobile = '--letter-spacing-h3-mobile';
export const letterSpacingH4 = '--letter-spacing-h4';
export const letterSpacingH5 = '--letter-spacing-h5';
export const letterSpacingH6 = '--letter-spacing-h6';
export const letterSpacingBodyPrimary = '--letter-spacing-body-primary';
export const letterSpacingBodySecondary = '--letter-spacing-body-secondary';
export const letterSpacingLabelStrong = '--letter-spacing-label-strong';
export const letterSpacingLabelMini = '--letter-spacing-label-mini';
export const letterSpacingCaption = '--letter-spacing-caption';
export const letterSpacingButton = '--letter-spacing-button';

export const textTransformH6 = '--text-transform-h6';
export const textTransformLabelMini = '--text-transform-label-mini';
export const textTransformButton = '--text-transform-button';

// colors
export type ColorAliases =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'critical'
    | 'warning'
    | 'surface';

export const colorPrimary50 = '--color-primary-50';
export const colorPrimary100 = '--color-primary-100';
export const colorPrimary200 = '--color-primary-200';
export const colorPrimary300 = '--color-primary-300';
export const colorPrimary400 = '--color-primary-400';
export const colorPrimary500 = '--color-primary-500';
export const colorPrimary600 = '--color-primary-600';
export const colorPrimary700 = '--color-primary-700';
export const colorPrimary800 = '--color-primary-800';
export const colorPrimary900 = '--color-primary-900';
export const colorSecondary50 = '--color-secondary-50';
export const colorSecondary100 = '--color-secondary-100';
export const colorSecondary200 = '--color-secondary-200';
export const colorSecondary300 = '--color-secondary-300';
export const colorSecondary400 = '--color-secondary-400';
export const colorSecondary500 = '--color-secondary-500';
export const colorSecondary600 = '--color-secondary-600';
export const colorSecondary700 = '--color-secondary-700';
export const colorSecondary800 = '--color-secondary-800';
export const colorSecondary900 = '--color-secondary-900';
export const colorTertiary50 = '--color-tertiary-50';
export const colorTertiary100 = '--color-tertiary-100';
export const colorTertiary200 = '--color-tertiary-200';
export const colorTertiary300 = '--color-tertiary-300';
export const colorTertiary400 = '--color-tertiary-400';
export const colorTertiary500 = '--color-tertiary-500';
export const colorTertiary600 = '--color-tertiary-600';
export const colorTertiary700 = '--color-tertiary-700';
export const colorTertiary800 = '--color-tertiary-800';
export const colorTertiary900 = '--color-tertiary-900';
export const colorInfo50 = '--color-info-50';
export const colorInfo100 = '--color-info-100';
export const colorInfo200 = '--color-info-200';
export const colorInfo300 = '--color-info-300';
export const colorInfo400 = '--color-info-400';
export const colorInfo500 = '--color-info-500';
export const colorInfo600 = '--color-info-600';
export const colorInfo700 = '--color-info-700';
export const colorInfo800 = '--color-info-800';
export const colorInfo900 = '--color-info-900';
export const colorSuccess50 = '--color-success-50';
export const colorSuccess100 = '--color-success-100';
export const colorSuccess200 = '--color-success-200';
export const colorSuccess300 = '--color-success-300';
export const colorSuccess400 = '--color-success-400';
export const colorSuccess500 = '--color-success-500';
export const colorSuccess600 = '--color-success-600';
export const colorSuccess700 = '--color-success-700';
export const colorSuccess800 = '--color-success-800';
export const colorSuccess900 = '--color-success-900';
export const colorCritical50 = '--color-critical-50';
export const colorCritical100 = '--color-critical-100';
export const colorCritical200 = '--color-critical-200';
export const colorCritical300 = '--color-critical-300';
export const colorCritical400 = '--color-critical-400';
export const colorCritical500 = '--color-critical-500';
export const colorCritical600 = '--color-critical-600';
export const colorCritical700 = '--color-critical-700';
export const colorCritical800 = '--color-critical-800';
export const colorCritical900 = '--color-critical-900';
export const colorWarning50 = '--color-warning-50';
export const colorWarning100 = '--color-warning-100';
export const colorWarning200 = '--color-warning-200';
export const colorWarning300 = '--color-warning-300';
export const colorWarning400 = '--color-warning-400';
export const colorWarning500 = '--color-warning-500';
export const colorWarning600 = '--color-warning-600';
export const colorWarning700 = '--color-warning-700';
export const colorWarning800 = '--color-warning-800';
export const colorWarning900 = '--color-warning-900';
export const colorSurface50 = '--color-surface-50';
export const colorSurface100 = '--color-surface-100';
export const colorSurface200 = '--color-surface-200';
export const colorSurface300 = '--color-surface-300';
export const colorSurface400 = '--color-surface-400';
export const colorSurface500 = '--color-surface-500';
export const colorSurface600 = '--color-surface-600';
export const colorSurface700 = '--color-surface-700';
export const colorSurface800 = '--color-surface-800';
export const colorSurface900 = '--color-surface-900';

// text colors

export type TextColorAliases =
    | 'primary'
    | 'secondary'
    | 'inverse'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'disabled'
    | 'inactive';

export const colorTextPrimary = '--color-text-primary';
export const colorTextSecondary = '--color-text-secondary';
export const colorTextInverse = '--color-text-inverse';
export const colorTextCritical = '--color-text-critical';
export const colorTextInfo = '--color-text-info';
export const colorTextSuccess = '--color-text-success';
export const colorTextInactive = '--color-text-inactive';
export const colorTextDisabled = '--color-text-disabled';
export const colorTextWarning = '--color-text-warning';

// icon colors

export type IconColorAliases =
    | 'primary'
    | 'secondary'
    | 'inverse'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'disabled';

export const colorIconPrimary = '--color-icon-primary';
export const colorIconSecondary = '--color-icon-secondary';
export const colorIconInverse = '--color-icon-inverse';
export const colorIconInfo = '--color-icon-info';
export const colorIconSuccess = '--color-icon-success';
export const colorIconWarning = '--color-icon-warning';
export const colorIconCritical = '--color-icon-critical';
export const colorIconDisabled = '--color-icon-disabled';

// link colors

export type LinkColorAliases = 'primary' | 'secondary' | 'monochrome' | 'hover' | 'pressed' | 'disabled' | 'inverse';

export const colorLinkPrimary = '--color-link-primary';
export const colorLinkSecondary = '--color-link-secondary';
export const colorLinkMonochrome = '--color-link-monochrome';
export const colorLinkHover = '--color-link-hover';
export const colorLinkPressed = '--color-link-pressed';
export const colorLinkDisabled = '--color-link-disabled';
export const colorLinkInverse = '--color-link-inverse';
export const colorLinkInverseHover = '--color-link-inverse-hover';
export const colorLinkInversePressed = '--color-link-inverse-pressed';
export const colorLinkInverseDisabled = '--color-link-inverse-disabled';

// background colors

export type BackgroundColorAliases =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverse'
    | 'subdued'
    | 'hover'
    | 'pressed'
    | 'disabled'
    | 'infoLight'
    | 'infoDark'
    | 'successLight'
    | 'successDark'
    | 'criticalLight'
    | 'criticalDark'
    | 'warningLight'
    | 'warningDark';

export const colorBackgroundPrimary = '--color-background-primary';
export const colorBackgroundSecondary = '--color-background-secondary';
export const colorBackgroundTertiary = '--color-background-tertiary';
export const colorBackgroundInverse = '--color-background-inverse';
export const colorBackgroundSubdued = '--color-background-subdued';
export const colorBackgroundHover = '--color-background-hover';
export const colorBackgroundOverlay = '--color-background-overlay';
export const colorBackgroundPressed = '--color-background-pressed';
export const colorBackgroundDisabled = '--color-background-disabled';
export const colorBackgroundInfoLight = '--color-background-info-light';
export const colorBackgroundInfoDark = '--color-background-info-dark';
export const colorBackgroundSuccessLight = '--color-background-success-light';
export const colorBackgroundSuccessDark = '--color-background-success-dark';
export const colorBackgroundCriticalLight = '--color-background-critical-light';
export const colorBackgroundCriticalDark = '--color-background-critical-dark';
export const colorBackgroundWarningLight = '--color-background-warning-light';
export const colorBackgroundWarningDark = '--color-background-warning-dark';
export const colorBackgroundHoverInverse = '--color-background-hover-inverse';
export const colorBackgroundPressedInverse = '--color-background-pressed-inverse';

// border colors

export type BorderColorAliases =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverse'
    | 'black'
    | 'info'
    | 'success'
    | 'critical'
    | 'warning'
    | 'disabled'
    | 'hover'
    | 'selected';

export const colorBorderPrimary = '--color-border-primary';
export const colorBorderSecondary = '--color-border-secondary';
export const colorBorderTertiary = '--color-border-tertiary';
export const colorBorderInverse = '--color-border-inverse';
export const colorBorderBlack = '--color-border-black';
export const colorBorderInfo = '--color-border-info';
export const colorBorderSuccess = '--color-border-success';
export const colorBorderCritical = '--color-border-critical';
export const colorBorderWarning = '--color-border-warning';
export const colorBorderDisabled = '--color-border-disabled';
export const colorBorderHover = '--color-border-hover';
export const colorBorderSelected = '--color-border-selected';

// focus colors

export type FocusColorAliases = 'primary' | 'inverse';

export const colorFocusPrimary = '--color-focus-primary';
export const colorFocusInverse = '--color-focus-inverse';

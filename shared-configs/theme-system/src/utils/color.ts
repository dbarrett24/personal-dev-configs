import tinycolor from 'tinycolor2';

// https://github.com/bgrins/TinyColor

export const lighten = (percentAsInt: number, unprocessedColor: string): tinycolor.Instance => {
    const color = tinycolor(unprocessedColor);
    const amount = (percentAsInt * ((1 - color.toHsl().l) * 100)) / 100;
    return color.lighten(amount);
};

export const darken = (percentAsInt: number, unprocessedColor: string): tinycolor.Instance => {
    const color = tinycolor(unprocessedColor);
    const amount = (percentAsInt * (color.toHsl().l * 100)) / 100;
    return color.darken(amount);
};

// https://tailwindcss.com/docs/customizing-colors#using-custom-colors
const removeRGB = (color: string) => color.replace(/rgb\(|,|\)/g, '');

/**
 * Generate a set of color steps from a base color. Base color becomes 500.
 *
 * @param color The color to generate the steps from
 * @returns An array of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 color values.
 */
export const generateNormalColorSteps = (color: string) => {
    return [
        removeRGB(lighten(95, color).toRgbString()),
        removeRGB(lighten(85, color).toRgbString()),
        removeRGB(lighten(70, color).toRgbString()),
        removeRGB(lighten(40, color).toRgbString()),
        removeRGB(lighten(20, color).toRgbString()),
        removeRGB(tinycolor(color).toRgbString()),
        removeRGB(darken(20, color).toRgbString()),
        removeRGB(darken(40, color).toRgbString()),
        removeRGB(darken(50, color).toRgbString()),
        removeRGB(darken(70, color).toRgbString()),
    ];
};

/**
 * Generate a set of color steps from a base color. Base color becomes 500.
 *
 * @param color The color to generate the steps from
 * @param isNeutral Whether the color is a neutral color to make surface-50 true white
 * @returns An array of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 color values.
 */
export const generateSurfaceColorSteps = (color: string, isNeutral: boolean = false) => {
    return [
        removeRGB(lighten(isNeutral ? 100 : 99, color).toRgbString()),
        removeRGB(lighten(95, color).toRgbString()),
        removeRGB(lighten(80, color).toRgbString()),
        removeRGB(lighten(50, color).toRgbString()),
        removeRGB(lighten(30, color).toRgbString()),
        removeRGB(tinycolor(color).toRgbString()),
        removeRGB(darken(20, color).toRgbString()),
        removeRGB(darken(40, color).toRgbString()),
        removeRGB(darken(50, color).toRgbString()),
        removeRGB(darken(70, color).toRgbString()),
    ];
};

export type Steps = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export const steps: Steps[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
export type StepObject = Record<Steps, string>;

export const colorStepArrayToObject = (colorStepArray: string[]): StepObject => {
    return {
        '100': colorStepArray[1],
        '200': colorStepArray[2],
        '300': colorStepArray[3],
        '400': colorStepArray[4],
        '50': colorStepArray[0],
        '500': colorStepArray[5],
        '600': colorStepArray[6],
        '700': colorStepArray[7],
        '800': colorStepArray[8],
        '900': colorStepArray[9],
    };
};

export { tinycolor };

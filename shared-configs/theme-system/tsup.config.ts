import { defineConfig } from 'tsup';
import { mkdirSync } from 'fs';

import {
    nonColorVariables as BasketballTraining,
    colorAliases as BasketballTrainingAliases,
} from './src/themes/BasketballTraining';
import { nonColorVariables as Default, colorAliases as DefaultAliases } from './src/themes/Default';
import { generateCSSVars, makeColorCSSVarsFromObject } from './src/themes/generateCSSVars';
import {
    nonColorVariables as ProfessionalBrand,
    colorAliases as ProfessionalBrandAliases,
} from './src/themes/ProfessionalBrand';
import { writeToCSSFile } from './src/themes/writeToCSSFile';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/utils/cn.ts',
        'src/tailwind/plugin.ts',
        'src/tailwind/screens.ts',
        'src/tailwind/colors.ts',
        'src/tailwind/cssVars.ts',
        'src/tailwind/boxShadow.ts',
        'src/tailwind/borderRadius.ts',
        'src/tailwind/fontFamily.ts',
        'src/tailwind/spacing.ts',
        'src/tailwind/width.ts',
        'src/tailwind/text.ts',
        'src/utils/wrapVar.ts',
        'src/utils/color.ts',
        'src/themes/brands.ts',
    ],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['clsx', 'tailwind-merge', 'tailwindcss', 'tinycolor2'],
    onSuccess: async () => {
        mkdirSync('dist/css', { recursive: true });

        writeToCSSFile(
            generateCSSVars(
                { ...BasketballTraining, ...makeColorCSSVarsFromObject(BasketballTrainingAliases) },
                'brand-basketball'
            ),
            'dist/css/BasketballTraining.css'
        );

        writeToCSSFile(
            generateCSSVars(
                { ...ProfessionalBrand, ...makeColorCSSVarsFromObject(ProfessionalBrandAliases) },
                'brand-professional'
            ),
            'dist/css/ProfessionalBrand.css'
        );

        writeToCSSFile(
            generateCSSVars({ ...Default, ...makeColorCSSVarsFromObject(DefaultAliases) }, 'brand-default'),
            'dist/css/Default.css'
        );

        // eslint-disable-next-line no-console
        console.log('✅ Generated theme CSS files in dist/css/');
    },
});

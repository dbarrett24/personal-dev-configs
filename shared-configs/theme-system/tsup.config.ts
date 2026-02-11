import { defineConfig } from 'tsup';
import { mkdirSync } from 'fs';

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
        'src/themes/generateCSSVars.ts',
        'src/themes/writeToCSSFile.ts',
        'src/themes/BasketballTraining.ts',
        'src/themes/ProfessionalBrand.ts',
        'src/themes/Default.ts',
    ],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['clsx', 'tailwind-merge', 'tailwindcss', 'tinycolor2'],
    onSuccess: async () => {
        mkdirSync('dist/css', { recursive: true });

        // Construct paths dynamically to prevent esbuild static analysis
        const distPath = './dist/themes/';
        const ext = '.mjs';

        // Import utilities from built artifacts
        const { generateCSSVars, makeColorCSSVarsFromObject } = await import(distPath + 'generateCSSVars' + ext);
        const { writeToCSSFile } = await import(distPath + 'writeToCSSFile' + ext);

        // Import theme definitions from built artifacts
        const { nonColorVariables: BasketballTraining, colorAliases: BasketballTrainingAliases } = await import(
            distPath + 'BasketballTraining' + ext
        );
        const { nonColorVariables: ProfessionalBrand, colorAliases: ProfessionalBrandAliases } = await import(
            distPath + 'ProfessionalBrand' + ext
        );
        const { nonColorVariables: Default, colorAliases: DefaultAliases } = await import(
            distPath + 'Default' + ext
        );

        // Generate CSS for each brand
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

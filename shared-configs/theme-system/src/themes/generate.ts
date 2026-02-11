/**
 * CSS Generation Script
 *
 * Generates brand theme CSS files from TypeScript definitions.
 * Run after tsup build: `node dist/themes/generate.js`
 *
 * Output: dist/css/<BrandName>.css for each brand
 */

import {
    nonColorVariables as BasketballTraining,
    colorAliases as BasketballTrainingAliases,
} from './BasketballTraining';
import { nonColorVariables as Default, colorAliases as DefaultAliases } from './Default';
import { generateCSSVars, makeColorCSSVarsFromObject } from './generateCSSVars';
import { nonColorVariables as ProfessionalBrand, colorAliases as ProfessionalBrandAliases } from './ProfessionalBrand';
import { writeToCSSFile } from './writeToCSSFile';
import { mkdirSync } from 'fs';

const distDir = `${__dirname}/../css`;
mkdirSync(distDir, { recursive: true });

writeToCSSFile(
    generateCSSVars(
        { ...BasketballTraining, ...makeColorCSSVarsFromObject(BasketballTrainingAliases) },
        'brand-basketball'
    ),
    `${distDir}/BasketballTraining.css`
);

writeToCSSFile(
    generateCSSVars(
        { ...ProfessionalBrand, ...makeColorCSSVarsFromObject(ProfessionalBrandAliases) },
        'brand-professional'
    ),
    `${distDir}/ProfessionalBrand.css`
);

writeToCSSFile(
    generateCSSVars({ ...Default, ...makeColorCSSVarsFromObject(DefaultAliases) }, 'brand-default'),
    `${distDir}/Default.css`
);

// eslint-disable-next-line no-console
console.log('✅ Generated theme CSS files in dist/css/');

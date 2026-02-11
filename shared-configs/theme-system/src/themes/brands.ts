export type Brands = 'BasketballTraining' | 'ProfessionalBrand' | 'Default';

export const brands: Brands[] = ['BasketballTraining', 'ProfessionalBrand', 'Default'];

export const brandsToCSS: Record<Brands, string> = {
    BasketballTraining: 'brand-basketball',
    Default: 'brand-default',
    ProfessionalBrand: 'brand-professional',
};

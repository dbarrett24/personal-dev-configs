import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Simple theme atom with localStorage persistence
export const themeAtom = atomWithStorage<'light' | 'dark'>('theme', 'light');

// Derived atom that toggles theme
export const toggleThemeAtom = atom(
    null, // No read
    (get, set) => {
        const currentTheme = get(themeAtom);
        set(themeAtom, currentTheme === 'light' ? 'dark' : 'light');
    }
);

// Example of a complex state atom
export type UserPreferences = {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
};

export const userPreferencesAtom = atomWithStorage<UserPreferences>('user-preferences', {
    language: 'en',
    notifications: true,
    theme: 'light',
});

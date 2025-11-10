import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/theme.ts', 'src/cn.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['clsx', 'tailwind-merge', 'tailwindcss'],
});


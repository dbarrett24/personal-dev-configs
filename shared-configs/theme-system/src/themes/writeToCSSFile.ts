import { writeFile } from 'fs';

export const writeToCSSFile = (css: string, path: string): void => {
    writeFile(path, css, (err) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            process.exit(1);
        }
    });
};

/** @type {import("prettier").Config} */
const config = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'auto',
    insertPragma: false,
    requirePragma: false,
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    quoteProps: 'consistent',
    plugins: [
        require.resolve('prettier-plugin-tailwindcss'),
        require.resolve('prettier-plugin-astro'),
    ],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};

module.exports = config;

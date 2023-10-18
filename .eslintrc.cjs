// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
    overrides: [
        {
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
        {
            // Define the configuration for `.astro` file.
            files: ['*.astro'],
            // Allows Astro components to be parsed.
            parser: 'astro-eslint-parser',
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
    },
    plugins: ['@typescript-eslint'],
    extends: ['plugin:astro/recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'eol-last': 'error',
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        '@typescript-eslint/triple-slash-reference': 'off',
    },
};

module.exports = config;

module.exports = {
    extends: [
        "eslint:recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    root: true,
    plugins: [
        '@typescript-eslint',
        'import',
        'import-quotes',
    ],
    env: { node: true, browser: false, es6: true, jest: true },
    rules: {
        "array-bracket-spacing": [ "error", "always" ],
        "arrow-parens": [ "error", "always" ],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "computed-property-spacing": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "import", next: "*" },
            { blankLine: "any", prev: "import", next: "import" },
        ],
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        strict: [ "error", "never" ],
        "switch-colon-spacing": "error",
        "max-statements-per-line": [ "error", { max: 2 } ],
        "key-spacing": "error",
        "no-var": "error",
        "no-console": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [ "error", { max: 1, maxEOF: 1, maxBOF: 0 } ],
        "no-trailing-spaces": "error",
        "no-unused-vars": "off",
        "no-restricted-globals": [ "error", "console" ],
        "no-empty": "error",
        "no-prototype-builtins": "off",
        "object-curly-spacing": [ "error", "always" ],
        "one-var": [ "error", "never" ],
        "prefer-const": "error",
        "require-atomic-updates": "off",
        "prefer-object-spread": "error",
        "no-ex-assign": "off",
        "no-undef": "off", // It's replaced by @typescript rules
        "no-else-return": [ "error", { allowElseIf: false } ],
        eqeqeq: "error",
        "quote-props": [ "error", "as-needed" ],

        "@typescript-eslint/ban-ts-comment": [ "error", {
            "ts-expect-error": false,
        } ],

        "@typescript-eslint/no-explicit-any": "off",
        '@typescript-eslint/explicit-function-return-type': 'off', // not sure if we want it
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off', // until we'll replace it by imports/exports
        '@typescript-eslint/explicit-module-boundary-types': 'off', // very useful, but hard to complete it
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',

        "@typescript-eslint/explicit-member-accessibility": [ "error", {
            accessibility: 'off',
            overrides: {
                constructors: 'explicit',
                parameterProperties: 'explicit',
                accessors: 'explicit',
            },
        } ],

        semi: "off",
        "@typescript-eslint/semi": "error",

        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": [ "error" ],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": [ "error", "always-multiline" ],

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [ "error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        } ],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",

        indent: "off",
        "@typescript-eslint/indent": [ "error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
        } ],

        'import/first': "error",
        'import/no-cycle': "error",
        'import/no-useless-path-segments': "error",
        'import/no-extraneous-dependencies': "error",
        'import/order': [ "error", {
            groups: [ [ "index", "sibling", "parent", "internal", "external", "builtin" ] ],
            "newlines-between": "never",
        } ],

        'import-quotes/import-quotes': [ "error", "single" ],
    },
    overrides: [
        {
            files: [ '**/*.json' ],
            rules: {
                "quote-props": [ "error", "always" ],
                "@typescript-eslint/comma-dangle": [ "error", "never" ],
                "@typescript-eslint/semi": [ "error", "never" ],
            },
        },
        {
            files: [ '**/.eslintrc.js' ],
            rules: {
                'no-undef': 'off',
            },
        },
        {
            files: [
                '**/*test.{js,ts}',
                'test/**/*.{js,ts}',
            ],
            rules: {
                'no-console': 'off',
                'no-restricted-globals': 'off',
            },
        },
    ],
};

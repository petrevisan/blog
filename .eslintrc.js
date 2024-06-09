module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:vue/recommended',
        'prettier'
    ],
    // required to lint *.vue files
    plugins: ['@babel', 'vue', 'prettier'],
    // add your custom rules here
    rules: {
        curly: 2,
        quotes: [2, 'single', {avoidEscape: true}],
        indent: ['error', 4, {ignoredNodes: ['ConditionalExpression']}],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 4
                },
                multiline: {
                    max: 1
                }
            }
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'any',
                    component: 'any'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                ignores: ['nuxt', 'nuxt-link', 'nuxt-child', 'transition']
            }
        ],
        'comma-spacing': ['error', {before: false, after: true}],
        'space-before-function-paren': ['error', 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': ['error', {allowIndentationTabs: false}],
        semi: ['error', 'always']
    },
    globals: {
        $nuxt: true
    }
};

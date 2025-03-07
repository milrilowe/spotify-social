
export default [
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**']
    },
    {
        "env": {
            "node": true,
            "commonjs": true
        },
        "extends": "eslint:recommended",
        "rules": {
            "indent": [
                "error",
                "tab"
            ],
            "linebreak-style": [
                "error",
                "unix"
            ],
            "quotes": [
                "error",
                "single"
            ],
            "semi": [
                "error",
                "always"
            ]
        },
        "parserOptions": {
            "ecmaVersion": 2015
        }
    }
];
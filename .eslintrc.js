module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:astro/recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'astro'
    ],
    rules: {
        // Aquí puedes agregar o sobrescribir reglas específicas
        // Ejemplo: 'linebreak-style': ['error', 'unix']
    },
};

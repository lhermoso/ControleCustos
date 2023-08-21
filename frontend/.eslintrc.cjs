module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-extraneous-dependencies": 'off',
    'jsx-a11y/label-has-associated-control': 'off',
     "global-require": 0 ,
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading':'off',
    'react/no-array-index-key': 'off',
    camelcase: 'off',
  },
      settings: {
      react: {
        pragma: "React",
        fragment: "Fragment",
        version: "detect",

      }
    }
};

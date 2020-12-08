module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'react-native/no-inline-styles': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'arrow-body-style': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['storybook/**'],
      },
    ],
    'no-irregular-whitespace': 'off',
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', 'tsx', 'ts']},
    ],
  },
};

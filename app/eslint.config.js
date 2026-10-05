import pluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
    ],
  },

  ...pluginVue.configs['flat/essential'],

  {
    files: ['**/*.{js,vue}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];

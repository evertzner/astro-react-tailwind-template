import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'], // Specify Astro files
    plugins: {
      astro: eslintPluginAstro // Register the Astro plugin
    },
    rules: {
      // Add any Astro-specific rules here
      'astro/no-set-html-directive': 'error'
    },
    settings: {
      astro: {
        root: true // Add Astro settings if necessary
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': eslintPlugin
    },
    languageOptions: {
      parser: typescriptParser
    },
    ignores: ['node_modules', '/build', 'astro.config.mjs'],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'error',
      curly: 'error'
    }
  }
];

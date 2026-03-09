/**
 * ESLint flat config (v9+): lint rules for JS/JSX.
 * - Base: @eslint/js recommended. Parser: Babel (for JSX and modern syntax).
 * - React and React Hooks plugins; react-in-jsx-scope off (React 17+ automatic runtime).
 */
import { createRequire } from 'node:module';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const require = createRequire(import.meta.url);

export default [
  { ignores: ['dist', 'node_modules', '*.config.js'] },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        React: 'readonly',
        ReactDOM: 'readonly',
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        global: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', /* not needed with React 17+ JSX transform */
      'react/prop-types': 'off', /* project uses JS only; enable if you add PropTypes */
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

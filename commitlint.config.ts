import { type UserConfig } from '@commitlint/types';

const config = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    settings: {
      enableMultipleScopes: true,
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    'subject-case': [2, 'always', ['lower-case']],
  },
} satisfies UserConfig;

export default config;

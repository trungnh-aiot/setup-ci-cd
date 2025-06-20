import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  plugins: {
    "simple-import-sort": simpleImportSort,
    prettier: prettier,
  },
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["prettier", "simple-import-sort"],
    rules: {
      semi: ["error"],
      "prettier/prettier": "warn",

      "@next/next/no-img-element": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "arrow-body-style": ["error", "as-needed"],
      "prefer-template": "error",
      "no-console": "warn",
      camelcase: ["error", { ignoreDestructuring: true, properties: "never" }],
      "no-underscore-dangle": "warn",

      "import/newline-after-import": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // typescript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
    },
    settings: {
      next: {
        rootDir: ["src/app/"],
      },
    },
  }),
 { 
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default eslintConfig;

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "styled-system",
    "node_modules",
    "!**/*.{js,jsx,cjs,mjs,ts,tsx}",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "perfectionist"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/display-name": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: [
          "side-effect",
          ["builtin-type", "builtin"],
          ["external-type", "external"],
          ["internal-type", "internal"],
          ["parent-type", "parent"],
          ["sibling-type", "sibling"],
          ["index-type", "index"],
          "object",
          "unknown",
        ],
        "internal-pattern": ["@modules/**", "@styled-system/**", "~/**"],
        "newlines-between": "always",
      },
    ],
    "perfectionist/sort-exports": [
      "error",
      {
        type: "natural",
        order: "asc",
      },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        type: "natural",
        order: "asc",
        "group-kind": "types-first",
      },
    ],
    "perfectionist/sort-named-imports": [
      "error",
      {
        type: "natural",
        order: "asc",
        "group-kind": "types-first",
      },
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        type: "natural",
        order: "asc",
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
    },
  },
};

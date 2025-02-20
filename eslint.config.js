import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      prettier,
      import: importPlugin,
    },
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "prettier/prettier": "warn",
      "react/react-in-jsx-scope": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

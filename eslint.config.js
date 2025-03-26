import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // General config for JavaScript files
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser, // Enable browser globals like document, window
      sourceType: "module", // Enable ES modules
    },
  },
  js.configs.recommended, // Use ESLint's recommended rules
  prettierConfig, // Disable ESLint rules that conflict with Prettier
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      prettier, // Enable Prettier plugin
    },
    rules: {
      "prettier/prettier": "error", // Treat Prettier issues as ESLint errors
    },
  },
];

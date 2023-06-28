module.exports = {
  env: { browser: true, es2020: true },

  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended",

    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: { ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json" },

  plugins: ["react-refresh", "react", "@typescript-eslint", "prettier"],

  rules: {
    "react-refresh/only-export-components": ["warn"],

    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react-hooks/exhaustive-deps": ["warn"],
    "react/require-default-props": ["warn"],
    "import/prefer-default-export": ["off"],
    "react/jsx-no-useless-fragment": ["warn"],
    "import/no-extraneous-dependencies": ["off"],
    "no-shadow": ["off"],
    "import/extensions": ["warn"],
    "no-param-reassign": ["error", { props: false }],
  },
};


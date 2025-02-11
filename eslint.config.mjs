import react from "eslint-plugin-react";
import eslintTypescript from "typescript-eslint";

export default [
    {
        plugins: { react, "@typescript-eslint": eslintTypescript },
        languageOptions: {
            parser: eslintTypescript.parser,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
];

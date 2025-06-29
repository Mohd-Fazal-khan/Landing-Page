// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript", {
//     rules: {
//       // ✅ Disable the font warning for App Router
//       "next/no-page-custom-font": "off",
//     },
//   }),
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Include base configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules
  {
    rules: {
      // ✅ Disable the font warning for App Router
      "next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;

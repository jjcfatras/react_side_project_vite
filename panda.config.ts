import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Enable jsx props
  jsxFramework: "react",

  // Remove default utilities
  eject: false,

  // Presets
  presets: [],

  // Shorthand props
  shorthands: false,
});

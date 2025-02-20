import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    visualizer({
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
    }),
  ],

  esbuild: {
    jsxInject: `import React from 'react';`,
  },

  // relative imports
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});

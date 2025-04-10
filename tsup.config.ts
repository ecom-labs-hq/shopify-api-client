import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/2025-04/index.ts"],
    format: ["cjs", "esm"],
    platform: "neutral",

    outDir: "dist/2025-04/",
    sourcemap: true,
    dts: true,

    splitting: false,
    minify: false,
    clean: true,
});

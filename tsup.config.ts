import { defineConfig } from "tsup";

export default defineConfig({
    entry: [
        "src/2024-07/index.ts",
        "src/2024-10/index.ts",
        "src/2025-01/index.ts",
        "src/2025-04/index.ts",
    ],
    format: ["cjs", "esm"],
    platform: "neutral",

    outDir: "dist",
    sourcemap: true,
    dts: true,

    splitting: false,
    minify: false,
    clean: true,
});

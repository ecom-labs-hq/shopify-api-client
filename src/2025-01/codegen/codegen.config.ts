import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://shopify.dev/admin-graphql-direct-proxy/2025-01",
    generates: {
        "./schema.graphql": {
            plugins: ["schema-ast"],
        },
    },
};

export default config;

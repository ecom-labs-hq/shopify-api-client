import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://shopify.dev/admin-graphql-direct-proxy/2024-07",
    generates: {
        "./schema.graphql": {
            plugins: ["schema-ast"],
        },
    },
};

export default config;

import { GraphQLFlowClient } from "./graphql-flow/client/full-client.js";

export type ClientConfig = {
    myshopifyDomain: string;
    accessToken: string;
};

/**
 * Create a new API client. Version 2025-04
 */
export function createClient(config: ClientConfig) {
    return new GraphQLFlowClient({
        endpoint: `https://${config.myshopifyDomain}/admin/api/2025-04/graphql.json`,
        headers: {
            "X-Shopify-Access-Token": config.accessToken,
        },
    });
}

/* Export types */
export * from "./graphql-flow/types/base-types.js";
export * from "./graphql-flow/types/types.js";

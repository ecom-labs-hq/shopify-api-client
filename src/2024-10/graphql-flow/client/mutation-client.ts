import { sendRequest } from "../runtime/send-request.js";
import { buildGraphQLOperation } from "../runtime/build-operation.js";

import type {
    GraphQLApiResponse,
    GraphQLFlowClientConfig,
    InferSelectType,
    InferSelectedReturnType,
} from "../runtime/types.js";
import type { Mutation } from "../types/types.js";
import type { Exact } from "type-fest";

export class GraphQLFlowMutationClient {
    private readonly config;

    public constructor(config: GraphQLFlowClientConfig) {
        this.config = config;
    }

    /**
     * Updates the email state value for an abandonment.
     */
    public async abandonmentEmailStateUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["abandonmentEmailStateUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["abandonmentEmailStateUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "abandonmentEmailStateUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the marketing activities delivery statuses for an abandonment.
     */
    public async abandonmentUpdateActivitiesDeliveryStatuses<
        TSelection extends Exact<
            InferSelectType<Mutation["abandonmentUpdateActivitiesDeliveryStatuses"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["abandonmentUpdateActivitiesDeliveryStatuses"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "abandonmentUpdateActivitiesDeliveryStatuses",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Charges a shop for features or services one time.
     * This type of charge is recommended for apps that aren't billed on a recurring basis.
     * Test and demo shops aren't charged.
     */
    public async appPurchaseOneTimeCreate<
        TSelection extends Exact<InferSelectType<Mutation["appPurchaseOneTimeCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["appPurchaseOneTimeCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appPurchaseOneTimeCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes access scopes previously granted for an app installation.
     */
    public async appRevokeAccessScopes<
        TSelection extends Exact<InferSelectType<Mutation["appRevokeAccessScopes"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["appRevokeAccessScopes"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appRevokeAccessScopes",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels an app subscription on a store.
     */
    public async appSubscriptionCancel<
        TSelection extends Exact<InferSelectType<Mutation["appSubscriptionCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["appSubscriptionCancel"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appSubscriptionCancel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Allows an app to charge a store for features or services on a recurring basis.
     */
    public async appSubscriptionCreate<
        TSelection extends Exact<InferSelectType<Mutation["appSubscriptionCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["appSubscriptionCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appSubscriptionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the capped amount on the usage pricing plan of an app subscription line item.
     */
    public async appSubscriptionLineItemUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["appSubscriptionLineItemUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["appSubscriptionLineItemUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appSubscriptionLineItemUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Extends the trial of an app subscription.
     */
    public async appSubscriptionTrialExtend<
        TSelection extends Exact<
            InferSelectType<Mutation["appSubscriptionTrialExtend"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["appSubscriptionTrialExtend"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appSubscriptionTrialExtend",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Enables an app to charge a store for features or services on a per-use basis.
     * The usage charge value is counted towards the `cappedAmount` limit that was specified in the `appUsagePricingDetails` field when the app subscription was created.
     * If you create an app usage charge that causes the total usage charges in a billing interval to exceed the capped amount, then a `Total price exceeds balance remaining` error is returned.
     */
    public async appUsageRecordCreate<
        TSelection extends Exact<InferSelectType<Mutation["appUsageRecordCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["appUsageRecordCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "appUsageRecordCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an article.
     */
    public async articleCreate<
        TSelection extends Exact<InferSelectType<Mutation["articleCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["articleCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "articleCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes an article.
     */
    public async articleDelete<
        TSelection extends Exact<InferSelectType<Mutation["articleDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["articleDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "articleDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an article.
     */
    public async articleUpdate<
        TSelection extends Exact<InferSelectType<Mutation["articleUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["articleUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "articleUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a blog.
     */
    public async blogCreate<
        TSelection extends Exact<InferSelectType<Mutation["blogCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["blogCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "blogCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a blog.
     */
    public async blogDelete<
        TSelection extends Exact<InferSelectType<Mutation["blogDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["blogDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "blogDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a blog.
     */
    public async blogUpdate<
        TSelection extends Exact<InferSelectType<Mutation["blogUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["blogUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "blogUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Starts the cancelation process of a running bulk operation.
     *
     * There may be a short delay from when a cancelation starts until the operation is actually canceled.
     */
    public async bulkOperationCancel<
        TSelection extends Exact<InferSelectType<Mutation["bulkOperationCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["bulkOperationCancel"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "bulkOperationCancel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates and runs a bulk operation mutation.
     *
     * To learn how to bulk import large volumes of data asynchronously, refer to the
     * [bulk import data guide](https://shopify.dev/api/usage/bulk-operations/imports).
     */
    public async bulkOperationRunMutation<
        TSelection extends Exact<InferSelectType<Mutation["bulkOperationRunMutation"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["bulkOperationRunMutation"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "bulkOperationRunMutation",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates and runs a bulk operation query.
     *
     * See the [bulk operations guide](https://shopify.dev/api/usage/bulk-operations/queries) for more details.
     */
    public async bulkOperationRunQuery<
        TSelection extends Exact<InferSelectType<Mutation["bulkOperationRunQuery"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["bulkOperationRunQuery"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "bulkOperationRunQuery",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates product feedback for multiple products.
     */
    public async bulkProductResourceFeedbackCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["bulkProductResourceFeedbackCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["bulkProductResourceFeedbackCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "bulkProductResourceFeedbackCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new carrier service.
     */
    public async carrierServiceCreate<
        TSelection extends Exact<InferSelectType<Mutation["carrierServiceCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["carrierServiceCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "carrierServiceCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes an existing carrier service.
     */
    public async carrierServiceDelete<
        TSelection extends Exact<InferSelectType<Mutation["carrierServiceDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["carrierServiceDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "carrierServiceDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a carrier service. Only the app that creates a carrier service can update it.
     */
    public async carrierServiceUpdate<
        TSelection extends Exact<InferSelectType<Mutation["carrierServiceUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["carrierServiceUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "carrierServiceUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a CartTransform function to the Shop.
     */
    public async cartTransformCreate<
        TSelection extends Exact<InferSelectType<Mutation["cartTransformCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["cartTransformCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "cartTransformCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Destroy a cart transform function from the Shop.
     */
    public async cartTransformDelete<
        TSelection extends Exact<InferSelectType<Mutation["cartTransformDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["cartTransformDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "cartTransformDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the context of a catalog.
     */
    public async catalogContextUpdate<
        TSelection extends Exact<InferSelectType<Mutation["catalogContextUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["catalogContextUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "catalogContextUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new catalog.
     */
    public async catalogCreate<
        TSelection extends Exact<InferSelectType<Mutation["catalogCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["catalogCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "catalogCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a catalog.
     */
    public async catalogDelete<
        TSelection extends Exact<InferSelectType<Mutation["catalogDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["catalogDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "catalogDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing catalog.
     */
    public async catalogUpdate<
        TSelection extends Exact<InferSelectType<Mutation["catalogUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["catalogUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "catalogUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the checkout branding settings for a
     * [checkout profile](https://shopify.dev/api/admin-graphql/unstable/queries/checkoutProfile).
     *
     * If the settings don't exist, then new settings are created. The checkout branding settings applied to a
     * published checkout profile will be immediately visible within the store's checkout. The checkout branding
     * settings applied to a draft checkout profile could be previewed within the admin checkout editor.
     *
     * To learn more about updating checkout branding settings, refer to the checkout branding
     * [tutorial](https://shopify.dev/docs/apps/checkout/styling).
     */
    public async checkoutBrandingUpsert<
        TSelection extends Exact<InferSelectType<Mutation["checkoutBrandingUpsert"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["checkoutBrandingUpsert"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "checkoutBrandingUpsert",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds products to a collection.
     */
    public async collectionAddProducts<
        TSelection extends Exact<InferSelectType<Mutation["collectionAddProducts"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionAddProducts"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionAddProducts",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously adds a set of products to a given collection. It can take a long time to run. Instead of returning a collection, it returns a job which should be polled.
     */
    public async collectionAddProductsV2<
        TSelection extends Exact<InferSelectType<Mutation["collectionAddProductsV2"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionAddProductsV2"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionAddProductsV2",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a collection.
     */
    public async collectionCreate<
        TSelection extends Exact<InferSelectType<Mutation["collectionCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a collection.
     */
    public async collectionDelete<
        TSelection extends Exact<InferSelectType<Mutation["collectionDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Publishes a collection to a channel.
     */
    public async collectionPublish<
        TSelection extends Exact<InferSelectType<Mutation["collectionPublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionPublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionPublish",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a set of products from a given collection. The mutation can take a long time to run. Instead of returning an updated collection the mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). For use with manual collections only.
     */
    public async collectionRemoveProducts<
        TSelection extends Exact<InferSelectType<Mutation["collectionRemoveProducts"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["collectionRemoveProducts"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionRemoveProducts",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously reorders a set of products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`. Displaced products will have their position altered in a consistent manner, with no gaps.
     */
    public async collectionReorderProducts<
        TSelection extends Exact<
            InferSelectType<Mutation["collectionReorderProducts"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["collectionReorderProducts"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionReorderProducts",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Unpublishes a collection.
     */
    public async collectionUnpublish<
        TSelection extends Exact<InferSelectType<Mutation["collectionUnpublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionUnpublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionUnpublish",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a collection.
     */
    public async collectionUpdate<
        TSelection extends Exact<InferSelectType<Mutation["collectionUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["collectionUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "collectionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Add, remove and update `CombinedListing`s of a given Product.
     *
     * `CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:
     *
     * 1. Parent products
     * 2. Child products
     *
     * The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).
     *
     * Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).
     *
     * The combined listing is the association of parent product to one or more child products.
     *
     * Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).
     */
    public async combinedListingUpdate<
        TSelection extends Exact<InferSelectType<Mutation["combinedListingUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["combinedListingUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "combinedListingUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Approves a comment.
     */
    public async commentApprove<
        TSelection extends Exact<InferSelectType<Mutation["commentApprove"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["commentApprove"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "commentApprove", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a comment.
     */
    public async commentDelete<
        TSelection extends Exact<InferSelectType<Mutation["commentDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["commentDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "commentDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks a comment as not spam.
     */
    public async commentNotSpam<
        TSelection extends Exact<InferSelectType<Mutation["commentNotSpam"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["commentNotSpam"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "commentNotSpam", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks a comment as spam.
     */
    public async commentSpam<
        TSelection extends Exact<InferSelectType<Mutation["commentSpam"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["commentSpam"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "commentSpam", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a list of companies.
     */
    public async companiesDelete<
        TSelection extends Exact<InferSelectType<Mutation["companiesDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companiesDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companiesDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a company address.
     */
    public async companyAddressDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyAddressDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyAddressDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyAddressDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns the customer as a company contact.
     */
    public async companyAssignCustomerAsContact<
        TSelection extends Exact<
            InferSelectType<Mutation["companyAssignCustomerAsContact"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyAssignCustomerAsContact"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyAssignCustomerAsContact",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns the main contact for the company.
     */
    public async companyAssignMainContact<
        TSelection extends Exact<InferSelectType<Mutation["companyAssignMainContact"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyAssignMainContact"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyAssignMainContact",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns a role to a contact for a location.
     */
    public async companyContactAssignRole<
        TSelection extends Exact<InferSelectType<Mutation["companyContactAssignRole"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactAssignRole"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactAssignRole",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns roles on a company contact.
     */
    public async companyContactAssignRoles<
        TSelection extends Exact<
            InferSelectType<Mutation["companyContactAssignRoles"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactAssignRoles"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactAssignRoles",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a company contact and the associated customer.
     */
    public async companyContactCreate<
        TSelection extends Exact<InferSelectType<Mutation["companyContactCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyContactCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a company contact.
     */
    public async companyContactDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyContactDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyContactDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a company contact from a Company.
     */
    public async companyContactRemoveFromCompany<
        TSelection extends Exact<
            InferSelectType<Mutation["companyContactRemoveFromCompany"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactRemoveFromCompany"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactRemoveFromCompany",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes a role on a company contact.
     */
    public async companyContactRevokeRole<
        TSelection extends Exact<InferSelectType<Mutation["companyContactRevokeRole"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactRevokeRole"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactRevokeRole",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes roles on a company contact.
     */
    public async companyContactRevokeRoles<
        TSelection extends Exact<
            InferSelectType<Mutation["companyContactRevokeRoles"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactRevokeRoles"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactRevokeRoles",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends the company contact a welcome email.
     */
    public async companyContactSendWelcomeEmail<
        TSelection extends Exact<
            InferSelectType<Mutation["companyContactSendWelcomeEmail"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyContactSendWelcomeEmail"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactSendWelcomeEmail",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a company contact.
     */
    public async companyContactUpdate<
        TSelection extends Exact<InferSelectType<Mutation["companyContactUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyContactUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes one or more company contacts.
     */
    public async companyContactsDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyContactsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyContactsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyContactsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a company.
     */
    public async companyCreate<
        TSelection extends Exact<InferSelectType<Mutation["companyCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["companyCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "companyCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a company.
     */
    public async companyDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["companyDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "companyDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an address on a company location.
     */
    public async companyLocationAssignAddress<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationAssignAddress"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationAssignAddress"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationAssignAddress",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns roles on a company location.
     */
    public async companyLocationAssignRoles<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationAssignRoles"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationAssignRoles"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationAssignRoles",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates one or more mappings between a staff member at a shop and a company location.
     */
    public async companyLocationAssignStaffMembers<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationAssignStaffMembers"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationAssignStaffMembers"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationAssignStaffMembers",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns tax exemptions to the company location.
     */
    public async companyLocationAssignTaxExemptions<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationAssignTaxExemptions"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationAssignTaxExemptions"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationAssignTaxExemptions",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a company location.
     */
    public async companyLocationCreate<
        TSelection extends Exact<InferSelectType<Mutation["companyLocationCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyLocationCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a tax registration for a company location.
     */
    public async companyLocationCreateTaxRegistration<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationCreateTaxRegistration"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationCreateTaxRegistration"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationCreateTaxRegistration",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a company location.
     */
    public async companyLocationDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyLocationDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyLocationDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes one or more existing mappings between a staff member at a shop and a company location.
     */
    public async companyLocationRemoveStaffMembers<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationRemoveStaffMembers"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationRemoveStaffMembers"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationRemoveStaffMembers",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes roles on a company location.
     */
    public async companyLocationRevokeRoles<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationRevokeRoles"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationRevokeRoles"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationRevokeRoles",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes tax exemptions from the company location.
     */
    public async companyLocationRevokeTaxExemptions<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationRevokeTaxExemptions"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationRevokeTaxExemptions"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationRevokeTaxExemptions",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes tax registration on a company location.
     */
    public async companyLocationRevokeTaxRegistration<
        TSelection extends Exact<
            InferSelectType<Mutation["companyLocationRevokeTaxRegistration"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyLocationRevokeTaxRegistration"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationRevokeTaxRegistration",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a company location.
     */
    public async companyLocationUpdate<
        TSelection extends Exact<InferSelectType<Mutation["companyLocationUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyLocationUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a list of company locations.
     */
    public async companyLocationsDelete<
        TSelection extends Exact<InferSelectType<Mutation["companyLocationsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["companyLocationsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyLocationsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes the main contact from the company.
     */
    public async companyRevokeMainContact<
        TSelection extends Exact<InferSelectType<Mutation["companyRevokeMainContact"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["companyRevokeMainContact"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "companyRevokeMainContact",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a company.
     */
    public async companyUpdate<
        TSelection extends Exact<InferSelectType<Mutation["companyUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["companyUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "companyUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Add tax exemptions for the customer.
     */
    public async customerAddTaxExemptions<
        TSelection extends Exact<InferSelectType<Mutation["customerAddTaxExemptions"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerAddTaxExemptions"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerAddTaxExemptions",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels a pending erasure of a customer's data.
     *
     * To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).
     */
    public async customerCancelDataErasure<
        TSelection extends Exact<
            InferSelectType<Mutation["customerCancelDataErasure"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerCancelDataErasure"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerCancelDataErasure",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a new customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).
     */
    public async customerCreate<
        TSelection extends Exact<InferSelectType<Mutation["customerCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["customerCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "customerCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).
     */
    public async customerDelete<
        TSelection extends Exact<InferSelectType<Mutation["customerDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["customerDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "customerDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a customer's email marketing information information.
     */
    public async customerEmailMarketingConsentUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerEmailMarketingConsentUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerEmailMarketingConsentUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerEmailMarketingConsentUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Generate an account activation URL for a customer.
     */
    public async customerGenerateAccountActivationUrl<
        TSelection extends Exact<
            InferSelectType<Mutation["customerGenerateAccountActivationUrl"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerGenerateAccountActivationUrl"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerGenerateAccountActivationUrl",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Merges two customers.
     */
    public async customerMerge<
        TSelection extends Exact<InferSelectType<Mutation["customerMerge"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["customerMerge"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "customerMerge", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a vaulted payment method for a customer from duplication data.
     *
     * This data must be obtained from another shop within the same organization.
     *
     * Currently, this only supports Shop Pay payment methods. This is only available for selected partner apps.
     */
    public async customerPaymentMethodCreateFromDuplicationData<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodCreateFromDuplicationData"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["customerPaymentMethodCreateFromDuplicationData"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodCreateFromDuplicationData",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a credit card payment method for a customer using a session id.
     * These values are only obtained through card imports happening from a PCI compliant environment.
     * Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.
     */
    public async customerPaymentMethodCreditCardCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodCreditCardCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodCreditCardCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodCreditCardCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the credit card payment method for a customer.
     */
    public async customerPaymentMethodCreditCardUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodCreditCardUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodCreditCardUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodCreditCardUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Returns encrypted data that can be used to duplicate the payment method in another shop within the same organization.
     *
     * Currently, this only supports Shop Pay payment methods. This is only available for selected partner apps.
     */
    public async customerPaymentMethodGetDuplicationData<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodGetDuplicationData"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodGetDuplicationData"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodGetDuplicationData",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Returns a URL that allows the customer to update a specific payment method.
     *
     * Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.
     */
    public async customerPaymentMethodGetUpdateUrl<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodGetUpdateUrl"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodGetUpdateUrl"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodGetUpdateUrl",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a PayPal billing agreement for a customer.
     */
    public async customerPaymentMethodPaypalBillingAgreementCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodPaypalBillingAgreementCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["customerPaymentMethodPaypalBillingAgreementCreate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodPaypalBillingAgreementCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a PayPal billing agreement for a customer.
     */
    public async customerPaymentMethodPaypalBillingAgreementUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodPaypalBillingAgreementUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["customerPaymentMethodPaypalBillingAgreementUpdate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodPaypalBillingAgreementUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a payment method from remote gateway identifiers. NOTE: This operation processes payment methods asynchronously. The returned payment method will initially have incomplete details. Developers must poll this payment method using customerPaymentMethod query until all payment method details are available, or the payment method is revoked (usually within seconds).
     */
    public async customerPaymentMethodRemoteCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodRemoteCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodRemoteCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodRemoteCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a payment method from a credit card stored by Stripe.
     */
    public async customerPaymentMethodRemoteCreditCardCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodRemoteCreditCardCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["customerPaymentMethodRemoteCreditCardCreate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodRemoteCreditCardCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Revokes a customer's payment method.
     */
    public async customerPaymentMethodRevoke<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodRevoke"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodRevoke"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodRevoke",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends a link to the customer so they can update a specific payment method.
     */
    public async customerPaymentMethodSendUpdateEmail<
        TSelection extends Exact<
            InferSelectType<Mutation["customerPaymentMethodSendUpdateEmail"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerPaymentMethodSendUpdateEmail"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerPaymentMethodSendUpdateEmail",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Remove tax exemptions from a customer.
     */
    public async customerRemoveTaxExemptions<
        TSelection extends Exact<
            InferSelectType<Mutation["customerRemoveTaxExemptions"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerRemoveTaxExemptions"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerRemoveTaxExemptions",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Replace tax exemptions for a customer.
     */
    public async customerReplaceTaxExemptions<
        TSelection extends Exact<
            InferSelectType<Mutation["customerReplaceTaxExemptions"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerReplaceTaxExemptions"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerReplaceTaxExemptions",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#erase-customer-personal-data).
     *
     * To cancel the data erasure request use the [customerCancelDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerCancelDataErasure).
     */
    public async customerRequestDataErasure<
        TSelection extends Exact<
            InferSelectType<Mutation["customerRequestDataErasure"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerRequestDataErasure"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerRequestDataErasure",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a customer segment members query.
     */
    public async customerSegmentMembersQueryCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerSegmentMembersQueryCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerSegmentMembersQueryCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerSegmentMembersQueryCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends the customer an account invite email.
     */
    public async customerSendAccountInviteEmail<
        TSelection extends Exact<
            InferSelectType<Mutation["customerSendAccountInviteEmail"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerSendAccountInviteEmail"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerSendAccountInviteEmail",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a customer's SMS marketing consent information.
     */
    public async customerSmsMarketingConsentUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["customerSmsMarketingConsentUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerSmsMarketingConsentUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerSmsMarketingConsentUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a customer's attributes. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).
     */
    public async customerUpdate<
        TSelection extends Exact<InferSelectType<Mutation["customerUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["customerUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "customerUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a customer's default address.
     */
    public async customerUpdateDefaultAddress<
        TSelection extends Exact<
            InferSelectType<Mutation["customerUpdateDefaultAddress"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["customerUpdateDefaultAddress"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "customerUpdateDefaultAddress",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Opt out a customer from data sale.
     */
    public async dataSaleOptOut<
        TSelection extends Exact<InferSelectType<Mutation["dataSaleOptOut"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["dataSaleOptOut"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "dataSaleOptOut", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a delegate access token.
     *
     * To learn more about creating delegate access tokens, refer to
     * [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).
     */
    public async delegateAccessTokenCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["delegateAccessTokenCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["delegateAccessTokenCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "delegateAccessTokenCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Destroys a delegate access token.
     */
    public async delegateAccessTokenDestroy<
        TSelection extends Exact<
            InferSelectType<Mutation["delegateAccessTokenDestroy"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["delegateAccessTokenDestroy"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "delegateAccessTokenDestroy",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates and deactivates delivery customizations.
     */
    public async deliveryCustomizationActivation<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryCustomizationActivation"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryCustomizationActivation"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryCustomizationActivation",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a delivery customization.
     */
    public async deliveryCustomizationCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryCustomizationCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryCustomizationCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryCustomizationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a delivery customization.
     */
    public async deliveryCustomizationDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryCustomizationDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryCustomizationDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryCustomizationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a delivery customization.
     */
    public async deliveryCustomizationUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryCustomizationUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryCustomizationUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryCustomizationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a delivery profile.
     */
    public async deliveryProfileCreate<
        TSelection extends Exact<InferSelectType<Mutation["deliveryProfileCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["deliveryProfileCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryProfileCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Enqueue the removal of a delivery profile.
     */
    public async deliveryProfileRemove<
        TSelection extends Exact<InferSelectType<Mutation["deliveryProfileRemove"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["deliveryProfileRemove"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryProfileRemove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a delivery profile.
     */
    public async deliveryProfileUpdate<
        TSelection extends Exact<InferSelectType<Mutation["deliveryProfileUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["deliveryProfileUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryProfileUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.
     */
    public async deliveryPromiseProviderUpsert<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryPromiseProviderUpsert"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryPromiseProviderUpsert"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryPromiseProviderUpsert",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Set the delivery settings for a shop.
     */
    public async deliverySettingUpdate<
        TSelection extends Exact<InferSelectType<Mutation["deliverySettingUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["deliverySettingUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliverySettingUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.
     */
    public async deliveryShippingOriginAssign<
        TSelection extends Exact<
            InferSelectType<Mutation["deliveryShippingOriginAssign"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["deliveryShippingOriginAssign"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "deliveryShippingOriginAssign",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates an automatic discount.
     */
    public async discountAutomaticActivate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticActivate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticActivate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an automatic discount that's managed by an app.
     * Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions)
     * when you need advanced, custom, or dynamic discount capabilities that aren't supported by
     * [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
     *
     * For example, use this mutation to create an automatic discount using an app's
     * "Volume" discount type that applies a percentage
     * off when customers purchase more than the minimum quantity of a product. For an example implementation,
     * refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).
     *
     * > Note:
     * > To create code discounts with custom logic, use the
     * [`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)
     * mutation.
     */
    public async discountAutomaticAppCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticAppCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticAppCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticAppCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing automatic discount that's managed by an app using
     * [Shopify Functions](https://shopify.dev/docs/apps/build/functions).
     * Use this mutation when you need advanced, custom, or
     * dynamic discount capabilities that aren't supported by
     * [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
     *
     * For example, use this mutation to update a new "Volume" discount type that applies a percentage
     * off when customers purchase more than the minimum quantity of a product. For an example implementation,
     * refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).
     *
     * > Note:
     * > To update code discounts with custom logic, use the
     * [`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)
     * mutation instead.
     */
    public async discountAutomaticAppUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticAppUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticAppUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticAppUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an
     * [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To create code discounts, use the
     * [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
     * mutation.
     */
    public async discountAutomaticBasicCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticBasicCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticBasicCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticBasicCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing
     * [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To update code discounts, use the
     * [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)
     * mutation instead.
     */
    public async discountAutomaticBasicUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticBasicUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticBasicUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticBasicUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete automatic discounts in bulk if a `search` or `saved_search_id` argument is provided or if a
     * maximum discount threshold is reached (1,000). Otherwise, deletions will occur inline.
     * **Warning:** All automatic discounts will be deleted if a blank `search` argument is provided.
     */
    public async discountAutomaticBulkDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticBulkDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticBulkDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a
     * [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To create code discounts, use the
     * [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)
     * mutation.
     */
    public async discountAutomaticBxgyCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticBxgyCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticBxgyCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticBxgyCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing
     * [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To update code discounts, use the
     * [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)
     * mutation instead.
     */
    public async discountAutomaticBxgyUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticBxgyUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticBxgyUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticBxgyUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deactivates an automatic discount.
     */
    public async discountAutomaticDeactivate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticDeactivate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticDeactivate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes an
     * [automatic discount](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).
     */
    public async discountAutomaticDelete<
        TSelection extends Exact<InferSelectType<Mutation["discountAutomaticDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountAutomaticDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a
     * [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To create code discounts, use the
     * [`discountCodeFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)
     * mutation.
     */
    public async discountAutomaticFreeShippingCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticFreeShippingCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticFreeShippingCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticFreeShippingCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing
     * [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
     * that's automatically applied on a cart and at checkout.
     *
     * > Note:
     * > To update code discounts, use the
     * [`discountCodeFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)
     * mutation instead.
     */
    public async discountAutomaticFreeShippingUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountAutomaticFreeShippingUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountAutomaticFreeShippingUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountAutomaticFreeShippingUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates a code discount.
     */
    public async discountCodeActivate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeActivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeActivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
     *
     * For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity
     * of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).
     *
     * > Note:
     * > To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).
     */
    public async discountCodeAppCreate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeAppCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeAppCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeAppCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
     *
     * > Note:
     * > To update automatic discounts, use [`discountAutomaticAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate).
     */
    public async discountCodeAppUpdate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeAppUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeAppUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeAppUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.
     *
     * > Note:
     * > To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.
     */
    public async discountCodeBasicCreate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBasicCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeBasicCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBasicCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.
     *
     * > Note:
     * > To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.
     */
    public async discountCodeBasicUpdate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBasicUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeBasicUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBasicUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates multiple [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:
     * - A search query
     * - A saved search ID
     * - A list of discount code IDs
     *
     * For example, you can activate discounts for all codes that match a search criteria, or activate a predefined set of discount codes.
     */
    public async discountCodeBulkActivate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBulkActivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountCodeBulkActivate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBulkActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:
     * - A search query
     * - A saved search ID
     * - A list of discount code IDs
     *
     * For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.
     */
    public async discountCodeBulkDeactivate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountCodeBulkDeactivate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountCodeBulkDeactivate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBulkDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:
     * - A search query
     * - A saved search ID
     * - A list of discount code IDs
     *
     * For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.
     */
    public async discountCodeBulkDelete<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBulkDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeBulkDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a
     * [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
     * that's applied on a cart and at checkout when a customer enters a code.
     *
     * > Note:
     * > To create discounts that are automatically applied on a cart and at checkout, use the
     * [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)
     * mutation.
     */
    public async discountCodeBxgyCreate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBxgyCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeBxgyCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBxgyCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a
     * [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
     * that's applied on a cart and at checkout when a customer enters a code.
     *
     * > Note:
     * > To update discounts that are automatically applied on a cart and at checkout, use the
     * [`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)
     * mutation.
     */
    public async discountCodeBxgyUpdate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeBxgyUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeBxgyUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeBxgyUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deactivates a code discount.
     */
    public async discountCodeDeactivate<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeDeactivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeDeactivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a
     * [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes).
     */
    public async discountCodeDelete<
        TSelection extends Exact<InferSelectType<Mutation["discountCodeDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["discountCodeDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.
     *
     * > Note:
     * > To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.
     */
    public async discountCodeFreeShippingCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountCodeFreeShippingCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountCodeFreeShippingCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeFreeShippingCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.
     *
     * > Note:
     * > To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.
     */
    public async discountCodeFreeShippingUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["discountCodeFreeShippingUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountCodeFreeShippingUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeFreeShippingUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete
     * [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes)
     * in bulk that customers can use to redeem a discount.
     */
    public async discountCodeRedeemCodeBulkDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["discountCodeRedeemCodeBulkDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountCodeRedeemCodeBulkDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountCodeRedeemCodeBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously add
     * [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes)
     * in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation
     * to automate the distribution of discount codes through emails or other
     * marketing channels.
     */
    public async discountRedeemCodeBulkAdd<
        TSelection extends Exact<
            InferSelectType<Mutation["discountRedeemCodeBulkAdd"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["discountRedeemCodeBulkAdd"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "discountRedeemCodeBulkAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a dispute evidence.
     */
    public async disputeEvidenceUpdate<
        TSelection extends Exact<InferSelectType<Mutation["disputeEvidenceUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["disputeEvidenceUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "disputeEvidenceUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds tags to multiple draft orders.
     */
    public async draftOrderBulkAddTags<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderBulkAddTags"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderBulkAddTags"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderBulkAddTags",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes multiple draft orders.
     */
    public async draftOrderBulkDelete<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderBulkDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderBulkDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes tags from multiple draft orders.
     */
    public async draftOrderBulkRemoveTags<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderBulkRemoveTags"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["draftOrderBulkRemoveTags"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderBulkRemoveTags",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Calculates the properties of a draft order. Useful for determining information
     * such as total taxes or price without actually creating a draft order.
     */
    public async draftOrderCalculate<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderCalculate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderCalculate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderCalculate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Completes a draft order and creates an order.
     */
    public async draftOrderComplete<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderComplete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderComplete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderComplete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a draft order.
     */
    public async draftOrderCreate<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a draft order from order.
     */
    public async draftOrderCreateFromOrder<
        TSelection extends Exact<
            InferSelectType<Mutation["draftOrderCreateFromOrder"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["draftOrderCreateFromOrder"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderCreateFromOrder",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a merchant checkout for the given draft order.
     */
    public async draftOrderCreateMerchantCheckout<
        TSelection extends Exact<
            InferSelectType<Mutation["draftOrderCreateMerchantCheckout"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["draftOrderCreateMerchantCheckout"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderCreateMerchantCheckout",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a draft order.
     */
    public async draftOrderDelete<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Duplicates a draft order.
     */
    public async draftOrderDuplicate<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderDuplicate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderDuplicate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderDuplicate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Previews a draft order invoice email.
     */
    public async draftOrderInvoicePreview<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderInvoicePreview"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["draftOrderInvoicePreview"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderInvoicePreview",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends an email invoice for a draft order.
     */
    public async draftOrderInvoiceSend<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderInvoiceSend"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderInvoiceSend"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderInvoiceSend",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a draft order.
     *
     * If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts
     * are created but not immediately completed when opening the merchant credit card modal in the admin, and when a
     * buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress
     * and the draft is updated before the checkout completes. This will not interfere with the checkout and order
     * creation, but if the link from draft to checkout is broken the draft will remain open even after the order is
     * created.
     */
    public async draftOrderUpdate<
        TSelection extends Exact<InferSelectType<Mutation["draftOrderUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["draftOrderUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "draftOrderUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the server pixel to connect to an EventBridge endpoint.
     * Running this mutation deletes any previous subscriptions for the server pixel.
     */
    public async eventBridgeServerPixelUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["eventBridgeServerPixelUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["eventBridgeServerPixelUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "eventBridgeServerPixelUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new Amazon EventBridge webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async eventBridgeWebhookSubscriptionCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["eventBridgeWebhookSubscriptionCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["eventBridgeWebhookSubscriptionCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "eventBridgeWebhookSubscriptionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an Amazon EventBridge webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async eventBridgeWebhookSubscriptionUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["eventBridgeWebhookSubscriptionUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["eventBridgeWebhookSubscriptionUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "eventBridgeWebhookSubscriptionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.
     */
    public async fileAcknowledgeUpdateFailed<
        TSelection extends Exact<
            InferSelectType<Mutation["fileAcknowledgeUpdateFailed"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fileAcknowledgeUpdateFailed"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fileAcknowledgeUpdateFailed",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates file assets using an external URL or for files that were previously uploaded using the
     * [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).
     * These files are added to the [Files page](https://shopify.com/admin/settings/files) in Shopify admin.
     *
     * Files are processed asynchronously. Some data is not available until processing is completed.
     * Check [fileStatus](https://shopify.dev/api/admin-graphql/latest/interfaces/File#field-file-filestatus)
     * to know when the files are READY or FAILED. See the [FileStatus](https://shopify.dev/api/admin-graphql/latest/enums/filestatus)
     * for the complete set of possible fileStatus values.
     *
     * To get a list of all files, use the [files query](https://shopify.dev/api/admin-graphql/latest/queries/files).
     */
    public async fileCreate<
        TSelection extends Exact<InferSelectType<Mutation["fileCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["fileCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "fileCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes existing file assets that were uploaded to Shopify.
     */
    public async fileDelete<
        TSelection extends Exact<InferSelectType<Mutation["fileDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["fileDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "fileDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing file asset that was uploaded to Shopify.
     */
    public async fileUpdate<
        TSelection extends Exact<InferSelectType<Mutation["fileUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["fileUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "fileUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Generates a signature for a Flow action payload.
     */
    public async flowGenerateSignature<
        TSelection extends Exact<InferSelectType<Mutation["flowGenerateSignature"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["flowGenerateSignature"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "flowGenerateSignature",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [_Create Shopify Flow triggers_](https://shopify.dev/apps/flow/triggers).
     */
    public async flowTriggerReceive<
        TSelection extends Exact<InferSelectType<Mutation["flowTriggerReceive"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["flowTriggerReceive"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "flowTriggerReceive",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels a fulfillment.
     */
    public async fulfillmentCancel<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentCancel"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentCancel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a fulfillment constraint rule and its metafield.
     */
    public async fulfillmentConstraintRuleCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentConstraintRuleCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentConstraintRuleCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentConstraintRuleCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a fulfillment constraint rule and its metafields.
     */
    public async fulfillmentConstraintRuleDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentConstraintRuleDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentConstraintRuleDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentConstraintRuleDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a fulfillment constraint rule.
     */
    public async fulfillmentConstraintRuleUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentConstraintRuleUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentConstraintRuleUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentConstraintRuleUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a fulfillment for one or many fulfillment orders.
     * The fulfillment orders are associated with the same order and are assigned to the same location.
     */
    public async fulfillmentCreate<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a fulfillment for one or many fulfillment orders.
     * The fulfillment orders are associated with the same order and are assigned to the same location.
     */
    public async fulfillmentCreateV2<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentCreateV2"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentCreateV2"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentCreateV2",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a fulfillment event for a specified fulfillment.
     */
    public async fulfillmentEventCreate<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentEventCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentEventCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentEventCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Accept a cancellation request sent to a fulfillment service for a fulfillment order.
     */
    public async fulfillmentOrderAcceptCancellationRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderAcceptCancellationRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderAcceptCancellationRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderAcceptCancellationRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Accepts a fulfillment request sent to a fulfillment service for a fulfillment order.
     */
    public async fulfillmentOrderAcceptFulfillmentRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderAcceptFulfillmentRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderAcceptFulfillmentRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderAcceptFulfillmentRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks a fulfillment order as canceled.
     */
    public async fulfillmentOrderCancel<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderCancel"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderCancel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks an in-progress fulfillment order as incomplete,
     * indicating the fulfillment service is unable to ship any remaining items,
     * and closes the fulfillment request.
     *
     * This mutation can only be called for fulfillment orders that meet the following criteria:
     * - Assigned to a fulfillment service location,
     * - The fulfillment request has been accepted,
     * - The fulfillment order status is `IN_PROGRESS`.
     *
     * This mutation can only be called by the fulfillment service app that accepted the fulfillment request.
     * Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to
     * move the fulfillment order line items to another location and fulfill from there,
     * remove and refund the line items, or to request fulfillment from the same fulfillment service again.
     *
     * Closing a fulfillment order is explained in
     * [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).
     */
    public async fulfillmentOrderClose<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderClose"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderClose"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderClose",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Applies a fulfillment hold on a fulfillment order.
     *
     * As of the
     * [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order),
     * the mutation can be successfully executed on fulfillment orders that are already on hold.
     * To place multiple holds on a fulfillment order, apps need to supply the
     * [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle)
     * field. Each app can place up to
     * 10 active holds
     * per fulfillment order. If an app attempts to place more than this, the mutation will return
     * [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached).
     * The app would need to release one of its existing holds before being able to apply a new one.
     */
    public async fulfillmentOrderHold<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderHold"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderHold"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderHold",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Mark line items associated with a fulfillment order as being ready for pickup by a customer.
     *
     * Sends a Ready For Pickup notification to the customer to let them know that their order is ready
     * to be picked up.
     */
    public async fulfillmentOrderLineItemsPreparedForPickup<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderLineItemsPreparedForPickup"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderLineItemsPreparedForPickup"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderLineItemsPreparedForPickup",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Merges a set or multiple sets of fulfillment orders together into one based on
     * line item inputs and quantities.
     */
    public async fulfillmentOrderMerge<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderMerge"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderMerge"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderMerge",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.
     *
     * Moving a fulfillment order will fail in the following circumstances:
     *
     * * The fulfillment order is closed.
     * * The destination location has never stocked the requested inventory item.
     * * The API client doesn't have the correct permissions.
     *
     * Line items which have already been fulfilled can't be re-assigned
     * and will always remain assigned to the original location.
     *
     * You can't change the assigned location while a fulfillment order has a
     * [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus)
     * of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`.
     * These request statuses mean that a fulfillment order is awaiting action by a fulfillment service
     * and can't be re-assigned without first having the fulfillment service accept a cancellation request.
     * This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.
     *
     * ### How re-assigning line items affects fulfillment orders
     *
     * **First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.
     *
     * In this case, the
     * [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation)
     * of the original fulfillment order will be updated to the new location.
     *
     * **Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location.
     * You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter
     * (available as of the `2023-04` API version),
     * or specify that the original fulfillment order contains line items which have already been fulfilled.
     *
     * If the new location is already assigned to another active fulfillment order, on the same order, then
     * a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated
     * in a new fulfillment order.
     */
    public async fulfillmentOrderMove<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderMove"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderMove"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderMove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks a scheduled fulfillment order as open.
     */
    public async fulfillmentOrderOpen<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderOpen"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderOpen"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderOpen",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Rejects a cancellation request sent to a fulfillment service for a fulfillment order.
     */
    public async fulfillmentOrderRejectCancellationRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderRejectCancellationRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderRejectCancellationRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderRejectCancellationRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.
     */
    public async fulfillmentOrderRejectFulfillmentRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderRejectFulfillmentRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderRejectFulfillmentRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderRejectFulfillmentRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Releases the fulfillment hold on a fulfillment order.
     */
    public async fulfillmentOrderReleaseHold<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderReleaseHold"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentOrderReleaseHold"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderReleaseHold",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Reschedules a scheduled fulfillment order.
     *
     * Updates the value of the `fulfillAt` field on a scheduled fulfillment order.
     *
     * The fulfillment order will be marked as ready for fulfillment at this date and time.
     */
    public async fulfillmentOrderReschedule<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderReschedule"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentOrderReschedule"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderReschedule",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Splits a fulfillment order or orders based on line item inputs and quantities.
     */
    public async fulfillmentOrderSplit<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentOrderSplit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["fulfillmentOrderSplit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderSplit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends a cancellation request to the fulfillment service of a fulfillment order.
     */
    public async fulfillmentOrderSubmitCancellationRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderSubmitCancellationRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderSubmitCancellationRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderSubmitCancellationRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends a fulfillment request to the fulfillment service of a fulfillment order.
     */
    public async fulfillmentOrderSubmitFulfillmentRequest<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrderSubmitFulfillmentRequest"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["fulfillmentOrderSubmitFulfillmentRequest"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrderSubmitFulfillmentRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sets the latest date and time by which the fulfillment orders need to be fulfilled.
     */
    public async fulfillmentOrdersSetFulfillmentDeadline<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentOrdersSetFulfillmentDeadline"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentOrdersSetFulfillmentDeadline"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentOrdersSetFulfillmentDeadline",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a fulfillment service.
     *
     * ## Fulfillment service location
     *
     * When creating a fulfillment service, a new location will be automatically created on the shop
     * and will be associated with this fulfillment service.
     * This location will be named after the fulfillment service and inherit the shop's address.
     *
     * If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location
     * (for example, to change its address to a country different from the shop's country),
     * use the
     * [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit)
     * mutation after creating the fulfillment service.
     */
    public async fulfillmentServiceCreate<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentServiceCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentServiceCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentServiceCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a fulfillment service.
     */
    public async fulfillmentServiceDelete<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentServiceDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentServiceDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentServiceDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a fulfillment service.
     *
     * If you are using API version `2023-10` or later,
     * and you need to update the location managed by the fulfillment service
     * (for example, to change the address of a fulfillment service),
     * use the
     * [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit)
     * mutation.
     */
    public async fulfillmentServiceUpdate<
        TSelection extends Exact<InferSelectType<Mutation["fulfillmentServiceUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentServiceUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentServiceUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates tracking information for a fulfillment.
     */
    public async fulfillmentTrackingInfoUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentTrackingInfoUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentTrackingInfoUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentTrackingInfoUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates tracking information for a fulfillment.
     */
    public async fulfillmentTrackingInfoUpdateV2<
        TSelection extends Exact<
            InferSelectType<Mutation["fulfillmentTrackingInfoUpdateV2"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["fulfillmentTrackingInfoUpdateV2"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "fulfillmentTrackingInfoUpdateV2",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a gift card.
     */
    public async giftCardCreate<
        TSelection extends Exact<InferSelectType<Mutation["giftCardCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["giftCardCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "giftCardCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Credit a gift card.
     */
    public async giftCardCredit<
        TSelection extends Exact<InferSelectType<Mutation["giftCardCredit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["giftCardCredit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "giftCardCredit", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deactivate a gift card. A deactivated gift card cannot be used by a customer.
     * A deactivated gift card cannot be re-enabled.
     */
    public async giftCardDeactivate<
        TSelection extends Exact<InferSelectType<Mutation["giftCardDeactivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["giftCardDeactivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "giftCardDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Debit a gift card.
     */
    public async giftCardDebit<
        TSelection extends Exact<InferSelectType<Mutation["giftCardDebit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["giftCardDebit"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "giftCardDebit", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Send notification to the customer of a gift card.
     */
    public async giftCardSendNotificationToCustomer<
        TSelection extends Exact<
            InferSelectType<Mutation["giftCardSendNotificationToCustomer"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["giftCardSendNotificationToCustomer"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "giftCardSendNotificationToCustomer",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Send notification to the recipient of a gift card.
     */
    public async giftCardSendNotificationToRecipient<
        TSelection extends Exact<
            InferSelectType<Mutation["giftCardSendNotificationToRecipient"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["giftCardSendNotificationToRecipient"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "giftCardSendNotificationToRecipient",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a gift card.
     */
    public async giftCardUpdate<
        TSelection extends Exact<InferSelectType<Mutation["giftCardUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["giftCardUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "giftCardUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activate an inventory item at a location.
     */
    public async inventoryActivate<
        TSelection extends Exact<InferSelectType<Mutation["inventoryActivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["inventoryActivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Apply changes to inventory quantities.
     */
    public async inventoryAdjustQuantities<
        TSelection extends Exact<
            InferSelectType<Mutation["inventoryAdjustQuantities"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["inventoryAdjustQuantities"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryAdjustQuantities",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Modify the activation status of an inventory item at locations. Activating an inventory item at a particular location allows that location to stock that inventory item. Deactivating an inventory item at a location removes the inventory item's quantities and turns off the inventory item from that location.
     */
    public async inventoryBulkToggleActivation<
        TSelection extends Exact<
            InferSelectType<Mutation["inventoryBulkToggleActivation"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["inventoryBulkToggleActivation"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryBulkToggleActivation",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes an inventory item's quantities from a location, and turns off inventory at the location.
     */
    public async inventoryDeactivate<
        TSelection extends Exact<InferSelectType<Mutation["inventoryDeactivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["inventoryDeactivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an inventory item.
     */
    public async inventoryItemUpdate<
        TSelection extends Exact<InferSelectType<Mutation["inventoryItemUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["inventoryItemUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryItemUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Moves inventory between inventory quantity names at a single location.
     */
    public async inventoryMoveQuantities<
        TSelection extends Exact<InferSelectType<Mutation["inventoryMoveQuantities"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["inventoryMoveQuantities"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventoryMoveQuantities",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Set inventory on-hand quantities using absolute values.
     */
    public async inventorySetOnHandQuantities<
        TSelection extends Exact<
            InferSelectType<Mutation["inventorySetOnHandQuantities"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["inventorySetOnHandQuantities"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventorySetOnHandQuantities",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle
     * concurrent requests properly. If `ignoreCompareQuantity` is not set to true,
     * the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value.
     * If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out
     * of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.
     *
     * > Note:
     * > Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities,
     * > otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.
     * >
     * >
     * > Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently.
     * > It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out
     * > of the check using `ignoreCompareQuantity` only when necessary.
     */
    public async inventorySetQuantities<
        TSelection extends Exact<InferSelectType<Mutation["inventorySetQuantities"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["inventorySetQuantities"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventorySetQuantities",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Set up scheduled changes of inventory items.
     */
    public async inventorySetScheduledChanges<
        TSelection extends Exact<
            InferSelectType<Mutation["inventorySetScheduledChanges"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["inventorySetScheduledChanges"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "inventorySetScheduledChanges",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates a location so that you can stock inventory at the location. Refer to the
     * [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and
     * [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable)
     * fields on the `Location` object.
     */
    public async locationActivate<
        TSelection extends Exact<InferSelectType<Mutation["locationActivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["locationActivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "locationActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a new location.
     */
    public async locationAdd<
        TSelection extends Exact<InferSelectType<Mutation["locationAdd"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["locationAdd"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "locationAdd", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deactivates a location and moves inventory, pending orders, and moving transfers to a destination location.
     */
    public async locationDeactivate<
        TSelection extends Exact<InferSelectType<Mutation["locationDeactivate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["locationDeactivate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "locationDeactivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a location.
     */
    public async locationDelete<
        TSelection extends Exact<InferSelectType<Mutation["locationDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["locationDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "locationDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Edits an existing location.
     *
     * [As of the 2023-10 API version](https://shopify.dev/changelog/apps-can-now-change-the-name-and-address-of-their-fulfillment-service-locations), apps can change the name and address of their fulfillment service locations.
     */
    public async locationEdit<
        TSelection extends Exact<InferSelectType<Mutation["locationEdit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["locationEdit"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "locationEdit", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Disables local pickup for a location.
     */
    public async locationLocalPickupDisable<
        TSelection extends Exact<
            InferSelectType<Mutation["locationLocalPickupDisable"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["locationLocalPickupDisable"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "locationLocalPickupDisable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Enables local pickup for a location.
     */
    public async locationLocalPickupEnable<
        TSelection extends Exact<
            InferSelectType<Mutation["locationLocalPickupEnable"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["locationLocalPickupEnable"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "locationLocalPickupEnable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new market.
     */
    public async marketCreate<
        TSelection extends Exact<InferSelectType<Mutation["marketCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["marketCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "marketCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates currency settings of a market.
     */
    public async marketCurrencySettingsUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["marketCurrencySettingsUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketCurrencySettingsUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketCurrencySettingsUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a market definition.
     */
    public async marketDelete<
        TSelection extends Exact<InferSelectType<Mutation["marketDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["marketDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "marketDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates market localizations.
     */
    public async marketLocalizationsRegister<
        TSelection extends Exact<
            InferSelectType<Mutation["marketLocalizationsRegister"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketLocalizationsRegister"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketLocalizationsRegister",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes market localizations.
     */
    public async marketLocalizationsRemove<
        TSelection extends Exact<
            InferSelectType<Mutation["marketLocalizationsRemove"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketLocalizationsRemove"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketLocalizationsRemove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a market region.
     */
    public async marketRegionDelete<
        TSelection extends Exact<InferSelectType<Mutation["marketRegionDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketRegionDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketRegionDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates regions that belong to an existing market.
     */
    public async marketRegionsCreate<
        TSelection extends Exact<InferSelectType<Mutation["marketRegionsCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketRegionsCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketRegionsCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a list of market regions.
     */
    public async marketRegionsDelete<
        TSelection extends Exact<InferSelectType<Mutation["marketRegionsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketRegionsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketRegionsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the properties of a market.
     */
    public async marketUpdate<
        TSelection extends Exact<InferSelectType<Mutation["marketUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["marketUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "marketUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a web presence for a market.
     */
    public async marketWebPresenceCreate<
        TSelection extends Exact<InferSelectType<Mutation["marketWebPresenceCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketWebPresenceCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketWebPresenceCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a market web presence.
     */
    public async marketWebPresenceDelete<
        TSelection extends Exact<InferSelectType<Mutation["marketWebPresenceDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketWebPresenceDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketWebPresenceDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a market web presence.
     */
    public async marketWebPresenceUpdate<
        TSelection extends Exact<InferSelectType<Mutation["marketWebPresenceUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketWebPresenceUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketWebPresenceUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.
     */
    public async marketingActivitiesDeleteAllExternal<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingActivitiesDeleteAllExternal"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingActivitiesDeleteAllExternal"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivitiesDeleteAllExternal",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create new marketing activity.
     */
    public async marketingActivityCreate<
        TSelection extends Exact<InferSelectType<Mutation["marketingActivityCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketingActivityCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new external marketing activity.
     */
    public async marketingActivityCreateExternal<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingActivityCreateExternal"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingActivityCreateExternal"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityCreateExternal",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes an external marketing activity.
     */
    public async marketingActivityDeleteExternal<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingActivityDeleteExternal"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingActivityDeleteExternal"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityDeleteExternal",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a marketing activity with the latest information.
     */
    public async marketingActivityUpdate<
        TSelection extends Exact<InferSelectType<Mutation["marketingActivityUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["marketingActivityUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update an external marketing activity.
     */
    public async marketingActivityUpdateExternal<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingActivityUpdateExternal"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingActivityUpdateExternal"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityUpdateExternal",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.
     */
    public async marketingActivityUpsertExternal<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingActivityUpsertExternal"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingActivityUpsertExternal"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingActivityUpsertExternal",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new marketing engagement for a marketing activity or a marketing channel.
     */
    public async marketingEngagementCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingEngagementCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingEngagementCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingEngagementCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks channel-level engagement data such that it no longer appears in reports.
     * Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to
     * hide it from reports.
     */
    public async marketingEngagementsDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["marketingEngagementsDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["marketingEngagementsDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "marketingEngagementsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a menu.
     */
    public async menuCreate<
        TSelection extends Exact<InferSelectType<Mutation["menuCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["menuCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "menuCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a menu.
     */
    public async menuDelete<
        TSelection extends Exact<InferSelectType<Mutation["menuDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["menuDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "menuDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a menu.
     */
    public async menuUpdate<
        TSelection extends Exact<InferSelectType<Mutation["menuUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["menuUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "menuUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a metafield definition. Any metafields existing under the same owner type, namespace, and key will be
     * checked against this definition and will have their type updated accordingly. For metafields that are not
     * valid, they will remain unchanged but any attempts to update them must align with this definition.
     */
    public async metafieldDefinitionCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["metafieldDefinitionCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldDefinitionCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDefinitionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a metafield definition.
     * Optionally deletes all associated metafields asynchronously when specified.
     */
    public async metafieldDefinitionDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["metafieldDefinitionDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldDefinitionDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDefinitionDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
     * The order of your pinned metafield definitions determines the order in which your metafields are displayed
     * on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.
     */
    public async metafieldDefinitionPin<
        TSelection extends Exact<InferSelectType<Mutation["metafieldDefinitionPin"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metafieldDefinitionPin"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDefinitionPin",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
     * The order of your pinned metafield definitions determines the order in which your metafields are displayed
     * on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.
     */
    public async metafieldDefinitionUnpin<
        TSelection extends Exact<InferSelectType<Mutation["metafieldDefinitionUnpin"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldDefinitionUnpin"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDefinitionUnpin",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a metafield definition.
     */
    public async metafieldDefinitionUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["metafieldDefinitionUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldDefinitionUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDefinitionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a metafield.
     */
    public async metafieldDelete<
        TSelection extends Exact<InferSelectType<Mutation["metafieldDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metafieldDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a `MetafieldStorefrontVisibility` record to make all metafields that belong to the specified resource
     * and have the established `namespace` and `key` combination visible in the Storefront API.
     */
    public async metafieldStorefrontVisibilityCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["metafieldStorefrontVisibilityCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldStorefrontVisibilityCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldStorefrontVisibilityCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a `MetafieldStorefrontVisibility` record. All metafields that belongs to the specified record will no
     * longer be visible in the Storefront API.
     */
    public async metafieldStorefrontVisibilityDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["metafieldStorefrontVisibilityDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metafieldStorefrontVisibilityDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldStorefrontVisibilityDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes multiple metafields in bulk.
     */
    public async metafieldsDelete<
        TSelection extends Exact<InferSelectType<Mutation["metafieldsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metafieldsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metafieldsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sets metafield values. Metafield values will be set regardless if they were previously created or not.
     *
     * Allows a maximum of 25 metafields to be set at a time.
     *
     * This operation is atomic, meaning no changes are persisted if an error is encountered.
     *
     * As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests.
     * If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`.
     * If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`.
     * The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field.
     * If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error.
     * You can opt out of write guarantees by not sending `compareDigest` in the request.
     */
    public async metafieldsSet<
        TSelection extends Exact<InferSelectType<Mutation["metafieldsSet"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["metafieldsSet"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "metafieldsSet", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete metaobjects and their associated metafields in bulk.
     */
    public async metaobjectBulkDelete<
        TSelection extends Exact<InferSelectType<Mutation["metaobjectBulkDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metaobjectBulkDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new metaobject.
     */
    public async metaobjectCreate<
        TSelection extends Exact<InferSelectType<Mutation["metaobjectCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metaobjectCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new metaobject definition.
     */
    public async metaobjectDefinitionCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["metaobjectDefinitionCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metaobjectDefinitionCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectDefinitionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes the specified metaobject definition.
     * Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.
     */
    public async metaobjectDefinitionDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["metaobjectDefinitionDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metaobjectDefinitionDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectDefinitionDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a metaobject definition with new settings and metafield definitions.
     */
    public async metaobjectDefinitionUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["metaobjectDefinitionUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["metaobjectDefinitionUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectDefinitionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes the specified metaobject and its associated metafields.
     */
    public async metaobjectDelete<
        TSelection extends Exact<InferSelectType<Mutation["metaobjectDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metaobjectDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates an existing metaobject.
     */
    public async metaobjectUpdate<
        TSelection extends Exact<InferSelectType<Mutation["metaobjectUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metaobjectUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Retrieves a metaobject by handle, then updates it with the provided input values.
     * If no matching metaobject is found, a new metaobject is created with the provided input values.
     */
    public async metaobjectUpsert<
        TSelection extends Exact<InferSelectType<Mutation["metaobjectUpsert"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["metaobjectUpsert"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "metaobjectUpsert",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a mobile platform application.
     */
    public async mobilePlatformApplicationCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["mobilePlatformApplicationCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["mobilePlatformApplicationCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "mobilePlatformApplicationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a mobile platform application.
     */
    public async mobilePlatformApplicationDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["mobilePlatformApplicationDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["mobilePlatformApplicationDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "mobilePlatformApplicationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a mobile platform application.
     */
    public async mobilePlatformApplicationUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["mobilePlatformApplicationUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["mobilePlatformApplicationUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "mobilePlatformApplicationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels an order.
     */
    public async orderCancel<
        TSelection extends Exact<InferSelectType<Mutation["orderCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderCancel"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderCancel", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Captures payment for an authorized transaction on an order. An order can only be captured if it has a successful authorization transaction. Capturing an order will claim the money reserved by the authorization. orderCapture can be used to capture multiple times as long as the OrderTransaction is multi-capturable. To capture a partial payment, the included `amount` value should be less than the total order amount. Multi-capture is available only to stores on a Shopify Plus plan.
     */
    public async orderCapture<
        TSelection extends Exact<InferSelectType<Mutation["orderCapture"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderCapture"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderCapture", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Closes an open order.
     */
    public async orderClose<
        TSelection extends Exact<InferSelectType<Mutation["orderClose"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderClose"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderClose", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an order.
     */
    public async orderCreate<
        TSelection extends Exact<InferSelectType<Mutation["orderCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a payment for an order by mandate.
     */
    public async orderCreateMandatePayment<
        TSelection extends Exact<
            InferSelectType<Mutation["orderCreateMandatePayment"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderCreateMandatePayment"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderCreateMandatePayment",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes an order. For more information on which orders can be deleted, refer to [Delete an order](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order).
     */
    public async orderDelete<
        TSelection extends Exact<InferSelectType<Mutation["orderDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a custom line item to an existing order. For example, you could add a gift wrapping service as a [custom line item](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing#add-a-custom-line-item). To learn how to edit existing orders, refer to [Edit an existing order with Admin API](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditAddCustomItem<
        TSelection extends Exact<InferSelectType<Mutation["orderEditAddCustomItem"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditAddCustomItem"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditAddCustomItem",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a discount to a line item on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditAddLineItemDiscount<
        TSelection extends Exact<
            InferSelectType<Mutation["orderEditAddLineItemDiscount"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderEditAddLineItemDiscount"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditAddLineItemDiscount",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a shipping line to an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditAddShippingLine<
        TSelection extends Exact<InferSelectType<Mutation["orderEditAddShippingLine"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderEditAddShippingLine"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditAddShippingLine",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a line item from an existing product variant. As of API version 2025-04, the [orderEditAddVariant](https://shopify.dev/api/admin-graphql/latest/mutations/ordereditaddvariant) API will respect the contextual pricing of the variant.
     */
    public async orderEditAddVariant<
        TSelection extends Exact<InferSelectType<Mutation["orderEditAddVariant"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditAddVariant"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditAddVariant",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Starts editing an order. Mutations are operating on `OrderEdit`.
     * All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.
     */
    public async orderEditBegin<
        TSelection extends Exact<InferSelectType<Mutation["orderEditBegin"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditBegin"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "orderEditBegin", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Applies and saves staged changes to an order. Mutations are operating on `OrderEdit`.
     * All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.
     */
    public async orderEditCommit<
        TSelection extends Exact<InferSelectType<Mutation["orderEditCommit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditCommit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditCommit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditRemoveDiscount<
        TSelection extends Exact<InferSelectType<Mutation["orderEditRemoveDiscount"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditRemoveDiscount"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditRemoveDiscount",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a line item discount that was applied as part of an order edit.
     */
    public async orderEditRemoveLineItemDiscount<
        TSelection extends Exact<
            InferSelectType<Mutation["orderEditRemoveLineItemDiscount"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderEditRemoveLineItemDiscount"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditRemoveLineItemDiscount",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditRemoveShippingLine<
        TSelection extends Exact<
            InferSelectType<Mutation["orderEditRemoveShippingLine"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderEditRemoveShippingLine"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditRemoveShippingLine",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sets the quantity of a line item on an order that is being edited. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditSetQuantity<
        TSelection extends Exact<InferSelectType<Mutation["orderEditSetQuantity"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditSetQuantity"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditSetQuantity",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditUpdateDiscount<
        TSelection extends Exact<InferSelectType<Mutation["orderEditUpdateDiscount"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderEditUpdateDiscount"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditUpdateDiscount",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
     */
    public async orderEditUpdateShippingLine<
        TSelection extends Exact<
            InferSelectType<Mutation["orderEditUpdateShippingLine"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderEditUpdateShippingLine"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderEditUpdateShippingLine",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends an email invoice for an order.
     */
    public async orderInvoiceSend<
        TSelection extends Exact<InferSelectType<Mutation["orderInvoiceSend"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderInvoiceSend"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderInvoiceSend",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Marks an order as paid. You can only mark an order as paid if it isn't already fully paid.
     */
    public async orderMarkAsPaid<
        TSelection extends Exact<InferSelectType<Mutation["orderMarkAsPaid"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["orderMarkAsPaid"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderMarkAsPaid",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Opens a closed order.
     */
    public async orderOpen<
        TSelection extends Exact<InferSelectType<Mutation["orderOpen"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderOpen"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderOpen", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create a risk assessment for an order.
     */
    public async orderRiskAssessmentCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["orderRiskAssessmentCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["orderRiskAssessmentCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "orderRiskAssessmentCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the fields of an order.
     */
    public async orderUpdate<
        TSelection extends Exact<InferSelectType<Mutation["orderUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["orderUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "orderUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a page.
     */
    public async pageCreate<
        TSelection extends Exact<InferSelectType<Mutation["pageCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["pageCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "pageCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a page.
     */
    public async pageDelete<
        TSelection extends Exact<InferSelectType<Mutation["pageDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["pageDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "pageDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a page.
     */
    public async pageUpdate<
        TSelection extends Exact<InferSelectType<Mutation["pageUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["pageUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "pageUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates and deactivates payment customizations.
     */
    public async paymentCustomizationActivation<
        TSelection extends Exact<
            InferSelectType<Mutation["paymentCustomizationActivation"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["paymentCustomizationActivation"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentCustomizationActivation",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a payment customization.
     */
    public async paymentCustomizationCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["paymentCustomizationCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["paymentCustomizationCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentCustomizationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a payment customization.
     */
    public async paymentCustomizationDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["paymentCustomizationDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["paymentCustomizationDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentCustomizationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a payment customization.
     */
    public async paymentCustomizationUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["paymentCustomizationUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["paymentCustomizationUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentCustomizationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sends an email payment reminder for a payment schedule.
     */
    public async paymentReminderSend<
        TSelection extends Exact<InferSelectType<Mutation["paymentReminderSend"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["paymentReminderSend"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentReminderSend",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.
     */
    public async paymentTermsCreate<
        TSelection extends Exact<InferSelectType<Mutation["paymentTermsCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["paymentTermsCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentTermsCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.
     */
    public async paymentTermsDelete<
        TSelection extends Exact<InferSelectType<Mutation["paymentTermsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["paymentTermsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentTermsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.
     */
    public async paymentTermsUpdate<
        TSelection extends Exact<InferSelectType<Mutation["paymentTermsUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["paymentTermsUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "paymentTermsUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a price list. You can use the `priceListCreate` mutation to create a new price list and associate it with a catalog. This enables you to sell your products with contextual pricing.
     */
    public async priceListCreate<
        TSelection extends Exact<InferSelectType<Mutation["priceListCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["priceListCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.
     */
    public async priceListDelete<
        TSelection extends Exact<InferSelectType<Mutation["priceListDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["priceListDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates fixed prices on a price list. You can use the `priceListFixedPricesAdd` mutation to set a fixed price for specific product variants. This lets you change product variant pricing on a per country basis. Any existing fixed price list prices for these variants will be overwritten.
     */
    public async priceListFixedPricesAdd<
        TSelection extends Exact<InferSelectType<Mutation["priceListFixedPricesAdd"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["priceListFixedPricesAdd"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListFixedPricesAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the fixed prices for all variants for a product on a price list. You can use the `priceListFixedPricesByProductUpdate` mutation to set or remove a fixed price for all variants of a product associated with the price list.
     */
    public async priceListFixedPricesByProductUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["priceListFixedPricesByProductUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["priceListFixedPricesByProductUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListFixedPricesByProductUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.
     */
    public async priceListFixedPricesDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["priceListFixedPricesDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["priceListFixedPricesDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListFixedPricesDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates fixed prices on a price list. You can use the `priceListFixedPricesUpdate` mutation to set a fixed price for specific product variants or to delete prices for variants associated with the price list.
     */
    public async priceListFixedPricesUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["priceListFixedPricesUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["priceListFixedPricesUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListFixedPricesUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a price list.
     * If you modify the currency, then any fixed prices set on the price list will be deleted.
     */
    public async priceListUpdate<
        TSelection extends Exact<InferSelectType<Mutation["priceListUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["priceListUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "priceListUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a private metafield.
     * Private metafields are automatically deleted when the app that created them is uninstalled.
     */
    public async privateMetafieldDelete<
        TSelection extends Exact<InferSelectType<Mutation["privateMetafieldDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["privateMetafieldDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "privateMetafieldDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates a private metafield. Use private metafields when you don't want the metafield data to be accessible by merchants or other apps.
     * Private metafields are accessible only by the application that created them and only from the GraphQL Admin API.
     *
     * An application can create a maximum of 10 private metafields per shop resource.
     */
    public async privateMetafieldUpsert<
        TSelection extends Exact<InferSelectType<Mutation["privateMetafieldUpsert"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["privateMetafieldUpsert"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "privateMetafieldUpsert",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new componentized product.
     */
    public async productBundleCreate<
        TSelection extends Exact<InferSelectType<Mutation["productBundleCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productBundleCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productBundleCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a componentized product.
     */
    public async productBundleUpdate<
        TSelection extends Exact<InferSelectType<Mutation["productBundleUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productBundleUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productBundleUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Changes the status of a product. This allows you to set the availability of the product across all channels.
     */
    public async productChangeStatus<
        TSelection extends Exact<InferSelectType<Mutation["productChangeStatus"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productChangeStatus"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productChangeStatus",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
     * with attributes such as title, description, and vendor.
     * You can use the `productCreate` mutation to define
     * [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and
     * [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue)
     * for products with
     * [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant),
     * such as different sizes or colors.
     *
     * To create multiple product variants for a single product and manage prices, use the
     * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
     * mutation.
     *
     * To create or update a product in a single request, use the
     * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation.
     *
     * Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model)
     * and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).
     */
    public async productCreate<
        TSelection extends Exact<InferSelectType<Mutation["productCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["productCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "productCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates media for a product.
     */
    public async productCreateMedia<
        TSelection extends Exact<InferSelectType<Mutation["productCreateMedia"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productCreateMedia"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productCreateMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a product, including all associated variants and media.
     *
     * As of API version `2023-01`, if you need to delete a large product, such as one that has many
     * [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput)
     * that are active at several
     * [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput),
     * you may encounter timeout errors. To avoid these timeout errors, you can instead use the asynchronous
     * [ProductDeleteAsync](https://shopify.dev/api/admin-graphql/latest/mutations/productDeleteAsync)
     * mutation.
     */
    public async productDelete<
        TSelection extends Exact<InferSelectType<Mutation["productDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["productDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "productDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes media for a product.
     */
    public async productDeleteMedia<
        TSelection extends Exact<InferSelectType<Mutation["productDeleteMedia"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productDeleteMedia"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productDeleteMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Duplicates a product.
     *
     * If you need to duplicate a large product, such as one that has many
     * [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput)
     * that are active at several
     * [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput),
     * you might encounter timeout errors.
     *
     * To avoid these timeout errors, you can instead duplicate the product asynchronously.
     *
     * In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.
     *
     * In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).
     *
     * Metafield values are not duplicated if the unique values capability is enabled.
     */
    public async productDuplicate<
        TSelection extends Exact<InferSelectType<Mutation["productDuplicate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productDuplicate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productDuplicate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a product feed for a specific publication.
     */
    public async productFeedCreate<
        TSelection extends Exact<InferSelectType<Mutation["productFeedCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productFeedCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productFeedCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a product feed for a specific publication.
     */
    public async productFeedDelete<
        TSelection extends Exact<InferSelectType<Mutation["productFeedDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productFeedDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productFeedDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Runs the full product sync for a given shop.
     */
    public async productFullSync<
        TSelection extends Exact<InferSelectType<Mutation["productFullSync"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productFullSync"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productFullSync",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds multiple selling plan groups to a product.
     */
    public async productJoinSellingPlanGroups<
        TSelection extends Exact<
            InferSelectType<Mutation["productJoinSellingPlanGroups"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productJoinSellingPlanGroups"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productJoinSellingPlanGroups",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes multiple groups from a product.
     */
    public async productLeaveSellingPlanGroups<
        TSelection extends Exact<
            InferSelectType<Mutation["productLeaveSellingPlanGroups"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productLeaveSellingPlanGroups"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productLeaveSellingPlanGroups",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a product option.
     */
    public async productOptionUpdate<
        TSelection extends Exact<InferSelectType<Mutation["productOptionUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productOptionUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productOptionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates options on a product.
     */
    public async productOptionsCreate<
        TSelection extends Exact<InferSelectType<Mutation["productOptionsCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productOptionsCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productOptionsCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes the specified options.
     */
    public async productOptionsDelete<
        TSelection extends Exact<InferSelectType<Mutation["productOptionsDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productOptionsDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productOptionsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Reorders options and option values on a product, causing product variants to alter their position.
     *
     * Options order take precedence over option values order. Depending on the existing product variants,
     * some input orders might not be achieved.
     *
     * Example:
     * Existing product variants:
     * ["Red / Small", "Green / Medium", "Blue / Small"].
     *
     * New order:
     * [
     * {
     * name: "Size", values: [{ name: "Small" }, { name: "Medium" }],
     * name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }]
     * }
     * ].
     *
     * Description:
     * Variants with "Green" value are expected to appear before variants with "Red" and "Blue" values.
     * However, "Size" option appears before "Color".
     *
     * Therefore, output will be:
     * ["Small / "Red", "Small / Blue", "Medium / Green"].
     */
    public async productOptionsReorder<
        TSelection extends Exact<InferSelectType<Mutation["productOptionsReorder"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productOptionsReorder"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productOptionsReorder",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Publishes a product. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can only be published on online stores.
     */
    public async productPublish<
        TSelection extends Exact<InferSelectType<Mutation["productPublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productPublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "productPublish", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously reorders the media attached to a product.
     */
    public async productReorderMedia<
        TSelection extends Exact<InferSelectType<Mutation["productReorderMedia"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productReorderMedia"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productReorderMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates a product in a single request.
     *
     * Use this mutation when syncing information from an external data source into Shopify.
     *
     * When using this mutation to update a product, specify that product's `id` in the input.
     *
     * Any list field (e.g.
     * [collections](https://shopify.dev/api/admin-graphql/current/input-objects/ProductSetInput#field-productsetinput-collections),
     * [metafields](https://shopify.dev/api/admin-graphql/current/input-objects/ProductSetInput#field-productsetinput-metafields),
     * [variants](https://shopify.dev/api/admin-graphql/current/input-objects/ProductSetInput#field-productsetinput-variants))
     * will be updated so that all included entries are either created or updated, and all existing entries not
     * included will be deleted.
     *
     * All other fields will be updated to the value passed. Omitted fields will not be updated.
     *
     * When run in synchronous mode, you will get the product back in the response.
     * For versions `2024-04` and earlier, the synchronous mode has an input limit of 100 variants.
     * This limit has been removed for versions `2024-07` and later.
     *
     * In asynchronous mode, you will instead get a
     * [ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation)
     * object back. You can then use the
     * [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query to
     * retrieve the updated product data. This query uses the `ProductSetOperation` object to
     * check the status of the operation and to retrieve the details of the updated product and its variants.
     *
     * If you need to update a subset of variants, use one of the bulk variant mutations:
     * - [productVariantsBulkCreate](https://shopify.dev/api/admin-graphql/current/mutations/productVariantsBulkCreate)
     * - [productVariantsBulkUpdate](https://shopify.dev/api/admin-graphql/current/mutations/productVariantsBulkUpdate)
     * - [productVariantsBulkDelete](https://shopify.dev/api/admin-graphql/current/mutations/productVariantsBulkDelete)
     *
     * If you need to update options, use one of the product option mutations:
     * - [productOptionsCreate](https://shopify.dev/api/admin-graphql/current/mutations/productOptionsCreate)
     * - [productOptionUpdate](https://shopify.dev/api/admin-graphql/current/mutations/productOptionUpdate)
     * - [productOptionsDelete](https://shopify.dev/api/admin-graphql/current/mutations/productOptionsDelete)
     * - [productOptionsReorder](https://shopify.dev/api/admin-graphql/current/mutations/productOptionsReorder)
     *
     * See our guide to
     * [sync product data from an external source](https://shopify.dev/api/admin/migrate/new-product-model/sync-data)
     * for more.
     */
    public async productSet<
        TSelection extends Exact<InferSelectType<Mutation["productSet"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["productSet"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "productSet", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Unpublishes a product.
     */
    public async productUnpublish<
        TSelection extends Exact<InferSelectType<Mutation["productUnpublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productUnpublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productUnpublish",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a product.
     *
     * For versions `2024-01` and older:
     * If you update a product and only include some variants in the update,
     * then any variants not included will be deleted.
     *
     * To safely manage variants without the risk of
     * deleting excluded variants, use
     * [productVariantsBulkUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/productvariantsbulkupdate).
     *
     * If you want to update a single variant, then use
     * [productVariantUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/productvariantupdate).
     */
    public async productUpdate<
        TSelection extends Exact<InferSelectType<Mutation["productUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["productUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "productUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates media for a product.
     */
    public async productUpdateMedia<
        TSelection extends Exact<InferSelectType<Mutation["productUpdateMedia"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["productUpdateMedia"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productUpdateMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Appends media from a product to variants of the product.
     */
    public async productVariantAppendMedia<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantAppendMedia"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantAppendMedia"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantAppendMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Detaches media from product variants.
     */
    public async productVariantDetachMedia<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantDetachMedia"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantDetachMedia"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantDetachMedia",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds multiple selling plan groups to a product variant.
     */
    public async productVariantJoinSellingPlanGroups<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantJoinSellingPlanGroups"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantJoinSellingPlanGroups"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantJoinSellingPlanGroups",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Remove multiple groups from a product variant.
     */
    public async productVariantLeaveSellingPlanGroups<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantLeaveSellingPlanGroups"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantLeaveSellingPlanGroups"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantLeaveSellingPlanGroups",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates new bundles, updates existing bundles, and removes bundle components for one or multiple bundles.
     */
    public async productVariantRelationshipBulkUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantRelationshipBulkUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantRelationshipBulkUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantRelationshipBulkUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates multiple variants in a single product. This mutation can be called directly or via the bulkOperation.
     */
    public async productVariantsBulkCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantsBulkCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantsBulkCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantsBulkCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes multiple variants in a single product. This mutation can be called directly or via the bulkOperation.
     */
    public async productVariantsBulkDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantsBulkDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantsBulkDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantsBulkDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.
     */
    public async productVariantsBulkReorder<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantsBulkReorder"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantsBulkReorder"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantsBulkReorder",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates multiple variants in a single product. This mutation can be called directly or via the bulkOperation.
     */
    public async productVariantsBulkUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["productVariantsBulkUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["productVariantsBulkUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "productVariantsBulkUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates the server pixel to connect to a Google PubSub endpoint.
     * Running this mutation deletes any previous subscriptions for the server pixel.
     */
    public async pubSubServerPixelUpdate<
        TSelection extends Exact<InferSelectType<Mutation["pubSubServerPixelUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["pubSubServerPixelUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "pubSubServerPixelUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new Google Cloud Pub/Sub webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async pubSubWebhookSubscriptionCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["pubSubWebhookSubscriptionCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["pubSubWebhookSubscriptionCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "pubSubWebhookSubscriptionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a Google Cloud Pub/Sub webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async pubSubWebhookSubscriptionUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["pubSubWebhookSubscriptionUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["pubSubWebhookSubscriptionUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "pubSubWebhookSubscriptionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a publication.
     */
    public async publicationCreate<
        TSelection extends Exact<InferSelectType<Mutation["publicationCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["publicationCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publicationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a publication.
     */
    public async publicationDelete<
        TSelection extends Exact<InferSelectType<Mutation["publicationDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["publicationDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publicationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a publication.
     */
    public async publicationUpdate<
        TSelection extends Exact<InferSelectType<Mutation["publicationUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["publicationUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publicationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Publishes a resource to a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.
     */
    public async publishablePublish<
        TSelection extends Exact<InferSelectType<Mutation["publishablePublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["publishablePublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publishablePublish",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Publishes a resource to current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.
     */
    public async publishablePublishToCurrentChannel<
        TSelection extends Exact<
            InferSelectType<Mutation["publishablePublishToCurrentChannel"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["publishablePublishToCurrentChannel"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publishablePublishToCurrentChannel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Unpublishes a resource from a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.
     */
    public async publishableUnpublish<
        TSelection extends Exact<InferSelectType<Mutation["publishableUnpublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["publishableUnpublish"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publishableUnpublish",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.
     */
    public async publishableUnpublishToCurrentChannel<
        TSelection extends Exact<
            InferSelectType<Mutation["publishableUnpublishToCurrentChannel"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["publishableUnpublishToCurrentChannel"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "publishableUnpublishToCurrentChannel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates quantity pricing on a price list. You can use the `quantityPricingByVariantUpdate` mutation to set fixed prices, quantity rules, and quantity price breaks. This mutation does not allow partial successes. If any of the requested resources fail to update, none of the requested resources will be updated. Delete operations are executed before create operations.
     */
    public async quantityPricingByVariantUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["quantityPricingByVariantUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["quantityPricingByVariantUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "quantityPricingByVariantUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates existing quantity rules on a price list.
     * You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.
     */
    public async quantityRulesAdd<
        TSelection extends Exact<InferSelectType<Mutation["quantityRulesAdd"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["quantityRulesAdd"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "quantityRulesAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes specific quantity rules from a price list using a product variant ID.
     * You can use the `quantityRulesDelete` mutation to delete a set of quantity rules from a price list.
     */
    public async quantityRulesDelete<
        TSelection extends Exact<InferSelectType<Mutation["quantityRulesDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["quantityRulesDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "quantityRulesDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a refund.
     */
    public async refundCreate<
        TSelection extends Exact<InferSelectType<Mutation["refundCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["refundCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "refundCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Approves a customer's return request.
     * If this mutation is successful, then the `Return.status` field of the
     * approved return is set to `OPEN`.
     */
    public async returnApproveRequest<
        TSelection extends Exact<InferSelectType<Mutation["returnApproveRequest"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["returnApproveRequest"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "returnApproveRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels a return and restores the items back to being fulfilled.
     * Canceling a return is only available before any work has been done
     * on the return (such as an inspection or refund).
     */
    public async returnCancel<
        TSelection extends Exact<InferSelectType<Mutation["returnCancel"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnCancel"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnCancel", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Indicates a return is complete, either when a refund has been made and items restocked,
     * or simply when it has been marked as returned in the system.
     */
    public async returnClose<
        TSelection extends Exact<InferSelectType<Mutation["returnClose"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnClose"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnClose", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a return.
     */
    public async returnCreate<
        TSelection extends Exact<InferSelectType<Mutation["returnCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Declines a return on an order.
     * When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return.
     * Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.
     */
    public async returnDeclineRequest<
        TSelection extends Exact<InferSelectType<Mutation["returnDeclineRequest"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["returnDeclineRequest"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "returnDeclineRequest",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes return lines from a return.
     */
    public async returnLineItemRemoveFromReturn<
        TSelection extends Exact<
            InferSelectType<Mutation["returnLineItemRemoveFromReturn"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["returnLineItemRemoveFromReturn"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "returnLineItemRemoveFromReturn",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Refunds a return when its status is `OPEN` or `CLOSED` and associates it with the related return request.
     */
    public async returnRefund<
        TSelection extends Exact<InferSelectType<Mutation["returnRefund"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnRefund"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnRefund", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Reopens a closed return.
     */
    public async returnReopen<
        TSelection extends Exact<InferSelectType<Mutation["returnReopen"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnReopen"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnReopen", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * A customer's return request that hasn't been approved or declined.
     * This mutation sets the value of the `Return.status` field to `REQUESTED`.
     * To create a return that has the `Return.status` field set to `OPEN`, use the `returnCreate` mutation.
     */
    public async returnRequest<
        TSelection extends Exact<InferSelectType<Mutation["returnRequest"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["returnRequest"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "returnRequest", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new reverse delivery with associated external shipping information.
     */
    public async reverseDeliveryCreateWithShipping<
        TSelection extends Exact<
            InferSelectType<Mutation["reverseDeliveryCreateWithShipping"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["reverseDeliveryCreateWithShipping"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "reverseDeliveryCreateWithShipping",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a reverse delivery with associated external shipping information.
     */
    public async reverseDeliveryShippingUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["reverseDeliveryShippingUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["reverseDeliveryShippingUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "reverseDeliveryShippingUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Disposes reverse fulfillment order line items.
     */
    public async reverseFulfillmentOrderDispose<
        TSelection extends Exact<
            InferSelectType<Mutation["reverseFulfillmentOrderDispose"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["reverseFulfillmentOrderDispose"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "reverseFulfillmentOrderDispose",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a saved search.
     */
    public async savedSearchCreate<
        TSelection extends Exact<InferSelectType<Mutation["savedSearchCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["savedSearchCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "savedSearchCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a saved search.
     */
    public async savedSearchDelete<
        TSelection extends Exact<InferSelectType<Mutation["savedSearchDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["savedSearchDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "savedSearchDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a saved search.
     */
    public async savedSearchUpdate<
        TSelection extends Exact<InferSelectType<Mutation["savedSearchUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["savedSearchUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "savedSearchUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * <div class="note"><h4>Theme app extensions</h4>
     * <p>Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>
     *
     * <div class="note"><h4>Script tag deprecation</h4>
     * <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>
     *
     *
     * Creates a new script tag.
     */
    public async scriptTagCreate<
        TSelection extends Exact<InferSelectType<Mutation["scriptTagCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["scriptTagCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "scriptTagCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * <div class="note"><h4>Theme app extensions</h4>
     * <p>Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>
     *
     * <div class="note"><h4>Script tag deprecation</h4>
     * <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>
     *
     *
     * Deletes a script tag.
     */
    public async scriptTagDelete<
        TSelection extends Exact<InferSelectType<Mutation["scriptTagDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["scriptTagDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "scriptTagDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * <div class="note"><h4>Theme app extensions</h4>
     * <p>Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>
     *
     * <div class="note"><h4>Script tag deprecation</h4>
     * <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>
     *
     *
     * Updates a script tag.
     */
    public async scriptTagUpdate<
        TSelection extends Exact<InferSelectType<Mutation["scriptTagUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["scriptTagUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "scriptTagUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a segment.
     */
    public async segmentCreate<
        TSelection extends Exact<InferSelectType<Mutation["segmentCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["segmentCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "segmentCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a segment.
     */
    public async segmentDelete<
        TSelection extends Exact<InferSelectType<Mutation["segmentDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["segmentDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "segmentDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a segment.
     */
    public async segmentUpdate<
        TSelection extends Exact<InferSelectType<Mutation["segmentUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["segmentUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "segmentUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds multiple product variants to a selling plan group.
     */
    public async sellingPlanGroupAddProductVariants<
        TSelection extends Exact<
            InferSelectType<Mutation["sellingPlanGroupAddProductVariants"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["sellingPlanGroupAddProductVariants"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupAddProductVariants",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds multiple products to a selling plan group.
     */
    public async sellingPlanGroupAddProducts<
        TSelection extends Exact<
            InferSelectType<Mutation["sellingPlanGroupAddProducts"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["sellingPlanGroupAddProducts"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupAddProducts",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a Selling Plan Group.
     */
    public async sellingPlanGroupCreate<
        TSelection extends Exact<InferSelectType<Mutation["sellingPlanGroupCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["sellingPlanGroupCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete a Selling Plan Group. This does not affect subscription contracts.
     */
    public async sellingPlanGroupDelete<
        TSelection extends Exact<InferSelectType<Mutation["sellingPlanGroupDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["sellingPlanGroupDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes multiple product variants from a selling plan group.
     */
    public async sellingPlanGroupRemoveProductVariants<
        TSelection extends Exact<
            InferSelectType<Mutation["sellingPlanGroupRemoveProductVariants"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["sellingPlanGroupRemoveProductVariants"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupRemoveProductVariants",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes multiple products from a selling plan group.
     */
    public async sellingPlanGroupRemoveProducts<
        TSelection extends Exact<
            InferSelectType<Mutation["sellingPlanGroupRemoveProducts"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["sellingPlanGroupRemoveProducts"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupRemoveProducts",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a Selling Plan Group.
     */
    public async sellingPlanGroupUpdate<
        TSelection extends Exact<InferSelectType<Mutation["sellingPlanGroupUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["sellingPlanGroupUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "sellingPlanGroupUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.
     */
    public async serverPixelCreate<
        TSelection extends Exact<InferSelectType<Mutation["serverPixelCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["serverPixelCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "serverPixelCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes the Server Pixel associated with the current app & shop.
     */
    public async serverPixelDelete<
        TSelection extends Exact<InferSelectType<Mutation["serverPixelDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["serverPixelDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "serverPixelDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a shipping package.
     */
    public async shippingPackageDelete<
        TSelection extends Exact<InferSelectType<Mutation["shippingPackageDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shippingPackageDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shippingPackageDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Set a shipping package as the default.
     * The default shipping package is the one used to calculate shipping costs on checkout.
     */
    public async shippingPackageMakeDefault<
        TSelection extends Exact<
            InferSelectType<Mutation["shippingPackageMakeDefault"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["shippingPackageMakeDefault"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shippingPackageMakeDefault",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a shipping package.
     */
    public async shippingPackageUpdate<
        TSelection extends Exact<InferSelectType<Mutation["shippingPackageUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shippingPackageUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shippingPackageUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a locale for a shop. This also deletes all translations of this locale.
     */
    public async shopLocaleDisable<
        TSelection extends Exact<InferSelectType<Mutation["shopLocaleDisable"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shopLocaleDisable"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopLocaleDisable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a locale for a shop. The newly added locale is in the unpublished state.
     */
    public async shopLocaleEnable<
        TSelection extends Exact<InferSelectType<Mutation["shopLocaleEnable"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shopLocaleEnable"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopLocaleEnable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a locale for a shop.
     */
    public async shopLocaleUpdate<
        TSelection extends Exact<InferSelectType<Mutation["shopLocaleUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shopLocaleUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopLocaleUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a shop policy.
     */
    public async shopPolicyUpdate<
        TSelection extends Exact<InferSelectType<Mutation["shopPolicyUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["shopPolicyUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopPolicyUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if
     * your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.
     *
     * Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.
     *
     * This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.
     *
     * ## Sending feedback on a shop
     *
     * You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.
     *
     * If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.
     *
     * #### Important
     * Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.
     */
    public async shopResourceFeedbackCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["shopResourceFeedbackCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["shopResourceFeedbackCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopResourceFeedbackCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates an alternate currency payout for a Shopify Payments account.
     */
    public async shopifyPaymentsPayoutAlternateCurrencyCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["shopifyPaymentsPayoutAlternateCurrencyCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["shopifyPaymentsPayoutAlternateCurrencyCreate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "shopifyPaymentsPayoutAlternateCurrencyCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Generates the URL and signed paramaters needed to upload an asset to Shopify.
     */
    public async stagedUploadTargetGenerate<
        TSelection extends Exact<
            InferSelectType<Mutation["stagedUploadTargetGenerate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["stagedUploadTargetGenerate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "stagedUploadTargetGenerate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Uploads multiple images.
     */
    public async stagedUploadTargetsGenerate<
        TSelection extends Exact<
            InferSelectType<Mutation["stagedUploadTargetsGenerate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["stagedUploadTargetsGenerate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "stagedUploadTargetsGenerate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates staged upload targets for each input. This is the first step in the upload process.
     * The returned staged upload targets' URL and parameter fields can be used to send a request
     * to upload the file described in the corresponding input.
     *
     * For more information on the upload process, refer to
     * [Upload media to Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).
     */
    public async stagedUploadsCreate<
        TSelection extends Exact<InferSelectType<Mutation["stagedUploadsCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["stagedUploadsCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "stagedUploadsCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates the specified standard metafield definition from its template.
     *
     * Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).
     */
    public async standardMetafieldDefinitionEnable<
        TSelection extends Exact<
            InferSelectType<Mutation["standardMetafieldDefinitionEnable"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["standardMetafieldDefinitionEnable"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "standardMetafieldDefinitionEnable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Enables the specified standard metaobject definition from its template.
     */
    public async standardMetaobjectDefinitionEnable<
        TSelection extends Exact<
            InferSelectType<Mutation["standardMetaobjectDefinitionEnable"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["standardMetaobjectDefinitionEnable"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "standardMetaobjectDefinitionEnable",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a credit transaction that increases the store credit account balance by the given amount.
     * This operation will create an account if one does not already exist.
     * A store credit account owner can hold multiple accounts each with a different currency.
     * Use the most appropriate currency for the given store credit account owner.
     */
    public async storeCreditAccountCredit<
        TSelection extends Exact<InferSelectType<Mutation["storeCreditAccountCredit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["storeCreditAccountCredit"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "storeCreditAccountCredit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a debit transaction that decreases the store credit account balance by the given amount.
     */
    public async storeCreditAccountDebit<
        TSelection extends Exact<InferSelectType<Mutation["storeCreditAccountDebit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["storeCreditAccountDebit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "storeCreditAccountDebit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a storefront access token for use with the [Storefront API](https://shopify.dev/docs/api/storefront).
     *
     * An app can have a maximum of 100 active storefront access tokens for each shop.
     *
     * [Get started with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).
     */
    public async storefrontAccessTokenCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["storefrontAccessTokenCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["storefrontAccessTokenCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "storefrontAccessTokenCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a storefront access token.
     */
    public async storefrontAccessTokenDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["storefrontAccessTokenDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["storefrontAccessTokenDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "storefrontAccessTokenDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new subscription billing attempt. For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).
     */
    public async subscriptionBillingAttemptCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingAttemptCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingAttemptCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingAttemptCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.
     */
    public async subscriptionBillingCycleBulkCharge<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleBulkCharge"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleBulkCharge"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleBulkCharge",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.
     */
    public async subscriptionBillingCycleBulkSearch<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleBulkSearch"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleBulkSearch"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleBulkSearch",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate). For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).
     */
    public async subscriptionBillingCycleCharge<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleCharge"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleCharge"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleCharge",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Commits the updates of a Subscription Billing Cycle Contract draft.
     */
    public async subscriptionBillingCycleContractDraftCommit<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleContractDraftCommit"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["subscriptionBillingCycleContractDraftCommit"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleContractDraftCommit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Concatenates a contract to a Subscription Draft.
     */
    public async subscriptionBillingCycleContractDraftConcatenate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleContractDraftConcatenate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["subscriptionBillingCycleContractDraftConcatenate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleContractDraftConcatenate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Edit the contents of a subscription contract for the specified billing cycle.
     */
    public async subscriptionBillingCycleContractEdit<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleContractEdit"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleContractEdit"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleContractEdit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete the schedule and contract edits of the selected subscription billing cycle.
     */
    public async subscriptionBillingCycleEditDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleEditDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleEditDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleEditDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Delete the current and future schedule and contract edits of a list of subscription billing cycles.
     */
    public async subscriptionBillingCycleEditsDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleEditsDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleEditsDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleEditsDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Modify the schedule of a specific billing cycle.
     */
    public async subscriptionBillingCycleScheduleEdit<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleScheduleEdit"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleScheduleEdit"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleScheduleEdit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Skips a Subscription Billing Cycle.
     */
    public async subscriptionBillingCycleSkip<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleSkip"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleSkip"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleSkip",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Unskips a Subscription Billing Cycle.
     */
    public async subscriptionBillingCycleUnskip<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionBillingCycleUnskip"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionBillingCycleUnskip"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionBillingCycleUnskip",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activates a Subscription Contract. Contract status must be either active, paused, or failed.
     */
    public async subscriptionContractActivate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractActivate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractActivate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractActivate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a Subscription Contract.
     */
    public async subscriptionContractAtomicCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractAtomicCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractAtomicCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractAtomicCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Cancels a Subscription Contract.
     */
    public async subscriptionContractCancel<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractCancel"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractCancel"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractCancel",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a Subscription Contract Draft.
     * You can submit all the desired information for the draft using [Subscription Draft Input object](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput).
     * You can also update the draft using the [Subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate) mutation.
     * The draft is not saved until you call the [Subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) mutation.
     */
    public async subscriptionContractCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Expires a Subscription Contract.
     */
    public async subscriptionContractExpire<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractExpire"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractExpire"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractExpire",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Fails a Subscription Contract.
     */
    public async subscriptionContractFail<
        TSelection extends Exact<InferSelectType<Mutation["subscriptionContractFail"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractFail"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractFail",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Pauses a Subscription Contract.
     */
    public async subscriptionContractPause<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractPause"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractPause"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractPause",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Allows for the easy change of a Product in a Contract or a Product price change.
     */
    public async subscriptionContractProductChange<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractProductChange"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractProductChange"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractProductChange",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Sets the next billing date of a Subscription Contract. This field is managed by the apps.
     * Alternatively you can utilize our
     * [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles),
     * which provide auto-computed billing dates and additional functionalities.
     */
    public async subscriptionContractSetNextBillingDate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractSetNextBillingDate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractSetNextBillingDate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractSetNextBillingDate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * The subscriptionContractUpdate mutation allows you to create a draft of an existing subscription contract. This [draft](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionDraft) can be reviewed and modified as needed. Once the draft is committed with [subscriptionDraftCommit](https://shopify.dev/api/admin-graphql/latest/mutations/subscriptionDraftCommit), the changes are applied to the original subscription contract.
     */
    public async subscriptionContractUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionContractUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionContractUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionContractUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Commits the updates of a Subscription Contract draft.
     */
    public async subscriptionDraftCommit<
        TSelection extends Exact<InferSelectType<Mutation["subscriptionDraftCommit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["subscriptionDraftCommit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftCommit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a subscription discount to a subscription draft.
     */
    public async subscriptionDraftDiscountAdd<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftDiscountAdd"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftDiscountAdd"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftDiscountAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Applies a code discount on the subscription draft.
     */
    public async subscriptionDraftDiscountCodeApply<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftDiscountCodeApply"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftDiscountCodeApply"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftDiscountCodeApply",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a subscription discount from a subscription draft.
     */
    public async subscriptionDraftDiscountRemove<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftDiscountRemove"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftDiscountRemove"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftDiscountRemove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a subscription discount on a subscription draft.
     */
    public async subscriptionDraftDiscountUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftDiscountUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftDiscountUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftDiscountUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a subscription free shipping discount to a subscription draft.
     */
    public async subscriptionDraftFreeShippingDiscountAdd<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftFreeShippingDiscountAdd"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["subscriptionDraftFreeShippingDiscountAdd"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftFreeShippingDiscountAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a subscription free shipping discount on a subscription draft.
     */
    public async subscriptionDraftFreeShippingDiscountUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftFreeShippingDiscountUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<
                Mutation["subscriptionDraftFreeShippingDiscountUpdate"],
                TSelection
            >
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftFreeShippingDiscountUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Adds a subscription line to a subscription draft.
     */
    public async subscriptionDraftLineAdd<
        TSelection extends Exact<InferSelectType<Mutation["subscriptionDraftLineAdd"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftLineAdd"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftLineAdd",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Removes a subscription line from a subscription draft.
     */
    public async subscriptionDraftLineRemove<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftLineRemove"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftLineRemove"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftLineRemove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a subscription line on a subscription draft.
     */
    public async subscriptionDraftLineUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["subscriptionDraftLineUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["subscriptionDraftLineUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftLineUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a Subscription Draft.
     */
    public async subscriptionDraftUpdate<
        TSelection extends Exact<InferSelectType<Mutation["subscriptionDraftUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["subscriptionDraftUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "subscriptionDraftUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Add tags to an order, a draft order, a customer, a product, or an online store article.
     */
    public async tagsAdd<
        TSelection extends Exact<InferSelectType<Mutation["tagsAdd"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["tagsAdd"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "tagsAdd", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Remove tags from an order, a draft order, a customer, a product, or an online store article.
     */
    public async tagsRemove<
        TSelection extends Exact<InferSelectType<Mutation["tagsRemove"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["tagsRemove"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "tagsRemove", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Allows tax app configurations for tax partners.
     */
    public async taxAppConfigure<
        TSelection extends Exact<InferSelectType<Mutation["taxAppConfigure"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["taxAppConfigure"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "taxAppConfigure",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a theme using an external URL or for files that were previously uploaded using the
     * [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).
     * These themes are added to the [Themes page](https://admin.shopify.com/themes) in Shopify admin.
     */
    public async themeCreate<
        TSelection extends Exact<InferSelectType<Mutation["themeCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["themeCreate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "themeCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a theme.
     */
    public async themeDelete<
        TSelection extends Exact<InferSelectType<Mutation["themeDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["themeDelete"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "themeDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Copy theme files. Copying to existing theme files will overwrite them.
     */
    public async themeFilesCopy<
        TSelection extends Exact<InferSelectType<Mutation["themeFilesCopy"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["themeFilesCopy"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "themeFilesCopy", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a theme's files.
     */
    public async themeFilesDelete<
        TSelection extends Exact<InferSelectType<Mutation["themeFilesDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["themeFilesDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "themeFilesDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Create or update theme files.
     */
    public async themeFilesUpsert<
        TSelection extends Exact<InferSelectType<Mutation["themeFilesUpsert"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["themeFilesUpsert"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "themeFilesUpsert",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Publishes a theme.
     */
    public async themePublish<
        TSelection extends Exact<InferSelectType<Mutation["themePublish"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["themePublish"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "themePublish", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a theme.
     */
    public async themeUpdate<
        TSelection extends Exact<InferSelectType<Mutation["themeUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<GraphQLApiResponse<InferSelectedReturnType<Mutation["themeUpdate"], TSelection>>> {
        const generatedMutation = buildGraphQLOperation("mutation", "themeUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Trigger the voiding of an uncaptured authorization transaction.
     */
    public async transactionVoid<
        TSelection extends Exact<InferSelectType<Mutation["transactionVoid"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["transactionVoid"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "transactionVoid",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates or updates translations.
     */
    public async translationsRegister<
        TSelection extends Exact<InferSelectType<Mutation["translationsRegister"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["translationsRegister"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "translationsRegister",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes translations.
     */
    public async translationsRemove<
        TSelection extends Exact<InferSelectType<Mutation["translationsRemove"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["translationsRemove"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "translationsRemove",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.
     */
    public async urlRedirectBulkDeleteAll<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectBulkDeleteAll"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["urlRedirectBulkDeleteAll"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectBulkDeleteAll",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
     * objects in bulk by IDs.
     * Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)
     * objects.
     */
    public async urlRedirectBulkDeleteByIds<
        TSelection extends Exact<
            InferSelectType<Mutation["urlRedirectBulkDeleteByIds"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["urlRedirectBulkDeleteByIds"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectBulkDeleteByIds",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete redirects in bulk.
     */
    public async urlRedirectBulkDeleteBySavedSearch<
        TSelection extends Exact<
            InferSelectType<Mutation["urlRedirectBulkDeleteBySavedSearch"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["urlRedirectBulkDeleteBySavedSearch"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectBulkDeleteBySavedSearch",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Asynchronously delete redirects in bulk.
     */
    public async urlRedirectBulkDeleteBySearch<
        TSelection extends Exact<
            InferSelectType<Mutation["urlRedirectBulkDeleteBySearch"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["urlRedirectBulkDeleteBySearch"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectBulkDeleteBySearch",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.
     */
    public async urlRedirectCreate<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["urlRedirectCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.
     */
    public async urlRedirectDelete<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["urlRedirectDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.
     *
     * After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.
     */
    public async urlRedirectImportCreate<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectImportCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["urlRedirectImportCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectImportCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Submits a `UrlRedirectImport` request to be processed.
     *
     * The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.
     */
    public async urlRedirectImportSubmit<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectImportSubmit"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["urlRedirectImportSubmit"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectImportSubmit",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a URL redirect.
     */
    public async urlRedirectUpdate<
        TSelection extends Exact<InferSelectType<Mutation["urlRedirectUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["urlRedirectUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "urlRedirectUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a validation.
     */
    public async validationCreate<
        TSelection extends Exact<InferSelectType<Mutation["validationCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["validationCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "validationCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a validation.
     */
    public async validationDelete<
        TSelection extends Exact<InferSelectType<Mutation["validationDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["validationDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "validationDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Update a validation.
     */
    public async validationUpdate<
        TSelection extends Exact<InferSelectType<Mutation["validationUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["validationUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "validationUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
     * by creating a web pixel record on the store where you installed your app.
     *
     * When you run the `webPixelCreate` mutation, Shopify validates it
     * against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match
     * the schema that you defined, then the mutation fails. Learn how to
     * define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).
     */
    public async webPixelCreate<
        TSelection extends Exact<InferSelectType<Mutation["webPixelCreate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["webPixelCreate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "webPixelCreate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes the web pixel shop settings.
     */
    public async webPixelDelete<
        TSelection extends Exact<InferSelectType<Mutation["webPixelDelete"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["webPixelDelete"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "webPixelDelete", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
     * by updating a web pixel record on the store where you installed your app.
     *
     * When you run the `webPixelUpdate` mutation, Shopify validates it
     * against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match
     * the schema that you defined, then the mutation fails. Learn how to
     * define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).
     */
    public async webPixelUpdate<
        TSelection extends Exact<InferSelectType<Mutation["webPixelUpdate"]>, TSelection>,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<InferSelectedReturnType<Mutation["webPixelUpdate"], TSelection>>
    > {
        const generatedMutation = buildGraphQLOperation("mutation", "webPixelUpdate", mutationArgs);
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Creates a new webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async webhookSubscriptionCreate<
        TSelection extends Exact<
            InferSelectType<Mutation["webhookSubscriptionCreate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["webhookSubscriptionCreate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "webhookSubscriptionCreate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Deletes a webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async webhookSubscriptionDelete<
        TSelection extends Exact<
            InferSelectType<Mutation["webhookSubscriptionDelete"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["webhookSubscriptionDelete"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "webhookSubscriptionDelete",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }

    /**
     * Updates a webhook subscription.
     *
     * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
     */
    public async webhookSubscriptionUpdate<
        TSelection extends Exact<
            InferSelectType<Mutation["webhookSubscriptionUpdate"]>,
            TSelection
        >,
    >(
        mutationArgs: TSelection
    ): Promise<
        GraphQLApiResponse<
            InferSelectedReturnType<Mutation["webhookSubscriptionUpdate"], TSelection>
        >
    > {
        const generatedMutation = buildGraphQLOperation(
            "mutation",
            "webhookSubscriptionUpdate",
            mutationArgs
        );
        return await sendRequest(this.config, generatedMutation);
    }
}

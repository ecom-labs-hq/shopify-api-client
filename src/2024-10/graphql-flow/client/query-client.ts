
import { sendRequest } from "../runtime/send-request.js";
import { buildGraphQLOperation } from "../runtime/build-operation.js";

import type { GraphQLApiResponse, GraphQLFlowClientConfig, InferSelectType, InferSelectedReturnType } from "../runtime/types.js";
import type { QueryRoot } from "../types/types.js";
import type { Exact } from "type-fest";

export class GraphQLFlowQueryClient {
    private readonly config;

    public constructor(config: GraphQLFlowClientConfig) {
        this.config = config;
    }

/**
 * List of abandoned checkouts. Includes checkouts that were recovered after being abandoned.
 */
public async abandonedCheckouts<TSelection extends Exact<InferSelectType<QueryRoot["abandonedCheckouts"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["abandonedCheckouts"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "abandonedCheckouts", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the count of abandoned checkouts for the given shop. Limited to a maximum of 10000.
 */
public async abandonedCheckoutsCount<TSelection extends Exact<InferSelectType<QueryRoot["abandonedCheckoutsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["abandonedCheckoutsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "abandonedCheckoutsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an abandonment by ID.
 */
public async abandonment<TSelection extends Exact<InferSelectType<QueryRoot["abandonment"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["abandonment"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "abandonment", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an Abandonment by the Abandoned Checkout ID.
 */
public async abandonmentByAbandonedCheckoutId<TSelection extends Exact<InferSelectType<QueryRoot["abandonmentByAbandonedCheckoutId"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["abandonmentByAbandonedCheckoutId"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "abandonmentByAbandonedCheckoutId", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup an App by ID or return the currently authenticated App.
 */
public async app<TSelection extends Exact<InferSelectType<QueryRoot["app"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["app"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "app", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Fetches app by handle.
 * Returns null if the app doesn't exist.
 */
public async appByHandle<TSelection extends Exact<InferSelectType<QueryRoot["appByHandle"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appByHandle"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appByHandle", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Fetches an app by its client ID.
 * Returns null if the app doesn't exist.
 */
public async appByKey<TSelection extends Exact<InferSelectType<QueryRoot["appByKey"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appByKey"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appByKey", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * An app discount type.
 */
public async appDiscountType<TSelection extends Exact<InferSelectType<QueryRoot["appDiscountType"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appDiscountType"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appDiscountType", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of app discount types installed by apps.
 */
public async appDiscountTypes<TSelection extends Exact<InferSelectType<QueryRoot["appDiscountTypes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appDiscountTypes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appDiscountTypes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App.
 */
public async appInstallation<TSelection extends Exact<InferSelectType<QueryRoot["appInstallation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appInstallation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appInstallation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of app installations. To use this query, you need to contact [Shopify Support](https://partners.shopify.com/current/support/) to grant your custom app the `read_apps` access scope. Public apps can't be granted this access scope.
 */
public async appInstallations<TSelection extends Exact<InferSelectType<QueryRoot["appInstallations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["appInstallations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "appInstallations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an Article resource by ID.
 */
public async article<TSelection extends Exact<InferSelectType<QueryRoot["article"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["article"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "article", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of all article tags.
 */
public async articleTags<TSelection extends Exact<InferSelectType<QueryRoot["articleTags"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["articleTags"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "articleTags", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's articles.
 */
public async articles<TSelection extends Exact<InferSelectType<QueryRoot["articles"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["articles"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "articles", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The paginated list of fulfillment orders assigned to the shop locations owned by the app.
 *
 * Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations
 * managed by
 * [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
 * that are registered by the app.
 * One app (api_client) can host multiple fulfillment services on a shop.
 * Each fulfillment service manages a dedicated location on a shop.
 * Assigned fulfillment orders can have associated
 * [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus),
 * or might currently not be requested to be fulfilled.
 *
 * The app must have the `read_assigned_fulfillment_orders`
 * [access scope](https://shopify.dev/docs/api/usage/access-scopes)
 * to be able to retrieve the fulfillment orders assigned to its locations.
 *
 * All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default.
 * Perform filtering with the `assignmentStatus` argument
 * to receive only fulfillment orders that have been requested to be fulfilled.
 */
public async assignedFulfillmentOrders<TSelection extends Exact<InferSelectType<QueryRoot["assignedFulfillmentOrders"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["assignedFulfillmentOrders"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "assignedFulfillmentOrders", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an automatic discount resource by ID.
 */
public async automaticDiscount<TSelection extends Exact<InferSelectType<QueryRoot["automaticDiscount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["automaticDiscount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "automaticDiscount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an automatic discount resource by ID.
 */
public async automaticDiscountNode<TSelection extends Exact<InferSelectType<QueryRoot["automaticDiscountNode"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["automaticDiscountNode"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "automaticDiscountNode", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).
 */
public async automaticDiscountNodes<TSelection extends Exact<InferSelectType<QueryRoot["automaticDiscountNodes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["automaticDiscountNodes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "automaticDiscountNodes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's automatic discount saved searches.
 */
public async automaticDiscountSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["automaticDiscountSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["automaticDiscountSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "automaticDiscountSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of automatic discounts.
 */
public async automaticDiscounts<TSelection extends Exact<InferSelectType<QueryRoot["automaticDiscounts"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["automaticDiscounts"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "automaticDiscounts", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of activated carrier services and associated shop locations that support them.
 */
public async availableCarrierServices<TSelection extends Exact<InferSelectType<QueryRoot["availableCarrierServices"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["availableCarrierServices"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "availableCarrierServices", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of available locales.
 */
public async availableLocales<TSelection extends Exact<InferSelectType<QueryRoot["availableLocales"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["availableLocales"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "availableLocales", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Blog resource by ID.
 */
public async blog<TSelection extends Exact<InferSelectType<QueryRoot["blog"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["blog"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "blog", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's blogs.
 */
public async blogs<TSelection extends Exact<InferSelectType<QueryRoot["blogs"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["blogs"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "blogs", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of blogs.
 */
public async blogsCount<TSelection extends Exact<InferSelectType<QueryRoot["blogsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["blogsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "blogsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of Business Entities associated with the shop.
 */
public async businessEntities<TSelection extends Exact<InferSelectType<QueryRoot["businessEntities"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["businessEntities"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "businessEntities", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Business Entity by ID.
 */
public async businessEntity<TSelection extends Exact<InferSelectType<QueryRoot["businessEntity"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["businessEntity"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "businessEntity", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `DeliveryCarrierService` object by ID.
 */
public async carrierService<TSelection extends Exact<InferSelectType<QueryRoot["carrierService"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["carrierService"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "carrierService", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Retrieve a list of CarrierServices.
 */
public async carrierServices<TSelection extends Exact<InferSelectType<QueryRoot["carrierServices"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["carrierServices"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "carrierServices", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of Cart transform objects owned by the current API client.
 */
public async cartTransforms<TSelection extends Exact<InferSelectType<QueryRoot["cartTransforms"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["cartTransforms"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "cartTransforms", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a cash tracking session by ID.
 */
public async cashTrackingSession<TSelection extends Exact<InferSelectType<QueryRoot["cashTrackingSession"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["cashTrackingSession"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "cashTrackingSession", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a shop's cash tracking sessions for locations with a POS Pro subscription.
 *
 * Tip: To query for cash tracking sessions in bulk, you can
 * [perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).
 */
public async cashTrackingSessions<TSelection extends Exact<InferSelectType<QueryRoot["cashTrackingSessions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["cashTrackingSessions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "cashTrackingSessions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Catalog resource by ID.
 */
public async catalog<TSelection extends Exact<InferSelectType<QueryRoot["catalog"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["catalog"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "catalog", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the most recent catalog operations for the shop.
 */
public async catalogOperations<TSelection extends Exact<InferSelectType<QueryRoot["catalogOperations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["catalogOperations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "catalogOperations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The catalogs belonging to the shop.
 */
public async catalogs<TSelection extends Exact<InferSelectType<QueryRoot["catalogs"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["catalogs"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "catalogs", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The count of catalogs belonging to the shop. Limited to a maximum of 10000.
 */
public async catalogsCount<TSelection extends Exact<InferSelectType<QueryRoot["catalogsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["catalogsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "catalogsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a channel by ID.
 */
public async channel<TSelection extends Exact<InferSelectType<QueryRoot["channel"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["channel"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "channel", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the active sales channels.
 */
public async channels<TSelection extends Exact<InferSelectType<QueryRoot["channels"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["channels"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "channels", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the visual customizations for checkout for a given checkout profile.
 *
 * To learn more about updating checkout branding settings, refer to the
 * [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert)
 * mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).
 */
public async checkoutBranding<TSelection extends Exact<InferSelectType<QueryRoot["checkoutBranding"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["checkoutBranding"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "checkoutBranding", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A checkout profile on a shop.
 */
public async checkoutProfile<TSelection extends Exact<InferSelectType<QueryRoot["checkoutProfile"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["checkoutProfile"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "checkoutProfile", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of checkout profiles on a shop.
 */
public async checkoutProfiles<TSelection extends Exact<InferSelectType<QueryRoot["checkoutProfiles"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["checkoutProfiles"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "checkoutProfiles", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.
 */
public async codeDiscountNode<TSelection extends Exact<InferSelectType<QueryRoot["codeDiscountNode"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["codeDiscountNode"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "codeDiscountNode", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a code discount identified by its discount code.
 */
public async codeDiscountNodeByCode<TSelection extends Exact<InferSelectType<QueryRoot["codeDiscountNodeByCode"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["codeDiscountNodeByCode"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "codeDiscountNodeByCode", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes).
 */
public async codeDiscountNodes<TSelection extends Exact<InferSelectType<QueryRoot["codeDiscountNodes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["codeDiscountNodes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "codeDiscountNodes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's code discount saved searches.
 */
public async codeDiscountSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["codeDiscountSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["codeDiscountSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "codeDiscountSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Collection resource by ID.
 */
public async collection<TSelection extends Exact<InferSelectType<QueryRoot["collection"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collection"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collection", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Return a collection by its handle.
 */
public async collectionByHandle<TSelection extends Exact<InferSelectType<QueryRoot["collectionByHandle"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collectionByHandle"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collectionByHandle", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lists all rules that can be used to create smart collections.
 */
public async collectionRulesConditions<TSelection extends Exact<InferSelectType<QueryRoot["collectionRulesConditions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collectionRulesConditions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collectionRulesConditions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of the shop's collection saved searches.
 */
public async collectionSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["collectionSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collectionSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collectionSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of collections.
 */
public async collections<TSelection extends Exact<InferSelectType<QueryRoot["collections"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collections"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collections", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of collections. Limited to a maximum of 10000.
 */
public async collectionsCount<TSelection extends Exact<InferSelectType<QueryRoot["collectionsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["collectionsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "collectionsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Comment resource by ID.
 */
public async comment<TSelection extends Exact<InferSelectType<QueryRoot["comment"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["comment"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "comment", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's comments.
 */
public async comments<TSelection extends Exact<InferSelectType<QueryRoot["comments"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["comments"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "comments", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the list of companies in the shop.
 */
public async companies<TSelection extends Exact<InferSelectType<QueryRoot["companies"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companies"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companies", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The number of companies for a shop.
 */
public async companiesCount<TSelection extends Exact<InferSelectType<QueryRoot["companiesCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companiesCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companiesCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `Company` object by ID.
 */
public async company<TSelection extends Exact<InferSelectType<QueryRoot["company"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["company"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "company", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `CompanyContact` object by ID.
 */
public async companyContact<TSelection extends Exact<InferSelectType<QueryRoot["companyContact"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companyContact"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companyContact", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `CompanyContactRole` object by ID.
 */
public async companyContactRole<TSelection extends Exact<InferSelectType<QueryRoot["companyContactRole"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companyContactRole"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companyContactRole", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `CompanyLocation` object by ID.
 */
public async companyLocation<TSelection extends Exact<InferSelectType<QueryRoot["companyLocation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companyLocation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companyLocation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the list of company locations in the shop.
 */
public async companyLocations<TSelection extends Exact<InferSelectType<QueryRoot["companyLocations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["companyLocations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "companyLocations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Return the AppInstallation for the currently authenticated App.
 */
public async currentAppInstallation<TSelection extends Exact<InferSelectType<QueryRoot["currentAppInstallation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["currentAppInstallation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "currentAppInstallation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the current app's most recent BulkOperation. Apps can run one bulk query and one bulk mutation operation at a time, by shop.
 */
public async currentBulkOperation<TSelection extends Exact<InferSelectType<QueryRoot["currentBulkOperation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["currentBulkOperation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "currentBulkOperation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The staff member making the API request.
 */
public async currentStaffMember<TSelection extends Exact<InferSelectType<QueryRoot["currentStaffMember"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["currentStaffMember"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "currentStaffMember", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Customer resource by ID.
 */
public async customer<TSelection extends Exact<InferSelectType<QueryRoot["customer"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customer"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customer", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a customer account page.
 */
public async customerAccountPage<TSelection extends Exact<InferSelectType<QueryRoot["customerAccountPage"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerAccountPage"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerAccountPage", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's customer account pages.
 */
public async customerAccountPages<TSelection extends Exact<InferSelectType<QueryRoot["customerAccountPages"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerAccountPages"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerAccountPages", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the status of a customer merge request job.
 */
public async customerMergeJobStatus<TSelection extends Exact<InferSelectType<QueryRoot["customerMergeJobStatus"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerMergeJobStatus"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerMergeJobStatus", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a preview of a customer merge request.
 */
public async customerMergePreview<TSelection extends Exact<InferSelectType<QueryRoot["customerMergePreview"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerMergePreview"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerMergePreview", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a CustomerPaymentMethod resource by its ID.
 */
public async customerPaymentMethod<TSelection extends Exact<InferSelectType<QueryRoot["customerPaymentMethod"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerPaymentMethod"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerPaymentMethod", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The list of members, such as customers, that's associated with an individual segment.
 * The maximum page size is 1000.
 */
public async customerSegmentMembers<TSelection extends Exact<InferSelectType<QueryRoot["customerSegmentMembers"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerSegmentMembers"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerSegmentMembers", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a segment members query resource by ID.
 */
public async customerSegmentMembersQuery<TSelection extends Exact<InferSelectType<QueryRoot["customerSegmentMembersQuery"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerSegmentMembersQuery"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerSegmentMembersQuery", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Whether a member, which is a customer, belongs to a segment.
 */
public async customerSegmentMembership<TSelection extends Exact<InferSelectType<QueryRoot["customerSegmentMembership"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customerSegmentMembership"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customerSegmentMembership", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of customers.
 */
public async customers<TSelection extends Exact<InferSelectType<QueryRoot["customers"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customers"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customers", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The number of customers.
 */
public async customersCount<TSelection extends Exact<InferSelectType<QueryRoot["customersCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["customersCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "customersCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The paginated list of deletion events.
 */
public async deletionEvents<TSelection extends Exact<InferSelectType<QueryRoot["deletionEvents"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deletionEvents"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deletionEvents", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The delivery customization.
 */
public async deliveryCustomization<TSelection extends Exact<InferSelectType<QueryRoot["deliveryCustomization"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliveryCustomization"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliveryCustomization", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The delivery customizations.
 */
public async deliveryCustomizations<TSelection extends Exact<InferSelectType<QueryRoot["deliveryCustomizations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliveryCustomizations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliveryCustomizations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Delivery Profile resource by ID.
 */
public async deliveryProfile<TSelection extends Exact<InferSelectType<QueryRoot["deliveryProfile"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliveryProfile"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliveryProfile", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of saved delivery profiles.
 */
public async deliveryProfiles<TSelection extends Exact<InferSelectType<QueryRoot["deliveryProfiles"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliveryProfiles"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliveryProfiles", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a delivery promise provider.
 */
public async deliveryPromiseProvider<TSelection extends Exact<InferSelectType<QueryRoot["deliveryPromiseProvider"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliveryPromiseProvider"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliveryPromiseProvider", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the shop-wide shipping settings.
 */
public async deliverySettings<TSelection extends Exact<InferSelectType<QueryRoot["deliverySettings"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["deliverySettings"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "deliverySettings", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The total number of discount codes for the shop.
 */
public async discountCodesCount<TSelection extends Exact<InferSelectType<QueryRoot["discountCodesCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountCodesCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountCodesCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a discount resource by ID.
 */
public async discountNode<TSelection extends Exact<InferSelectType<QueryRoot["discountNode"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountNode"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountNode", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of discounts.
 */
public async discountNodes<TSelection extends Exact<InferSelectType<QueryRoot["discountNodes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountNodes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountNodes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The total number of discounts for the shop. Limited to a maximum of 10000.
 */
public async discountNodesCount<TSelection extends Exact<InferSelectType<QueryRoot["discountNodesCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountNodesCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountNodesCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a bulk code creation resource by ID.
 */
public async discountRedeemCodeBulkCreation<TSelection extends Exact<InferSelectType<QueryRoot["discountRedeemCodeBulkCreation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountRedeemCodeBulkCreation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountRedeemCodeBulkCreation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's redeemed discount code saved searches.
 */
public async discountRedeemCodeSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["discountRedeemCodeSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["discountRedeemCodeSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "discountRedeemCodeSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns dispute details based on ID.
 */
public async dispute<TSelection extends Exact<InferSelectType<QueryRoot["dispute"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["dispute"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "dispute", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns dispute evidence details based on ID.
 */
public async disputeEvidence<TSelection extends Exact<InferSelectType<QueryRoot["disputeEvidence"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["disputeEvidence"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "disputeEvidence", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * All disputes related to the Shop.
 */
public async disputes<TSelection extends Exact<InferSelectType<QueryRoot["disputes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["disputes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "disputes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a Domain by ID.
 */
public async domain<TSelection extends Exact<InferSelectType<QueryRoot["domain"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["domain"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "domain", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a DraftOrder resource by ID.
 */
public async draftOrder<TSelection extends Exact<InferSelectType<QueryRoot["draftOrder"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["draftOrder"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "draftOrder", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's draft order saved searches.
 */
public async draftOrderSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["draftOrderSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["draftOrderSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "draftOrderSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a DraftOrderTag resource by ID.
 */
public async draftOrderTag<TSelection extends Exact<InferSelectType<QueryRoot["draftOrderTag"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["draftOrderTag"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "draftOrderTag", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of saved draft orders.
 */
public async draftOrders<TSelection extends Exact<InferSelectType<QueryRoot["draftOrders"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["draftOrders"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "draftOrders", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Get a single event by its id.
 */
public async event<TSelection extends Exact<InferSelectType<QueryRoot["event"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["event"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "event", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The paginated list of events associated with the store.
 */
public async events<TSelection extends Exact<InferSelectType<QueryRoot["events"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["events"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "events", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of events. Limited to a maximum of 10000.
 */
public async eventsCount<TSelection extends Exact<InferSelectType<QueryRoot["eventsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["eventsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "eventsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of the shop's file saved searches.
 */
public async fileSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["fileSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fileSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fileSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a paginated list of files that have been uploaded to Shopify.
 */
public async files<TSelection extends Exact<InferSelectType<QueryRoot["files"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["files"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "files", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Fulfillment resource by ID.
 */
public async fulfillment<TSelection extends Exact<InferSelectType<QueryRoot["fulfillment"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fulfillment"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fulfillment", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The fulfillment constraint rules that belong to a shop.
 */
public async fulfillmentConstraintRules<TSelection extends Exact<InferSelectType<QueryRoot["fulfillmentConstraintRules"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fulfillmentConstraintRules"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fulfillmentConstraintRules", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Fulfillment order resource by ID.
 */
public async fulfillmentOrder<TSelection extends Exact<InferSelectType<QueryRoot["fulfillmentOrder"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fulfillmentOrder"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fulfillmentOrder", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The paginated list of all fulfillment orders.
 * The returned fulfillment orders are filtered according to the
 * [fulfillment order access scopes](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes)
 * granted to the app.
 *
 * Use this query to retrieve fulfillment orders assigned to merchant-managed locations,
 * third-party fulfillment service locations, or all kinds of locations together.
 *
 * For fetching only the fulfillment orders assigned to the app's locations, use the
 * [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders)
 * connection.
 */
public async fulfillmentOrders<TSelection extends Exact<InferSelectType<QueryRoot["fulfillmentOrders"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fulfillmentOrders"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fulfillmentOrders", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a FulfillmentService resource by ID.
 */
public async fulfillmentService<TSelection extends Exact<InferSelectType<QueryRoot["fulfillmentService"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["fulfillmentService"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "fulfillmentService", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a gift card resource by ID.
 */
public async giftCard<TSelection extends Exact<InferSelectType<QueryRoot["giftCard"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["giftCard"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "giftCard", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of gift cards.
 */
public async giftCards<TSelection extends Exact<InferSelectType<QueryRoot["giftCards"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["giftCards"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "giftCards", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The total number of gift cards issued for the shop. Limited to a maximum of 10000.
 */
public async giftCardsCount<TSelection extends Exact<InferSelectType<QueryRoot["giftCardsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["giftCardsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "giftCardsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an
 * [InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)
 * object by ID.
 */
public async inventoryItem<TSelection extends Exact<InferSelectType<QueryRoot["inventoryItem"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["inventoryItem"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "inventoryItem", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of inventory items.
 */
public async inventoryItems<TSelection extends Exact<InferSelectType<QueryRoot["inventoryItems"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["inventoryItems"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "inventoryItems", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an
 * [InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)
 * object by ID.
 */
public async inventoryLevel<TSelection extends Exact<InferSelectType<QueryRoot["inventoryLevel"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["inventoryLevel"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "inventoryLevel", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * General inventory properties for the shop.
 */
public async inventoryProperties<TSelection extends Exact<InferSelectType<QueryRoot["inventoryProperties"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["inventoryProperties"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "inventoryProperties", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.
 */
public async job<TSelection extends Exact<InferSelectType<QueryRoot["job"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["job"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "job", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an inventory Location resource by ID.
 */
public async location<TSelection extends Exact<InferSelectType<QueryRoot["location"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["location"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "location", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of active inventory locations.
 */
public async locations<TSelection extends Exact<InferSelectType<QueryRoot["locations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["locations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "locations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of all origin locations available for a delivery profile.
 */
public async locationsAvailableForDeliveryProfiles<TSelection extends Exact<InferSelectType<QueryRoot["locationsAvailableForDeliveryProfiles"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["locationsAvailableForDeliveryProfiles"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "locationsAvailableForDeliveryProfiles", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of all origin locations available for a delivery profile.
 */
public async locationsAvailableForDeliveryProfilesConnection<TSelection extends Exact<InferSelectType<QueryRoot["locationsAvailableForDeliveryProfilesConnection"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["locationsAvailableForDeliveryProfilesConnection"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "locationsAvailableForDeliveryProfilesConnection", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the count of locations for the given shop. Limited to a maximum of 10000.
 */
public async locationsCount<TSelection extends Exact<InferSelectType<QueryRoot["locationsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["locationsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "locationsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of fulfillment orders that are on hold.
 */
public async manualHoldsFulfillmentOrders<TSelection extends Exact<InferSelectType<QueryRoot["manualHoldsFulfillmentOrders"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["manualHoldsFulfillmentOrders"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "manualHoldsFulfillmentOrders", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a market resource by ID.
 */
public async market<TSelection extends Exact<InferSelectType<QueryRoot["market"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["market"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "market", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the applicable market for a customer based on where they are in the world.
 */
public async marketByGeography<TSelection extends Exact<InferSelectType<QueryRoot["marketByGeography"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketByGeography"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketByGeography", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A resource that can have localized values for different markets.
 */
public async marketLocalizableResource<TSelection extends Exact<InferSelectType<QueryRoot["marketLocalizableResource"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketLocalizableResource"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketLocalizableResource", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Resources that can have localized values for different markets.
 */
public async marketLocalizableResources<TSelection extends Exact<InferSelectType<QueryRoot["marketLocalizableResources"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketLocalizableResources"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketLocalizableResources", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Resources that can have localized values for different markets.
 */
public async marketLocalizableResourcesByIds<TSelection extends Exact<InferSelectType<QueryRoot["marketLocalizableResourcesByIds"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketLocalizableResourcesByIds"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketLocalizableResourcesByIds", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of marketing activities associated with the marketing app.
 */
public async marketingActivities<TSelection extends Exact<InferSelectType<QueryRoot["marketingActivities"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketingActivities"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketingActivities", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a MarketingActivity resource by ID.
 */
public async marketingActivity<TSelection extends Exact<InferSelectType<QueryRoot["marketingActivity"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketingActivity"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketingActivity", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a MarketingEvent resource by ID.
 */
public async marketingEvent<TSelection extends Exact<InferSelectType<QueryRoot["marketingEvent"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketingEvent"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketingEvent", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of marketing events associated with the marketing app.
 */
public async marketingEvents<TSelection extends Exact<InferSelectType<QueryRoot["marketingEvents"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["marketingEvents"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "marketingEvents", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The markets configured for the shop.
 */
public async markets<TSelection extends Exact<InferSelectType<QueryRoot["markets"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["markets"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "markets", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Menu resource by ID.
 */
public async menu<TSelection extends Exact<InferSelectType<QueryRoot["menu"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["menu"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "menu", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The shop's menus.
 */
public async menus<TSelection extends Exact<InferSelectType<QueryRoot["menus"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["menus"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "menus", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a metafield definition by identifier.
 */
public async metafieldDefinition<TSelection extends Exact<InferSelectType<QueryRoot["metafieldDefinition"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metafieldDefinition"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metafieldDefinition", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Each metafield definition has a type, which defines the type of information that it can store.
 * This type is enforced across every instance of the resource that owns the metafield definition.
 *
 * Refer to the [list of supported metafield types](https://shopify.dev/apps/metafields/types).
 */
public async metafieldDefinitionTypes<TSelection extends Exact<InferSelectType<QueryRoot["metafieldDefinitionTypes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metafieldDefinitionTypes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metafieldDefinitionTypes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of metafield definitions.
 */
public async metafieldDefinitions<TSelection extends Exact<InferSelectType<QueryRoot["metafieldDefinitions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metafieldDefinitions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metafieldDefinitions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the `MetafieldStorefrontVisibility` records.
 */
public async metafieldStorefrontVisibilities<TSelection extends Exact<InferSelectType<QueryRoot["metafieldStorefrontVisibilities"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metafieldStorefrontVisibilities"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metafieldStorefrontVisibilities", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a `MetafieldStorefrontVisibility` record by ID. A `MetafieldStorefrontVisibility` record lists the
 * metafields to make visible in the Storefront API.
 */
public async metafieldStorefrontVisibility<TSelection extends Exact<InferSelectType<QueryRoot["metafieldStorefrontVisibility"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metafieldStorefrontVisibility"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metafieldStorefrontVisibility", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Retrieves a metaobject by ID.
 */
public async metaobject<TSelection extends Exact<InferSelectType<QueryRoot["metaobject"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobject"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobject", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Retrieves a metaobject by handle.
 */
public async metaobjectByHandle<TSelection extends Exact<InferSelectType<QueryRoot["metaobjectByHandle"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobjectByHandle"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobjectByHandle", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Retrieves a metaobject definition by ID.
 */
public async metaobjectDefinition<TSelection extends Exact<InferSelectType<QueryRoot["metaobjectDefinition"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobjectDefinition"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobjectDefinition", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Finds a metaobject definition by type.
 */
public async metaobjectDefinitionByType<TSelection extends Exact<InferSelectType<QueryRoot["metaobjectDefinitionByType"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobjectDefinitionByType"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobjectDefinitionByType", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * All metaobject definitions.
 */
public async metaobjectDefinitions<TSelection extends Exact<InferSelectType<QueryRoot["metaobjectDefinitions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobjectDefinitions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobjectDefinitions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * All metaobjects for the shop.
 */
public async metaobjects<TSelection extends Exact<InferSelectType<QueryRoot["metaobjects"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["metaobjects"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "metaobjects", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Return a mobile platform application by its ID.
 */
public async mobilePlatformApplication<TSelection extends Exact<InferSelectType<QueryRoot["mobilePlatformApplication"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["mobilePlatformApplication"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "mobilePlatformApplication", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List the mobile platform applications.
 */
public async mobilePlatformApplications<TSelection extends Exact<InferSelectType<QueryRoot["mobilePlatformApplications"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["mobilePlatformApplications"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "mobilePlatformApplications", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a specific node (any object that implements the
 * [Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node)
 * interface) by ID, in accordance with the
 * [Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification).
 * This field is commonly used for refetching an object.
 */
public async node<TSelection extends Exact<InferSelectType<QueryRoot["node"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["node"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "node", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the list of nodes (any objects that implement the
 * [Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node)
 * interface) with the given IDs, in accordance with the
 * [Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification).
 */
public async nodes<TSelection extends Exact<InferSelectType<QueryRoot["nodes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["nodes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "nodes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The shop's online store channel.
 */
public async onlineStore<TSelection extends Exact<InferSelectType<QueryRoot["onlineStore"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["onlineStore"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "onlineStore", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns an Order resource by ID.
 */
public async order<TSelection extends Exact<InferSelectType<QueryRoot["order"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["order"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "order", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a payment status by payment reference ID. Used to check the status of a deferred payment.
 */
public async orderPaymentStatus<TSelection extends Exact<InferSelectType<QueryRoot["orderPaymentStatus"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["orderPaymentStatus"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "orderPaymentStatus", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's order saved searches.
 */
public async orderSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["orderSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["orderSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "orderSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, customer, and line item details.
 * Use the `orders` query to build reports, analyze sales performance, or automate fulfillment workflows. The `orders` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql),
 * [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-sortkey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query).
 */
public async orders<TSelection extends Exact<InferSelectType<QueryRoot["orders"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["orders"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "orders", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the count of orders for the given shop. Limited to a maximum of 10000.
 */
public async ordersCount<TSelection extends Exact<InferSelectType<QueryRoot["ordersCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["ordersCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "ordersCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Page resource by ID.
 */
public async page<TSelection extends Exact<InferSelectType<QueryRoot["page"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["page"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "page", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of the shop's pages.
 */
public async pages<TSelection extends Exact<InferSelectType<QueryRoot["pages"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["pages"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "pages", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of pages.
 */
public async pagesCount<TSelection extends Exact<InferSelectType<QueryRoot["pagesCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["pagesCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "pagesCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The payment customization.
 */
public async paymentCustomization<TSelection extends Exact<InferSelectType<QueryRoot["paymentCustomization"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["paymentCustomization"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "paymentCustomization", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The payment customizations.
 */
public async paymentCustomizations<TSelection extends Exact<InferSelectType<QueryRoot["paymentCustomizations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["paymentCustomizations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "paymentCustomizations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The list of payment terms templates eligible for all shops and users.
 */
public async paymentTermsTemplates<TSelection extends Exact<InferSelectType<QueryRoot["paymentTermsTemplates"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["paymentTermsTemplates"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "paymentTermsTemplates", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The number of pendings orders. Limited to a maximum of 10000.
 */
public async pendingOrdersCount<TSelection extends Exact<InferSelectType<QueryRoot["pendingOrdersCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["pendingOrdersCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "pendingOrdersCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a price list resource by ID.
 */
public async priceList<TSelection extends Exact<InferSelectType<QueryRoot["priceList"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["priceList"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "priceList", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * All price lists for a shop.
 */
public async priceLists<TSelection extends Exact<InferSelectType<QueryRoot["priceLists"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["priceLists"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "priceLists", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The primary market of the shop.
 */
public async primaryMarket<TSelection extends Exact<InferSelectType<QueryRoot["primaryMarket"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["primaryMarket"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "primaryMarket", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a private metafield by ID.
 * Private metafields are accessible only by the application that created them.
 */
public async privateMetafield<TSelection extends Exact<InferSelectType<QueryRoot["privateMetafield"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["privateMetafield"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "privateMetafield", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of private metafields associated to a resource.
 */
public async privateMetafields<TSelection extends Exact<InferSelectType<QueryRoot["privateMetafields"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["privateMetafields"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "privateMetafields", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Product resource by ID.
 */
public async product<TSelection extends Exact<InferSelectType<QueryRoot["product"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["product"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "product", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Return a product by its handle.
 */
public async productByHandle<TSelection extends Exact<InferSelectType<QueryRoot["productByHandle"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productByHandle"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productByHandle", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the product duplicate job.
 */
public async productDuplicateJob<TSelection extends Exact<InferSelectType<QueryRoot["productDuplicateJob"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productDuplicateJob"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productDuplicateJob", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a ProductFeed resource by ID.
 */
public async productFeed<TSelection extends Exact<InferSelectType<QueryRoot["productFeed"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productFeed"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productFeed", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The product feeds for the shop.
 */
public async productFeeds<TSelection extends Exact<InferSelectType<QueryRoot["productFeeds"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productFeeds"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productFeeds", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a ProductOperation resource by ID.
 *
 * This can be used to query the
 * [ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), using
 * the ID that was returned
 * [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously)
 * by the
 * [ProductSet](https://shopify.dev/api/admin-graphql/current/mutations/productSet) mutation.
 *
 * The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.
 *
 * The `product` field provides the details of the created or updated product.
 *
 * For the
 * [ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), the
 * `userErrors` field provides mutation errors that occurred during the operation.
 */
public async productOperation<TSelection extends Exact<InferSelectType<QueryRoot["productOperation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productOperation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productOperation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the product resource feedback for the currently authenticated app.
 */
public async productResourceFeedback<TSelection extends Exact<InferSelectType<QueryRoot["productResourceFeedback"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productResourceFeedback"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productResourceFeedback", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of the shop's product saved searches.
 */
public async productSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["productSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a ProductVariant resource by ID.
 */
public async productVariant<TSelection extends Exact<InferSelectType<QueryRoot["productVariant"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productVariant"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productVariant", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of product variants.
 */
public async productVariants<TSelection extends Exact<InferSelectType<QueryRoot["productVariants"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productVariants"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productVariants", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of product variants.
 */
public async productVariantsCount<TSelection extends Exact<InferSelectType<QueryRoot["productVariantsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productVariantsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productVariantsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of products.
 */
public async products<TSelection extends Exact<InferSelectType<QueryRoot["products"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["products"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "products", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of products.
 */
public async productsCount<TSelection extends Exact<InferSelectType<QueryRoot["productsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["productsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "productsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions.
 */
public async publicApiVersions<TSelection extends Exact<InferSelectType<QueryRoot["publicApiVersions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["publicApiVersions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "publicApiVersions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a publication by ID.
 */
public async publication<TSelection extends Exact<InferSelectType<QueryRoot["publication"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["publication"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "publication", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of publications.
 */
public async publications<TSelection extends Exact<InferSelectType<QueryRoot["publications"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["publications"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "publications", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of publications.
 */
public async publicationsCount<TSelection extends Exact<InferSelectType<QueryRoot["publicationsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["publicationsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "publicationsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a count of published products by publication ID.
 */
public async publishedProductsCount<TSelection extends Exact<InferSelectType<QueryRoot["publishedProductsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["publishedProductsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "publishedProductsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Refund resource by ID.
 */
public async refund<TSelection extends Exact<InferSelectType<QueryRoot["refund"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["refund"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "refund", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Return resource by ID.
 */
public async return<TSelection extends Exact<InferSelectType<QueryRoot["return"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["return"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "return", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The calculated monetary value to be exchanged due to the return.
 */
public async returnCalculate<TSelection extends Exact<InferSelectType<QueryRoot["returnCalculate"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["returnCalculate"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "returnCalculate", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a returnable fulfillment by ID.
 */
public async returnableFulfillment<TSelection extends Exact<InferSelectType<QueryRoot["returnableFulfillment"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["returnableFulfillment"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "returnableFulfillment", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List of returnable fulfillments.
 */
public async returnableFulfillments<TSelection extends Exact<InferSelectType<QueryRoot["returnableFulfillments"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["returnableFulfillments"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "returnableFulfillments", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a reverse delivery by ID.
 */
public async reverseDelivery<TSelection extends Exact<InferSelectType<QueryRoot["reverseDelivery"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["reverseDelivery"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "reverseDelivery", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Lookup a reverse fulfillment order by ID.
 */
public async reverseFulfillmentOrder<TSelection extends Exact<InferSelectType<QueryRoot["reverseFulfillmentOrder"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["reverseFulfillmentOrder"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "reverseFulfillmentOrder", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * <div class="note"><h4>Theme app extensions</h4>
 * <p>Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>
 *
 * <div class="note"><h4>Script tag deprecation</h4>
 * <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>
 *
 *
 * Lookup a script tag resource by ID.
 */
public async scriptTag<TSelection extends Exact<InferSelectType<QueryRoot["scriptTag"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["scriptTag"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "scriptTag", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * <div class="note"><h4>Theme app extensions</h4>
 * <p>Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>
 *
 * <div class="note"><h4>Script tag deprecation</h4>
 * <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>
 *
 *
 * A list of script tags.
 */
public async scriptTags<TSelection extends Exact<InferSelectType<QueryRoot["scriptTags"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["scriptTags"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "scriptTags", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The Customer Segment.
 */
public async segment<TSelection extends Exact<InferSelectType<QueryRoot["segment"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segment"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segment", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.
 */
public async segmentFilterSuggestions<TSelection extends Exact<InferSelectType<QueryRoot["segmentFilterSuggestions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segmentFilterSuggestions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segmentFilterSuggestions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of filters.
 */
public async segmentFilters<TSelection extends Exact<InferSelectType<QueryRoot["segmentFilters"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segmentFilters"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segmentFilters", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of a shop's segment migrations.
 */
public async segmentMigrations<TSelection extends Exact<InferSelectType<QueryRoot["segmentMigrations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segmentMigrations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segmentMigrations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.
 */
public async segmentValueSuggestions<TSelection extends Exact<InferSelectType<QueryRoot["segmentValueSuggestions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segmentValueSuggestions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segmentValueSuggestions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of a shop's segments.
 */
public async segments<TSelection extends Exact<InferSelectType<QueryRoot["segments"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segments"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segments", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The number of segments for a shop.
 */
public async segmentsCount<TSelection extends Exact<InferSelectType<QueryRoot["segmentsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["segmentsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "segmentsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Selling Plan Group resource by ID.
 */
public async sellingPlanGroup<TSelection extends Exact<InferSelectType<QueryRoot["sellingPlanGroup"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["sellingPlanGroup"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "sellingPlanGroup", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List Selling Plan Groups.
 */
public async sellingPlanGroups<TSelection extends Exact<InferSelectType<QueryRoot["sellingPlanGroups"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["sellingPlanGroups"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "sellingPlanGroups", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The server pixel configured by the app.
 */
public async serverPixel<TSelection extends Exact<InferSelectType<QueryRoot["serverPixel"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["serverPixel"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "serverPixel", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains
 * business and store management settings for the shop.
 */
public async shop<TSelection extends Exact<InferSelectType<QueryRoot["shop"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shop"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shop", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The shop's billing preferences.
 */
public async shopBillingPreferences<TSelection extends Exact<InferSelectType<QueryRoot["shopBillingPreferences"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shopBillingPreferences"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shopBillingPreferences", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of locales available on a shop.
 */
public async shopLocales<TSelection extends Exact<InferSelectType<QueryRoot["shopLocales"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shopLocales"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shopLocales", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Shopify Function by its ID.
 * [Functions](https://shopify.dev/apps/build/functions)
 * enable you to customize Shopify's backend logic at defined parts of the commerce loop.
 */
public async shopifyFunction<TSelection extends Exact<InferSelectType<QueryRoot["shopifyFunction"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shopifyFunction"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shopifyFunction", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns the Shopify Functions owned by the querying API client installed on the shop.
 */
public async shopifyFunctions<TSelection extends Exact<InferSelectType<QueryRoot["shopifyFunctions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shopifyFunctions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shopifyFunctions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Shopify Payments account information, including balances and payouts.
 */
public async shopifyPaymentsAccount<TSelection extends Exact<InferSelectType<QueryRoot["shopifyPaymentsAccount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["shopifyPaymentsAccount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "shopifyPaymentsAccount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The StaffMember resource, by ID.
 */
public async staffMember<TSelection extends Exact<InferSelectType<QueryRoot["staffMember"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["staffMember"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "staffMember", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The shop staff members.
 */
public async staffMembers<TSelection extends Exact<InferSelectType<QueryRoot["staffMembers"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["staffMembers"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "staffMembers", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Standard metafield definitions are intended for specific, common use cases. Their namespace and keys reflect these use cases and are reserved.
 *
 * Refer to all available [`Standard Metafield Definition Templates`](https://shopify.dev/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate).
 */
public async standardMetafieldDefinitionTemplates<TSelection extends Exact<InferSelectType<QueryRoot["standardMetafieldDefinitionTemplates"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["standardMetafieldDefinitionTemplates"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "standardMetafieldDefinitionTemplates", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a store credit account resource by ID.
 */
public async storeCreditAccount<TSelection extends Exact<InferSelectType<QueryRoot["storeCreditAccount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["storeCreditAccount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "storeCreditAccount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a SubscriptionBillingAttempt by ID.
 */
public async subscriptionBillingAttempt<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionBillingAttempt"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionBillingAttempt"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionBillingAttempt", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns subscription billing attempts on a store.
 */
public async subscriptionBillingAttempts<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionBillingAttempts"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionBillingAttempts"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionBillingAttempts", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a subscription billing cycle found either by cycle index or date.
 */
public async subscriptionBillingCycle<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionBillingCycle"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionBillingCycle"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionBillingCycle", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID.
 * This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.
 */
public async subscriptionBillingCycleBulkResults<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionBillingCycleBulkResults"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionBillingCycleBulkResults"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionBillingCycleBulkResults", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns subscription billing cycles for a contract ID.
 */
public async subscriptionBillingCycles<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionBillingCycles"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionBillingCycles"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionBillingCycles", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Subscription Contract resource by ID.
 */
public async subscriptionContract<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionContract"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionContract"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionContract", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * List Subscription Contracts.
 */
public async subscriptionContracts<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionContracts"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionContracts"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionContracts", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a Subscription Draft resource by ID.
 */
public async subscriptionDraft<TSelection extends Exact<InferSelectType<QueryRoot["subscriptionDraft"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["subscriptionDraft"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "subscriptionDraft", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The Taxonomy resource lets you access the categories, attributes and values of the loaded taxonomy tree.
 */
public async taxonomy<TSelection extends Exact<InferSelectType<QueryRoot["taxonomy"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["taxonomy"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "taxonomy", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of TenderTransactions associated with the shop.
 */
public async tenderTransactions<TSelection extends Exact<InferSelectType<QueryRoot["tenderTransactions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["tenderTransactions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "tenderTransactions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a particular theme for the shop.
 */
public async theme<TSelection extends Exact<InferSelectType<QueryRoot["theme"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["theme"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "theme", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a paginated list of themes for the shop.
 */
public async themes<TSelection extends Exact<InferSelectType<QueryRoot["themes"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["themes"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "themes", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A resource that can have localized values for different languages.
 */
public async translatableResource<TSelection extends Exact<InferSelectType<QueryRoot["translatableResource"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["translatableResource"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "translatableResource", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Resources that can have localized values for different languages.
 */
public async translatableResources<TSelection extends Exact<InferSelectType<QueryRoot["translatableResources"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["translatableResources"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "translatableResources", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Resources that can have localized values for different languages.
 */
public async translatableResourcesByIds<TSelection extends Exact<InferSelectType<QueryRoot["translatableResourcesByIds"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["translatableResourcesByIds"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "translatableResourcesByIds", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a redirect resource by ID.
 */
public async urlRedirect<TSelection extends Exact<InferSelectType<QueryRoot["urlRedirect"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["urlRedirect"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "urlRedirect", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a redirect import resource by ID.
 */
public async urlRedirectImport<TSelection extends Exact<InferSelectType<QueryRoot["urlRedirectImport"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["urlRedirectImport"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "urlRedirectImport", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of the shop's URL redirect saved searches.
 */
public async urlRedirectSavedSearches<TSelection extends Exact<InferSelectType<QueryRoot["urlRedirectSavedSearches"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["urlRedirectSavedSearches"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "urlRedirectSavedSearches", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * A list of redirects for a shop.
 */
public async urlRedirects<TSelection extends Exact<InferSelectType<QueryRoot["urlRedirects"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["urlRedirects"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "urlRedirects", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Count of redirects. Limited to a maximum of 10000.
 */
public async urlRedirectsCount<TSelection extends Exact<InferSelectType<QueryRoot["urlRedirectsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["urlRedirectsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "urlRedirectsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Validation available on the shop.
 */
public async validation<TSelection extends Exact<InferSelectType<QueryRoot["validation"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["validation"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "validation", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Validations available on the shop.
 */
public async validations<TSelection extends Exact<InferSelectType<QueryRoot["validations"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["validations"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "validations", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a
 * [web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
 * by ID.
 */
public async webPixel<TSelection extends Exact<InferSelectType<QueryRoot["webPixel"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["webPixel"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "webPixel", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a webhook subscription by ID.
 *
 * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
 */
public async webhookSubscription<TSelection extends Exact<InferSelectType<QueryRoot["webhookSubscription"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["webhookSubscription"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "webhookSubscription", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * Returns a list of webhook subscriptions.
 *
 * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).
 */
public async webhookSubscriptions<TSelection extends Exact<InferSelectType<QueryRoot["webhookSubscriptions"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["webhookSubscriptions"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "webhookSubscriptions", queryArgs);
return await sendRequest(this.config, generatedQuery);
};

/**
 * The count of webhook subscriptions.
 *
 * Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe). Limited to a maximum of 10000.
 */
public async webhookSubscriptionsCount<TSelection extends Exact<InferSelectType<QueryRoot["webhookSubscriptionsCount"]>, TSelection>>(queryArgs: TSelection): Promise<GraphQLApiResponse<InferSelectedReturnType<QueryRoot["webhookSubscriptionsCount"], TSelection>>> {
const generatedQuery = buildGraphQLOperation("query", "webhookSubscriptionsCount", queryArgs);
return await sendRequest(this.config, generatedQuery);
};
}

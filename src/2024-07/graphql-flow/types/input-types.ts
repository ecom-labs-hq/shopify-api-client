import * as BaseTypes from "./base-types.js";

export type AppPlanInput = {
    /**
     * The pricing details for recurring billing.
     */
    appRecurringPricingDetails?: AppRecurringPricingInput | null;

    /**
     * The pricing details for usage-based billing.
     */
    appUsagePricingDetails?: AppUsagePricingInput | null;
};

export type AppRecurringPricingInput = {
    /**
     * The discount applied to the subscription for a given number of billing intervals.
     */
    discount?: AppSubscriptionDiscountInput | null;

    /**
     * How often the app subscription generates a charge.
     */
    interval?: BaseTypes.AppPricingInterval | null;

    /**
     * The amount to be charged to the store every billing interval.
     */
    price: MoneyInput;
};

export type AppSubscriptionDiscountInput = {
    /**
     * The total number of billing intervals to which the discount will be applied. Must be greater than 0.
     * The discount will be applied to an indefinite number of billing intervals if this value is left blank.
     */
    durationLimitInIntervals?: BaseTypes.Int | null;

    /**
     * The value to be discounted every billing interval.
     */
    value?: AppSubscriptionDiscountValueInput | null;
};

export type AppSubscriptionDiscountValueInput = {
    /**
     * The monetary value of a discount.
     */
    amount?: BaseTypes.Decimal | null;

    /**
     * The percentage value of a discount.
     */
    percentage?: BaseTypes.Float | null;
};

export type AppSubscriptionLineItemInput = {
    /**
     * The pricing model for the app subscription.
     */
    plan: AppPlanInput;
};

export type AppUsagePricingInput = {
    /**
     * The maximum amount of usage charges that can be incurred within a subscription billing interval.
     */
    cappedAmount: MoneyInput;

    /**
     * The terms and conditions for app usage. These terms stipulate the pricing model for the charges that an app creates.
     */
    terms: BaseTypes.String;
};

export type AttributeInput = {
    /**
     * Key or name of the attribute.
     */
    key: BaseTypes.String;

    /**
     * Value of the attribute.
     */
    value: BaseTypes.String;
};

export type BundlesDraftOrderBundleLineItemComponentInput = {
    /**
     * The quantity of the bundle component.
     */
    quantity: BaseTypes.Int;

    /**
     * The UUID of the bundle component. Must be unique and consistent across requests.
     * This field is mandatory in order to manipulate drafts with bundles.
     */
    uuid?: BaseTypes.String | null;

    /**
     * The ID of the product variant corresponding to the bundle component.
     */
    variantId?: BaseTypes.ID | null;
};

export type BuyerExperienceConfigurationInput = {
    /**
     * Whether to checkout to draft order for merchant review.
     */
    checkoutToDraft?: BaseTypes.Boolean | null;

    /**
     * Whether to allow customers to edit their shipping address at checkout.
     */
    editableShippingAddress?: BaseTypes.Boolean | null;

    /**
     * Represents the merchant configured payment terms.
     */
    paymentTermsTemplateId?: BaseTypes.ID | null;
};

export type CalculateExchangeLineItemInput = {
    /**
     * The discount to be applied to the exchange line item.
     */
    appliedDiscount?: ExchangeLineItemAppliedDiscountInput | null;

    /**
     * The quantity of the item to be added.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the product variant to be added to the order as part of an exchange.
     */
    variantId: BaseTypes.ID;
};

export type CalculateReturnInput = {
    /**
     * The exchange line items to add to the order.
     */
    exchangeLineItems?: Array<CalculateExchangeLineItemInput> | null;

    /**
     * The ID of the order that will be returned.
     */
    orderId: BaseTypes.ID;

    /**
     * The line items from the order to include in the return.
     */
    returnLineItems?: Array<CalculateReturnLineItemInput> | null;

    /**
     * The return shipping fee associated with the return.
     */
    returnShippingFee?: ReturnShippingFeeInput | null;
};

export type CalculateReturnLineItemInput = {
    /**
     * The ID of the fulfillment line item to be returned.
     */
    fulfillmentLineItemId: BaseTypes.ID;

    /**
     * The quantity of the item to be returned.
     */
    quantity: BaseTypes.Int;

    /**
     * The restocking fee for the return line item.
     */
    restockingFee?: RestockingFeeInput | null;
};

export type CatalogContextInput = {
    /**
     * The IDs of the company locations to associate to the catalog.
     */
    companyLocationIds?: Array<BaseTypes.ID> | null;
};

export type CatalogCreateInput = {
    /**
     * The context associated with the catalog.
     */
    context: CatalogContextInput;

    /**
     * The ID of the price list to associate to the catalog.
     */
    priceListId?: BaseTypes.ID | null;

    /**
     * The ID of the publication to associate to the catalog.
     */
    publicationId?: BaseTypes.ID | null;

    /**
     * The status of the catalog.
     */
    status: BaseTypes.CatalogStatus;

    /**
     * The name of the catalog.
     */
    title: BaseTypes.String;
};

export type CatalogUpdateInput = {
    /**
     * The context associated with the catalog.
     */
    context?: CatalogContextInput | null;

    /**
     * The ID of the price list to associate to the catalog.
     */
    priceListId?: BaseTypes.ID | null;

    /**
     * The ID of the publication to associate to the catalog.
     */
    publicationId?: BaseTypes.ID | null;

    /**
     * The status of the catalog.
     */
    status?: BaseTypes.CatalogStatus | null;

    /**
     * The name of the catalog.
     */
    title?: BaseTypes.String | null;
};

export type CheckoutBrandingButtonColorRolesInput = {
    /**
     * The color of accented objects (links and focused state).
     */
    accent?: BaseTypes.String | null;

    /**
     * The color of the background.
     */
    background?: BaseTypes.String | null;

    /**
     * The color of borders.
     */
    border?: BaseTypes.String | null;

    /**
     * The decorative color for highlighting specific parts of the user interface.
     */
    decorative?: BaseTypes.String | null;

    /**
     * The colors of the button on hover.
     */
    hover?: CheckoutBrandingColorRolesInput | null;

    /**
     * The color of icons.
     */
    icon?: BaseTypes.String | null;

    /**
     * The color of text.
     */
    text?: BaseTypes.String | null;
};

export type CheckoutBrandingButtonInput = {
    /**
     * The background style used for buttons.
     */
    background?: BaseTypes.CheckoutBrandingBackgroundStyle | null;

    /**
     * The block padding used for buttons.
     */
    blockPadding?: BaseTypes.CheckoutBrandingSpacing | null;

    /**
     * The border used for buttons.
     */
    border?: BaseTypes.CheckoutBrandingSimpleBorder | null;

    /**
     * The corner radius used for buttons.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;

    /**
     * The inline padding used for buttons.
     */
    inlinePadding?: BaseTypes.CheckoutBrandingSpacing | null;

    /**
     * The typography style used for buttons.
     */
    typography?: CheckoutBrandingTypographyStyleInput | null;
};

export type CheckoutBrandingBuyerJourneyInput = {
    /**
     * The visibility customizations for updating breadcrumbs, which represent the buyer's journey to checkout.
     */
    visibility?: BaseTypes.CheckoutBrandingVisibility | null;
};

export type CheckoutBrandingCartLinkInput = {
    /**
     * The input to update the visibility of cart links in checkout. This hides the cart icon on one-page and the cart link in the breadcrumbs/buyer journey on three-page checkout.
     */
    visibility?: BaseTypes.CheckoutBrandingVisibility | null;
};

export type CheckoutBrandingCheckboxInput = {
    /**
     * The corner radius used for checkboxes.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;
};

export type CheckoutBrandingChoiceListGroupInput = {
    /**
     * The spacing between UI elements in the list.
     */
    spacing?: BaseTypes.CheckoutBrandingSpacingKeyword | null;
};

export type CheckoutBrandingChoiceListInput = {
    /**
     * The settings that apply to the 'group' variant of ChoiceList.
     */
    group?: CheckoutBrandingChoiceListGroupInput | null;
};

export type CheckoutBrandingColorGlobalInput = {
    /**
     * A color used for interaction, like links and focus states.
     */
    accent?: BaseTypes.String | null;

    /**
     * A color that's strongly associated with the merchant. Currently used for
     * primary buttons, such as **Pay now**, and secondary buttons, such as **Buy again**.
     */
    brand?: BaseTypes.String | null;

    /**
     * A semantic color used for components that communicate critical content. For example, a blocking error such as the requirement to enter a valid credit card number.
     */
    critical?: BaseTypes.String | null;

    /**
     * A color used to highlight certain areas of the user interface. For example, the [`Text`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/titles-and-text/text#textprops-propertydetail-appearance) component.
     */
    decorative?: BaseTypes.String | null;

    /**
     * A semantic color used for components that communicate general, informative content.
     */
    info?: BaseTypes.String | null;

    /**
     * A semantic color used for components that communicate successful actions or a positive state.
     */
    success?: BaseTypes.String | null;

    /**
     * A semantic color used for components that display content that requires attention. For example, something that might be wrong, but not blocking.
     */
    warning?: BaseTypes.String | null;
};

export type CheckoutBrandingColorRolesInput = {
    /**
     * The color of accented objects (links and focused state).
     */
    accent?: BaseTypes.String | null;

    /**
     * The color of the background.
     */
    background?: BaseTypes.String | null;

    /**
     * The color of borders.
     */
    border?: BaseTypes.String | null;

    /**
     * The decorative color for highlighting specific parts of the user interface.
     */
    decorative?: BaseTypes.String | null;

    /**
     * The color of icons.
     */
    icon?: BaseTypes.String | null;

    /**
     * The color of text.
     */
    text?: BaseTypes.String | null;
};

export type CheckoutBrandingColorSchemeInput = {
    /**
     * The main colors of a scheme. Used for the surface background, text, links, and more.
     */
    base?: CheckoutBrandingColorRolesInput | null;

    /**
     * The colors of form controls, such as the [`TextField`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/textfield) and [`ChoiceList`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/choicelist) components.
     */
    control?: CheckoutBrandingControlColorRolesInput | null;

    /**
     * The colors of the primary button. For example, the main payment, or **Pay now** button.
     */
    primaryButton?: CheckoutBrandingButtonColorRolesInput | null;

    /**
     * The colors of the secondary button, which is used for secondary actions. For example, **Buy again**.
     */
    secondaryButton?: CheckoutBrandingButtonColorRolesInput | null;
};

export type CheckoutBrandingColorSchemesInput = {
    /**
     * The primary scheme. By default, it’s used for the main area of the interface.
     */
    scheme1?: CheckoutBrandingColorSchemeInput | null;

    /**
     * The secondary scheme. By default, it’s used for secondary areas, like Checkout’s Order Summary.
     */
    scheme2?: CheckoutBrandingColorSchemeInput | null;

    /**
     * An extra scheme available to customize more surfaces, components or specific states of the user interface.
     */
    scheme3?: CheckoutBrandingColorSchemeInput | null;

    /**
     * An extra scheme available to customize more surfaces, components or specific states of the user interface.
     */
    scheme4?: CheckoutBrandingColorSchemeInput | null;
};

export type CheckoutBrandingColorsInput = {
    /**
     * The input to update global colors for customizing the overall look and feel of the user interface.
     */
    global?: CheckoutBrandingColorGlobalInput | null;

    /**
     * The input to define color schemes which apply to different areas of the user interface.
     */
    schemes?: CheckoutBrandingColorSchemesInput | null;
};

export type CheckoutBrandingContainerDividerInput = {
    /**
     * The divider style.
     */
    borderStyle?: BaseTypes.CheckoutBrandingBorderStyle | null;

    /**
     * The divider width.
     */
    borderWidth?: BaseTypes.CheckoutBrandingBorderWidth | null;

    /**
     * The divider visibility.
     */
    visibility?: BaseTypes.CheckoutBrandingVisibility | null;
};

export type CheckoutBrandingContentInput = {
    /**
     * Divider style and visibility on the content container.
     */
    divider?: CheckoutBrandingContainerDividerInput | null;
};

export type CheckoutBrandingControlColorRolesInput = {
    /**
     * The color of accented objects (links and focused state).
     */
    accent?: BaseTypes.String | null;

    /**
     * The color of the background.
     */
    background?: BaseTypes.String | null;

    /**
     * The color of borders.
     */
    border?: BaseTypes.String | null;

    /**
     * The decorative color for highlighting specific parts of the user interface.
     */
    decorative?: BaseTypes.String | null;

    /**
     * The color of icons.
     */
    icon?: BaseTypes.String | null;

    /**
     * The colors of selected controls.
     */
    selected?: CheckoutBrandingColorRolesInput | null;

    /**
     * The color of text.
     */
    text?: BaseTypes.String | null;
};

export type CheckoutBrandingControlInput = {
    /**
     * The border used for form controls.
     */
    border?: BaseTypes.CheckoutBrandingSimpleBorder | null;

    /**
     * Set to TRANSPARENT to define transparent form controls. If null, form controls inherit colors from their scheme settings (for example, the main section inherits from `design_system.colors.schemes.scheme1.control` by default). Note that usage of the `customizations.control.color` setting to customize the form control color is deprecated.
     */
    color?: BaseTypes.CheckoutBrandingColorSelection | null;

    /**
     * The corner radius used for form controls.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;

    /**
     * The label position used for form controls.
     */
    labelPosition?: BaseTypes.CheckoutBrandingLabelPosition | null;
};

export type CheckoutBrandingCornerRadiusVariablesInput = {
    /**
     * The value in pixels for base corner radii. It should be greater than zero. Example: 5.
     */
    base?: BaseTypes.Int | null;

    /**
     * The value in pixels for large corner radii. It should be greater than zero. Example: 10.
     */
    large?: BaseTypes.Int | null;

    /**
     * The value in pixels for small corner radii. It should be greater than zero. Example: 3.
     */
    small?: BaseTypes.Int | null;
};

export type CheckoutBrandingCustomFontGroupInput = {
    /**
     * The base font.
     */
    base: CheckoutBrandingCustomFontInput;

    /**
     * The bold font.
     */
    bold: CheckoutBrandingCustomFontInput;

    /**
     * The font loading strategy.
     */
    loadingStrategy?: BaseTypes.CheckoutBrandingFontLoadingStrategy | null;
};

export type CheckoutBrandingCustomFontInput = {
    /**
     * A globally-unique ID for a font file uploaded via the Files api.
     * Allowed font types are .woff and .woff2.
     */
    genericFileId: BaseTypes.ID;

    /**
     * The font weight. Its value should be between 100 and 900.
     */
    weight: BaseTypes.Int;
};

export type CheckoutBrandingCustomizationsInput = {
    /**
     * The customizations for the breadcrumbs that represent a buyer's journey to the checkout.
     */
    buyerJourney?: CheckoutBrandingBuyerJourneyInput | null;

    /**
     * The input for checkout cart link customizations. For example, by setting the visibility field to `HIDDEN`, you can hide the cart icon in the header for one-page checkout, and the cart link in breadcrumbs in three-page checkout.
     */
    cartLink?: CheckoutBrandingCartLinkInput | null;

    /**
     * The checkboxes customizations.
     */
    checkbox?: CheckoutBrandingCheckboxInput | null;

    /**
     * The choice list customizations.
     */
    choiceList?: CheckoutBrandingChoiceListInput | null;

    /**
     * The content container customizations.
     */
    content?: CheckoutBrandingContentInput | null;

    /**
     * The form controls customizations.
     */
    control?: CheckoutBrandingControlInput | null;

    /**
     * The input for the page, content, main, and order summary dividers customizations. For example, by setting the borderStyle to `DOTTED`, you can make these dividers render as dotted lines.
     */
    divider?: CheckoutBrandingDividerStyleInput | null;

    /**
     * The express checkout customizations.
     */
    expressCheckout?: CheckoutBrandingExpressCheckoutInput | null;

    /**
     * The favicon image (must be of PNG format).
     */
    favicon?: CheckoutBrandingImageInput | null;

    /**
     * The footer customizations.
     */
    footer?: CheckoutBrandingFooterInput | null;

    /**
     * The global customizations.
     */
    global?: CheckoutBrandingGlobalInput | null;

    /**
     * The header customizations.
     */
    header?: CheckoutBrandingHeaderInput | null;

    /**
     * The Heading Level 1 customizations.
     */
    headingLevel1?: CheckoutBrandingHeadingLevelInput | null;

    /**
     * The Heading Level 2 customizations.
     */
    headingLevel2?: CheckoutBrandingHeadingLevelInput | null;

    /**
     * The Heading Level 3 customizations.
     */
    headingLevel3?: CheckoutBrandingHeadingLevelInput | null;

    /**
     * The main area customizations.
     */
    main?: CheckoutBrandingMainInput | null;

    /**
     * The merchandise thumbnails customizations.
     */
    merchandiseThumbnail?: CheckoutBrandingMerchandiseThumbnailInput | null;

    /**
     * The order summary customizations.
     */
    orderSummary?: CheckoutBrandingOrderSummaryInput | null;

    /**
     * The primary buttons customizations.
     */
    primaryButton?: CheckoutBrandingButtonInput | null;

    /**
     * The secondary buttons customizations.
     */
    secondaryButton?: CheckoutBrandingButtonInput | null;

    /**
     * The selects customizations.
     */
    select?: CheckoutBrandingSelectInput | null;

    /**
     * The text fields customizations.
     */
    textField?: CheckoutBrandingTextFieldInput | null;
};

export type CheckoutBrandingDesignSystemInput = {
    /**
     * The color settings for global colors and color schemes.
     */
    colors?: CheckoutBrandingColorsInput | null;

    /**
     * The corner radius variables.
     */
    cornerRadius?: CheckoutBrandingCornerRadiusVariablesInput | null;

    /**
     * The typography.
     */
    typography?: CheckoutBrandingTypographyInput | null;
};

export type CheckoutBrandingDividerStyleInput = {
    /**
     * The border style for the divider.
     */
    borderStyle?: BaseTypes.CheckoutBrandingBorderStyle | null;

    /**
     * The border width for the divider.
     */
    borderWidth?: BaseTypes.CheckoutBrandingBorderWidth | null;
};

export type CheckoutBrandingExpressCheckoutButtonInput = {
    /**
     * The corner radius used for Express Checkout buttons.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;
};

export type CheckoutBrandingExpressCheckoutInput = {
    /**
     * The Express Checkout buttons customizations.
     */
    button?: CheckoutBrandingExpressCheckoutButtonInput | null;
};

export type CheckoutBrandingFontGroupInput = {
    /**
     * A custom font group.
     */
    customFontGroup?: CheckoutBrandingCustomFontGroupInput | null;

    /**
     * A Shopify font group.
     */
    shopifyFontGroup?: CheckoutBrandingShopifyFontGroupInput | null;
};

export type CheckoutBrandingFontSizeInput = {
    /**
     * The base font size. Its value should be between 12.0 and 18.0.
     */
    base?: BaseTypes.Float | null;

    /**
     * The scale ratio used to derive all font sizes such as small and large. Its value should be between 1.0 and 1.4.
     */
    ratio?: BaseTypes.Float | null;
};

export type CheckoutBrandingFooterContentInput = {
    /**
     * The visibility settings for footer content.
     */
    visibility?: BaseTypes.CheckoutBrandingVisibility | null;
};

export type CheckoutBrandingFooterInput = {
    /**
     * The footer alignment settings. You can set the footer native content alignment to the left, center, or right.
     */
    alignment?: BaseTypes.CheckoutBrandingFooterAlignment | null;

    /**
     * The selected color scheme of the footer container.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * The input field for setting the footer content customizations.
     */
    content?: CheckoutBrandingFooterContentInput | null;

    /**
     * The divided setting.
     */
    divided?: BaseTypes.Boolean | null;

    /**
     * The padding of the footer container.
     */
    padding?: BaseTypes.CheckoutBrandingSpacingKeyword | null;

    /**
     * The input field for setting the footer position customizations.
     */
    position?: BaseTypes.CheckoutBrandingFooterPosition | null;
};

export type CheckoutBrandingGlobalInput = {
    /**
     * Select a global corner radius setting that overrides all other [corner radii](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)
     * customizations.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingGlobalCornerRadius | null;

    /**
     * The global typography customizations.
     */
    typography?: CheckoutBrandingTypographyStyleGlobalInput | null;
};

export type CheckoutBrandingHeaderCartLinkInput = {
    /**
     * The input for the content type for the header back to cart link in 1-page checkout. Setting this to image will render the custom image provided using the image field on the header cart_link object. If no image is provided, the default cart icon will be used.
     */
    contentType?: BaseTypes.CheckoutBrandingCartLinkContentType | null;

    /**
     * The input for the image that's used for the header back to cart link in 1-page checkout when the content type is set to image.
     */
    image?: CheckoutBrandingImageInput | null;
};

export type CheckoutBrandingHeaderInput = {
    /**
     * The header alignment.
     */
    alignment?: BaseTypes.CheckoutBrandingHeaderAlignment | null;

    /**
     * The background image of the header (must not be of SVG format).
     */
    banner?: CheckoutBrandingImageInput | null;

    /**
     * The input for cart link customizations for 1-page checkout. This field allows to customize the cart icon that renders by default on 1-page checkout.
     */
    cartLink?: CheckoutBrandingHeaderCartLinkInput | null;

    /**
     * The selected color scheme of the header container.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * The divided setting.
     */
    divided?: BaseTypes.Boolean | null;

    /**
     * The store logo.
     */
    logo?: CheckoutBrandingLogoInput | null;

    /**
     * The padding of the header container.
     */
    padding?: BaseTypes.CheckoutBrandingSpacingKeyword | null;

    /**
     * The header position.
     */
    position?: BaseTypes.CheckoutBrandingHeaderPosition | null;
};

export type CheckoutBrandingHeadingLevelInput = {
    /**
     * The typography customizations used for headings.
     */
    typography?: CheckoutBrandingTypographyStyleInput | null;
};

export type CheckoutBrandingImageInput = {
    /**
     * A globally-unique ID.
     */
    mediaImageId?: BaseTypes.ID | null;
};

export type CheckoutBrandingInput = {
    /**
     * The customizations that apply to specific components or areas of the user interface.
     */
    customizations?: CheckoutBrandingCustomizationsInput | null;

    /**
     * The design system allows you to set values that represent specific attributes
     * of your brand like color and font. These attributes are used throughout the user
     * interface. This brings consistency and allows you to easily make broad design changes.
     */
    designSystem?: CheckoutBrandingDesignSystemInput | null;
};

export type CheckoutBrandingLogoInput = {
    /**
     * The logo image (must not be of SVG format).
     */
    image?: CheckoutBrandingImageInput | null;

    /**
     * The maximum width of the logo.
     */
    maxWidth?: BaseTypes.Int | null;

    /**
     * The visibility of the logo.
     */
    visibility?: BaseTypes.CheckoutBrandingVisibility | null;
};

export type CheckoutBrandingMainInput = {
    /**
     * The background image of the main container (must not be of SVG format).
     */
    backgroundImage?: CheckoutBrandingImageInput | null;

    /**
     * The selected color scheme for the main container of the checkout.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * Divider style and visibility on the main container.
     */
    divider?: CheckoutBrandingContainerDividerInput | null;

    /**
     * The settings for the main sections.
     */
    section?: CheckoutBrandingMainSectionInput | null;
};

export type CheckoutBrandingMainSectionInput = {
    /**
     * The background style of the main sections.
     */
    background?: BaseTypes.CheckoutBrandingBackground | null;

    /**
     * The border for the main sections.
     */
    border?: BaseTypes.CheckoutBrandingSimpleBorder | null;

    /**
     * The border style of the main sections.
     */
    borderStyle?: BaseTypes.CheckoutBrandingBorderStyle | null;

    /**
     * The border width of the main sections.
     */
    borderWidth?: BaseTypes.CheckoutBrandingBorderWidth | null;

    /**
     * The selected color scheme for the main sections.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * The corner radius of the main sections.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;

    /**
     * The padding of the main sections.
     */
    padding?: BaseTypes.CheckoutBrandingSpacingKeyword | null;

    /**
     * The shadow of the main sections.
     */
    shadow?: BaseTypes.CheckoutBrandingShadow | null;
};

export type CheckoutBrandingMerchandiseThumbnailInput = {
    /**
     * The border used for merchandise thumbnails.
     */
    border?: BaseTypes.CheckoutBrandingSimpleBorder | null;

    /**
     * The corner radius used for merchandise thumbnails.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;
};

export type CheckoutBrandingOrderSummaryInput = {
    /**
     * The background image of the order summary container (must not be of SVG format).
     */
    backgroundImage?: CheckoutBrandingImageInput | null;

    /**
     * The selected color scheme for the order summary container of the checkout.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * Divider style and visibility on the order summary container.
     */
    divider?: CheckoutBrandingContainerDividerInput | null;

    /**
     * The settings for the order summary sections.
     */
    section?: CheckoutBrandingOrderSummarySectionInput | null;
};

export type CheckoutBrandingOrderSummarySectionInput = {
    /**
     * The background style of the order summary sections.
     */
    background?: BaseTypes.CheckoutBrandingBackground | null;

    /**
     * The border for the order summary sections.
     */
    border?: BaseTypes.CheckoutBrandingSimpleBorder | null;

    /**
     * The border style of the order summary sections.
     */
    borderStyle?: BaseTypes.CheckoutBrandingBorderStyle | null;

    /**
     * The border width of the order summary sections.
     */
    borderWidth?: BaseTypes.CheckoutBrandingBorderWidth | null;

    /**
     * The selected color scheme for the order summary sections.
     */
    colorScheme?: BaseTypes.CheckoutBrandingColorSchemeSelection | null;

    /**
     * The corner radius of the order summary sections.
     */
    cornerRadius?: BaseTypes.CheckoutBrandingCornerRadius | null;

    /**
     * The padding of the order summary sections.
     */
    padding?: BaseTypes.CheckoutBrandingSpacingKeyword | null;

    /**
     * The shadow of the order summary sections.
     */
    shadow?: BaseTypes.CheckoutBrandingShadow | null;
};

export type CheckoutBrandingSelectInput = {
    /**
     * The border used for selects.
     */
    border?: BaseTypes.CheckoutBrandingBorder | null;

    /**
     * The typography customizations used for selects.
     */
    typography?: CheckoutBrandingTypographyStyleInput | null;
};

export type CheckoutBrandingShopifyFontGroupInput = {
    /**
     * The base font weight.
     */
    baseWeight?: BaseTypes.Int | null;

    /**
     * The bold font weight.
     */
    boldWeight?: BaseTypes.Int | null;

    /**
     * The font loading strategy.
     */
    loadingStrategy?: BaseTypes.CheckoutBrandingFontLoadingStrategy | null;

    /**
     * The Shopify font name from [the list of available fonts](https://shopify.dev/themes/architecture/settings/fonts#available-fonts), such as `Alegreya Sans` or `Anonymous Pro`.
     */
    name: BaseTypes.String;
};

export type CheckoutBrandingTextFieldInput = {
    /**
     * The border used for text fields.
     */
    border?: BaseTypes.CheckoutBrandingBorder | null;

    /**
     * The typography customizations used for text fields.
     */
    typography?: CheckoutBrandingTypographyStyleInput | null;
};

export type CheckoutBrandingTypographyInput = {
    /**
     * A font group used for most components such as text, buttons and form controls.
     */
    primary?: CheckoutBrandingFontGroupInput | null;

    /**
     * A font group used for heading components by default.
     */
    secondary?: CheckoutBrandingFontGroupInput | null;

    /**
     * The font size.
     */
    size?: CheckoutBrandingFontSizeInput | null;
};

export type CheckoutBrandingTypographyStyleGlobalInput = {
    /**
     * The kerning.
     */
    kerning?: BaseTypes.CheckoutBrandingTypographyKerning | null;

    /**
     * The letter case.
     */
    letterCase?: BaseTypes.CheckoutBrandingTypographyLetterCase | null;
};

export type CheckoutBrandingTypographyStyleInput = {
    /**
     * The font.
     */
    font?: BaseTypes.CheckoutBrandingTypographyFont | null;

    /**
     * The kerning.
     */
    kerning?: BaseTypes.CheckoutBrandingTypographyKerning | null;

    /**
     * The letter case.
     */
    letterCase?: BaseTypes.CheckoutBrandingTypographyLetterCase | null;

    /**
     * The font size.
     */
    size?: BaseTypes.CheckoutBrandingTypographySize | null;

    /**
     * The font weight.
     */
    weight?: BaseTypes.CheckoutBrandingTypographyWeight | null;
};

export type ChildProductRelationInput = {
    /**
     * The ID of the child product.
     */
    childProductId: BaseTypes.ID;

    /**
     * The parent option values.
     */
    selectedParentOptionValues: Array<SelectedVariantOptionInput>;
};

export type CollectionDeleteInput = {
    /**
     * The ID of the collection to be deleted.
     */
    id: BaseTypes.ID;
};

export type CollectionInput = {
    /**
     * The description of the collection, in HTML format.
     */
    descriptionHtml?: BaseTypes.String | null;

    /**
     * A unique human-friendly string for the collection. Automatically generated from the collection's title.
     */
    handle?: BaseTypes.String | null;

    /**
     * Specifies the collection to update or create a new collection if absent. Required for updating a collection.
     */
    id?: BaseTypes.ID | null;

    /**
     * The image associated with the collection.
     */
    image?: ImageInput | null;

    /**
     * The metafields to associate with the collection.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * Initial list of collection products. Only valid with `collectionCreate` and without rules.
     */
    products?: Array<BaseTypes.ID> | null;

    /**
     * Indicates whether a redirect is required after a new handle has been provided.
     * If true, then the old handle is redirected to the new one automatically.
     */
    redirectNewHandle?: BaseTypes.Boolean | null;

    /**
     * The rules used to assign products to the collection.
     */
    ruleSet?: CollectionRuleSetInput | null;

    /**
     * SEO information for the collection.
     */
    seo?: SEOInput | null;

    /**
     * The order in which the collection's products are sorted.
     */
    sortOrder?: BaseTypes.CollectionSortOrder | null;

    /**
     * The theme template used when viewing the collection in a store.
     */
    templateSuffix?: BaseTypes.String | null;

    /**
     * The title of the collection. Required for creating a new collection.
     */
    title?: BaseTypes.String | null;
};

export type CollectionPublicationInput = {
    /**
     * The ID of the publication.
     */
    publicationId?: BaseTypes.ID | null;
};

export type CollectionPublishInput = {
    /**
     * The channels where the collection will be published.
     */
    collectionPublications: Array<CollectionPublicationInput>;

    /**
     * The collection to create or update publications for.
     */
    id: BaseTypes.ID;
};

export type CollectionRuleInput = {
    /**
     * The attribute that the rule focuses on. For example, `title` or `product_type`.
     */
    column: BaseTypes.CollectionRuleColumn;

    /**
     * The value that the operator is applied to. For example, `Hats`.
     */
    condition: BaseTypes.String;

    /**
     * The object ID that points to additional attributes for the collection rule.
     * This is only required when using metafield definition rules.
     */
    conditionObjectId?: BaseTypes.ID | null;

    /**
     * The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.
     */
    relation: BaseTypes.CollectionRuleRelation;
};

export type CollectionRuleSetInput = {
    /**
     * Whether products must match any or all of the rules to be included in the collection.
     * If true, then products must match at least one of the rules to be included in the collection.
     * If false, then products must match all of the rules to be included in the collection.
     */
    appliedDisjunctively: BaseTypes.Boolean;

    /**
     * The rules used to assign products to the collection.
     */
    rules?: Array<CollectionRuleInput> | null;
};

export type CollectionUnpublishInput = {
    /**
     * The channels where the collection is published.
     */
    collectionPublications: Array<CollectionPublicationInput>;

    /**
     * The collection to create or update publications for.
     */
    id: BaseTypes.ID;
};

export type CompanyAddressInput = {
    /**
     * The first line of the address. Typically the street address or PO Box number.
     */
    address1?: BaseTypes.String | null;

    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     */
    address2?: BaseTypes.String | null;

    /**
     * The name of the city, district, village, or town.
     */
    city?: BaseTypes.String | null;

    /**
     * The two-letter code ([ISO 3166-1 alpha-2]](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format) for the country of the address. For example, `US`` for the United States.
     */
    countryCode?: BaseTypes.CountryCode | null;

    /**
     * The first name of the recipient.
     */
    firstName?: BaseTypes.String | null;

    /**
     * The last name of the recipient.
     */
    lastName?: BaseTypes.String | null;

    /**
     * A phone number for the recipient. Formatted using E.164 standard. For example, _+16135551111_.
     */
    phone?: BaseTypes.String | null;

    /**
     * The identity of the recipient e.g. 'Receiving Department'.
     */
    recipient?: BaseTypes.String | null;

    /**
     * The zip or postal code of the address.
     */
    zip?: BaseTypes.String | null;

    /**
     * The alphanumeric code for the region of the address, such as the province, state, or district. For example, `ON` for Ontario, Canada.
     */
    zoneCode?: BaseTypes.String | null;
};

export type CompanyContactInput = {
    /**
     * The unique email address of the company contact.
     */
    email?: BaseTypes.String | null;

    /**
     * The company contact's first name.
     */
    firstName?: BaseTypes.String | null;

    /**
     * The company contact's last name.
     */
    lastName?: BaseTypes.String | null;

    /**
     * The contact's locale.
     */
    locale?: BaseTypes.String | null;

    /**
     * The phone number of the company contact.
     */
    phone?: BaseTypes.String | null;

    /**
     * The title of the company contact.
     */
    title?: BaseTypes.String | null;
};

export type CompanyContactRoleAssign = {
    /**
     * The role ID.
     */
    companyContactRoleId: BaseTypes.ID;

    /**
     * The location.
     */
    companyLocationId: BaseTypes.ID;
};

export type CompanyCreateInput = {
    /**
     * The attributes for the company.
     */
    company: CompanyInput;

    /**
     * The attributes for the company contact.
     */
    companyContact?: CompanyContactInput | null;

    /**
     * The attributes for the company location.
     */
    companyLocation?: CompanyLocationInput | null;
};

export type CompanyInput = {
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at
     * which the company became the customer.
     */
    customerSince?: BaseTypes.DateTime | null;

    /**
     * A unique externally-supplied ID for the company.
     */
    externalId?: BaseTypes.String | null;

    /**
     * The name of the company.
     */
    name?: BaseTypes.String | null;

    /**
     * A note about the company.
     */
    note?: BaseTypes.String | null;
};

export type CompanyLocationInput = {
    /**
     * The input fields to create or update the billing address for a company location.
     */
    billingAddress?: CompanyAddressInput | null;

    /**
     * Whether the billing address is the same as the shipping address. If the value is true, then the input for `billingAddress` is ignored.
     */
    billingSameAsShipping?: BaseTypes.Boolean | null;

    /**
     * The configuration for the buyer's checkout at the company location.
     */
    buyerExperienceConfiguration?: BuyerExperienceConfigurationInput | null;

    /**
     * A unique externally-supplied ID for the company location.
     */
    externalId?: BaseTypes.String | null;

    /**
     * The preferred locale of the company location.
     */
    locale?: BaseTypes.String | null;

    /**
     * The name of the company location.
     */
    name?: BaseTypes.String | null;

    /**
     * A note about the company location.
     */
    note?: BaseTypes.String | null;

    /**
     * The phone number of the company location.
     */
    phone?: BaseTypes.String | null;

    /**
     * The input fields to create or update the shipping address for a company location.
     */
    shippingAddress?: CompanyAddressInput | null;

    /**
     * The list of tax exemptions to apply to the company location.
     */
    taxExemptions?: Array<BaseTypes.TaxExemption> | null;

    /**
     * The tax registration ID of the company location.
     */
    taxRegistrationId?: BaseTypes.String | null;
};

export type CompanyLocationRoleAssign = {
    /**
     * The company contact ID..
     */
    companyContactId: BaseTypes.ID;

    /**
     * The role ID.
     */
    companyContactRoleId: BaseTypes.ID;
};

export type CompanyLocationUpdateInput = {
    /**
     * The configuration for the buyer's checkout at the company location.
     */
    buyerExperienceConfiguration?: BuyerExperienceConfigurationInput | null;

    /**
     * A unique externally-supplied ID for the company location.
     */
    externalId?: BaseTypes.String | null;

    /**
     * The preferred locale of the company location.
     */
    locale?: BaseTypes.String | null;

    /**
     * The name of the company location.
     */
    name?: BaseTypes.String | null;

    /**
     * A note about the company location.
     */
    note?: BaseTypes.String | null;

    /**
     * The phone number of the company location.
     */
    phone?: BaseTypes.String | null;
};

export type ContextualPricingContext = {
    /**
     * The CompanyLocation ID used to fetch company location specific prices.
     */
    companyLocationId?: BaseTypes.ID | null;

    /**
     * The country code used to fetch country-specific prices.
     */
    country?: BaseTypes.CountryCode | null;
};

export type ContextualPublicationContext = {
    /**
     * The company location ID used to fetch company-specific publication.
     */
    companyLocationId?: BaseTypes.ID | null;

    /**
     * The country code used to fetch country-specific publication.
     */
    country?: BaseTypes.CountryCode | null;
};

export type CountryHarmonizedSystemCodeInput = {
    /**
     * The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code.
     */
    countryCode: BaseTypes.CountryCode;

    /**
     * Country specific harmonized system code.
     */
    harmonizedSystemCode: BaseTypes.String;
};

export type CreateMediaInput = {
    /**
     * The alt text associated with the media.
     */
    alt?: BaseTypes.String | null;

    /**
     * The media content type.
     */
    mediaContentType: BaseTypes.MediaContentType;

    /**
     * The original source of the media object. This might be an external URL or a staged upload URL.
     */
    originalSource: BaseTypes.String;
};

export type CustomShippingPackageInput = {
    /**
     * The default package is the one used to calculate shipping costs on checkout.
     */
    default?: BaseTypes.Boolean | null;

    /**
     * Outside dimensions of the empty shipping package.
     */
    dimensions?: ObjectDimensionsInput | null;

    /**
     * Descriptive name for the package.
     */
    name?: BaseTypes.String | null;

    /**
     * Type of package.
     */
    type?: BaseTypes.ShippingPackageType | null;

    /**
     * Weight of the empty shipping package.
     */
    weight?: WeightInput | null;
};

export type CustomerDeleteInput = {
    /**
     * The ID of the customer to delete.
     */
    id: BaseTypes.ID;
};

export type CustomerEmailMarketingConsentInput = {
    /**
     * The latest date and time when the customer consented or objected to
     * receiving marketing material by email.
     */
    consentUpdatedAt?: BaseTypes.DateTime | null;

    /**
     * The customer opt-in level at the time of subscribing to marketing material.
     */
    marketingOptInLevel?: BaseTypes.CustomerMarketingOptInLevel | null;

    /**
     * The current marketing state associated with the customer's email.
     * If the customer doesn't have an email, then this field is `null`.
     */
    marketingState: BaseTypes.CustomerEmailMarketingState;
};

export type CustomerEmailMarketingConsentUpdateInput = {
    /**
     * The ID of the customer for which to update the email marketing consent information. The customer must have a unique email address associated to the record. If not, add the email address using the `customerUpdate` mutation first.
     */
    customerId: BaseTypes.ID;

    /**
     * The marketing consent information when the customer consented to receiving marketing material by email.
     */
    emailMarketingConsent: CustomerEmailMarketingConsentInput;
};

export type CustomerInput = {
    /**
     * The addresses for a customer.
     */
    addresses?: Array<MailingAddressInput> | null;

    /**
     * The unique email address of the customer.
     */
    email?: BaseTypes.String | null;

    /**
     * Information that describes when the customer consented to receiving marketing
     * material by email. The `email` field is required when creating a customer with email marketing
     * consent information.
     */
    emailMarketingConsent?: CustomerEmailMarketingConsentInput | null;

    /**
     * The customer's first name.
     */
    firstName?: BaseTypes.String | null;

    /**
     * The ID of the customer to update.
     */
    id?: BaseTypes.ID | null;

    /**
     * The customer's last name.
     */
    lastName?: BaseTypes.String | null;

    /**
     * The customer's locale.
     */
    locale?: BaseTypes.String | null;

    /**
     * Additional metafields to associate to the customer.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * A note about the customer.
     */
    note?: BaseTypes.String | null;

    /**
     * The unique phone number for the customer.
     */
    phone?: BaseTypes.String | null;

    /**
     * The marketing consent information when the customer consented to receiving marketing
     * material by SMS. The `phone` field is required when creating a customer with SMS
     * marketing consent information.
     */
    smsMarketingConsent?: CustomerSmsMarketingConsentInput | null;

    /**
     * A list of tags to associate with the customer. Can be an array or a comma-separated list. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`
     *
     * Updating `tags` overwrites any existing tags that were previously added to the customer. To add new tags without overwriting
     * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * Whether the customer is exempt from paying taxes on their order.
     */
    taxExempt?: BaseTypes.Boolean | null;

    /**
     * The list of tax exemptions to apply to the customer.
     */
    taxExemptions?: Array<BaseTypes.TaxExemption> | null;
};

export type CustomerMergeOverrideFields = {
    /**
     * The ID of the customer whose default address will be kept.
     */
    customerIdOfDefaultAddressToKeep?: BaseTypes.ID | null;

    /**
     * The ID of the customer whose email will be kept.
     */
    customerIdOfEmailToKeep?: BaseTypes.ID | null;

    /**
     * The ID of the customer whose first name will be kept.
     */
    customerIdOfFirstNameToKeep?: BaseTypes.ID | null;

    /**
     * The ID of the customer whose last name will be kept.
     */
    customerIdOfLastNameToKeep?: BaseTypes.ID | null;

    /**
     * The ID of the customer whose phone number will be kept.
     */
    customerIdOfPhoneNumberToKeep?: BaseTypes.ID | null;

    /**
     * The note to keep.
     */
    note?: BaseTypes.String | null;

    /**
     * The tags to keep.
     */
    tags?: Array<BaseTypes.String> | null;
};

export type CustomerPaymentMethodRemoteInput = {
    /**
     * The input fields for a remote authorize net customer profile.
     */
    authorizeNetCustomerPaymentProfile?: RemoteAuthorizeNetCustomerPaymentProfileInput | null;

    /**
     * The input fields for a remote Braintree customer profile.
     */
    braintreePaymentMethod?: RemoteBraintreePaymentMethodInput | null;

    /**
     * Input containing the fields for a remote stripe credit card.
     */
    stripePaymentMethod?: RemoteStripePaymentMethodInput | null;
};

export type CustomerSegmentMembersQueryInput = {
    /**
     * The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).
     */
    query?: BaseTypes.String | null;

    /**
     * Reverse the order of the list. The sorting behaviour defaults to ascending order.
     */
    reverse?: BaseTypes.Boolean | null;

    /**
     * The ID of the segment.
     */
    segmentId?: BaseTypes.ID | null;

    /**
     * Sort the list by a given key.
     */
    sortKey?: BaseTypes.String | null;
};

export type CustomerSmsMarketingConsentInput = {
    /**
     * The date and time when the customer consented to receive marketing material by SMS.
     * If no date is provided, then the date and time when the consent information was sent is used.
     */
    consentUpdatedAt?: BaseTypes.DateTime | null;

    /**
     * The marketing subscription opt-in level that was set when the customer consented to receive marketing information.
     */
    marketingOptInLevel?: BaseTypes.CustomerMarketingOptInLevel | null;

    /**
     * The current SMS marketing state for the customer.
     */
    marketingState: BaseTypes.CustomerSmsMarketingState;
};

export type CustomerSmsMarketingConsentUpdateInput = {
    /**
     * The ID of the customer to update the SMS marketing consent information for. The customer must have a unique phone number associated to the record. If not, add the phone number using the `customerUpdate` mutation first.
     */
    customerId: BaseTypes.ID;

    /**
     * The marketing consent information when the customer consented to receiving marketing material by SMS.
     */
    smsMarketingConsent: CustomerSmsMarketingConsentInput;
};

export type DelegateAccessTokenInput = {
    /**
     * The list of scopes that will be delegated to the new access token.
     */
    delegateAccessScope: Array<BaseTypes.String>;

    /**
     * The amount of time, in seconds, after which the delegate access token is no longer valid.
     */
    expiresIn?: BaseTypes.Int | null;
};

export type DeliveryCarrierServiceCreateInput = {
    /**
     * Whether this carrier service is active. If `true`, then the service will be available to serve rates in checkout.
     */
    active: BaseTypes.Boolean;

    /**
     * The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.
     */
    callbackUrl: BaseTypes.URL;

    /**
     * The name of the shipping service as seen by merchants and their customers.
     */
    name: BaseTypes.String;

    /**
     * Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.
     */
    supportsServiceDiscovery: BaseTypes.Boolean;
};

export type DeliveryCarrierServiceUpdateInput = {
    /**
     * Whether this carrier service is active. If `true`, then the service will be available to serve rates in checkout.
     */
    active?: BaseTypes.Boolean | null;

    /**
     * The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.
     */
    callbackUrl?: BaseTypes.URL | null;

    /**
     * The global ID of the carrier service to update.
     */
    id: BaseTypes.ID;

    /**
     * The name of the shipping service as seen by merchants and their customers.
     */
    name?: BaseTypes.String | null;

    /**
     * Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.
     */
    supportsServiceDiscovery?: BaseTypes.Boolean | null;
};

export type DeliveryCountryInput = {
    /**
     * The country code of the country in the ISO 3166-1 alpha-2 format.
     */
    code?: BaseTypes.CountryCode | null;

    /**
     * Associate all available provinces with this country.
     */
    includeAllProvinces?: BaseTypes.Boolean | null;

    /**
     * The regions associated with this country.
     */
    provinces?: Array<DeliveryProvinceInput> | null;

    /**
     * Whether the country is a part of the 'Rest of World' shipping zone.
     */
    restOfWorld?: BaseTypes.Boolean | null;
};

export type DeliveryCustomizationInput = {
    /**
     * The enabled status of the delivery customization.
     */
    enabled?: BaseTypes.Boolean | null;

    /**
     * The ID of the function providing the delivery customization.
     */
    functionId?: BaseTypes.String | null;

    /**
     * Additional metafields to associate to the delivery customization.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The title of the delivery customization.
     */
    title?: BaseTypes.String | null;
};

export type DeliveryLocationGroupZoneInput = {
    /**
     * A list of countries to associate with the zone.
     */
    countries?: Array<DeliveryCountryInput> | null;

    /**
     * A globally-unique ID of the zone.
     */
    id?: BaseTypes.ID | null;

    /**
     * A list of method definitions to create.
     */
    methodDefinitionsToCreate?: Array<DeliveryMethodDefinitionInput> | null;

    /**
     * A list of method definitions to update.
     */
    methodDefinitionsToUpdate?: Array<DeliveryMethodDefinitionInput> | null;

    /**
     * The name of the zone.
     */
    name?: BaseTypes.String | null;
};

export type DeliveryLocationLocalPickupEnableInput = {
    /**
     * The instructions for the local pickup.
     */
    instructions?: BaseTypes.String | null;

    /**
     * The ID of the location associated with the location setting.
     */
    locationId: BaseTypes.ID;

    /**
     * The time of the local pickup.
     */
    pickupTime: BaseTypes.DeliveryLocalPickupTime;
};

export type DeliveryMethodDefinitionInput = {
    /**
     * Whether to use this method definition during rate calculation.
     */
    active?: BaseTypes.Boolean | null;

    /**
     * A list of conditions to update on the method definition.
     */
    conditionsToUpdate?: Array<DeliveryUpdateConditionInput> | null;

    /**
     * The description of the method definition.
     */
    description?: BaseTypes.String | null;

    /**
     * A globally-unique ID of the method definition. Use only when updating a method definiton.
     */
    id?: BaseTypes.ID | null;

    /**
     * The name of the method definition.
     */
    name?: BaseTypes.String | null;

    /**
     * A participant to apply to the method definition.
     */
    participant?: DeliveryParticipantInput | null;

    /**
     * A list of price conditions on the method definition.
     */
    priceConditionsToCreate?: Array<DeliveryPriceConditionInput> | null;

    /**
     * A rate definition to apply to the method definition.
     */
    rateDefinition?: DeliveryRateDefinitionInput | null;

    /**
     * A list of weight conditions on the method definition.
     */
    weightConditionsToCreate?: Array<DeliveryWeightConditionInput> | null;
};

export type DeliveryParticipantInput = {
    /**
     * Whether to automatically display new shipping services to the customer when a service becomes available.
     */
    adaptToNewServices?: BaseTypes.Boolean | null;

    /**
     * The ID of the carrier service for this participant.
     */
    carrierServiceId?: BaseTypes.ID | null;

    /**
     * The fixed feed that's defined by the merchant for this participant.
     */
    fixedFee?: MoneyInput | null;

    /**
     * The ID of the participant.
     */
    id?: BaseTypes.ID | null;

    /**
     * The list of shipping services offered by the participant.
     */
    participantServices?: Array<DeliveryParticipantServiceInput> | null;

    /**
     * The merchant-defined percentage-of-rate fee for this participant.
     */
    percentageOfRateFee?: BaseTypes.Float | null;
};

export type DeliveryParticipantServiceInput = {
    /**
     * Whether the service is active.
     */
    active: BaseTypes.Boolean;

    /**
     * The name of the service.
     */
    name: BaseTypes.String;
};

export type DeliveryPriceConditionInput = {
    /**
     * The monetary value to compare the price of an order to.
     */
    criteria?: MoneyInput | null;

    /**
     * The operator to use for comparison.
     */
    operator?: BaseTypes.DeliveryConditionOperator | null;
};

export type DeliveryProfileInput = {
    /**
     * The list of condition IDs to delete.
     */
    conditionsToDelete?: Array<BaseTypes.ID> | null;

    /**
     * The list of location groups to be created in the delivery profile.
     *
     * **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 location groups per each request.
     */
    locationGroupsToCreate?: Array<DeliveryProfileLocationGroupInput> | null;

    /**
     * The list of location groups to be deleted from the delivery profile.
     */
    locationGroupsToDelete?: Array<BaseTypes.ID> | null;

    /**
     * The list of location groups to be updated in the delivery profile.
     *
     * **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 location groups per each request.
     */
    locationGroupsToUpdate?: Array<DeliveryProfileLocationGroupInput> | null;

    /**
     * The list of method definition IDs to delete.
     */
    methodDefinitionsToDelete?: Array<BaseTypes.ID> | null;

    /**
     * The name of the delivery profile.
     */
    name?: BaseTypes.String | null;

    /**
     * The list of location groups associated with the delivery profile.
     */
    profileLocationGroups?: Array<DeliveryProfileLocationGroupInput> | null;

    /**
     * The list of selling plan groups to be associated with the delivery profile.
     */
    sellingPlanGroupsToAssociate?: Array<BaseTypes.ID> | null;

    /**
     * The list of selling plan groups to be dissociated with the delivery profile.
     */
    sellingPlanGroupsToDissociate?: Array<BaseTypes.ID> | null;

    /**
     * The list of product variant IDs to be associated with the delivery profile.
     */
    variantsToAssociate?: Array<BaseTypes.ID> | null;

    /**
     * The list of product variant IDs to be dissociated from the delivery profile.
     * The dissociated product variants are moved back to the default delivery profile.
     */
    variantsToDissociate?: Array<BaseTypes.ID> | null;

    /**
     * The list of zone IDs to delete.
     */
    zonesToDelete?: Array<BaseTypes.ID> | null;
};

export type DeliveryProfileLocationGroupInput = {
    /**
     * The globally-unique ID of the delivery profile location group.
     */
    id?: BaseTypes.ID | null;

    /**
     * The list of location IDs to be moved to this location group.
     */
    locations?: Array<BaseTypes.ID> | null;

    /**
     * The list of location IDs to be added to this location group.
     *
     * **Note:** due to API input array limits, a maximum of 250 items can be sent per each request.
     */
    locationsToAdd?: Array<BaseTypes.ID> | null;

    /**
     * The list of location IDs to be removed from this location group.
     *
     * **Note:** due to API input array limits, a maximum of 250 items can be sent per each request.
     */
    locationsToRemove?: Array<BaseTypes.ID> | null;

    /**
     * The list of location group zones to create.
     *
     * **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 zones per each request.
     */
    zonesToCreate?: Array<DeliveryLocationGroupZoneInput> | null;

    /**
     * The list of location group zones to update.
     *
     * **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 zones per each request.
     */
    zonesToUpdate?: Array<DeliveryLocationGroupZoneInput> | null;
};

export type DeliveryProvinceInput = {
    /**
     * The code of the region.
     */
    code: BaseTypes.String;
};

export type DeliveryRateDefinitionInput = {
    /**
     * A globally-unique ID of the rate definition.
     */
    id?: BaseTypes.ID | null;

    /**
     * The price of the rate definition.
     */
    price: MoneyInput;
};

export type DeliverySettingInput = {
    /**
     * Whether legacy compatability mode is enabled for the multi-location delivery profiles feature.
     */
    legacyModeProfiles?: BaseTypes.Boolean | null;
};

export type DeliveryUpdateConditionInput = {
    /**
     * The value that will be used in comparison.
     */
    criteria?: BaseTypes.Float | null;

    /**
     * The unit associated with the value that will be used in comparison.
     */
    criteriaUnit?: BaseTypes.String | null;

    /**
     * The property of an order that will be used in comparison.
     */
    field?: BaseTypes.DeliveryConditionField | null;

    /**
     * A globally-unique ID of the condition.
     */
    id: BaseTypes.ID;

    /**
     * The operator to use for comparison.
     */
    operator?: BaseTypes.DeliveryConditionOperator | null;
};

export type DeliveryWeightConditionInput = {
    /**
     * The weight value to compare the weight of an order to.
     */
    criteria?: WeightInput | null;

    /**
     * The operator to use for comparison.
     */
    operator?: BaseTypes.DeliveryConditionOperator | null;
};

export type DiscountAmountInput = {
    /**
     * The value of the discount.
     */
    amount?: BaseTypes.Decimal | null;

    /**
     * If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items.
     */
    appliesOnEachItem?: BaseTypes.Boolean | null;
};

export type DiscountAutomaticAppInput = {
    /**
     * The
     * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The
     * [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries)
     * associated with the app extension providing the
     * [discount type](https://help.shopify.com/manual/discounts/discount-types).
     */
    functionId?: BaseTypes.String | null;

    /**
     * Additional metafields to associate to the discount.
     * [Metafields](https://shopify.dev/docs/apps/build/custom-data)
     * provide dynamic function configuration with
     * different parameters, such as `percentage` for a percentage discount. Merchants can set metafield values
     * in the Shopify admin, which makes the discount function more flexible and customizable.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;
};

export type DiscountAutomaticBasicInput = {
    /**
     * The
     * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * Information about the qualifying items and their discount.
     */
    customerGets?: DiscountCustomerGetsInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The minimum subtotal or quantity of items that are required for the discount to be applied.
     */
    minimumRequirement?: DiscountMinimumRequirementInput | null;

    /**
     * The number of billing cycles for which the discount can be applied,
     * which is useful for subscription-based discounts. For example, if you set this field
     * to `3`, then the discount only applies to the first three billing cycles of a
     * subscription. If you specify `0`, then the discount applies indefinitely.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;
};

export type DiscountAutomaticBxgyInput = {
    /**
     * The
     * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The items eligible for the discount and the required quantity of each to receive the discount.
     */
    customerBuys?: DiscountCustomerBuysInput | null;

    /**
     * The items in the order that qualify for the discount, their quantities, and the total value of the discount.
     */
    customerGets?: DiscountCustomerGetsInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that the discount can be applied to an order.
     */
    usesPerOrderLimit?: BaseTypes.UnsignedInt64 | null;
};

export type DiscountAutomaticFreeShippingInput = {
    /**
     * Whether the discount applies on regular one-time-purchase items.
     */
    appliesOnOneTimePurchase?: BaseTypes.Boolean | null;

    /**
     * Whether the discount applies on subscription items.
     * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
     * enable customers to purchase products
     * on a recurring basis.
     */
    appliesOnSubscription?: BaseTypes.Boolean | null;

    /**
     * The
     * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with the shipping discount.
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * A list of destinations where the discount will apply.
     */
    destination?: DiscountShippingDestinationSelectionInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The maximum shipping price that qualifies for the discount.
     */
    maximumShippingPrice?: BaseTypes.Decimal | null;

    /**
     * The minimum subtotal or quantity of items that are required for the discount to be applied.
     */
    minimumRequirement?: DiscountMinimumRequirementInput | null;

    /**
     * The number of billing cycles for which the discount can be applied,
     * which is useful for subscription-based discounts. For example, if you set this field
     * to `3`, then the discount only applies to the first three billing cycles of a
     * subscription. If you specify `0`, then the discount applies indefinitely.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;
};

export type DiscountCodeAppInput = {
    /**
     * Whether a customer can only use the discount once.
     */
    appliesOncePerCustomer?: BaseTypes.Boolean | null;

    /**
     * The code that customers use to apply the discount.
     */
    code?: BaseTypes.String | null;

    /**
     * The
     * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The customers that can use the discount.
     */
    customerSelection?: DiscountCustomerSelectionInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries) associated with the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).
     */
    functionId?: BaseTypes.String | null;

    /**
     * Additional metafields to associate to the discount. [Metafields](https://shopify.dev/docs/apps/build/custom-data) provide dynamic function configuration with different parameters, such as `percentage` for a percentage discount. Merchants can set metafield values in the Shopify admin, which makes the discount function more flexible and customizable.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that a customer can use the discount.
     * For discounts with unlimited usage, specify `null`.
     */
    usageLimit?: BaseTypes.Int | null;
};

export type DiscountCodeBasicInput = {
    /**
     * Whether a customer can only use the discount once.
     */
    appliesOncePerCustomer?: BaseTypes.Boolean | null;

    /**
     * The code that customers use to apply the discount.
     */
    code?: BaseTypes.String | null;

    /**
     * The
     * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The items in the order that qualify for the discount, their quantities, and the total value of the discount.
     */
    customerGets?: DiscountCustomerGetsInput | null;

    /**
     * The customers that can use the discount.
     */
    customerSelection?: DiscountCustomerSelectionInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The minimum subtotal or quantity of items that are required for the discount to be applied.
     */
    minimumRequirement?: DiscountMinimumRequirementInput | null;

    /**
     * The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that a customer can use the discount.
     * For discounts with unlimited usage, specify `null`.
     */
    usageLimit?: BaseTypes.Int | null;
};

export type DiscountCodeBxgyInput = {
    /**
     * Whether a customer can only use the discount once.
     */
    appliesOncePerCustomer?: BaseTypes.Boolean | null;

    /**
     * The code that customers use to apply the discount.
     */
    code?: BaseTypes.String | null;

    /**
     * The
     * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The items eligible for the discount and the required quantity of each to receive the discount.
     */
    customerBuys?: DiscountCustomerBuysInput | null;

    /**
     * The items in the order that qualify for the discount, their quantities, and the total value of the discount.
     */
    customerGets?: DiscountCustomerGetsInput | null;

    /**
     * The customers that can use the discount.
     */
    customerSelection?: DiscountCustomerSelectionInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that a customer can use the discount.
     * For discounts with unlimited usage, specify `null`.
     */
    usageLimit?: BaseTypes.Int | null;

    /**
     * The maximum number of times that the discount can be applied to an order.
     */
    usesPerOrderLimit?: BaseTypes.Int | null;
};

export type DiscountCodeFreeShippingInput = {
    /**
     * Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.
     */
    appliesOnOneTimePurchase?: BaseTypes.Boolean | null;

    /**
     * Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.
     */
    appliesOnSubscription?: BaseTypes.Boolean | null;

    /**
     * Whether a customer can only use the discount once.
     */
    appliesOncePerCustomer?: BaseTypes.Boolean | null;

    /**
     * The code that customers use to apply the discount.
     */
    code?: BaseTypes.String | null;

    /**
     * The
     * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with the shipping discount.
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The customers that can use the discount.
     */
    customerSelection?: DiscountCustomerSelectionInput | null;

    /**
     * The shipping destinations where the free shipping discount can be applied. You can specify whether the discount applies to all countries, or specify individual countries.
     */
    destination?: DiscountShippingDestinationSelectionInput | null;

    /**
     * The date and time when the discount expires and is no longer available to customers.
     * For discounts without a fixed expiration date, specify `null`.
     */
    endsAt?: BaseTypes.DateTime | null;

    /**
     * The maximum shipping price, in the shop's currency, that qualifies for free shipping.
     * <br/><br/>
     * For example, if set to 20.00, then only shipping rates that cost $20.00 or less will be made free. To apply the discount to all shipping rates, specify `null`.
     */
    maximumShippingPrice?: BaseTypes.Decimal | null;

    /**
     * The minimum subtotal or quantity of items that are required for the discount to be applied.
     */
    minimumRequirement?: DiscountMinimumRequirementInput | null;

    /**
     * The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts.
     * <br/><br/>
     * For example, if set to `3`, then the discount only applies to the first three billing cycles of a subscription. If set to `0`, then the discount applies indefinitely.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The date and time when the discount becomes active and is available to customers.
     */
    startsAt?: BaseTypes.DateTime | null;

    /**
     * The discount's name that displays to merchants in the Shopify admin and to customers.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that a customer can use the discount.
     * For discounts with unlimited usage, specify `null`.
     */
    usageLimit?: BaseTypes.Int | null;
};

export type DiscountCollectionsInput = {
    /**
     * Specifies list of collection ids to add.
     */
    add?: Array<BaseTypes.ID> | null;

    /**
     * Specifies list of collection ids to remove.
     */
    remove?: Array<BaseTypes.ID> | null;
};

export type DiscountCombinesWithInput = {
    /**
     * Whether the discount combines with the
     * [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * class.
     */
    orderDiscounts?: BaseTypes.Boolean | null;

    /**
     * Whether the discount combines with the
     * [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * class.
     */
    productDiscounts?: BaseTypes.Boolean | null;

    /**
     * Whether the discount combines
     * with the
     * [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * class.
     */
    shippingDiscounts?: BaseTypes.Boolean | null;
};

export type DiscountCountriesInput = {
    /**
     * The country codes to add to the list of countries where the discount applies.
     */
    add?: Array<BaseTypes.CountryCode> | null;

    /**
     * Whether the discount code is applicable to countries that haven't been defined in the shop's shipping zones.
     */
    includeRestOfWorld?: BaseTypes.Boolean | null;

    /**
     * The country codes to remove from the list of countries where the discount applies.
     */
    remove?: Array<BaseTypes.CountryCode> | null;
};

export type DiscountCustomerBuysInput = {
    /**
     * The IDs of items that the customer buys. The items can be either collections or products.
     */
    items?: DiscountItemsInput | null;

    /**
     * The quantity of prerequisite items.
     */
    value?: DiscountCustomerBuysValueInput | null;
};

export type DiscountCustomerBuysValueInput = {
    /**
     * The prerequisite minimum purchase amount required for the discount to be applicable.
     */
    amount?: BaseTypes.Decimal | null;

    /**
     * The quantity of prerequisite items.
     */
    quantity?: BaseTypes.UnsignedInt64 | null;
};

export type DiscountCustomerGetsInput = {
    /**
     * Whether the discount applies on regular one-time-purchase items.
     */
    appliesOnOneTimePurchase?: BaseTypes.Boolean | null;

    /**
     * Whether the discount applies on subscription items.
     * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
     * enable customers to purchase products
     * on a recurring basis.
     */
    appliesOnSubscription?: BaseTypes.Boolean | null;

    /**
     * The IDs of the items that the customer gets. The items can be either collections or products.
     */
    items?: DiscountItemsInput | null;

    /**
     * The quantity of items discounted and the discount value.
     */
    value?: DiscountCustomerGetsValueInput | null;
};

export type DiscountCustomerGetsValueInput = {
    /**
     * The value of the discount.
     */
    discountAmount?: DiscountAmountInput | null;

    /**
     * The quantity of the items that are discounted and the discount value.
     */
    discountOnQuantity?: DiscountOnQuantityInput | null;

    /**
     * The percentage value of the discount. Value must be between 0.00 - 1.00.
     */
    percentage?: BaseTypes.Float | null;
};

export type DiscountCustomerSegmentsInput = {
    /**
     * A list of customer segments to add to the current list of customer segments.
     */
    add?: Array<BaseTypes.ID> | null;

    /**
     * A list of customer segments to remove from the current list of customer segments.
     */
    remove?: Array<BaseTypes.ID> | null;
};

export type DiscountCustomerSelectionInput = {
    /**
     * Whether all customers can use this discount.
     */
    all?: BaseTypes.Boolean | null;

    /**
     * The list of customer segment IDs to add or remove from the list of customer segments.
     */
    customerSegments?: DiscountCustomerSegmentsInput | null;

    /**
     * The list of customer IDs to add or remove from the list of customers.
     */
    customers?: DiscountCustomersInput | null;
};

export type DiscountCustomersInput = {
    /**
     * A list of customers to add to the current list of customers who can use the discount.
     */
    add?: Array<BaseTypes.ID> | null;

    /**
     * A list of customers to remove from the current list of customers who can use the discount.
     */
    remove?: Array<BaseTypes.ID> | null;
};

export type DiscountEffectInput = {
    /**
     * The value of the discount.
     */
    amount?: BaseTypes.Decimal | null;

    /**
     * The percentage value of the discount. Value must be between 0.00 - 1.00.
     */
    percentage?: BaseTypes.Float | null;
};

export type DiscountItemsInput = {
    /**
     * Whether all items should be selected.
     */
    all?: BaseTypes.Boolean | null;

    /**
     * The collections that are attached to a discount.
     */
    collections?: DiscountCollectionsInput | null;

    /**
     * The
     * [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and
     * [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)
     * that the discount applies to.
     */
    products?: DiscountProductsInput | null;
};

export type DiscountMinimumQuantityInput = {
    /**
     * The minimum quantity of items that's required for the discount to be applied.
     */
    greaterThanOrEqualToQuantity?: BaseTypes.UnsignedInt64 | null;
};

export type DiscountMinimumRequirementInput = {
    /**
     * The minimum required quantity.
     */
    quantity?: DiscountMinimumQuantityInput | null;

    /**
     * The minimum required subtotal.
     */
    subtotal?: DiscountMinimumSubtotalInput | null;
};

export type DiscountMinimumSubtotalInput = {
    /**
     * The minimum subtotal that's required for the discount to be applied.
     */
    greaterThanOrEqualToSubtotal?: BaseTypes.Decimal | null;
};

export type DiscountOnQuantityInput = {
    /**
     * The percentage value of the discount.
     */
    effect?: DiscountEffectInput | null;

    /**
     * The quantity of items that are discounted.
     */
    quantity?: BaseTypes.UnsignedInt64 | null;
};

export type DiscountProductsInput = {
    /**
     * The IDs of the product variants to add as prerequisites or as eligible items for a discount.
     */
    productVariantsToAdd?: Array<BaseTypes.ID> | null;

    /**
     * The IDs of the product variants to remove as prerequisites or as eligible items for a discount.
     */
    productVariantsToRemove?: Array<BaseTypes.ID> | null;

    /**
     * The IDs of the products to add as prerequisites or as eligible items for a discount.
     */
    productsToAdd?: Array<BaseTypes.ID> | null;

    /**
     * The IDs of the products to remove as prerequisites or as eligible items for a discount.
     */
    productsToRemove?: Array<BaseTypes.ID> | null;
};

export type DiscountRedeemCodeInput = {
    /**
     * The code that a customer can use at checkout to receive the associated discount.
     */
    code: BaseTypes.String;
};

export type DiscountShippingDestinationSelectionInput = {
    /**
     * Whether the discount code applies to all countries.
     */
    all?: BaseTypes.Boolean | null;

    /**
     * A list of countries where the discount code will apply.
     */
    countries?: DiscountCountriesInput | null;
};

export type DraftOrderAppliedDiscountInput = {
    /**
     * The applied amount of the discount in the specified currency.
     */
    amountWithCurrency?: MoneyInput | null;

    /**
     * Reason for the discount.
     */
    description?: BaseTypes.String | null;

    /**
     * Title of the discount.
     */
    title?: BaseTypes.String | null;

    /**
     * The value of the discount.
     * If the type of the discount is fixed amount, then this is a fixed amount in your shop currency.
     * If the type is percentage, then this is the percentage.
     */
    value: BaseTypes.Float;

    /**
     * The type of discount.
     */
    valueType: BaseTypes.DraftOrderAppliedDiscountType;
};

export type DraftOrderDeleteInput = {
    /**
     * The ID of the draft order to delete.
     */
    id: BaseTypes.ID;
};

export type DraftOrderInput = {
    /**
     * Whether or not to accept automatic discounts on the draft order during calculation.
     * If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied.
     * If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.
     */
    acceptAutomaticDiscounts?: BaseTypes.Boolean | null;

    /**
     * Whether discount codes are allowed during checkout of this draft order.
     */
    allowDiscountCodesInCheckout?: BaseTypes.Boolean | null;

    /**
     * The discount that will be applied to the draft order.
     * A draft order line item can have one discount. A draft order can also have one order-level discount.
     */
    appliedDiscount?: DraftOrderAppliedDiscountInput | null;

    /**
     * The mailing address associated with the payment method.
     */
    billingAddress?: MailingAddressInput | null;

    /**
     * The extra information added to the draft order on behalf of the customer.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * The list of discount codes that will be attempted to be applied to the draft order.
     * If the draft isn't eligible for any given discount code it will be skipped during calculation.
     */
    discountCodes?: Array<BaseTypes.String> | null;

    /**
     * The customer's email address.
     */
    email?: BaseTypes.String | null;

    /**
     * The list of product variant or custom line item.
     * Each draft order must include at least one line item.
     *
     * NOTE: Draft orders don't currently support subscriptions.
     */
    lineItems?: Array<DraftOrderLineItemInput> | null;

    /**
     * The list of metafields attached to the draft order. An existing metafield can not be used when creating a draft order.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The text of an optional note that a shop owner can attach to the draft order.
     */
    note?: BaseTypes.String | null;

    /**
     * The fields used to create payment terms.
     */
    paymentTerms?: PaymentTermsInput | null;

    /**
     * The customer's phone number.
     */
    phone?: BaseTypes.String | null;

    /**
     * The purchase order number.
     */
    poNumber?: BaseTypes.String | null;

    /**
     * The payment currency of the customer for this draft order.
     */
    presentmentCurrencyCode?: BaseTypes.CurrencyCode | null;

    /**
     * The purchasing entity for the draft order.
     */
    purchasingEntity?: PurchasingEntityInput | null;

    /**
     * The time after which inventory reservation will expire.
     */
    reserveInventoryUntil?: BaseTypes.DateTime | null;

    /**
     * The unique token identifying the draft order.
     */
    sessionToken?: BaseTypes.String | null;

    /**
     * The mailing address to where the order will be shipped.
     */
    shippingAddress?: MailingAddressInput | null;

    /**
     * The shipping line object, which details the shipping method used.
     */
    shippingLine?: ShippingLineInput | null;

    /**
     * The source of the checkout.
     * To use this field for sales attribution, you must register the channels that your app is managing.
     * You can register the channels that your app is managing by completing
     * [this Google Form](https://docs.google.com/forms/d/e/1FAIpQLScmVTZRQNjOJ7RD738mL1lGeFjqKVe_FM2tO9xsm21QEo5Ozg/viewform?usp=sf_link).
     * After you've submitted your request, you need to wait for your request to be processed by Shopify.
     * You can find a list of your channels in the Partner Dashboard, in your app's Marketplace extension.
     * You need to specify the handle as the `source_name` value in your request.
     * The handle is the channel that the order was placed from.
     */
    sourceName?: BaseTypes.String | null;

    /**
     * A comma separated list of tags that have been added to the draft order.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * Whether or not taxes are exempt for the draft order.
     * If false, then Shopify will refer to the taxable field for each line item.
     * If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.
     */
    taxExempt?: BaseTypes.Boolean | null;

    /**
     * Fingerprint to guarantee bundles are handled correctly.
     */
    transformerFingerprint?: BaseTypes.String | null;

    /**
     * Whether to use the customer's default address.
     */
    useCustomerDefaultAddress?: BaseTypes.Boolean | null;

    /**
     * Whether the draft order will be visible to the customer on the self-serve portal.
     */
    visibleToCustomer?: BaseTypes.Boolean | null;
};

export type DraftOrderLineItemInput = {
    /**
     * The custom discount to be applied.
     */
    appliedDiscount?: DraftOrderAppliedDiscountInput | null;

    /**
     * The bundle components when the line item is a bundle.
     */
    bundleComponents?: Array<BundlesDraftOrderBundleLineItemComponentInput> | null;

    /**
     * A generic custom attribute using a key value pair.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * The price in presentment currency, without any discounts applied, for a custom line item.
     * If this value is provided, `original_unit_price` will be ignored. This field is ignored when `variantId` is provided.
     * Note: All presentment currencies for a single draft should be the same and match the
     * presentment currency of the draft order.
     */
    originalUnitPriceWithCurrency?: MoneyInput | null;

    /**
     * The line item quantity.
     */
    quantity: BaseTypes.Int;

    /**
     * Whether physical shipping is required for a custom line item. This field is ignored when `variantId` is provided.
     */
    requiresShipping?: BaseTypes.Boolean | null;

    /**
     * The SKU number for custom line items only. This field is ignored when `variantId` is provided.
     */
    sku?: BaseTypes.String | null;

    /**
     * Whether the custom line item is taxable. This field is ignored when `variantId` is provided.
     */
    taxable?: BaseTypes.Boolean | null;

    /**
     * Title of the line item. This field is ignored when `variantId` is provided.
     */
    title?: BaseTypes.String | null;

    /**
     * The UUID of the draft order line item. Must be unique and consistent across requests.
     * This field is mandatory in order to manipulate drafts with bundles.
     */
    uuid?: BaseTypes.String | null;

    /**
     * The ID of the product variant corresponding to the line item.
     * Must be null for custom line items, otherwise required.
     */
    variantId?: BaseTypes.ID | null;

    /**
     * The weight unit and value inputs for custom line items only.
     * This field is ignored when `variantId` is provided.
     */
    weight?: WeightInput | null;
};

export type EmailInput = {
    /**
     * Specifies any bcc recipients for the email.
     */
    bcc?: Array<BaseTypes.String> | null;

    /**
     * Specifies the email body.
     */
    body?: BaseTypes.String | null;

    /**
     * Specifies a custom message to include in the email.
     */
    customMessage?: BaseTypes.String | null;

    /**
     * Specifies the email sender.
     */
    from?: BaseTypes.String | null;

    /**
     * Specifies the email subject.
     */
    subject?: BaseTypes.String | null;

    /**
     * Specifies the email recipient.
     */
    to?: BaseTypes.String | null;
};

export type EventBridgeWebhookSubscriptionInput = {
    /**
     * The ARN of the EventBridge partner event source.
     */
    arn?: BaseTypes.ARN | null;

    /**
     * A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.
     */
    filter?: BaseTypes.String | null;

    /**
     * The format in which the webhook subscription should send the data.
     */
    format?: BaseTypes.WebhookSubscriptionFormat | null;

    /**
     * The list of fields to be included in the webhook subscription.
     */
    includeFields?: Array<BaseTypes.String> | null;

    /**
     * The list of namespaces for any metafields that should be included in the webhook subscription.
     */
    metafieldNamespaces?: Array<BaseTypes.String> | null;
};

export type ExchangeLineItemAppliedDiscountInput = {
    /**
     * The description of the discount.
     */
    description?: BaseTypes.String | null;

    /**
     * The value of the discount as a fixed amount or a percentage.
     */
    value: ExchangeLineItemAppliedDiscountValueInput;
};

export type ExchangeLineItemAppliedDiscountValueInput = {
    /**
     * The value of the discount as a fixed amount.
     */
    amount?: MoneyInput | null;

    /**
     * The value of the discount as a percentage.
     */
    percentage?: BaseTypes.Float | null;
};

export type ExchangeLineItemInput = {
    /**
     * The discount to be applied to the exchange line item.
     */
    appliedDiscount?: ExchangeLineItemAppliedDiscountInput | null;

    /**
     * The gift card codes associated with the physical gift cards.
     */
    giftCardCodes?: Array<BaseTypes.String> | null;

    /**
     * The quantity of the item to be added.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the product variant to be added to the order as part of an exchange.
     */
    variantId?: BaseTypes.ID | null;
};

export type FileCreateInput = {
    /**
     * The alternative text description of the file.
     */
    alt?: BaseTypes.String | null;

    /**
     * The file content type. If omitted, then Shopify will attempt to determine the content type during file processing.
     */
    contentType?: BaseTypes.FileContentType | null;

    /**
     * How to handle if filename is already in use.
     */
    duplicateResolutionMode?: BaseTypes.FileCreateInputDuplicateResolutionMode | null;

    /**
     * When provided, the file will be created with the given filename,
     * otherwise the filename in the originalSource will be used.
     */
    filename?: BaseTypes.String | null;

    /**
     * An external URL (for images only) or a
     * [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).
     */
    originalSource: BaseTypes.String;
};

export type FileUpdateInput = {
    /**
     * The alternative text description of the file.
     */
    alt?: BaseTypes.String | null;

    /**
     * The name of the file including its extension.
     */
    filename?: BaseTypes.String | null;

    /**
     * The ID of the file to be updated.
     */
    id: BaseTypes.ID;

    /**
     * The source from which to update a media image or generic file.
     * An external URL (for images only) or a
     * [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).
     */
    originalSource?: BaseTypes.String | null;

    /**
     * The source from which to update the media preview image.
     * May be an external URL or a
     * [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate).
     */
    previewImageSource?: BaseTypes.String | null;

    /**
     * The IDs of the references to add to the file. Currently only accepts product IDs.
     */
    referencesToAdd?: Array<BaseTypes.ID> | null;

    /**
     * The IDs of the references to remove from the file. Currently only accepts product IDs.
     */
    referencesToRemove?: Array<BaseTypes.ID> | null;
};

export type FulfillmentEventInput = {
    /**
     * The street address where this fulfillment event occurred.
     */
    address1?: BaseTypes.String | null;

    /**
     * The city where this fulfillment event occurred.
     */
    city?: BaseTypes.String | null;

    /**
     * The country where this fulfillment event occurred.
     */
    country?: BaseTypes.String | null;

    /**
     * The estimated delivery date and time of the fulfillment.
     */
    estimatedDeliveryAt?: BaseTypes.DateTime | null;

    /**
     * The ID for the fulfillment that's associated with this fulfillment event.
     */
    fulfillmentId: BaseTypes.ID;

    /**
     * The time at which this fulfillment event happened.
     */
    happenedAt?: BaseTypes.DateTime | null;

    /**
     * The latitude where this fulfillment event occurred.
     */
    latitude?: BaseTypes.Float | null;

    /**
     * The longitude where this fulfillment event occurred.
     */
    longitude?: BaseTypes.Float | null;

    /**
     * A message associated with this fulfillment event.
     */
    message?: BaseTypes.String | null;

    /**
     * The province where this fulfillment event occurred.
     */
    province?: BaseTypes.String | null;

    /**
     * The status of this fulfillment event.
     */
    status: BaseTypes.FulfillmentEventStatus;

    /**
     * The zip code of the location where this fulfillment event occurred.
     */
    zip?: BaseTypes.String | null;
};

export type FulfillmentOrderHoldInput = {
    /**
     * A configurable ID used to track the automation system releasing these holds.
     */
    externalId?: BaseTypes.String | null;

    /**
     * The fulfillment order line items to be placed on hold.
     *
     * If left blank, all line items of the fulfillment order are placed on hold.
     */
    fulfillmentOrderLineItems?: Array<FulfillmentOrderLineItemInput> | null;

    /**
     * Whether the merchant receives a notification about the fulfillment hold. The default value is `false`.
     */
    notifyMerchant?: BaseTypes.Boolean | null;

    /**
     * The reason for the fulfillment hold.
     */
    reason: BaseTypes.FulfillmentHoldReason;

    /**
     * Additional information about the fulfillment hold reason.
     */
    reasonNotes?: BaseTypes.String | null;
};

export type FulfillmentOrderLineItemInput = {
    /**
     * The ID of the fulfillment order line item.
     */
    id: BaseTypes.ID;

    /**
     * The quantity of the fulfillment order line item.
     */
    quantity: BaseTypes.Int;
};

export type FulfillmentOrderLineItemsInput = {
    /**
     * The ID of the fulfillment order.
     */
    fulfillmentOrderId: BaseTypes.ID;

    /**
     * The fulfillment order line items to be fulfilled.
     * If left blank, all line items of the fulfillment order will be fulfilled.
     */
    fulfillmentOrderLineItems?: Array<FulfillmentOrderLineItemInput> | null;
};

export type FulfillmentOrderLineItemsPreparedForPickupInput = {
    /**
     * The fulfillment orders associated with the line items which are ready to be picked up by a customer.
     */
    lineItemsByFulfillmentOrder: Array<PreparedFulfillmentOrderLineItemsInput>;
};

export type FulfillmentOrderMergeInput = {
    /**
     * The details of the fulfillment orders to be merged.
     */
    mergeIntents: Array<FulfillmentOrderMergeInputMergeIntent>;
};

export type FulfillmentOrderMergeInputMergeIntent = {
    /**
     * The ID of the fulfillment order to be merged.
     */
    fulfillmentOrderId: BaseTypes.ID;

    /**
     * The fulfillment order line items to be merged.
     */
    fulfillmentOrderLineItems?: Array<FulfillmentOrderLineItemInput> | null;
};

export type FulfillmentOrderSplitInput = {
    /**
     * The ID of the fulfillment order to be split.
     */
    fulfillmentOrderId: BaseTypes.ID;

    /**
     * The fulfillment order line items to be split out.
     */
    fulfillmentOrderLineItems: Array<FulfillmentOrderLineItemInput>;
};

export type FulfillmentOriginAddressInput = {
    /**
     * The street address of the fulfillment location.
     */
    address1?: BaseTypes.String | null;

    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     */
    address2?: BaseTypes.String | null;

    /**
     * The city in which the fulfillment location is located.
     */
    city?: BaseTypes.String | null;

    /**
     * The country of the fulfillment location.
     */
    countryCode: BaseTypes.String;

    /**
     * The province of the fulfillment location.
     */
    provinceCode?: BaseTypes.String | null;

    /**
     * The zip code of the fulfillment location.
     */
    zip?: BaseTypes.String | null;
};

export type FulfillmentTrackingInput = {
    /**
     * The name of the tracking company.
     *
     * If you specify a tracking company name from
     * [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies),
     * Shopify will automatically build tracking URLs for all provided tracking numbers,
     * which will make the tracking numbers clickable in the interface.
     * The same tracking company will be applied to all tracking numbers specified.
     *
     * Additionally, for the tracking companies listed on the
     * [Shipping Carriers help page](https://help.shopify.com/manual/shipping/understanding-shipping/shipping-carriers#integrated-shipping-carriers)
     * Shopify will automatically update the fulfillment's `shipment_status` field during the fulfillment process.
     *
     * > Note:
     * > Send the tracking company name exactly as written in
     * > [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
     * > (capitalization matters).
     */
    company?: BaseTypes.String | null;

    /**
     * The tracking number of the fulfillment.
     *
     * The tracking number will be clickable in the interface if one of the following applies
     * (the highest in the list has the highest priority):
     *
     * * Tracking url provided in the `url` field.
     * * [Shopify-known tracking company name](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
     * specified in the `company` field.
     * Shopify will build the tracking URL automatically based on the tracking number specified.
     * * The tracking number has a Shopify-known format.
     * Shopify will guess the tracking provider and build the tracking url based on the tracking number format.
     * Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
     * This can result in an invalid tracking URL.
     * It is highly recommended that you send the tracking company and the tracking URL.
     */
    number?: BaseTypes.String | null;

    /**
     * The tracking numbers of the fulfillment, one or many.
     *
     * With multiple tracking numbers, you can provide tracking information
     * for all shipments associated with the fulfillment, if there are more than one.
     * For example, if you're shipping assembly parts of one furniture item in several boxes.
     *
     * Tracking numbers will be clickable in the interface if one of the following applies
     * (the highest in the list has the highest priority):
     *
     * * Tracking URLs provided in the `urls` field.
     * The tracking URLs will be matched to the tracking numbers based on their positions in the arrays.
     * * [Shopify-known tracking company name](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
     * specified in the `company` field.
     * Shopify will build tracking URLs automatically for all tracking numbers specified.
     * The same tracking company will be applied to all tracking numbers.
     * * Tracking numbers have a Shopify-known format.
     * Shopify will guess tracking providers and build tracking URLs based on the tracking number formats.
     * Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
     * This can result in an invalid tracking URL.
     * It is highly recommended that you send the tracking company and the tracking URLs.
     */
    numbers?: Array<BaseTypes.String> | null;

    /**
     * The URL to track the fulfillment.
     *
     * The tracking URL is displayed in the merchant's admin on the order page.
     * The tracking URL is displayed in the shipping confirmation email, which can optionally be sent to the customer.
     * When accounts are enabled, it's also displayed in the customer's order history.
     *
     * The URL must be an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
     * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
     * For example, `"https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER"` is a valid URL.
     * It includes a scheme (`https`) and a host (`myshipping.com`).
     */
    url?: BaseTypes.URL | null;

    /**
     * The URLs to track the fulfillment, one or many.
     *
     * The tracking URLs are displayed in the merchant's admin on the order page.
     * The tracking URLs are displayed in the shipping confirmation email, which can optionally be sent to the customer.
     * When accounts are enabled, the tracking URLs are also displayed in the customer's order history.
     *
     * If you're not specifying a
     * [Shopify-known](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
     * tracking company name in the `company` field,
     * then provide tracking URLs for all tracking numbers from the `numbers` field.
     *
     * Tracking URLs from the `urls` array field are being matched with the tracking numbers from the `numbers` array
     * field correspondingly their positions in the arrays.
     *
     * Each URL must be an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
     * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
     * For example, `"https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER"` is a valid URL.
     * It includes a scheme (`https`) and a host (`myshipping.com`).
     */
    urls?: Array<BaseTypes.URL> | null;
};

export type FulfillmentV2Input = {
    /**
     * Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment
     * order line items that have to be fulfilled for each fulfillment order.  For any given pair, if the
     * fulfillment order line items are left blank then all the fulfillment order line items of the
     * associated fulfillment order ID will be fulfilled.
     */
    lineItemsByFulfillmentOrder: Array<FulfillmentOrderLineItemsInput>;

    /**
     * Whether the customer is notified.
     * If `true`, then a notification is sent when the fulfillment is created. The default value is `false`.
     */
    notifyCustomer?: BaseTypes.Boolean | null;

    /**
     * Address information about the location from which the order was fulfilled.
     */
    originAddress?: FulfillmentOriginAddressInput | null;

    /**
     * The fulfillment's tracking information, including a tracking URL, a tracking number,
     * and the company associated with the fulfillment.
     */
    trackingInfo?: FulfillmentTrackingInput | null;
};

export type GiftCardCreateInput = {
    /**
     * The gift card's code. It must be 8-20 characters long and contain only letters(a-z) and numbers(0-9).
     * It isn't case sensitive. If not provided, then a random code will be generated.
     */
    code?: BaseTypes.String | null;

    /**
     * The ID of the customer who will receive the gift card. Requires `write_customers` access_scope.
     */
    customerId?: BaseTypes.ID | null;

    /**
     * The date at which the gift card will expire. If not provided, then the gift card will never expire.
     */
    expiresOn?: BaseTypes.Date | null;

    /**
     * The initial value of the gift card.
     */
    initialValue: BaseTypes.Decimal;

    /**
     * The note associated with the gift card, which isn't visible to the customer.
     */
    note?: BaseTypes.String | null;

    /**
     * The suffix of the Liquid template that's used to render the gift card online.
     * For example, if the value is `birthday`, then the gift card is rendered using the template `gift_card.birthday.liquid`.
     * If not provided, then the default `gift_card.liquid` template is used.
     */
    templateSuffix?: BaseTypes.String | null;
};

export type GiftCardUpdateInput = {
    /**
     * The ID of the customer who will receive the gift card. The ID can't be changed if the gift card already has an assigned customer ID.
     */
    customerId?: BaseTypes.ID | null;

    /**
     * The date at which the gift card will expire. If set to `null`, then the gift card will never expire.
     */
    expiresOn?: BaseTypes.Date | null;

    /**
     * The note associated with the gift card, which isn't visible to the customer.
     */
    note?: BaseTypes.String | null;

    /**
     * The suffix of the Liquid template that's used to render the gift card online.
     * For example, if the value is `birthday`, then the gift card is rendered using the template `gift_card.birthday.liquid`.
     */
    templateSuffix?: BaseTypes.String | null;
};

export type ImageInput = {
    /**
     * A word or phrase to share the nature or contents of an image.
     */
    altText?: BaseTypes.String | null;

    /**
     * A globally-unique ID.
     */
    id?: BaseTypes.ID | null;

    /**
     * The URL of the image. May be a staged upload URL.
     */
    src?: BaseTypes.String | null;
};

export type ImageTransformInput = {
    /**
     * The region of the image to remain after cropping.
     * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal.
     * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
     * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
     * in an image with a width of 5 and height of 10, where the right side of the image is removed.
     */
    crop?: BaseTypes.CropRegion | null;

    /**
     * Image height in pixels between 1 and 5760.
     */
    maxHeight?: BaseTypes.Int | null;

    /**
     * Image width in pixels between 1 and 5760.
     */
    maxWidth?: BaseTypes.Int | null;

    /**
     * Convert the source image into the preferred content type.
     * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
     */
    preferredContentType?: BaseTypes.ImageContentType | null;

    /**
     * Image size multiplier for high-resolution retina displays. Must be within 1..3.
     */
    scale?: BaseTypes.Int | null;
};

export type IncomingRequestLineItemInput = {
    /**
     * The ID of the rejected line item.
     */
    fulfillmentOrderLineItemId: BaseTypes.ID;

    /**
     * The rejection message of the line item.
     */
    message?: BaseTypes.String | null;
};

export type InventoryAdjustQuantitiesInput = {
    /**
     * The quantity changes of items at locations to be made.
     */
    changes: Array<InventoryChangeInput>;

    /**
     * The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
     * to be adjusted.
     */
    name: BaseTypes.String;

    /**
     * The reason for the quantity changes. The value must be one of the [possible
     * reasons](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#set-inventory-quantities-on-hand).
     */
    reason: BaseTypes.String;

    /**
     * A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
     * quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a
     * draft order might have been previously reserved, and a merchant later creates an order from the draft order.
     * In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.
     */
    referenceDocumentUri?: BaseTypes.String | null;
};

export type InventoryBulkToggleActivationInput = {
    /**
     * Whether the inventory item can be stocked at the specified location. To deactivate, set the value to false which removes an inventory item's quantities from that location, and turns off inventory at that location.
     */
    activate: BaseTypes.Boolean;

    /**
     * The ID of the location to modify the inventory item's stocked status.
     */
    locationId: BaseTypes.ID;
};

export type InventoryChangeInput = {
    /**
     * The amount by which the inventory quantity will be changed.
     */
    delta: BaseTypes.Int;

    /**
     * Specifies the inventory item to which the change will be applied.
     */
    inventoryItemId: BaseTypes.ID;

    /**
     * A freeform URI that represents what changed the inventory quantities. A Shopify global ID isn't an accepted
     * value. For example, specifying "gid://shopify/Order/123" would return an error. This field is required for all
     * quantity names except `available`. The field `ledgerDocumentUri` isn't supported for use with an `available`
     * quantity name.
     */
    ledgerDocumentUri?: BaseTypes.String | null;

    /**
     * Specifies the location at which the change will be applied.
     */
    locationId: BaseTypes.ID;
};

export type InventoryItemInput = {
    /**
     * Unit cost associated with the inventory item, the currency is the shop's default currency.
     */
    cost?: BaseTypes.Decimal | null;

    /**
     * The ISO 3166-1 alpha-2 country code of where the item originated from.
     */
    countryCodeOfOrigin?: BaseTypes.CountryCode | null;

    /**
     * List of country-specific harmonized system codes.
     */
    countryHarmonizedSystemCodes?: Array<CountryHarmonizedSystemCodeInput> | null;

    /**
     * The harmonized system code of the inventory item. This must be a number between 6 and 13 digits.
     */
    harmonizedSystemCode?: BaseTypes.String | null;

    /**
     * The measurements of an inventory item.
     */
    measurement?: InventoryItemMeasurementInput | null;

    /**
     * The ISO 3166-2 alpha-2 province code of where the item originated from.
     */
    provinceCodeOfOrigin?: BaseTypes.String | null;

    requiresShipping?: BaseTypes.Boolean | null;

    /**
     * The SKU (stock keeping unit) of the inventory item.
     */
    sku?: BaseTypes.String | null;

    /**
     * Whether the inventory item is tracked.
     */
    tracked?: BaseTypes.Boolean | null;
};

export type InventoryItemMeasurementInput = {
    /**
     * The weight of the inventory item.
     */
    weight?: WeightInput | null;
};

export type InventoryLevelInput = {
    /**
     * The available quantity of an inventory item at a location.
     */
    availableQuantity: BaseTypes.Int;

    /**
     * The ID of a location associated with the inventory level.
     */
    locationId: BaseTypes.ID;
};

export type InventoryMoveQuantitiesInput = {
    /**
     * The quantity changes of items at locations to be made.
     */
    changes: Array<InventoryMoveQuantityChange>;

    /**
     * The reason for the quantity changes. The value must be one of the [possible
     * reasons](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#set-inventory-quantities-on-hand).
     */
    reason: BaseTypes.String;

    /**
     * A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
     * quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a
     * draft order might have been previously reserved, and a merchant later creates an order from the draft order.
     * In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.
     */
    referenceDocumentUri: BaseTypes.String;
};

export type InventoryMoveQuantityChange = {
    /**
     * Details about where the move will be made from.
     */
    from: InventoryMoveQuantityTerminalInput;

    /**
     * Specifies the inventory item to which the change will be applied.
     */
    inventoryItemId: BaseTypes.ID;

    /**
     * The amount by which the inventory quantity will be changed.
     */
    quantity: BaseTypes.Int;

    /**
     * Details about where the move will be made to.
     */
    to: InventoryMoveQuantityTerminalInput;
};

export type InventoryMoveQuantityTerminalInput = {
    /**
     * A freeform URI that represents what changed the inventory quantities. A Shopify global ID isn't an accepted
     * value. For example, specifying "gid://shopify/Order/123" would return an error. This field is required for a move of
     * all quantity names except `available`. The field `ledgerDocumentUri` isn't supported for use with an
     * `available` quantity name.
     */
    ledgerDocumentUri?: BaseTypes.String | null;

    /**
     * Specifies the location at which the change will be applied.
     */
    locationId: BaseTypes.ID;

    /**
     * The quantity
     * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) to be
     * moved.
     */
    name: BaseTypes.String;
};

export type InventoryQuantityInput = {
    /**
     * The current quantity to be compared against the persisted quantity.
     */
    compareQuantity?: BaseTypes.Int | null;

    /**
     * Specifies the inventory item to which the quantity will be set.
     */
    inventoryItemId: BaseTypes.ID;

    /**
     * Specifies the location at which the quantity will be set.
     */
    locationId: BaseTypes.ID;

    /**
     * The quantity to which the inventory quantity will be set.
     */
    quantity: BaseTypes.Int;
};

export type InventoryScheduledChangeInput = {
    /**
     * The date and time that the scheduled change is expected to happen.
     */
    expectedAt: BaseTypes.DateTime;

    /**
     * The quantity
     * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
     * to transition from.
     */
    fromName: BaseTypes.String;

    /**
     * The quantity
     * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
     * to transition to.
     */
    toName: BaseTypes.String;
};

export type InventoryScheduledChangeItemInput = {
    /**
     * The ID of the inventory item.
     */
    inventoryItemId: BaseTypes.ID;

    /**
     * A freeform URI that represents what changed the inventory quantities.
     */
    ledgerDocumentUri: BaseTypes.URL;

    /**
     * The ID of the location.
     */
    locationId: BaseTypes.ID;

    /**
     * An array of all the scheduled changes for the item.
     */
    scheduledChanges: Array<InventoryScheduledChangeInput>;
};

export type InventorySetOnHandQuantitiesInput = {
    /**
     * The reason for the quantity changes. The value must be one of the [possible
     * reasons](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#set-inventory-quantities-on-hand).
     */
    reason: BaseTypes.String;

    /**
     * A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
     * quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a
     * draft order might have been previously reserved, and a merchant later creates an order from the draft order.
     * In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.
     */
    referenceDocumentUri?: BaseTypes.String | null;

    /**
     * The value to which the on hand quantity will be set.
     */
    setQuantities: Array<InventorySetQuantityInput>;
};

export type InventorySetQuantitiesInput = {
    /**
     * Skip the compare quantity check in the quantities field.
     */
    ignoreCompareQuantity?: BaseTypes.Boolean | null;

    /**
     * The name of quantities to be changed. The only accepted values are: `available` or `on_hand`.
     */
    name: BaseTypes.String;

    /**
     * The values to which each quantities will be set.
     */
    quantities: Array<InventoryQuantityInput>;

    /**
     * The reason for the quantity changes. The value must be one of the [possible
     * reasons](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#set-inventory-quantities-on-hand).
     */
    reason: BaseTypes.String;

    /**
     * A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
     * quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a
     * draft order might have been previously reserved, and a merchant later creates an order from the draft order.
     * In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.
     */
    referenceDocumentUri?: BaseTypes.String | null;
};

export type InventorySetQuantityInput = {
    /**
     * Specifies the inventory item to which the quantity will be set.
     */
    inventoryItemId: BaseTypes.ID;

    /**
     * Specifies the location at which the quantity will be set.
     */
    locationId: BaseTypes.ID;

    /**
     * The quantity to which the inventory quantity will be set.
     */
    quantity: BaseTypes.Int;
};

export type InventorySetScheduledChangesInput = {
    /**
     * The list of all the items on which the scheduled changes need to be applied.
     */
    items: Array<InventoryScheduledChangeItemInput>;

    /**
     * The reason for setting up the scheduled changes.
     */
    reason: BaseTypes.String;

    /**
     * A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
     * quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a
     * draft order might have been previously reserved, and a merchant later creates an order from the draft order.
     * In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.
     */
    referenceDocumentUri: BaseTypes.URL;
};

export type LinkedMetafieldCreateInput = {
    /**
     * The key of the metafield this option is linked to.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the metafield this option is linked to.
     */
    namespace: BaseTypes.String;

    /**
     * Values associated with the option.
     */
    values?: Array<BaseTypes.String> | null;
};

export type LinkedMetafieldInput = {
    /**
     * The key of the linked metafield.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the linked metafield.
     */
    namespace: BaseTypes.String;

    /**
     * The values of the linked metafield.
     */
    values: Array<BaseTypes.String>;
};

export type LinkedMetafieldUpdateInput = {
    /**
     * The key of the metafield this option is linked to.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the metafield this option is linked to.
     */
    namespace: BaseTypes.String;
};

export type LocalizationExtensionInput = {
    /**
     * The key for the localization extension.
     */
    key: BaseTypes.LocalizationExtensionKey;

    /**
     * The localization extension value.
     */
    value: BaseTypes.String;
};

export type LocationAddAddressInput = {
    /**
     * The first line of the address.
     */
    address1?: BaseTypes.String | null;

    /**
     * The second line of the address.
     */
    address2?: BaseTypes.String | null;

    /**
     * The name of the city, district, village, or town.
     */
    city?: BaseTypes.String | null;

    /**
     * The two-letter code of country for the address.
     */
    countryCode: BaseTypes.CountryCode;

    /**
     * The phone number of the location.
     */
    phone?: BaseTypes.String | null;

    /**
     * The code for the region of the address, such as the state, province, or district.
     * For example CA for California, United States.
     */
    provinceCode?: BaseTypes.String | null;

    /**
     * The ZIP code or postal code of the address.
     */
    zip?: BaseTypes.String | null;
};

export type LocationAddInput = {
    /**
     * The address of the location.
     */
    address: LocationAddAddressInput;

    /**
     * Whether inventory at this location is available for sale online.
     */
    fulfillsOnlineOrders?: BaseTypes.Boolean | null;

    /**
     * Additional customizable information to associate with the location.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The name of the location.
     */
    name: BaseTypes.String;
};

export type LocationEditAddressInput = {
    /**
     * The first line of the address.
     */
    address1?: BaseTypes.String | null;

    /**
     * The second line of the address.
     */
    address2?: BaseTypes.String | null;

    /**
     * The name of the city, district, village, or town.
     */
    city?: BaseTypes.String | null;

    /**
     * The two-letter code of country for the address.
     */
    countryCode?: BaseTypes.CountryCode | null;

    /**
     * The phone number of the location.
     */
    phone?: BaseTypes.String | null;

    /**
     * The code for the region of the address, such as the state, province, or district.
     * For example CA for California, United States.
     */
    provinceCode?: BaseTypes.String | null;

    /**
     * The ZIP code or postal code of the location.
     */
    zip?: BaseTypes.String | null;
};

export type LocationEditInput = {
    /**
     * The address of the location.
     */
    address?: LocationEditAddressInput | null;

    /**
     * Whether inventory at this location is available for sale online.
     *
     * **Note:** This can't be disabled for fulfillment service locations.
     */
    fulfillsOnlineOrders?: BaseTypes.Boolean | null;

    /**
     * Additional customizable information to associate with the location.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The name of the location.
     */
    name?: BaseTypes.String | null;
};

export type MailingAddressInput = {
    /**
     * The first line of the address. Typically the street address or PO Box number.
     */
    address1?: BaseTypes.String | null;

    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     */
    address2?: BaseTypes.String | null;

    /**
     * The name of the city, district, village, or town.
     */
    city?: BaseTypes.String | null;

    /**
     * The name of the customer's company or organization.
     */
    company?: BaseTypes.String | null;

    /**
     * The two-letter code for the country of the address.
     */
    countryCode?: BaseTypes.CountryCode | null;

    /**
     * The first name of the customer.
     */
    firstName?: BaseTypes.String | null;

    /**
     * The last name of the customer.
     */
    lastName?: BaseTypes.String | null;

    /**
     * A unique phone number for the customer.
     *
     * Formatted using E.164 standard. For example, _+16135551111_.
     */
    phone?: BaseTypes.String | null;

    /**
     * The code for the region of the address, such as the province, state, or district.
     * For example QC for Quebec, Canada.
     */
    provinceCode?: BaseTypes.String | null;

    /**
     * The zip or postal code of the address.
     */
    zip?: BaseTypes.String | null;
};

export type MarketCreateInput = {
    /**
     * Whether the market is enabled to receive visitors and sales. If a
     * value isn't provided, then the market is enabled by default if all
     * included regions have shipping rates, and disabled if any regions don't
     * have shipping rates.
     *
     * **Note**: Regions in inactive markets can't be selected on the
     * storefront or in checkout.
     */
    enabled?: BaseTypes.Boolean | null;

    /**
     * A unique identifier for the market. For example `"ca"`.
     * If the handle isn't provided, then the handle is auto-generated based on the country or name.
     */
    handle?: BaseTypes.String | null;

    /**
     * The name of the market. Not shown to customers.
     */
    name: BaseTypes.String;

    /**
     * The regions to be included in the market. Each region can only be included in one market at
     * a time.
     */
    regions: Array<MarketRegionCreateInput>;
};

export type MarketCurrencySettingsUpdateInput = {
    /**
     * The currency which this market’s prices are defined in, and the
     * currency which its customers must use if local currencies are disabled.
     */
    baseCurrency?: BaseTypes.CurrencyCode | null;

    /**
     * Whether or not local currencies are enabled. If enabled, then prices will
     * be converted to give each customer the best experience based on their
     * region. If disabled, then all customers in this market will see prices
     * in the market's base currency.
     */
    localCurrencies?: BaseTypes.Boolean | null;
};

export type MarketLocalizationRegisterInput = {
    /**
     * A reference to the value being localized on the resource that this market localization belongs to.
     */
    key: BaseTypes.String;

    /**
     * The ID of the market that the localization is specific to.
     */
    marketId: BaseTypes.ID;

    /**
     * A hash digest representation of the content being localized.
     */
    marketLocalizableContentDigest: BaseTypes.String;

    /**
     * The value of the market localization.
     */
    value: BaseTypes.String;
};

export type MarketRegionCreateInput = {
    /**
     * A country code for the region.
     */
    countryCode: BaseTypes.CountryCode;
};

export type MarketUpdateInput = {
    /**
     * Whether the market is enabled to receive visitors and sales. **Note**: Regions in
     * inactive markets cannot be selected on the storefront or in checkout.
     */
    enabled?: BaseTypes.Boolean | null;

    /**
     * A unique identifier for the market. For example `"ca"`.
     */
    handle?: BaseTypes.String | null;

    /**
     * The name of the market. Not shown to customers.
     */
    name?: BaseTypes.String | null;
};

export type MarketWebPresenceCreateInput = {
    /**
     * The alternate locales for the market’s web presence.
     */
    alternateLocales?: Array<BaseTypes.String> | null;

    /**
     * The default locale for the market’s web presence.
     */
    defaultLocale: BaseTypes.String;

    /**
     * The web presence's domain ID. This field must be `null` if the `subfolderSuffix` isn't `null`.
     */
    domainId?: BaseTypes.ID | null;

    /**
     * The market-specific suffix of the subfolders defined by the web presence.
     * For example: in `/en-us`, the subfolder suffix is `us`.
     * Only ASCII characters are allowed. This field must be `null` if the `domainId` isn't `null`.
     */
    subfolderSuffix?: BaseTypes.String | null;
};

export type MarketWebPresenceUpdateInput = {
    /**
     * The alternate locales for the market’s web presence.
     */
    alternateLocales?: Array<BaseTypes.String> | null;

    /**
     * The default locale for the market’s web presence.
     */
    defaultLocale?: BaseTypes.String | null;

    /**
     * The web presence's domain ID. This field must be null if `subfolderSuffix` is not null.
     */
    domainId?: BaseTypes.ID | null;

    /**
     * The market-specific suffix of the subfolders defined by the web presence.
     * Example: in `/en-us` the subfolder suffix is `us`.
     * Only ASCII characters are allowed. This field must be null if `domainId` is not null.
     */
    subfolderSuffix?: BaseTypes.String | null;
};

export type MarketingActivityBudgetInput = {
    /**
     * Budget type for marketing activity.
     */
    budgetType?: BaseTypes.MarketingBudgetBudgetType | null;

    /**
     * Amount of budget for the marketing activity.
     */
    total?: MoneyInput | null;
};

export type MarketingActivityCreateExternalInput = {
    /**
     * The amount spent on the marketing activity.
     */
    adSpend?: MoneyInput | null;

    /**
     * The budget for this marketing activity.
     */
    budget?: MarketingActivityBudgetInput | null;

    /**
     * The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.
     */
    channelHandle?: BaseTypes.String | null;

    /**
     * The date and time at which the activity ended. If omitted or set to `null`, the current time will be used if the status is set to `INACTIVE` or `DELETED_EXTERNALLY`.
     */
    end?: BaseTypes.DateTime | null;

    /**
     * The hierarchy level of the activity within a campaign. The hierarchy level can't be updated.
     */
    hierarchyLevel?: BaseTypes.MarketingActivityHierarchyLevel | null;

    /**
     * The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
     */
    marketingChannelType: BaseTypes.MarketingChannel;

    /**
     * The ID for the parent marketing activity, if creating hierarchical activities.
     */
    parentActivityId?: BaseTypes.ID | null;

    /**
     * The remote ID for the parent marketing activity, if creating hierarchical activities.
     */
    parentRemoteId?: BaseTypes.String | null;

    /**
     * The domain from which ad clicks are forwarded to the shop.
     */
    referringDomain?: BaseTypes.String | null;

    /**
     * The ID of an activity that's hosted outside of Shopify.
     */
    remoteId?: BaseTypes.String | null;

    /**
     * The URL for a preview image that's used for the marketing activity.
     */
    remotePreviewImageUrl?: BaseTypes.URL | null;

    /**
     * The URL for viewing and/or managing the activity outside of Shopify.
     */
    remoteUrl: BaseTypes.URL;

    /**
     * The date and time at which the activity is scheduled to end.
     */
    scheduledEnd?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity is scheduled to start.
     */
    scheduledStart?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity started. If omitted or set to `null`, the current time will be used.
     */
    start?: BaseTypes.DateTime | null;

    /**
     * The status of the marketing activity. If status isn't set it will default to UNDEFINED.
     */
    status?: BaseTypes.MarketingActivityExternalStatus | null;

    /**
     * The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.
     */
    tactic: BaseTypes.MarketingTactic;

    /**
     * The title of the marketing activity.
     */
    title: BaseTypes.String;

    /**
     * Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.
     */
    urlParameterValue?: BaseTypes.String | null;

    /**
     * Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Either the URL parameter value or UTM can be set, but not both.
     */
    utm?: UTMInput | null;
};

export type MarketingActivityCreateInput = {
    /**
     * The budget for this marketing activity.
     */
    budget?: MarketingActivityBudgetInput | null;

    /**
     * Encoded context containing marketing campaign id.
     */
    context?: BaseTypes.String | null;

    /**
     * The form data in JSON serialized as a string.
     */
    formData?: BaseTypes.String | null;

    /**
     * The ID of the marketing activity extension.
     */
    marketingActivityExtensionId: BaseTypes.ID;

    /**
     * The title of the marketing activity.
     */
    marketingActivityTitle?: BaseTypes.String | null;

    /**
     * The current state of the marketing activity.
     */
    status: BaseTypes.MarketingActivityStatus;

    /**
     * Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.
     */
    urlParameterValue?: BaseTypes.String | null;

    /**
     * Specifies the
     * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
     * that are associated with a related marketing campaign. UTMInput is required for all Marketing
     * tactics except Storefront App.
     */
    utm?: UTMInput | null;
};

export type MarketingActivityUpdateExternalInput = {
    /**
     * The amount spent on the marketing activity.
     */
    adSpend?: MoneyInput | null;

    /**
     * The budget for this marketing activity.
     */
    budget?: MarketingActivityBudgetInput | null;

    /**
     * The date and time at which the activity ended.
     */
    end?: BaseTypes.DateTime | null;

    /**
     * The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
     */
    marketingChannelType?: BaseTypes.MarketingChannel | null;

    /**
     * The domain from which ad clicks are forwarded to the shop.
     */
    referringDomain?: BaseTypes.String | null;

    /**
     * The URL for a preview image that's used for the marketing activity.
     */
    remotePreviewImageUrl?: BaseTypes.URL | null;

    /**
     * The URL for viewing and/or managing the activity outside of Shopify.
     */
    remoteUrl?: BaseTypes.URL | null;

    /**
     * The date and time at which the activity is scheduled to end.
     */
    scheduledEnd?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity is scheduled to start.
     */
    scheduledStart?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity started.
     */
    start?: BaseTypes.DateTime | null;

    /**
     * The status of the marketing activity.
     */
    status?: BaseTypes.MarketingActivityExternalStatus | null;

    /**
     * The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.
     */
    tactic?: BaseTypes.MarketingTactic | null;

    /**
     * The title of the marketing activity.
     */
    title?: BaseTypes.String | null;
};

export type MarketingActivityUpdateInput = {
    /**
     * The budget for the marketing activity.
     */
    budget?: MarketingActivityBudgetInput | null;

    /**
     * The error messages that were generated when the app was trying to complete the activity.
     * Learn more about the
     * [JSON format expected for error messages](/api/marketing-activities/statuses#failed-status).
     */
    errors?: BaseTypes.JSON | null;

    /**
     * The form data of the marketing activity. This is only used if the marketing activity is
     * integrated with the external editor.
     */
    formData?: BaseTypes.String | null;

    /**
     * The ID of the marketing activity.
     */
    id: BaseTypes.ID;

    /**
     * A list of the item IDs that were marketed in this marketing activity. Valid types for these items are:
     * * `Product`
     * * `Shop`
     */
    marketedResources?: Array<BaseTypes.ID> | null;

    /**
     * The ID of the recommendation that the marketing activity was created from, if one exists.
     */
    marketingRecommendationId?: BaseTypes.ID | null;

    /**
     * The current state of the marketing activity. Learn more about
     * [marketing activities statuses](/api/marketing-activities/statuses).
     */
    status?: BaseTypes.MarketingActivityStatus | null;

    /**
     * The target state that the marketing activity is transitioning to. Learn more about [marketing activities statuses](/api/marketing-activities/statuses).
     */
    targetStatus?: BaseTypes.MarketingActivityStatus | null;

    /**
     * The title of the marketing activity.
     */
    title?: BaseTypes.String | null;

    /**
     * Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.
     */
    urlParameterValue?: BaseTypes.String | null;

    /**
     * Specifies the
     * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
     * that are associated with a related marketing campaign. UTMInput is required for all Marketing
     * tactics except Storefront App. The utm field can only be set once and never modified.
     */
    utm?: UTMInput | null;
};

export type MarketingActivityUpsertExternalInput = {
    /**
     * The amount spent on the marketing activity.
     */
    adSpend?: MoneyInput | null;

    /**
     * The budget for this marketing activity.
     */
    budget?: MarketingActivityBudgetInput | null;

    /**
     * The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.
     */
    channelHandle?: BaseTypes.String | null;

    /**
     * The date and time at which the activity started. On creation, if this field is omitted or set to `null`, the current time will be used if the status is set to `INACTIVE` or `DELETED_EXTERNALLY` .
     */
    end?: BaseTypes.DateTime | null;

    /**
     * The hierarchy level of the activity within a campaign. The hierarchy level can't be updated.
     */
    hierarchyLevel?: BaseTypes.MarketingActivityHierarchyLevel | null;

    /**
     * The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
     */
    marketingChannelType: BaseTypes.MarketingChannel;

    /**
     * The remote ID for the parent marketing activity, if creating hierarchical activities.
     */
    parentRemoteId?: BaseTypes.String | null;

    /**
     * The domain from which ad clicks are forwarded to the shop.
     */
    referringDomain?: BaseTypes.String | null;

    /**
     * The ID of an activity that's hosted outside of Shopify.
     */
    remoteId: BaseTypes.String;

    /**
     * The URL for a preview image that's used for the marketing activity.
     */
    remotePreviewImageUrl?: BaseTypes.URL | null;

    /**
     * The URL for viewing and/or managing the activity outside of Shopify.
     */
    remoteUrl: BaseTypes.URL;

    /**
     * The date and time at which the activity is scheduled to end.
     */
    scheduledEnd?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity is scheduled to start.
     */
    scheduledStart?: BaseTypes.DateTime | null;

    /**
     * The date and time at which the activity started. On creation, if this field is omitted or set to `null`, the current time will be used.
     */
    start?: BaseTypes.DateTime | null;

    /**
     * The status of the marketing activity.
     */
    status: BaseTypes.MarketingActivityExternalStatus;

    /**
     * The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.
     */
    tactic: BaseTypes.MarketingTactic;

    /**
     * The title of the marketing activity.
     */
    title: BaseTypes.String;

    /**
     * Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.
     */
    urlParameterValue?: BaseTypes.String | null;

    /**
     * Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Either the URL parameter value or UTM can be set, but not both.
     */
    utm?: UTMInput | null;
};

export type MarketingEngagementInput = {
    /**
     * The total ad spend for the marketing content. Recurring weekly, monthly, or yearly spend needs to be divided into daily amounts.
     */
    adSpend?: MoneyInput | null;

    /**
     * The total number of interactions, such as a button press or a screen touch, that occurred on the marketing content.
     */
    clicksCount?: BaseTypes.Int | null;

    /**
     * The total number of comments on the marketing content.
     */
    commentsCount?: BaseTypes.Int | null;

    /**
     * The total number of complaints on the marketing content. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were marked as spam. For social media platforms, this represents the number of dislikes or the number of times marketing content was reported.
     */
    complaintsCount?: BaseTypes.Int | null;

    /**
     * The total number of fails for the marketing content. For message-based platforms such as email or SMS, this represents the number of bounced marketing emails or messages.
     */
    failsCount?: BaseTypes.Int | null;

    /**
     * The total number of favorites, likes, saves, or bookmarks on the marketing content.
     */
    favoritesCount?: BaseTypes.Int | null;

    /**
     * The number of customers that have placed their first order. Doesn't include adjustments such as edits, exchanges, or returns.
     */
    firstTimeCustomers?: BaseTypes.Decimal | null;

    /**
     * The total number of times marketing content was displayed to users, whether or not an interaction occurred. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were delivered.
     */
    impressionsCount?: BaseTypes.Int | null;

    /**
     * Specifies how the provided metrics have been aggregated. Cumulative metrics are aggregated from the first day of reporting up to and including `occuredOn`. Non-cumulative metrics are aggregated over the single day indicated in `occuredOn`. Cumulative metrics will monotonically increase in time as each record includes the previous day's values, and so on. Non-cumulative is strongly preferred, and support for cumulative metrics may be deprecated in the future.
     */
    isCumulative: BaseTypes.Boolean;

    /**
     * The calendar date (in the time zone offset specified by the utcOffset field) for which the metrics are being reported. For example, a shop in UTC-5 would set utcOffset="-05:00" and aggregate all engagements from 05:00:00Z up to 29:00:00Z (5am UTC next day) for each call.
     */
    occurredOn: BaseTypes.Date;

    /**
     * The number of orders generated from the marketing content.
     */
    orders?: BaseTypes.Decimal | null;

    /**
     * The number of returning customers that have placed an order. Doesn't include adjustments such as edits, exchanges, or returns.
     */
    returningCustomers?: BaseTypes.Decimal | null;

    /**
     * The amount of sales generated from the marketing content.
     */
    sales?: MoneyInput | null;

    /**
     * The total number of marketing emails or messages that were sent.
     */
    sendsCount?: BaseTypes.Int | null;

    /**
     * The number of online store sessions generated from the marketing content.
     */
    sessionsCount?: BaseTypes.Int | null;

    /**
     * The total number of times marketing content was distributed or reposted to either one's own network of followers through a social media platform or other digital channels. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were forwarded.
     */
    sharesCount?: BaseTypes.Int | null;

    /**
     * The total number of unique clicks on the marketing content.
     */
    uniqueClicksCount?: BaseTypes.Int | null;

    /**
     * The total number of all users who saw marketing content since it was published. For  message-based platforms such as email or SMS, this represents the number of unique users that opened a  marketing email or message. For video-based content, this represents the number of unique users that  played video content.
     */
    uniqueViewsCount?: BaseTypes.Int | null;

    /**
     * The total number of unsubscribes on the marketing content. For social media platforms, this represents the number of unfollows.
     */
    unsubscribesCount?: BaseTypes.Int | null;

    /**
     * The UTC offset for the time zone in which the metrics are being reported, in the format `"+HH:MM"` or `"-HH:MM"`. Used in combination with occurredOn when aggregating daily metrics. Must match the account settings for the shop to minimize eventual discrepancies in reporting.
     */
    utcOffset: BaseTypes.UtcOffset;

    /**
     * The total number of views on the marketing content. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were opened. For video-based content, this represents the number of times videos were played.
     */
    viewsCount?: BaseTypes.Int | null;
};

export type MenuItemCreateInput = {
    /**
     * List of the menu items nested under this item sorted by position.
     */
    items?: Array<MenuItemCreateInput> | null;

    /**
     * The menu item's association with an existing resource.
     */
    resourceId?: BaseTypes.ID | null;

    /**
     * The menu item's tags to filter a collection.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * The menu item's title.
     */
    title: BaseTypes.String;

    /**
     * The menu item's type.
     */
    type: BaseTypes.MenuItemType;

    /**
     * The menu item's url to be used when the item doesn't point to a resource.
     */
    url?: BaseTypes.String | null;
};

export type MenuItemUpdateInput = {
    /**
     * A globally-unique ID of the online store navigation menu item.
     */
    id?: BaseTypes.ID | null;

    /**
     * List of the menu items nested under this item sorted by position.
     */
    items?: Array<MenuItemUpdateInput> | null;

    /**
     * The menu item's association with an existing resource.
     */
    resourceId?: BaseTypes.ID | null;

    /**
     * The menu item's tags to filter a collection.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * The menu item's title.
     */
    title: BaseTypes.String;

    /**
     * The menu item's type.
     */
    type: BaseTypes.MenuItemType;

    /**
     * The menu item's url to be used when the item doesn't point to a resource.
     */
    url?: BaseTypes.String | null;
};

export type MetafieldAccessGrantDeleteInput = {
    /**
     * The grantee whose grant should be deleted.
     */
    grantee: BaseTypes.String;
};

export type MetafieldAccessGrantInput = {
    /**
     * The level of access being granted.
     */
    access: BaseTypes.MetafieldGrantAccessLevel;

    /**
     * The grantee being granted access.
     */
    grantee: BaseTypes.String;
};

export type MetafieldAccessGrantOperationInput = {
    /**
     * The input fields for an explicit access grant to be created or updated for the metafields under this definition.
     *
     * Explicit grants are [deprecated](https://shopify.dev/changelog/deprecating-explicit-access-grants-for-app-owned-metafields).
     */
    create?: MetafieldAccessGrantInput | null;

    /**
     * The input fields for an explicit access grant to be deleted for the metafields under this definition.
     */
    delete?: MetafieldAccessGrantDeleteInput | null;

    /**
     * The input fields for an explicit access grant to be created or updated for the metafields under this definition.
     *
     * Explicit grants are [deprecated](https://shopify.dev/changelog/deprecating-explicit-access-grants-for-app-owned-metafields).
     */
    update?: MetafieldAccessGrantInput | null;
};

export type MetafieldAccessInput = {
    /**
     * The access permitted on the Admin API.
     */
    admin: BaseTypes.MetafieldAdminAccessInput;

    /**
     * The access permitted on the Customer Account API.
     */
    customerAccount?: BaseTypes.MetafieldCustomerAccountAccessInput | null;

    /**
     * The access permitted on the Storefront API.
     */
    storefront?: BaseTypes.MetafieldStorefrontAccessInput | null;
};

export type MetafieldAccessUpdateInput = {
    /**
     * The admin access setting to use for the metafields under this definition.
     */
    admin: BaseTypes.MetafieldAdminAccessInput;

    /**
     * The Customer Account API access setting to use for the metafields under this definition.
     */
    customerAccount?: BaseTypes.MetafieldCustomerAccountAccessInput | null;

    /**
     * The storefront access setting to use for the metafields under this definition.
     */
    storefront?: BaseTypes.MetafieldStorefrontAccessInput | null;
};

export type MetafieldDefinitionConstraintSubtypeIdentifier = {
    /**
     * The category of the resource subtype.
     */
    key: BaseTypes.String;

    /**
     * The specific subtype value within the identified subtype category.
     */
    value: BaseTypes.String;
};

export type MetafieldDefinitionInput = {
    /**
     * The access settings that apply to each of the metafields that belong to the metafield definition.
     */
    access?: MetafieldAccessInput | null;

    /**
     * The description for the metafield definition.
     */
    description?: BaseTypes.String | null;

    /**
     * The unique identifier for the metafield definition within its namespace.
     *
     * Must be 2-64 characters long and only contain alphanumeric, hyphen, and underscore characters.
     */
    key: BaseTypes.String;

    /**
     * The human-readable name for the metafield definition.
     */
    name: BaseTypes.String;

    /**
     * The container for a group of metafields that the metafield definition will be associated with. If omitted, the
     * app-reserved namespace will be used.
     *
     * Must be 3-255 characters long and only contain alphanumeric, hyphen, and underscore characters.
     */
    namespace?: BaseTypes.String | null;

    /**
     * The resource type that the metafield definition is attached to.
     */
    ownerType: BaseTypes.MetafieldOwnerType;

    /**
     * Whether to [pin](https://help.shopify.com/manual/custom-data/metafields/pinning-metafield-definitions)
     * the metafield definition.
     */
    pin?: BaseTypes.Boolean | null;

    /**
     * The type of data that each of the metafields that belong to the metafield definition will store.
     * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
     */
    type: BaseTypes.String;

    /**
     * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
     * the metafields that belong to the metafield definition. For example, for a metafield definition with the
     * type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only
     * store dates after the specified minimum.
     */
    validations?: Array<MetafieldDefinitionValidationInput> | null;
};

export type MetafieldDefinitionUpdateInput = {
    /**
     * The access settings that apply to each of the metafields that belong to the metafield definition.
     */
    access?: MetafieldAccessUpdateInput | null;

    /**
     * The description for the metafield definition.
     */
    description?: BaseTypes.String | null;

    /**
     * The unique identifier for the metafield definition within its namespace. Used to help identify the metafield
     * definition, but can't be updated itself.
     */
    key: BaseTypes.String;

    /**
     * The human-readable name for the metafield definition.
     */
    name?: BaseTypes.String | null;

    /**
     * The container for a group of metafields that the metafield definition is associated with. Used to help identify
     * the metafield definition, but cannot be updated itself. If omitted, the app-reserved namespace will be used.
     */
    namespace?: BaseTypes.String | null;

    /**
     * The resource type that the metafield definition is attached to. Used to help identify the metafield definition,
     * but can't be updated itself.
     */
    ownerType: BaseTypes.MetafieldOwnerType;

    /**
     * Whether to pin the metafield definition.
     */
    pin?: BaseTypes.Boolean | null;

    /**
     * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
     * the metafields that belong to the metafield definition. For example, for a metafield definition with the
     * type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only
     * store dates after the specified minimum.
     */
    validations?: Array<MetafieldDefinitionValidationInput> | null;
};

export type MetafieldDefinitionValidationInput = {
    /**
     * The name for the metafield definition validation.
     */
    name: BaseTypes.String;

    /**
     * The value for the metafield definition validation.
     */
    value: BaseTypes.String;
};

export type MetafieldDeleteInput = {
    /**
     * The ID of the metafield to delete.
     */
    id: BaseTypes.ID;
};

export type MetafieldIdentifierInput = {
    /**
     * The key of the metafield.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the metafield.
     */
    namespace: BaseTypes.String;

    /**
     * The unique ID of the resource that the metafield is attached to.
     */
    ownerId: BaseTypes.ID;
};

export type MetafieldInput = {
    /**
     * The unique ID of the metafield. Using `owner_id`, `namespace`, and `key` is preferred for creating and updating.
     */
    id?: BaseTypes.ID | null;

    /**
     * The unique identifier for a metafield within its namespace.
     *
     * Required when creating a metafield, but optional when updating. Used to help identify the metafield when
     * updating, but can't be updated itself.
     *
     * Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.
     */
    key?: BaseTypes.String | null;

    /**
     * The container for a group of metafields that the metafield is or will be associated with. Used in tandem with
     * `key` to lookup a metafield on a resource, preventing conflicts with other metafields with the same `key`.
     *
     * Required when creating a metafield, but optional when updating. Used to help identify the metafield when
     * updating, but can't be updated itself.
     *
     * Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.
     */
    namespace?: BaseTypes.String | null;

    /**
     * The type of data that is stored in the metafield.
     * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
     *
     * Required when creating or updating a metafield without a definition.
     */
    type?: BaseTypes.String | null;

    /**
     * The data stored in the metafield. Always stored as a string, regardless of the metafield's type.
     */
    value?: BaseTypes.String | null;
};

export type MetafieldStorefrontVisibilityInput = {
    /**
     * The key of a metafield to make visible in the Storefront API.
     */
    key: BaseTypes.String;

    /**
     * The namespace of a metafield to make visible in the Storefront API. If omitted the app reserved namespace will be used.
     */
    namespace?: BaseTypes.String | null;

    /**
     * The owner type of a metafield to make visible in the Storefront API.
     */
    ownerType: BaseTypes.MetafieldOwnerType;
};

export type MetafieldsSetInput = {
    /**
     * The `compareDigest` value obtained from a previous query. Provide this with updates to ensure the metafield is modified safely.
     */
    compareDigest?: BaseTypes.String | null;

    /**
     * The unique identifier for a metafield within its namespace.
     *
     * Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.
     */
    key: BaseTypes.String;

    /**
     * The container for a group of metafields that the metafield is or will be associated with. Used in tandem
     * with `key` to lookup a metafield on a resource, preventing conflicts with other metafields with the
     * same `key`. If omitted the app-reserved namespace will be used.
     *
     * Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.
     */
    namespace?: BaseTypes.String | null;

    /**
     * The unique ID of the resource that the metafield is attached to.
     */
    ownerId: BaseTypes.ID;

    /**
     * The type of data that is stored in the metafield.
     * The type must be one of the [supported types](https://shopify.dev/apps/metafields/types).
     *
     * Required when there is no corresponding definition for the given `namespace`, `key`, and
     * owner resource type (derived from `ownerId`).
     */
    type?: BaseTypes.String | null;

    /**
     * The data stored in the metafield. Always stored as a string, regardless of the metafield's type.
     */
    value: BaseTypes.String;
};

export type MetaobjectAccessInput = {
    /**
     * The access permitted on the Admin API.
     */
    admin?: BaseTypes.MetaobjectAdminAccess | null;

    /**
     * The access permitted on the Storefront API.
     */
    storefront?: BaseTypes.MetaobjectStorefrontAccess | null;
};

export type MetaobjectBulkDeleteWhereCondition = {
    /**
     * A list of metaobjects IDs to delete.
     */
    ids?: Array<BaseTypes.ID> | null;

    /**
     * Deletes all metaobjects with the specified `type`.
     */
    type?: BaseTypes.String | null;
};

export type MetaobjectCapabilityCreateInput = {
    /**
     * The input for enabling the Online Store capability.
     */
    onlineStore?: MetaobjectCapabilityOnlineStoreInput | null;

    /**
     * The input for enabling the publishable capability.
     */
    publishable?: MetaobjectCapabilityPublishableInput | null;

    /**
     * The input for enabling the renderable capability.
     */
    renderable?: MetaobjectCapabilityRenderableInput | null;

    /**
     * The input for enabling the translatable capability.
     */
    translatable?: MetaobjectCapabilityTranslatableInput | null;
};

export type MetaobjectCapabilityDataInput = {
    /**
     * Online Store capability input.
     */
    onlineStore?: MetaobjectCapabilityDataOnlineStoreInput | null;

    /**
     * Publishable capability input.
     */
    publishable?: MetaobjectCapabilityDataPublishableInput | null;
};

export type MetaobjectCapabilityDataOnlineStoreInput = {
    /**
     * The theme template used when viewing the metaobject in a store.
     */
    templateSuffix?: BaseTypes.String | null;
};

export type MetaobjectCapabilityDataPublishableInput = {
    /**
     * The visibility status of this metaobject across all channels.
     */
    status: BaseTypes.MetaobjectStatus;
};

export type MetaobjectCapabilityDefinitionDataOnlineStoreInput = {
    /**
     * Whether to redirect published metaobjects automatically when the URL handle changes.
     */
    createRedirects?: BaseTypes.Boolean | null;

    /**
     * The URL handle for accessing pages of this metaobject type in the Online Store.
     */
    urlHandle: BaseTypes.String;
};

export type MetaobjectCapabilityDefinitionDataRenderableInput = {
    /**
     * The metaobject field used as an alias for the SEO page description.
     */
    metaDescriptionKey?: BaseTypes.String | null;

    /**
     * The metaobject field used as an alias for the SEO page title.
     */
    metaTitleKey?: BaseTypes.String | null;
};

export type MetaobjectCapabilityOnlineStoreInput = {
    /**
     * The data associated with the Online Store capability.
     */
    data?: MetaobjectCapabilityDefinitionDataOnlineStoreInput | null;

    /**
     * Indicates whether the capability should be enabled or disabled.
     */
    enabled: BaseTypes.Boolean;
};

export type MetaobjectCapabilityPublishableInput = {
    /**
     * Indicates whether the capability should be enabled or disabled.
     */
    enabled: BaseTypes.Boolean;
};

export type MetaobjectCapabilityRenderableInput = {
    /**
     * The data associated with the renderable capability.
     */
    data?: MetaobjectCapabilityDefinitionDataRenderableInput | null;

    /**
     * Indicates whether the capability should be enabled or disabled.
     */
    enabled: BaseTypes.Boolean;
};

export type MetaobjectCapabilityTranslatableInput = {
    /**
     * Indicates whether the capability should be enabled or disabled.
     */
    enabled: BaseTypes.Boolean;
};

export type MetaobjectCapabilityUpdateInput = {
    /**
     * The input for enabling the Online Store capability.
     */
    onlineStore?: MetaobjectCapabilityOnlineStoreInput | null;

    /**
     * The input for updating the publishable capability.
     */
    publishable?: MetaobjectCapabilityPublishableInput | null;

    /**
     * The input for enabling the renderable capability.
     */
    renderable?: MetaobjectCapabilityRenderableInput | null;

    /**
     * The input for updating the translatable capability.
     */
    translatable?: MetaobjectCapabilityTranslatableInput | null;
};

export type MetaobjectCreateInput = {
    /**
     * Capabilities for the metaobject.
     */
    capabilities?: MetaobjectCapabilityDataInput | null;

    /**
     * Values for fields. These are mapped by key to fields of the metaobject definition.
     */
    fields?: Array<MetaobjectFieldInput> | null;

    /**
     * A unique handle for the metaobject. This value is auto-generated when omitted.
     */
    handle?: BaseTypes.String | null;

    /**
     * The type of the metaobject. Must match an existing metaobject definition type.
     */
    type: BaseTypes.String;
};

export type MetaobjectDefinitionCreateInput = {
    /**
     * Access configuration for the metaobjects created with this definition.
     */
    access?: MetaobjectAccessInput | null;

    /**
     * The capabilities of the metaobject definition.
     */
    capabilities?: MetaobjectCapabilityCreateInput | null;

    /**
     * An administrative description of the definition.
     */
    description?: BaseTypes.String | null;

    /**
     * The key of a field to reference as the display name for metaobjects of this type.
     */
    displayNameKey?: BaseTypes.String | null;

    /**
     * A set of field definitions to create on this metaobject definition.
     */
    fieldDefinitions: Array<MetaobjectFieldDefinitionCreateInput>;

    /**
     * A human-readable name for the definition. This can be changed at any time.
     */
    name?: BaseTypes.String | null;

    /**
     * The type of the metaobject definition. This can't be changed.
     *
     * Must be 3-255 characters long and only contain alphanumeric, hyphen, and underscore characters.
     */
    type: BaseTypes.String;
};

export type MetaobjectDefinitionUpdateInput = {
    /**
     * Access configuration for the metaobjects created with this definition.
     */
    access?: MetaobjectAccessInput | null;

    /**
     * The capabilities of the metaobject definition.
     */
    capabilities?: MetaobjectCapabilityUpdateInput | null;

    /**
     * An administrative description of the definition.
     */
    description?: BaseTypes.String | null;

    /**
     * The key of a metafield to reference as the display name for objects of this type.
     */
    displayNameKey?: BaseTypes.String | null;

    /**
     * A set of operations for modifying field definitions.
     */
    fieldDefinitions?: Array<MetaobjectFieldDefinitionOperationInput> | null;

    /**
     * A human-readable name for the definition.
     */
    name?: BaseTypes.String | null;

    /**
     * Whether the field order should be reset while updating.
     * If `true`, then the order is assigned based on submitted fields followed by alphabetized field omissions.
     * If `false`, then no changes are made to the existing field order and new fields are appended at the end.
     */
    resetFieldOrder?: BaseTypes.Boolean | null;
};

export type MetaobjectFieldDefinitionCreateInput = {
    /**
     * An administrative description of the field.
     */
    description?: BaseTypes.String | null;

    /**
     * The key of the new field definition. This can't be changed.
     *
     * Must be 2-64 characters long and only contain alphanumeric, hyphen, and underscore characters.
     */
    key: BaseTypes.String;

    /**
     * A human-readable name for the field. This can be changed at any time.
     */
    name?: BaseTypes.String | null;

    /**
     * Whether metaobjects require a saved value for the field.
     */
    required?: BaseTypes.Boolean | null;

    /**
     * The metafield type applied to values of the field.
     */
    type: BaseTypes.String;

    /**
     * Custom validations that apply to values assigned to the field.
     */
    validations?: Array<MetafieldDefinitionValidationInput> | null;
};

export type MetaobjectFieldDefinitionDeleteInput = {
    /**
     * The key of the field definition to delete.
     */
    key: BaseTypes.String;
};

export type MetaobjectFieldDefinitionOperationInput = {
    /**
     * The input fields for creating a metaobject field definition.
     */
    create?: MetaobjectFieldDefinitionCreateInput | null;

    /**
     * The input fields for deleting a metaobject field definition.
     */
    delete?: MetaobjectFieldDefinitionDeleteInput | null;

    /**
     * The input fields for updating a metaobject field definition.
     */
    update?: MetaobjectFieldDefinitionUpdateInput | null;
};

export type MetaobjectFieldDefinitionUpdateInput = {
    /**
     * An administrative description of the field.
     */
    description?: BaseTypes.String | null;

    /**
     * The key of the field definition to update.
     */
    key: BaseTypes.String;

    /**
     * A human-readable name for the field.
     */
    name?: BaseTypes.String | null;

    /**
     * Whether metaobjects require a saved value for the field.
     */
    required?: BaseTypes.Boolean | null;

    /**
     * Custom validations that apply to values assigned to the field.
     */
    validations?: Array<MetafieldDefinitionValidationInput> | null;
};

export type MetaobjectFieldInput = {
    /**
     * The key of the field.
     */
    key: BaseTypes.String;

    /**
     * The value of the field.
     */
    value: BaseTypes.String;
};

export type MetaobjectHandleInput = {
    /**
     * The handle of the metaobject to create or update.
     */
    handle: BaseTypes.String;

    /**
     * The type of the metaobject. Must match an existing metaobject definition type.
     */
    type: BaseTypes.String;
};

export type MetaobjectUpdateInput = {
    /**
     * Capabilities for the metaobject.
     */
    capabilities?: MetaobjectCapabilityDataInput | null;

    /**
     * Values for fields. These are mapped by key to fields of the metaobject definition.
     */
    fields?: Array<MetaobjectFieldInput> | null;

    /**
     * A unique handle for the metaobject.
     */
    handle?: BaseTypes.String | null;

    /**
     * Whether to create a redirect for the metaobject.
     */
    redirectNewHandle?: BaseTypes.Boolean | null;
};

export type MetaobjectUpsertInput = {
    /**
     * Capabilities for the metaobject.
     */
    capabilities?: MetaobjectCapabilityDataInput | null;

    /**
     * Values for fields. These are mapped by key to fields of the metaobject definition.
     */
    fields?: Array<MetaobjectFieldInput> | null;

    /**
     * The handle of the metaobject.
     */
    handle?: BaseTypes.String | null;
};

export type MobilePlatformApplicationCreateAndroidInput = {
    /**
     * Whether Android App Links are supported by this app.
     */
    appLinksEnabled: BaseTypes.Boolean;

    /**
     * Android application ID.
     */
    applicationId?: BaseTypes.String | null;

    /**
     * The SHA256 fingerprints of the app’s signing certificate.
     */
    sha256CertFingerprints: Array<BaseTypes.String>;
};

export type MobilePlatformApplicationCreateAppleInput = {
    /**
     * The Apple app clip application ID.
     */
    appClipApplicationId?: BaseTypes.String | null;

    /**
     * Whether Apple app clips are enabled for this app.
     */
    appClipsEnabled?: BaseTypes.Boolean | null;

    /**
     * Apple application ID.
     */
    appId?: BaseTypes.String | null;

    /**
     * Whether Apple shared web credentials are enabled for this app.
     */
    sharedWebCredentialsEnabled: BaseTypes.Boolean;

    /**
     * Whether Apple Universal Links are supported by this app.
     */
    universalLinksEnabled: BaseTypes.Boolean;
};

export type MobilePlatformApplicationCreateInput = {
    /**
     * Android based mobile platform application.
     */
    android?: MobilePlatformApplicationCreateAndroidInput | null;

    /**
     * Apple based mobile platform application.
     */
    apple?: MobilePlatformApplicationCreateAppleInput | null;
};

export type MobilePlatformApplicationUpdateAndroidInput = {
    /**
     * Whether Android App Links are supported by this app.
     */
    appLinksEnabled?: BaseTypes.Boolean | null;

    /**
     * Android application ID.
     */
    applicationId?: BaseTypes.String | null;

    /**
     * The SHA256 fingerprints of the app’s signing certificate.
     */
    sha256CertFingerprints?: Array<BaseTypes.String> | null;
};

export type MobilePlatformApplicationUpdateAppleInput = {
    /**
     * The Apple App Clip application ID.
     */
    appClipApplicationId?: BaseTypes.String | null;

    /**
     * Whether Apple App Clips are enabled for this app.
     */
    appClipsEnabled?: BaseTypes.Boolean | null;

    /**
     * Apple application ID.
     */
    appId?: BaseTypes.String | null;

    /**
     * Whether Apple shared web credentials are enabled for this app.
     */
    sharedWebCredentialsEnabled?: BaseTypes.Boolean | null;

    /**
     * Whether Apple Universal Links are supported by this app.
     */
    universalLinksEnabled?: BaseTypes.Boolean | null;
};

export type MobilePlatformApplicationUpdateInput = {
    /**
     * Android based Mobile Platform Application.
     */
    android?: MobilePlatformApplicationUpdateAndroidInput | null;

    /**
     * Apple based Mobile Platform Application.
     */
    apple?: MobilePlatformApplicationUpdateAppleInput | null;
};

export type MoneyInput = {
    /**
     * Decimal money amount.
     */
    amount: BaseTypes.Decimal;

    /**
     * Currency of the money.
     */
    currencyCode: BaseTypes.CurrencyCode;
};

export type MoveInput = {
    /**
     * The ID of the object to be moved.
     */
    id: BaseTypes.ID;

    /**
     * The new position of the object in the set.
     */
    newPosition: BaseTypes.UnsignedInt64;
};

export type ObjectDimensionsInput = {
    /**
     * The height in `unit`s.
     */
    height: BaseTypes.Float;

    /**
     * The length in `unit`s.
     */
    length: BaseTypes.Float;

    /**
     * Unit of measurement for `length`, `width`, and `height`.
     */
    unit: BaseTypes.LengthUnit;

    /**
     * The width in `unit`s.
     */
    width: BaseTypes.Float;
};

export type OptionAndValueInput = {
    /**
     * The linked metafield for the product's option.
     */
    linkedMetafield?: LinkedMetafieldInput | null;

    /**
     * The name of the Product's Option.
     */
    name: BaseTypes.String;

    /**
     * The ID of the option to update. If not present, the option will be created.
     */
    optionId?: BaseTypes.ID | null;

    /**
     * The ordered values of the Product's Option.
     */
    values: Array<BaseTypes.String>;
};

export type OptionCreateInput = {
    /**
     * Specifies the metafield the option is linked to.
     */
    linkedMetafield?: LinkedMetafieldCreateInput | null;

    /**
     * Name of the option.
     */
    name?: BaseTypes.String | null;

    /**
     * Position of the option.
     */
    position?: BaseTypes.Int | null;

    /**
     * Values associated with the option.
     */
    values?: Array<OptionValueCreateInput> | null;
};

export type OptionReorderInput = {
    /**
     * Specifies the product option to reorder by ID.
     */
    id?: BaseTypes.ID | null;

    /**
     * Specifies the product option to reorder by name.
     */
    name?: BaseTypes.String | null;

    /**
     * Values associated with the option.
     */
    values?: Array<OptionValueReorderInput> | null;
};

export type OptionSetInput = {
    /**
     * Specifies the product option to update.
     */
    id?: BaseTypes.ID | null;

    /**
     * Name of the option.
     */
    name?: BaseTypes.String | null;

    /**
     * Position of the option.
     */
    position?: BaseTypes.Int | null;

    /**
     * Value associated with an option.
     */
    values?: Array<OptionValueSetInput> | null;
};

export type OptionUpdateInput = {
    /**
     * Specifies the product option to update.
     */
    id: BaseTypes.ID;

    /**
     * Specifies the metafield the option is linked to.
     */
    linkedMetafield?: LinkedMetafieldUpdateInput | null;

    /**
     * Name of the option.
     */
    name?: BaseTypes.String | null;

    /**
     * Position of the option.
     */
    position?: BaseTypes.Int | null;
};

export type OptionValueCreateInput = {
    /**
     * Metafield value associated with an option.
     */
    linkedMetafieldValue?: BaseTypes.String | null;

    /**
     * Value associated with an option.
     */
    name?: BaseTypes.String | null;
};

export type OptionValueReorderInput = {
    /**
     * Specifies the product option value by ID.
     */
    id?: BaseTypes.ID | null;

    /**
     * Specifies the product option value by name.
     */
    name?: BaseTypes.String | null;
};

export type OptionValueSetInput = {
    /**
     * Specifies the product option value.
     */
    id?: BaseTypes.ID | null;

    /**
     * Value associated with an option.
     */
    name?: BaseTypes.String | null;
};

export type OptionValueUpdateInput = {
    /**
     * Specifies the product option value.
     */
    id: BaseTypes.ID;

    /**
     * Metafield value associated with an option.
     */
    linkedMetafieldValue?: BaseTypes.String | null;

    /**
     * Value associated with an option.
     */
    name?: BaseTypes.String | null;
};

export type OrderCaptureInput = {
    /**
     * The amount to capture. The capture amount can't be greater than the amount of the authorized transaction.
     */
    amount: BaseTypes.Money;

    /**
     * The currency (in ISO format) that's used to capture the order. This must be the presentment currency (the currency used by the customer) and is a required field for orders where the currency and presentment currency differ.
     */
    currency?: BaseTypes.CurrencyCode | null;

    /**
     * Indicates whether this is to be the final capture for the order transaction. Only applies to
     * Shopify Payments authorizations which are multi-capturable. If true, any uncaptured amount from the
     * authorization will be voided after the capture is completed. If false, the authorization will remain open
     * for future captures.
     *
     * For multi-capturable authorizations, this defaults to false if not provided. This field has no effect on
     * authorizations which aren't multi-capturable (can only be captured once), or on other types of
     * transactions.
     */
    finalCapture?: BaseTypes.Boolean | null;

    /**
     * The ID of the order to capture.
     */
    id: BaseTypes.ID;

    /**
     * The ID of the authorized transaction to capture.
     */
    parentTransactionId: BaseTypes.ID;
};

export type OrderCloseInput = {
    /**
     * The ID of the order to close.
     */
    id: BaseTypes.ID;
};

export type OrderEditAddShippingLineInput = {
    /**
     * The price of the shipping line.
     */
    price: MoneyInput;

    /**
     * The title of the shipping line.
     */
    title: BaseTypes.String;
};

export type OrderEditAppliedDiscountInput = {
    /**
     * The description of the discount.
     */
    description?: BaseTypes.String | null;

    /**
     * The value of the discount as a fixed amount.
     */
    fixedValue?: MoneyInput | null;

    /**
     * The value of the discount as a percentage.
     */
    percentValue?: BaseTypes.Float | null;
};

export type OrderEditUpdateShippingLineInput = {
    /**
     * The price of the shipping line.
     */
    price?: MoneyInput | null;

    /**
     * The title of the shipping line.
     */
    title?: BaseTypes.String | null;
};

export type OrderInput = {
    /**
     * A new list of custom attributes for the order. Overwrites the existing custom attributes.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * A new customer email address for the order. Overwrites the existing email address.
     */
    email?: BaseTypes.String | null;

    /**
     * The ID of the order to update.
     */
    id: BaseTypes.ID;

    /**
     * A list of new metafields to add to the existing metafields for the order.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The new contents for the note associated with the order. Overwrites the existing note.
     */
    note?: BaseTypes.String | null;

    /**
     * The new purchase order number for the order.
     */
    poNumber?: BaseTypes.String | null;

    /**
     * The new shipping address for the order. Overwrites the existing shipping address.
     */
    shippingAddress?: MailingAddressInput | null;

    /**
     * A new list of tags for the order. Overwrites the existing tags.
     */
    tags?: Array<BaseTypes.String> | null;
};

export type OrderMarkAsPaidInput = {
    /**
     * The ID of the order to mark as paid.
     */
    id: BaseTypes.ID;
};

export type OrderOpenInput = {
    /**
     * The ID of the order to open.
     */
    id: BaseTypes.ID;
};

export type OrderRiskAssessmentCreateInput = {
    /**
     * The list of facts used to determine the fraud assessment.
     */
    facts: Array<OrderRiskAssessmentFactInput>;

    /**
     * The ID of the order receiving the fraud assessment.
     */
    orderId: BaseTypes.ID;

    /**
     * The risk level of the fraud assessment.
     */
    riskLevel: BaseTypes.RiskAssessmentResult;
};

export type OrderRiskAssessmentFactInput = {
    /**
     * A description of the fact. Large values are truncated to 256 characters.
     */
    description: BaseTypes.String;

    /**
     * Indicates whether the fact is a negative, neutral or positive contributor with regards to risk.
     */
    sentiment: BaseTypes.RiskFactSentiment;
};

export type OrderTransactionInput = {
    /**
     * The amount of money for this transaction.
     */
    amount: BaseTypes.Money;

    /**
     * The payment gateway to use for this transaction.
     */
    gateway: BaseTypes.String;

    /**
     * The kind of transaction.
     */
    kind: BaseTypes.OrderTransactionKind;

    /**
     * The ID of the order associated with the transaction.
     */
    orderId: BaseTypes.ID;

    /**
     * The ID of the optional parent transaction, for example the authorization of a capture.
     */
    parentId?: BaseTypes.ID | null;
};

export type PaymentCustomizationInput = {
    /**
     * The enabled status of the payment customization.
     */
    enabled?: BaseTypes.Boolean | null;

    /**
     * The ID of the function providing the payment customization.
     */
    functionId?: BaseTypes.String | null;

    /**
     * Additional metafields to associate to the payment customization.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The title of the payment customization.
     */
    title?: BaseTypes.String | null;
};

export type PaymentScheduleInput = {
    /**
     * Specifies the date and time when the payment schedule is due. This field must be provided for fixed type payment terms.
     */
    dueAt?: BaseTypes.DateTime | null;

    /**
     * Specifies the date and time that the payment schedule was issued. This field must be provided for net type payment terms.
     */
    issuedAt?: BaseTypes.DateTime | null;
};

export type PaymentTermsCreateInput = {
    /**
     * Specifies the payment schedules for the payment terms.
     */
    paymentSchedules?: Array<PaymentScheduleInput> | null;

    /**
     * Specifies the payment terms template ID used to generate payment terms.
     */
    paymentTermsTemplateId: BaseTypes.ID;
};

export type PaymentTermsDeleteInput = {
    /**
     * The ID of the payment terms being deleted.
     */
    paymentTermsId: BaseTypes.ID;
};

export type PaymentTermsInput = {
    /**
     * Specifies the payment schedules for the payment terms.
     */
    paymentSchedules?: Array<PaymentScheduleInput> | null;

    /**
     * Specifies the ID of the payment terms template.
     * Payment terms templates provide preset configurations to create common payment terms.
     * Refer to the
     * [PaymentTermsTemplate](https://shopify.dev/api/admin-graphql/latest/objects/paymenttermstemplate)
     * object for more details.
     */
    paymentTermsTemplateId?: BaseTypes.ID | null;
};

export type PaymentTermsUpdateInput = {
    /**
     * The attributes used to update the payment terms.
     */
    paymentTermsAttributes: PaymentTermsInput;

    /**
     * The ID of the payment terms being updated.
     */
    paymentTermsId: BaseTypes.ID;
};

export type PreparedFulfillmentOrderLineItemsInput = {
    /**
     * The ID of the fulfillment order.
     */
    fulfillmentOrderId: BaseTypes.ID;
};

export type PriceInput = {
    /**
     * The specific type of calculation done to determine the price of the parent variant.
     * The price is calculated during Bundle creation. Updating a component variant won't recalculate the price.
     */
    calculation?: BaseTypes.PriceCalculationType | null;

    /**
     * The price of the parent product variant. This will be be used if calcualtion is set to 'FIXED'.
     */
    price?: BaseTypes.Money | null;
};

export type PriceListAdjustmentInput = {
    /**
     * The type of price adjustment, such as percentage increase or decrease.
     */
    type: BaseTypes.PriceListAdjustmentType;

    /**
     * The value of the price adjustment as specified by the `type`.
     */
    value: BaseTypes.Float;
};

export type PriceListAdjustmentSettingsInput = {
    /**
     * Determines how adjustments are applied to compare at prices.
     */
    compareAtMode: BaseTypes.PriceListCompareAtMode;
};

export type PriceListCreateInput = {
    /**
     * The ID of the catalog to associate with this price list.If the catalog was already associated with another price list then it will be unlinked.
     */
    catalogId?: BaseTypes.ID | null;

    /**
     * Three letter currency code for fixed prices associated with this price list.
     */
    currency: BaseTypes.CurrencyCode;

    /**
     * The unique name of the price list, used as a human-readable identifier.
     */
    name: BaseTypes.String;

    /**
     * Relative adjustments to other prices.
     */
    parent: PriceListParentCreateInput;
};

export type PriceListParentCreateInput = {
    /**
     * The relative adjustments to other prices.
     */
    adjustment: PriceListAdjustmentInput;

    /**
     * The price list adjustment settings.
     */
    settings?: PriceListAdjustmentSettingsInput | null;
};

export type PriceListParentUpdateInput = {
    /**
     * The relative adjustments to other prices..
     */
    adjustment: PriceListAdjustmentInput;

    /**
     * The price list adjustment settings.
     */
    settings?: PriceListAdjustmentSettingsInput | null;
};

export type PriceListPriceInput = {
    /**
     * The compare-at price of the product variant on this price list.
     */
    compareAtPrice?: MoneyInput | null;

    /**
     * The price of the product variant on this price list.
     */
    price: MoneyInput;

    /**
     * The product variant ID associated with the price list price.
     */
    variantId: BaseTypes.ID;
};

export type PriceListProductPriceInput = {
    /**
     * The price of the product to use for all variants with its currency.
     */
    price: MoneyInput;

    /**
     * Specifies the ID of the product to update its variants for.
     */
    productId: BaseTypes.ID;
};

export type PriceListUpdateInput = {
    /**
     * The ID of the catalog to associate with this price list.
     */
    catalogId?: BaseTypes.ID | null;

    /**
     * The three-letter currency code for fixed prices associated with this price list.
     */
    currency?: BaseTypes.CurrencyCode | null;

    /**
     * The unique name of the price list, used as a human-readable identifier.
     */
    name?: BaseTypes.String | null;

    /**
     * Relative adjustments to other prices.
     */
    parent?: PriceListParentUpdateInput | null;
};

export type PriceRuleCustomerSelectionInput = {
    /**
     * List of customers to add to the current list of customers to whom the price rule applies. `savedSearchIds` must be empty.
     */
    customerIdsToAdd?: Array<BaseTypes.ID> | null;

    /**
     * A list of customers to remove from the current list of customers to whom the price rule applies.
     */
    customerIdsToRemove?: Array<BaseTypes.ID> | null;

    /**
     * Whether the price rule applies to all customers.
     */
    forAllCustomers?: BaseTypes.Boolean | null;

    /**
     * List of customer segments that contain the customers to whom the price rule applies. No single customer IDs may be present.
     */
    segmentIds?: Array<BaseTypes.ID> | null;
};

export type PriceRuleDiscountCodeInput = {
    /**
     * The code to use the discount.
     */
    code?: BaseTypes.String | null;
};

export type PriceRuleEntitlementToPrerequisiteQuantityRatioInput = {
    /**
     * The quantity of entitled items in the ratio.
     */
    entitlementQuantity?: BaseTypes.Int | null;

    /**
     * The quantity of prerequisite items in the ratio.
     */
    prerequisiteQuantity?: BaseTypes.Int | null;
};

export type PriceRuleInput = {
    /**
     * The maximum number of times that the price rule can be allocated onto an order.
     */
    allocationLimit?: BaseTypes.Int | null;

    /**
     * The method by which the price rule's value is allocated to its entitled items.
     */
    allocationMethod?: BaseTypes.PriceRuleAllocationMethod | null;

    /**
     * The
     * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
     * that you can use in combination with
     * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
     */
    combinesWith?: DiscountCombinesWithInput | null;

    /**
     * The customers that can use this price rule.
     */
    customerSelection?: PriceRuleCustomerSelectionInput | null;

    /**
     * The items to which the price rule applies.
     */
    itemEntitlements?: PriceRuleItemEntitlementsInput | null;

    /**
     * The items required for the price rule to be applicable.
     */
    itemPrerequisites?: PriceRuleItemPrerequisitesInput | null;

    /**
     * Whether the price rule can be applied only once per customer.
     */
    oncePerCustomer?: BaseTypes.Boolean | null;

    /**
     * The number of the entitled items must fall within this range for the price rule to be applicable.
     */
    prerequisiteQuantityRange?: PriceRuleQuantityRangeInput | null;

    /**
     * The shipping cost must fall within this range for the price rule to be applicable.
     */
    prerequisiteShippingPriceRange?: PriceRuleMoneyRangeInput | null;

    /**
     * The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable.
     */
    prerequisiteSubtotalRange?: PriceRuleMoneyRangeInput | null;

    /**
     * Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.
     */
    prerequisiteToEntitlementQuantityRatio?: PriceRulePrerequisiteToEntitlementQuantityRatioInput | null;

    /**
     * The shipping lines to which the price rule applies.
     */
    shippingEntitlements?: PriceRuleShippingEntitlementsInput | null;

    /**
     * The type of lines (line_item or shipping_line) to which the price rule applies.
     */
    target?: BaseTypes.PriceRuleTarget | null;

    /**
     * Title of the price rule.
     */
    title?: BaseTypes.String | null;

    /**
     * The maximum number of times that the price rule can be used in total.
     */
    usageLimit?: BaseTypes.Int | null;

    /**
     * PriceRuleValidityPeriod for the price rule.
     */
    validityPeriod?: PriceRuleValidityPeriodInput | null;

    /**
     * The value of the price rule.
     */
    value?: PriceRuleValueInput | null;
};

export type PriceRuleItemEntitlementsInput = {
    /**
     * The collections to which the price rule applies.
     */
    collectionIds?: Array<BaseTypes.ID> | null;

    /**
     * The products to which the price rule applies.
     */
    productIds?: Array<BaseTypes.ID> | null;

    /**
     * The product variants to which the price rule applies.
     */
    productVariantIds?: Array<BaseTypes.ID> | null;

    /**
     * Whether the price rule applies to all items.
     */
    targetAllLineItems?: BaseTypes.Boolean | null;
};

export type PriceRuleItemPrerequisitesInput = {
    /**
     * The collections needed for the price rule to be applied.
     */
    collectionIds?: Array<BaseTypes.ID> | null;

    /**
     * The products needed for the price rule to be applied.
     */
    productIds?: Array<BaseTypes.ID> | null;

    /**
     * The product variants needed for the price rule to be applied.
     */
    productVariantIds?: Array<BaseTypes.ID> | null;
};

export type PriceRuleMoneyRangeInput = {
    /**
     * The lower bound of the money range.
     */
    greaterThan?: BaseTypes.Money | null;

    /**
     * The lower or equal bound of the money range.
     */
    greaterThanOrEqualTo?: BaseTypes.Money | null;

    /**
     * The upper bound of the money range.
     */
    lessThan?: BaseTypes.Money | null;

    /**
     * The upper or equal bound of the money range.
     */
    lessThanOrEqualTo?: BaseTypes.Money | null;
};

export type PriceRulePrerequisiteToEntitlementQuantityRatioInput = {
    /**
     * The quantity of entitled items in the ratio.
     */
    entitlementQuantity?: BaseTypes.Int | null;

    /**
     * The quantity of prerequisite items in the ratio.
     */
    prerequisiteQuantity?: BaseTypes.Int | null;
};

export type PriceRuleQuantityRangeInput = {
    /**
     * The lower bound of the quantity range.
     */
    greaterThan?: BaseTypes.Int | null;

    /**
     * The lower or equal bound of the quantity range.
     */
    greaterThanOrEqualTo?: BaseTypes.Int | null;

    /**
     * The upper bound of the quantity range.
     */
    lessThan?: BaseTypes.Int | null;

    /**
     * The upper or equal bound of the quantity range.
     */
    lessThanOrEqualTo?: BaseTypes.Int | null;
};

export type PriceRuleShippingEntitlementsInput = {
    /**
     * The codes for the countries to which the price rule applies to.
     */
    countryCodes?: Array<BaseTypes.CountryCode> | null;

    /**
     * Whether the price rule is applicable to countries that haven't been defined in the shop's shipping zones.
     */
    includeRestOfWorld?: BaseTypes.Boolean | null;

    /**
     * Whether the price rule applies to all shipping lines.
     */
    targetAllShippingLines?: BaseTypes.Boolean | null;
};

export type PriceRuleValidityPeriodInput = {
    /**
     * The time after which the price rule becomes invalid.
     */
    end?: BaseTypes.DateTime | null;

    /**
     * The time after which the price rule is valid.
     */
    start: BaseTypes.DateTime;
};

export type PriceRuleValueInput = {
    /**
     * The fixed amount value of the price rule.
     */
    fixedAmountValue?: BaseTypes.Money | null;

    /**
     * The percentage value of the price rule.
     */
    percentageValue?: BaseTypes.Float | null;
};

export type PrivateMetafieldDeleteInput = {
    /**
     * The key of the private metafield.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the private metafield.
     */
    namespace: BaseTypes.String;

    /**
     * The ID of the resource that owns the metafield. If the field is blank, then the `Shop` resource owns the metafield.
     */
    owner?: BaseTypes.ID | null;
};

export type PrivateMetafieldInput = {
    /**
     * The key of the private metafield.
     */
    key: BaseTypes.String;

    /**
     * The namespace of the private metafield.
     */
    namespace: BaseTypes.String;

    /**
     * The resource that owns the metafield. If the field is blank, then the `Shop` resource owns the metafield.
     */
    owner?: BaseTypes.ID | null;

    /**
     * The `value` and `valueType` of the private metafield, wrapped in a `ValueInput` object.
     */
    valueInput: PrivateMetafieldValueInput;
};

export type PrivateMetafieldValueInput = {
    /**
     * The value of a private metafield.
     */
    value: BaseTypes.String;

    /**
     * Represents the private metafield value type.
     */
    valueType: BaseTypes.PrivateMetafieldValueType;
};

export type ProductAppendImagesInput = {
    /**
     * The ID of the product.
     */
    id: BaseTypes.ID;

    /**
     * A list of images to be appended to the product.
     */
    images: Array<ImageInput>;
};

export type ProductBundleComponentInput = {
    /**
     * The options to use in the component product, and the values for the option.
     */
    optionSelections: Array<ProductBundleComponentOptionSelectionInput>;

    /**
     * The ID of the component product to add to the bundle product.
     */
    productId: BaseTypes.ID;

    /**
     * The quantity of the component product to add to the bundle product. This field can't exceed 2000.
     */
    quantity?: BaseTypes.Int | null;

    /**
     * New option to be created on the bundle parent that enables the buyer to select different quantities for
     * this component (e.g. two-pack, three-pack). Can only be used if quantity isn't set.
     */
    quantityOption?: ProductBundleComponentQuantityOptionInput | null;
};

export type ProductBundleComponentOptionSelectionInput = {
    /**
     * The ID of the option present on the component product.
     */
    componentOptionId: BaseTypes.ID;

    /**
     * The name to create for this option on the parent product.
     */
    name: BaseTypes.String;

    /**
     * Array of selected option values.
     */
    values: Array<BaseTypes.String>;
};

export type ProductBundleComponentQuantityOptionInput = {
    /**
     * The option name to create on the parent product.
     */
    name: BaseTypes.String;

    /**
     * Array of option values.
     */
    values: Array<ProductBundleComponentQuantityOptionValueInput>;
};

export type ProductBundleComponentQuantityOptionValueInput = {
    /**
     * The name associated with the option, e.g. one-pack, two-pack.
     */
    name: BaseTypes.String;

    /**
     * How many of the variant will be included for the option value (e.g. two-pack has quantity 2).
     */
    quantity: BaseTypes.Int;
};

export type ProductBundleCreateInput = {
    /**
     * The component products to bundle with the bundle product.
     */
    components: Array<ProductBundleComponentInput>;

    /**
     * The title of the product to create.
     */
    title: BaseTypes.String;
};

export type ProductBundleUpdateInput = {
    /**
     * The components to update existing ones. If none provided, no changes occur. Note: This replaces, not adds to, current components.
     */
    components?: Array<ProductBundleComponentInput> | null;

    /**
     * The ID of the componentized product to update.
     */
    productId: BaseTypes.ID;

    /**
     * The title to rename the componentized product to, if provided.
     */
    title?: BaseTypes.String | null;
};

export type ProductCategoryInput = {
    /**
     * The ID of the node in the Shopify taxonomy that represents the product category.
     */
    productTaxonomyNodeId: BaseTypes.ID;
};

export type ProductClaimOwnershipInput = {
    /**
     * Claiming ownership of bundles lets the app render a custom UI for the bundles' card on the
     * products details page in the Shopify admin.
     *
     * Bundle ownership can only be claimed when creating the product. If you create `ProductVariantComponents`
     * in any of its product variants, then the bundle ownership is automatically assigned to the app making the call.
     *
     * [Learn more](https://shopify.dev/docs/apps/selling-strategies/bundles/product-config).
     */
    bundles?: BaseTypes.Boolean | null;
};

export type ProductDeleteInput = {
    /**
     * The ID of the product.
     */
    id: BaseTypes.ID;
};

export type ProductDuplicateAsyncInput = {
    /**
     * Specifies whether or not to duplicate images.
     */
    includeImages?: BaseTypes.Boolean | null;

    /**
     * Specifies whether or not to duplicate translations.
     */
    includeTranslations?: BaseTypes.Boolean | null;

    /**
     * The new status of the product. If no value is provided the status will be inherited from the original product.
     */
    newStatus?: BaseTypes.ProductStatus | null;

    /**
     * The new title of the product.
     */
    newTitle: BaseTypes.String;

    /**
     * The ID of the product to be duplicated.
     */
    productId: BaseTypes.ID;
};

export type ProductFeedInput = {
    /**
     * The country of the product feed.
     */
    country: BaseTypes.CountryCode;

    /**
     * The language of the product feed.
     */
    language: BaseTypes.LanguageCode;
};

export type ProductInput = {
    /**
     * The ID of the [category](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17)
     * that's associated with the product.
     */
    category?: BaseTypes.ID | null;

    /**
     * The input field to enable an app to provide additional product features.
     * For example, you can specify
     * [`bundles: true`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput#field-bundles)
     * in the `claimOwnership` field to let an app add a
     * [product configuration extension](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-merchant-config-ui).
     */
    claimOwnership?: ProductClaimOwnershipInput | null;

    /**
     * A list of collection IDs to associate with the product.
     */
    collectionsToJoin?: Array<BaseTypes.ID> | null;

    /**
     * The collection IDs to disassociate from the product.
     */
    collectionsToLeave?: Array<BaseTypes.ID> | null;

    /**
     * The role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).
     * You can specify this field only when you create a product.
     */
    combinedListingRole?: BaseTypes.CombinedListingsRole | null;

    /**
     * The [custom product type](https://help.shopify.com/manual/products/details/product-type)
     * that merchants define.
     */
    customProductType?: BaseTypes.String | null;

    /**
     * The description of the product, with HTML tags.
     * For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.
     */
    descriptionHtml?: BaseTypes.String | null;

    /**
     * Whether the product is a gift card.
     */
    giftCard?: BaseTypes.Boolean | null;

    /**
     * The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a gift card in a store.
     */
    giftCardTemplateSuffix?: BaseTypes.String | null;

    /**
     * A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
     * The handle is used in the online store URL for the product.
     * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
     */
    handle?: BaseTypes.String | null;

    /**
     * The product's ID.
     *
     * If you're creating a product, then you don't need to pass the `id` as input to the
     * [`productCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate) mutation.
     * If you're updating a product, then you do need to pass the `id` as input to the
     * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate) mutation
     * to identify which product you want to update.
     */
    id?: BaseTypes.ID | null;

    /**
     * The [custom fields](https://shopify.dev/docs/apps/build/custom-data) to associate with the product
     * for the purposes of adding and storing additional information.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * A list of product options and option values. Maximum product options: three. There's no limit on the number of option values.
     * This input is supported only with the [`productCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)
     * mutation.
     */
    productOptions?: Array<OptionCreateInput> | null;

    /**
     * The [product type](https://help.shopify.com/manual/products/details/product-type)
     * that merchants define.
     */
    productType?: BaseTypes.String | null;

    /**
     * Whether a redirect is required after a new handle has been provided.
     * If `true`, then the old handle is redirected to the new one automatically.
     */
    redirectNewHandle?: BaseTypes.Boolean | null;

    /**
     * Whether the product can only be purchased with
     * a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).
     * Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores.
     * If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels except the online store.
     */
    requiresSellingPlan?: BaseTypes.Boolean | null;

    /**
     * The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
     * that are associated with a product.
     */
    seo?: SEOInput | null;

    /**
     * The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status),
     * which controls visibility across all sales channels.
     */
    status?: BaseTypes.ProductStatus | null;

    /**
     * A comma-separated list of searchable keywords that are
     * associated with the product. For example, a merchant might apply the `sports`
     * and `summer` tags to products that are associated with sportwear for summer.
     *
     * Updating `tags` overwrites any existing tags that were previously added to the product.
     * To add new tags without overwriting existing tags, use the
     * [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a product in a store.
     */
    templateSuffix?: BaseTypes.String | null;

    /**
     * The name for the product that displays to customers. The title is used to construct the product's handle.
     * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
     */
    title?: BaseTypes.String | null;

    /**
     * The name of the product's vendor.
     */
    vendor?: BaseTypes.String | null;
};

export type ProductPublicationInput = {
    /**
     * ID of the publication.
     */
    publicationId?: BaseTypes.ID | null;

    /**
     * The date and time that the product was (or will be) published.
     */
    publishDate?: BaseTypes.DateTime | null;
};

export type ProductPublishInput = {
    /**
     * The product to create or update publications for.
     */
    id: BaseTypes.ID;

    /**
     * The publication that the product is published to.
     */
    productPublications: Array<ProductPublicationInput>;
};

export type ProductResourceFeedbackInput = {
    /**
     * The date and time when the payload is constructed.
     * Used to help determine whether incoming feedback is outdated compared to feedback already received, and if it should be ignored upon arrival.
     */
    feedbackGeneratedAt: BaseTypes.DateTime;

    /**
     * A concise set of copy strings to be displayed to merchants. Used to guide merchants in resolving problems that your app encounters when trying to make use of their products.
     * You can specify up to four messages. Each message is limited to 100 characters.
     */
    messages?: Array<BaseTypes.String> | null;

    /**
     * The ID of the product that the feedback was created on.
     */
    productId: BaseTypes.ID;

    /**
     * The timestamp of the product associated with the feedback.
     */
    productUpdatedAt: BaseTypes.DateTime;

    /**
     * Whether the merchant needs to take action on the product.
     */
    state: BaseTypes.ResourceFeedbackState;
};

export type ProductSetInput = {
    /**
     * The ID of the [category](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17)
     * that's associated with the product.
     */
    category?: BaseTypes.ID | null;

    /**
     * The input field to enable an app to provide additional product features.
     * For example, you can specify
     * [`bundles: true`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput#field-bundles)
     * in the `claimOwnership` field to let an app add a
     * [product configuration extension](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-merchant-config-ui).
     */
    claimOwnership?: ProductClaimOwnershipInput | null;

    /**
     * The IDs of collections that this product will be a member of.
     */
    collections?: Array<BaseTypes.ID> | null;

    /**
     * The role of the product in a product grouping. It can only be set during creation.
     */
    combinedListingRole?: BaseTypes.CombinedListingsRole | null;

    /**
     * The [custom product type](https://help.shopify.com/manual/products/details/product-type)
     * that merchants define.
     */
    customProductType?: BaseTypes.String | null;

    /**
     * The description of the product, with HTML tags.
     * For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.
     */
    descriptionHtml?: BaseTypes.String | null;

    /**
     * Whether the product is a gift card.
     */
    giftCard?: BaseTypes.Boolean | null;

    /**
     * The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a gift card in a store.
     */
    giftCardTemplateSuffix?: BaseTypes.String | null;

    /**
     * A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
     * The handle is used in the online store URL for the product.
     * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
     */
    handle?: BaseTypes.String | null;

    /**
     * The product's ID.
     *
     * If you're creating a product, then you don't need to pass the `id` as input to the
     * [`productCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate) mutation.
     * If you're updating a product, then you do need to pass the `id` as input to the
     * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate) mutation
     * to identify which product you want to update.
     */
    id?: BaseTypes.ID | null;

    /**
     * The metafields to associate with this product.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * List of custom product options and option values (maximum of 3 per product).
     */
    productOptions?: Array<OptionSetInput> | null;

    /**
     * The [product type](https://help.shopify.com/manual/products/details/product-type)
     * that merchants define.
     */
    productType?: BaseTypes.String | null;

    /**
     * Whether a redirect is required after a new handle has been provided.
     * If `true`, then the old handle is redirected to the new one automatically.
     */
    redirectNewHandle?: BaseTypes.Boolean | null;

    /**
     * Whether the product can only be purchased with a selling plan (subscription). Products that are sold exclusively on subscription can only be created on online stores. If set to `true` on an already existing product, then the product will be marked unavailable on channels that don't support subscriptions.
     */
    requiresSellingPlan?: BaseTypes.Boolean | null;

    /**
     * The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
     * that are associated with a product.
     */
    seo?: SEOInput | null;

    /**
     * The status of the product.
     */
    status?: BaseTypes.ProductStatus | null;

    /**
     * A comma-separated list of searchable keywords that are
     * associated with the product. For example, a merchant might apply the `sports`
     * and `summer` tags to products that are associated with sportwear for summer.
     *
     * Updating `tags` overwrites any existing tags that were previously added to the product.
     * To add new tags without overwriting existing tags, use the
     * [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     */
    tags?: Array<BaseTypes.String> | null;

    /**
     * The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a product in a store.
     */
    templateSuffix?: BaseTypes.String | null;

    /**
     * The name for the product that displays to customers. The title is used to construct the product's handle.
     * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
     */
    title?: BaseTypes.String | null;

    /**
     * A list of variants associated with the product.
     */
    variants?: Array<ProductVariantSetInput> | null;

    /**
     * The name of the product's vendor.
     */
    vendor?: BaseTypes.String | null;
};

export type ProductUnpublishInput = {
    /**
     * The ID of the product to create or update publications for.
     */
    id: BaseTypes.ID;

    /**
     * The channels to unpublish the product from.
     */
    productPublications: Array<ProductPublicationInput>;
};

export type ProductVariantAppendMediaInput = {
    /**
     * Specifies the media to append to the variant.
     */
    mediaIds: Array<BaseTypes.ID>;

    /**
     * Specifies the variant to which media will be appended.
     */
    variantId: BaseTypes.ID;
};

export type ProductVariantDetachMediaInput = {
    /**
     * Specifies the media to detach from the variant.
     */
    mediaIds: Array<BaseTypes.ID>;

    /**
     * Specifies the variant from which media will be detached.
     */
    variantId: BaseTypes.ID;
};

export type ProductVariantGroupRelationshipInput = {
    /**
     * The ID of the product variant that's a component of the bundle.
     */
    id: BaseTypes.ID;

    /**
     * The number of units of the product variant required to construct one unit of the bundle.
     */
    quantity: BaseTypes.Int;
};

export type ProductVariantInput = {
    /**
     * The value of the barcode associated with the product.
     */
    barcode?: BaseTypes.String | null;

    /**
     * The compare-at price of the variant.
     */
    compareAtPrice?: BaseTypes.Money | null;

    /**
     * Specifies the product variant to update or create a new variant if absent.
     */
    id?: BaseTypes.ID | null;

    /**
     * The inventory item associated with the variant. Used for unit cost.
     */
    inventoryItem?: InventoryItemInput | null;

    /**
     * Whether customers are allowed to place an order for the product variant when it's out of stock. Defaults to `DENY`.
     */
    inventoryPolicy?: BaseTypes.ProductVariantInventoryPolicy | null;

    /**
     * The inventory quantities at each location where the variant is stocked. Supported as input with the `productVariantCreate` mutation only.
     */
    inventoryQuantities?: Array<InventoryLevelInput> | null;

    /**
     * The ID of the media to associate with the variant. This field can only be used in mutations that create media images and must match one of the IDs being created on the product. This field only accepts one value.
     */
    mediaId?: BaseTypes.ID | null;

    /**
     * The URL of the media to associate with the variant. This field can only be used in mutations that create media images and must match one of the URLs being created on the product. This field only accepts one value.
     */
    mediaSrc?: Array<BaseTypes.String> | null;

    /**
     * Additional customizable information about the product variant.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The custom properties that a shop owner uses to define product variants.
     */
    options?: Array<BaseTypes.String> | null;

    /**
     * The order of the product variant in the list of product variants. The first position in the list is 1.
     */
    position?: BaseTypes.Int | null;

    /**
     * The price of the variant.
     */
    price?: BaseTypes.Money | null;

    /**
     * The product to create the variant for. Used as input only to the `productVariantCreate` mutation.
     */
    productId?: BaseTypes.ID | null;

    /**
     * Whether a product variant requires components. The default value is `false`.
     * If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted
     * from channels that don't support bundles.
     */
    requiresComponents?: BaseTypes.Boolean | null;

    /**
     * The tax code associated with the variant.
     */
    taxCode?: BaseTypes.String | null;

    /**
     * Whether the variant is taxable.
     */
    taxable?: BaseTypes.Boolean | null;
};

export type ProductVariantPositionInput = {
    /**
     * Specifies the ID of the product variant to update.
     */
    id: BaseTypes.ID;

    /**
     * The order of the product variant in the list of product variants. The first position in the list is 1.
     */
    position: BaseTypes.Int;
};

export type ProductVariantRelationshipUpdateInput = {
    /**
     * A product ID which contains product variants that have relationships with other variants.
     */
    parentProductId?: BaseTypes.ID | null;

    /**
     * The product variant ID representing that which contains the relationships with other variants.
     */
    parentProductVariantId?: BaseTypes.ID | null;

    /**
     * Method in which to update the price of the parent product variant.
     */
    priceInput?: PriceInput | null;

    /**
     * The product variants and associated quantitites to add to the product variant.
     */
    productVariantRelationshipsToCreate?: Array<ProductVariantGroupRelationshipInput> | null;

    /**
     * The bundle component product variants to be removed from the product variant.
     */
    productVariantRelationshipsToRemove?: Array<BaseTypes.ID> | null;

    /**
     * The product variants and associated quantitites to update in specified product variant.
     */
    productVariantRelationshipsToUpdate?: Array<ProductVariantGroupRelationshipInput> | null;

    /**
     * Whether to remove all components from the product variant. The default value is `false`.
     */
    removeAllProductVariantRelationships?: BaseTypes.Boolean | null;
};

export type ProductVariantSetInput = {
    /**
     * The value of the barcode associated with the product.
     */
    barcode?: BaseTypes.String | null;

    /**
     * The compare-at price of the variant.
     */
    compareAtPrice?: BaseTypes.Money | null;

    /**
     * Specifies the product variant to update or create a new variant if absent.
     */
    id?: BaseTypes.ID | null;

    /**
     * The inventory item associated with the variant, used for unit cost.
     */
    inventoryItem?: InventoryItemInput | null;

    /**
     * Whether customers are allowed to place an order for the product variant when it's out of stock. Defaults to `DENY`.
     */
    inventoryPolicy?: BaseTypes.ProductVariantInventoryPolicy | null;

    /**
     * Additional customizable information about the product variant.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The custom properties that a shop owner uses to define product variants.
     */
    optionValues: Array<VariantOptionValueInput>;

    /**
     * The order of the product variant in the list of product variants. The first position in the list is 1.
     */
    position?: BaseTypes.Int | null;

    /**
     * The price of the variant.
     */
    price?: BaseTypes.Money | null;

    /**
     * Whether a product variant requires components. The default value is `false`.
     * If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted
     * from channels that don't support bundles.
     */
    requiresComponents?: BaseTypes.Boolean | null;

    /**
     * The SKU for the variant. Case-sensitive string.
     */
    sku?: BaseTypes.String | null;

    /**
     * The tax code associated with the variant.
     */
    taxCode?: BaseTypes.String | null;

    /**
     * Whether the variant is taxable.
     */
    taxable?: BaseTypes.Boolean | null;
};

export type ProductVariantsBulkInput = {
    /**
     * The value of the barcode associated with the product variant.
     */
    barcode?: BaseTypes.String | null;

    /**
     * The compare-at price of the variant.
     */
    compareAtPrice?: BaseTypes.Money | null;

    /**
     * Specifies the product variant to update or delete.
     */
    id?: BaseTypes.ID | null;

    /**
     * The inventory item associated with the variant, used for unit cost.
     */
    inventoryItem?: InventoryItemInput | null;

    /**
     * Whether customers are allowed to place an order for the variant when it's out of stock. Defaults to `DENY`.
     */
    inventoryPolicy?: BaseTypes.ProductVariantInventoryPolicy | null;

    /**
     * The inventory quantities at each location where the variant is stocked. The number of elements
     * in the array of inventory quantities can't exceed the amount specified for the plan.
     * Supported as input with the `productVariantsBulkCreate` mutation only.
     */
    inventoryQuantities?: Array<InventoryLevelInput> | null;

    /**
     * The ID of the media that's associated with the variant.
     */
    mediaId?: BaseTypes.ID | null;

    /**
     * The URL of the media to associate with the variant.
     */
    mediaSrc?: Array<BaseTypes.String> | null;

    /**
     * The additional customizable information about the product variant.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The custom properties that a shop owner uses to define product variants.
     */
    optionValues?: Array<VariantOptionValueInput> | null;

    /**
     * The price of the variant.
     */
    price?: BaseTypes.Money | null;

    /**
     * The tax code associated with the variant.
     */
    taxCode?: BaseTypes.String | null;

    /**
     * Whether the variant is taxable.
     */
    taxable?: BaseTypes.Boolean | null;
};

export type PubSubWebhookSubscriptionInput = {
    /**
     * A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.
     */
    filter?: BaseTypes.String | null;

    /**
     * The format in which the webhook subscription should send the data.
     */
    format?: BaseTypes.WebhookSubscriptionFormat | null;

    /**
     * The list of fields to be included in the webhook subscription.
     */
    includeFields?: Array<BaseTypes.String> | null;

    /**
     * The list of namespaces for any metafields that should be included in the webhook subscription.
     */
    metafieldNamespaces?: Array<BaseTypes.String> | null;

    /**
     * The Pub/Sub project ID.
     */
    pubSubProject: BaseTypes.String;

    /**
     * The Pub/Sub topic ID.
     */
    pubSubTopic: BaseTypes.String;
};

export type PublicationCreateInput = {
    /**
     * Whether to automatically add newly created products to this publication.
     */
    autoPublish?: BaseTypes.Boolean | null;

    /**
     * The ID of the catalog.
     */
    catalogId?: BaseTypes.ID | null;

    /**
     * Whether to create an empty publication or prepopulate it with all products.
     */
    defaultState?: BaseTypes.PublicationCreateInputPublicationDefaultState | null;
};

export type PublicationInput = {
    /**
     * ID of the publication.
     */
    publicationId?: BaseTypes.ID | null;

    /**
     * The date and time that the resource was published. Setting this to a date in the future will schedule the resource to be published. Only online store channels support future publishing. This field has no effect if you include it in the `publishableUnpublish` mutation.
     */
    publishDate?: BaseTypes.DateTime | null;
};

export type PublicationUpdateInput = {
    /**
     * Whether new products should be automatically published to the publication.
     */
    autoPublish?: BaseTypes.Boolean | null;

    /**
     * A list of publishable IDs to add. The maximum number of publishables to update simultaneously is 50.
     */
    publishablesToAdd?: Array<BaseTypes.ID> | null;

    /**
     * A list of publishable IDs to remove. The maximum number of publishables to update simultaneously is 50.
     */
    publishablesToRemove?: Array<BaseTypes.ID> | null;
};

export type PurchasingCompanyInput = {
    /**
     * ID of the company contact.
     */
    companyContactId: BaseTypes.ID;

    /**
     * ID of the company.
     */
    companyId: BaseTypes.ID;

    /**
     * ID of the company location.
     */
    companyLocationId: BaseTypes.ID;
};

export type PurchasingEntityInput = {
    /**
     * Represents a customer. Null if there's a purchasing company.
     */
    customerId?: BaseTypes.ID | null;

    /**
     * Represents a purchasing company. Null if there's a customer.
     */
    purchasingCompany?: PurchasingCompanyInput | null;
};

export type QuantityPriceBreakInput = {
    /**
     * The minimum required quantity for a variant to qualify for this price.
     */
    minimumQuantity: BaseTypes.Int;

    /**
     * The price of the product variant when its quantity meets the break's minimum quantity.
     */
    price: MoneyInput;

    /**
     * The product variant ID associated with the quantity break.
     */
    variantId: BaseTypes.ID;
};

export type QuantityPricingByVariantUpdateInput = {
    /**
     * A list of fixed prices to add.
     */
    pricesToAdd: Array<PriceListPriceInput>;

    /**
     * A list of variant IDs that identify which fixed prices to remove.
     */
    pricesToDeleteByVariantId: Array<BaseTypes.ID>;

    /**
     * A list of quantity price breaks to add.
     */
    quantityPriceBreaksToAdd: Array<QuantityPriceBreakInput>;

    /**
     * A list of quantity price break IDs that identify which quantity breaks to remove.
     */
    quantityPriceBreaksToDelete: Array<BaseTypes.ID>;

    /**
     * A list of quantity rules to add.
     */
    quantityRulesToAdd: Array<QuantityRuleInput>;

    /**
     * A list of variant IDs that identify which quantity rules to remove.
     */
    quantityRulesToDeleteByVariantId: Array<BaseTypes.ID>;
};

export type QuantityRuleInput = {
    /**
     * The quantity increment.
     */
    increment: BaseTypes.Int;

    /**
     * The maximum quantity.
     */
    maximum?: BaseTypes.Int | null;

    /**
     * The minimum quantity.
     */
    minimum: BaseTypes.Int;

    /**
     * Product variant on which to apply the quantity rule.
     */
    variantId: BaseTypes.ID;
};

export type RefundDutyInput = {
    /**
     * The ID of the duty in the refund.
     */
    dutyId: BaseTypes.ID;

    /**
     * The type of refund for this duty.
     */
    refundType?: BaseTypes.RefundDutyRefundType | null;
};

export type RefundInput = {
    /**
     * The currency that is used to refund the order. This must be the presentment currency, which is the currency used by the customer. This is a required field for orders where the currency and presentment currency differ.
     */
    currency?: BaseTypes.CurrencyCode | null;

    /**
     * An optional note that's attached to the refund.
     */
    note?: BaseTypes.String | null;

    /**
     * Whether to send a refund notification to the customer.
     */
    notify?: BaseTypes.Boolean | null;

    /**
     * The ID of the order that's being refunded.
     */
    orderId: BaseTypes.ID;

    /**
     * A list of duties to refund.
     */
    refundDuties?: Array<RefundDutyInput> | null;

    /**
     * A list of line items to refund.
     */
    refundLineItems?: Array<RefundLineItemInput> | null;

    /**
     * The input fields that are required to reimburse shipping costs.
     */
    shipping?: ShippingRefundInput | null;

    /**
     * A list of transactions involved in the refund.
     */
    transactions?: Array<OrderTransactionInput> | null;
};

export type RefundLineItemInput = {
    /**
     * The ID of the line item in the refund.
     */
    lineItemId: BaseTypes.ID;

    /**
     * The intended location for restocking. If the `restockType` is set to `NO_RESTOCK`, then this value is empty.
     */
    locationId?: BaseTypes.ID | null;

    /**
     * The quantity of the associated line item to be refunded.
     */
    quantity: BaseTypes.Int;

    /**
     * The type of restock for this line item.
     */
    restockType?: BaseTypes.RefundLineItemRestockType | null;
};

export type RefundShippingInput = {
    /**
     * Whether to refund the full shipping amount.
     */
    fullRefund?: BaseTypes.Boolean | null;

    /**
     * The input fields required to refund shipping cost, in the presentment currency of the order.
     * This overrides the `fullRefund` argument.
     * This field defaults to 0.00 when not provided and when the `fullRefund` argument is false.
     */
    shippingRefundAmount?: MoneyInput | null;
};

export type RemoteAuthorizeNetCustomerPaymentProfileInput = {
    /**
     * The customerPaymentProfileId value from the Authorize.net API. Starting on 2025,
     * customer_payment_profile_id will become mandatory for all API versions.
     */
    customerPaymentProfileId?: BaseTypes.String | null;

    /**
     * The customerProfileId value from the Authorize.net API.
     */
    customerProfileId: BaseTypes.String;
};

export type RemoteBraintreePaymentMethodInput = {
    /**
     * The `customer_id` value from the Braintree API.
     */
    customerId: BaseTypes.String;

    /**
     * The `payment_method_token` value from the Braintree API. Starting on 2025,
     * payment_method_token will become mandatory for all API versions.
     */
    paymentMethodToken?: BaseTypes.String | null;
};

export type RemoteStripePaymentMethodInput = {
    /**
     * The customer_id value from the Stripe API.
     */
    customerId: BaseTypes.String;

    /**
     * The payment_method_id value from the Stripe API. Starting on 2025,
     * payment_method_id will become mandatory for all API versions.
     */
    paymentMethodId?: BaseTypes.String | null;
};

export type ResourceFeedbackCreateInput = {
    /**
     * The date and time when the feedback was generated. Used to help determine whether
     * incoming feedback is outdated compared to existing feedback.
     */
    feedbackGeneratedAt: BaseTypes.DateTime;

    /**
     * If the feedback state is `requires_action`, then you can send a string message that communicates the action to be taken by the merchant.
     * The string must be a single message up to 100 characters long and must end with a period.
     * You need to adhere to the message formatting rules or your requests will fail:
     * - `[Explanation of the problem]. [Suggested action].`
     *
     * **Examples:**
     * - `[Your app name]` isn't connected. Connect your account to use this sales channel. `[Learn more]`
     * - `[Your app name]` isn't configured. Agree to the terms and conditions to use this app. `[Learn more]`
     * Both `Your app name` and `Learn more` (a button which directs merchants to your app) are automatically populated in the Shopify admin.
     */
    messages?: Array<BaseTypes.String> | null;

    /**
     * The state of the feedback and whether it requires merchant action.
     */
    state: BaseTypes.ResourceFeedbackState;
};

export type RestockingFeeInput = {
    /**
     * The value of the fee as a percentage.
     */
    percentage: BaseTypes.Float;
};

export type ReturnApproveRequestInput = {
    /**
     * The ID of the return that's being approved.
     */
    id: BaseTypes.ID;
};

export type ReturnDeclineRequestInput = {
    /**
     * The reason why the merchant declined the customer's return request.
     */
    declineReason: BaseTypes.ReturnDeclineReason;

    /**
     * The ID of the return that's being declined.
     */
    id: BaseTypes.ID;
};

export type ReturnInput = {
    /**
     * The new line items to be added to the order.
     */
    exchangeLineItems?: Array<ExchangeLineItemInput> | null;

    /**
     * The ID of the order to be returned.
     */
    orderId: BaseTypes.ID;

    /**
     * The UTC date and time when the return was first solicited by the customer.
     */
    requestedAt?: BaseTypes.DateTime | null;

    /**
     * The return line items list to be handled.
     */
    returnLineItems: Array<ReturnLineItemInput>;

    /**
     * The return shipping fee to capture.
     */
    returnShippingFee?: ReturnShippingFeeInput | null;
};

export type ReturnLineItemInput = {
    /**
     * The ID of the fulfillment line item to be returned.
     * Specifically, this field expects a `FulfillmentLineItem.id`.
     */
    fulfillmentLineItemId: BaseTypes.ID;

    /**
     * The quantity of the item to be returned.
     */
    quantity: BaseTypes.Int;

    /**
     * The restocking fee to capture.
     */
    restockingFee?: RestockingFeeInput | null;

    /**
     * The reason for the item to be returned.
     */
    returnReason: BaseTypes.ReturnReason;

    /**
     * A note about the reason that the item is being returned.
     * Maximum length: 255 characters.
     */
    returnReasonNote?: BaseTypes.String | null;
};

export type ReturnLineItemRemoveFromReturnInput = {
    /**
     * The quantity of the associated return line item to be removed.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the return line item to remove.
     */
    returnLineItemId: BaseTypes.ID;
};

export type ReturnRefundInput = {
    /**
     * Whether to send a refund notification to the customer.
     */
    notifyCustomer?: BaseTypes.Boolean | null;

    /**
     * A list of transactions involved in refunding the return.
     */
    orderTransactions?: Array<ReturnRefundOrderTransactionInput> | null;

    /**
     * A list of duties to refund.
     */
    refundDuties?: Array<RefundDutyInput> | null;

    /**
     * The shipping amount to refund.
     */
    refundShipping?: RefundShippingInput | null;

    /**
     * The ID of the return.
     */
    returnId: BaseTypes.ID;

    /**
     * A list of return line items to refund.
     */
    returnRefundLineItems: Array<ReturnRefundLineItemInput>;
};

export type ReturnRefundLineItemInput = {
    /**
     * The quantity of the return line item to be refunded.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the return line item to be refunded.
     */
    returnLineItemId: BaseTypes.ID;
};

export type ReturnRefundOrderTransactionInput = {
    /**
     * The ID of the parent order transaction. The transaction must be of kind `CAPTURE` or a `SALE`.
     */
    parentId: BaseTypes.ID;

    /**
     * The amount of money for the transaction in the presentment currency of the order.
     */
    transactionAmount: MoneyInput;
};

export type ReturnRequestInput = {
    /**
     * The ID of the order that's being returned.
     */
    orderId: BaseTypes.ID;

    /**
     * The line items that are being handled in the return.
     */
    returnLineItems: Array<ReturnRequestLineItemInput>;

    /**
     * The return shipping fee to capture.
     */
    returnShippingFee?: ReturnShippingFeeInput | null;
};

export type ReturnRequestLineItemInput = {
    /**
     * A note from the customer that describes the item to be returned.
     * For example, the note can communicate issues with the item to the merchant.
     * Maximum length: 300 characters.
     */
    customerNote?: BaseTypes.String | null;

    /**
     * The ID of the fulfillment line item to be returned.
     * Specifically, this field expects a `FulfillmentLineItem.id`.
     */
    fulfillmentLineItemId: BaseTypes.ID;

    /**
     * The quantity of the item that's being returned.
     */
    quantity: BaseTypes.Int;

    /**
     * The restocking fee to capture.
     */
    restockingFee?: RestockingFeeInput | null;

    /**
     * The reason why the line item is being returned.
     */
    returnReason: BaseTypes.ReturnReason;
};

export type ReturnShippingFeeInput = {
    /**
     * The value of the fee as a fixed amount in the presentment currency of the order.
     */
    amount: MoneyInput;
};

export type ReverseDeliveryDisposeInput = {
    /**
     * The final arrangement for the reverse delivery line item.
     */
    dispositionType: BaseTypes.ReverseFulfillmentOrderDispositionType;

    /**
     * The ID of the location where the reverse delivery line item is to be disposed. This is required
     * when the disposition type is RESTOCKED.
     */
    locationId?: BaseTypes.ID | null;

    /**
     * The quantity of the reverse delivery line item to dispose.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the reverse delivery line item.
     */
    reverseDeliveryLineItemId: BaseTypes.ID;
};

export type ReverseDeliveryLabelInput = {
    /**
     * The URL of the label file. If a label file was uploaded to be attached to the delivery, then provide the temporary staged URL.
     */
    fileUrl: BaseTypes.URL;
};

export type ReverseDeliveryLineItemInput = {
    /**
     * The quantity of the item to be included in the delivery.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the related reverse fulfillment order line item.
     */
    reverseFulfillmentOrderLineItemId: BaseTypes.ID;
};

export type ReverseDeliveryTrackingInput = {
    /**
     * The tracking number for the label.
     */
    number?: BaseTypes.String | null;

    /**
     * The tracking URL for the carrier. If the carrier isn't supported by Shopify, then provide the tracking URL of the delivery.
     */
    url?: BaseTypes.URL | null;
};

export type ReverseFulfillmentOrderDisposeInput = {
    /**
     * The final arrangement for the reverse fulfillment order line item.
     */
    dispositionType: BaseTypes.ReverseFulfillmentOrderDispositionType;

    /**
     * The ID of the location where the reverse fulfillment order line item is to be disposed.
     * This is required when the disposition type is RESTOCKED.
     */
    locationId?: BaseTypes.ID | null;

    /**
     * The quantity of the reverse fulfillment order line item to dispose.
     */
    quantity: BaseTypes.Int;

    /**
     * The ID of the reverse fulfillment order line item.
     */
    reverseFulfillmentOrderLineItemId: BaseTypes.ID;
};

export type SEOInput = {
    /**
     * SEO description of the product.
     */
    description?: BaseTypes.String | null;

    /**
     * SEO title of the product.
     */
    title?: BaseTypes.String | null;
};

export type SavedSearchCreateInput = {
    /**
     * A descriptive name of the saved search.
     */
    name: BaseTypes.String;

    /**
     * The query string of a saved search. This includes search terms and filters.
     */
    query: BaseTypes.String;

    /**
     * The type of resource this saved search is searching in.
     */
    resourceType: BaseTypes.SearchResultType;
};

export type SavedSearchDeleteInput = {
    /**
     * ID of the saved search to delete.
     */
    id: BaseTypes.ID;
};

export type SavedSearchUpdateInput = {
    /**
     * ID of the saved search to update.
     */
    id: BaseTypes.ID;

    /**
     * A descriptive name of the saved search.
     */
    name?: BaseTypes.String | null;

    /**
     * The query string of a saved search. This included search terms and filters.
     */
    query?: BaseTypes.String | null;
};

export type ScriptTagInput = {
    /**
     * Whether the Shopify CDN can cache and serve the script tag.
     * If `true`, then the script will be cached and served by the CDN.
     * The cache expires 15 minutes after the script tag is successfully returned.
     * If `false`, then the script is served as is.
     * The default value is `false`.
     */
    cache?: BaseTypes.Boolean | null;

    /**
     * The page or pages on the online store where the script should be included.
     */
    displayScope?: BaseTypes.ScriptTagDisplayScope | null;

    /**
     * The URL of the remote script. For example: `https://example.com/path/to/script.js`.
     */
    src?: BaseTypes.URL | null;
};

export type SelectedVariantOptionInput = {
    /**
     * The metaobject value of the linked metafield.
     */
    linkedMetafieldValue?: BaseTypes.String | null;

    /**
     * The name of the parent product's option.
     */
    name: BaseTypes.String;

    /**
     * The selected option value of the parent product's option.
     */
    value: BaseTypes.String;
};

export type SellingPlanAnchorInput = {
    /**
     * The cutoff day of the anchor.
     *
     * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
     * the days of the week according to ISO 8601, where 1 is Monday.
     *
     * If `type` is MONTHDAY, then the value must be between 1-31.
     *
     * If `type` is YEARDAY, then the value must be `null`.
     *
     * This field should only be set if the cutoff field for the delivery policy is `null`.
     */
    cutoffDay?: BaseTypes.Int | null;

    /**
     * The day of the anchor.
     *
     * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
     * the days of the week according to ISO 8601, where 1 is Monday.
     *
     * If `type` isn't WEEKDAY, then the value must be between 1-31.
     */
    day?: BaseTypes.Int | null;

    /**
     * The month of the anchor. If type is different than YEARDAY, then the value must
     * be `null` or between 1-12.
     */
    month?: BaseTypes.Int | null;

    /**
     * Represents the anchor type, must be one of WEEKDAY, MONTHDAY, YEARDAY.
     */
    type?: BaseTypes.SellingPlanAnchorType | null;
};

export type SellingPlanBillingPolicyInput = {
    /**
     * The fixed billing policy details.
     */
    fixed?: SellingPlanFixedBillingPolicyInput | null;

    /**
     * The recurring billing policy details.
     */
    recurring?: SellingPlanRecurringBillingPolicyInput | null;
};

export type SellingPlanCheckoutChargeInput = {
    /**
     * The checkout charge type defined by the policy.
     */
    type?: BaseTypes.SellingPlanCheckoutChargeType | null;

    /**
     * The checkout charge value defined by the policy.
     */
    value?: SellingPlanCheckoutChargeValueInput | null;
};

export type SellingPlanCheckoutChargeValueInput = {
    /**
     * The fixed value for an checkout charge.
     */
    fixedValue?: BaseTypes.Decimal | null;

    /**
     * The percentage value.
     */
    percentage?: BaseTypes.Float | null;
};

export type SellingPlanDeliveryPolicyInput = {
    /**
     * The fixed delivery policy details.
     */
    fixed?: SellingPlanFixedDeliveryPolicyInput | null;

    /**
     * The recurring delivery policy details.
     */
    recurring?: SellingPlanRecurringDeliveryPolicyInput | null;
};

export type SellingPlanFixedBillingPolicyInput = {
    /**
     * The checkout charge policy for the selling plan.
     */
    checkoutCharge?: SellingPlanCheckoutChargeInput | null;

    /**
     * The date and time to capture the full payment.
     */
    remainingBalanceChargeExactTime?: BaseTypes.DateTime | null;

    /**
     * The period after capturing the payment for the amount due (`remainingBalanceChargeTrigger`), and before capturing the full payment. Expressed as an ISO8601 duration.
     */
    remainingBalanceChargeTimeAfterCheckout?: BaseTypes.String | null;

    /**
     * When to capture the payment for the amount due.
     */
    remainingBalanceChargeTrigger?: BaseTypes.SellingPlanRemainingBalanceChargeTrigger | null;
};

export type SellingPlanFixedDeliveryPolicyInput = {
    /**
     * The specific anchor dates upon which the delivery interval calculations should be made.
     */
    anchors?: Array<SellingPlanAnchorInput> | null;

    /**
     * A buffer period for orders to be included in a cycle.
     */
    cutoff?: BaseTypes.Int | null;

    /**
     * The date and time when the fulfillment should trigger.
     */
    fulfillmentExactTime?: BaseTypes.DateTime | null;

    /**
     * What triggers the fulfillment.
     */
    fulfillmentTrigger?: BaseTypes.SellingPlanFulfillmentTrigger | null;

    /**
     * Whether the delivery policy is merchant or buyer-centric.
     */
    intent?: BaseTypes.SellingPlanFixedDeliveryPolicyIntent | null;

    /**
     * The pre-anchor behavior.
     */
    preAnchorBehavior?: BaseTypes.SellingPlanFixedDeliveryPolicyPreAnchorBehavior | null;
};

export type SellingPlanFixedPricingPolicyInput = {
    /**
     * Price adjustment type defined by the policy.
     */
    adjustmentType?: BaseTypes.SellingPlanPricingPolicyAdjustmentType | null;

    /**
     * Price adjustment value defined by the policy.
     */
    adjustmentValue?: SellingPlanPricingPolicyValueInput | null;

    /**
     * ID of the pricing policy.
     */
    id?: BaseTypes.ID | null;
};

export type SellingPlanGroupInput = {
    /**
     * ID for app, exposed in Liquid and product JSON.
     */
    appId?: BaseTypes.String | null;

    /**
     * Merchant facing description of the selling plan group.
     */
    description?: BaseTypes.String | null;

    /**
     * Merchant facing label of the selling plan group.
     */
    merchantCode?: BaseTypes.String | null;

    /**
     * Buyer facing label of the selling plan group.
     */
    name?: BaseTypes.String | null;

    /**
     * The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
     */
    options?: Array<BaseTypes.String> | null;

    /**
     * Relative value for display purposes of the selling plan group. A lower position will be displayed before a higher one.
     */
    position?: BaseTypes.Int | null;

    /**
     * List of selling plans to create.
     */
    sellingPlansToCreate?: Array<SellingPlanInput> | null;

    /**
     * List of selling plans ids to delete.
     */
    sellingPlansToDelete?: Array<BaseTypes.ID> | null;

    /**
     * List of selling plans to update.
     */
    sellingPlansToUpdate?: Array<SellingPlanInput> | null;
};

export type SellingPlanGroupResourceInput = {
    /**
     * The IDs of the Products to add to the Selling Plan Group.
     */
    productIds?: Array<BaseTypes.ID> | null;

    /**
     * The IDs of the Variants to add to the Selling Plan Group.
     */
    productVariantIds?: Array<BaseTypes.ID> | null;
};

export type SellingPlanInput = {
    /**
     * Selling plan policy which describes the billing details.
     */
    billingPolicy?: SellingPlanBillingPolicyInput | null;

    /**
     * The category used to classify this selling plan for reporting purposes.
     */
    category?: BaseTypes.SellingPlanCategory | null;

    /**
     * A selling plan policy which describes the delivery details.
     */
    deliveryPolicy?: SellingPlanDeliveryPolicyInput | null;

    /**
     * Buyer facing string which describes the selling plan commitment.
     */
    description?: BaseTypes.String | null;

    /**
     * ID of the selling plan.
     */
    id?: BaseTypes.ID | null;

    /**
     * A selling plan policy which describes the inventory details.
     */
    inventoryPolicy?: SellingPlanInventoryPolicyInput | null;

    /**
     * Additional customizable information to associate with the SellingPlan.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * Buyer facing string which describes the selling plan content.
     */
    name?: BaseTypes.String | null;

    /**
     * The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
     */
    options?: Array<BaseTypes.String> | null;

    /**
     * Relative value for display purposes of this plan. A lower position will be displayed before a higher one.
     */
    position?: BaseTypes.Int | null;

    /**
     * The pricing policies which describe the pricing details. Each selling plan
     * can only contain a maximum of 2 pricing policies.
     */
    pricingPolicies?: Array<SellingPlanPricingPolicyInput> | null;
};

export type SellingPlanInventoryPolicyInput = {
    /**
     * When to reserve inventory for the order. The value must be ON_FULFILLMENT or ON_SALE.
     */
    reserve?: BaseTypes.SellingPlanReserve | null;
};

export type SellingPlanPricingPolicyInput = {
    /**
     * Fixed pricing policy details.
     */
    fixed?: SellingPlanFixedPricingPolicyInput | null;

    /**
     * Recurring pricing policy details.
     */
    recurring?: SellingPlanRecurringPricingPolicyInput | null;
};

export type SellingPlanPricingPolicyValueInput = {
    /**
     * The fixed value for an fixed amount off or a new policy price.
     */
    fixedValue?: BaseTypes.Decimal | null;

    /**
     * The percentage value.
     */
    percentage?: BaseTypes.Float | null;
};

export type SellingPlanRecurringBillingPolicyInput = {
    /**
     * Specific anchor dates upon which the billing interval calculations should be made.
     */
    anchors?: Array<SellingPlanAnchorInput> | null;

    /**
     * The billing frequency, it can be either: day, week, month or year.
     */
    interval?: BaseTypes.SellingPlanInterval | null;

    /**
     * The number of intervals between billings.
     */
    intervalCount?: BaseTypes.Int | null;

    /**
     * Maximum number of billing iterations.
     */
    maxCycles?: BaseTypes.Int | null;

    /**
     * Minimum number of billing iterations.
     */
    minCycles?: BaseTypes.Int | null;
};

export type SellingPlanRecurringDeliveryPolicyInput = {
    /**
     * The specific anchor dates upon which the delivery interval calculations should be made.
     */
    anchors?: Array<SellingPlanAnchorInput> | null;

    /**
     * A buffer period for orders to be included in a cycle.
     */
    cutoff?: BaseTypes.Int | null;

    /**
     * Intention of this delivery policy, it can be either: delivery or fulfillment.
     */
    intent?: BaseTypes.SellingPlanRecurringDeliveryPolicyIntent | null;

    /**
     * The delivery frequency, it can be either: day, week, month or year.
     */
    interval?: BaseTypes.SellingPlanInterval | null;

    /**
     * The number of intervals between deliveries.
     */
    intervalCount?: BaseTypes.Int | null;

    /**
     * The pre-anchor behavior. It can be either: asap or next.
     */
    preAnchorBehavior?: BaseTypes.SellingPlanRecurringDeliveryPolicyPreAnchorBehavior | null;
};

export type SellingPlanRecurringPricingPolicyInput = {
    /**
     * Price adjustment type defined by the policy.
     */
    adjustmentType?: BaseTypes.SellingPlanPricingPolicyAdjustmentType | null;

    /**
     * Price adjustment value defined by the policy.
     */
    adjustmentValue?: SellingPlanPricingPolicyValueInput | null;

    /**
     * Cycle after which the pricing policy applies.
     */
    afterCycle: BaseTypes.Int;

    /**
     * ID of the pricing policy.
     */
    id?: BaseTypes.ID | null;
};

export type ShippingLineInput = {
    /**
     * Price of the shipping rate with currency. If provided, `price` will be ignored.
     */
    priceWithCurrency?: MoneyInput | null;

    /**
     * A unique identifier for the shipping rate.
     */
    shippingRateHandle?: BaseTypes.String | null;

    /**
     * Title of the shipping rate.
     */
    title?: BaseTypes.String | null;
};

export type ShippingRefundInput = {
    /**
     * The monetary value of the shipping fees to be reimbursed.
     */
    amount?: BaseTypes.Money | null;

    /**
     * Whether a full refund is provided.
     */
    fullRefund?: BaseTypes.Boolean | null;
};

export type ShopLocaleInput = {
    /**
     * The market web presences on which the locale should be enabled. Pass in an empty array to remove the locale across all market web presences.
     */
    marketWebPresenceIds?: Array<BaseTypes.ID> | null;

    /**
     * Whether the locale is published. Only published locales are visible to the buyer.
     */
    published?: BaseTypes.Boolean | null;
};

export type ShopPolicyInput = {
    /**
     * Policy text, maximum size of 512kb.
     */
    body: BaseTypes.String;

    /**
     * The shop policy type.
     */
    type: BaseTypes.ShopPolicyType;
};

export type ShopifyPaymentsDisputeEvidenceUpdateInput = {
    /**
     * Activity logs.
     */
    accessActivityLog?: BaseTypes.String | null;

    /**
     * Cancellation policy disclosure.
     */
    cancellationPolicyDisclosure?: BaseTypes.String | null;

    /**
     * Cancellation policy file.
     */
    cancellationPolicyFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * Cancellation rebuttal.
     */
    cancellationRebuttal?: BaseTypes.String | null;

    /**
     * Customer communication file.
     */
    customerCommunicationFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * Customer email address.
     */
    customerEmailAddress?: BaseTypes.String | null;

    /**
     * Customer first name.
     */
    customerFirstName?: BaseTypes.String | null;

    /**
     * Customer last name.
     */
    customerLastName?: BaseTypes.String | null;

    /**
     * Refund policy disclosure.
     */
    refundPolicyDisclosure?: BaseTypes.String | null;

    /**
     * Refund policy file.
     */
    refundPolicyFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * Refund refusal explanation.
     */
    refundRefusalExplanation?: BaseTypes.String | null;

    /**
     * Service documentation file.
     */
    serviceDocumentationFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * The shipping address associated with the dispute evidence.
     */
    shippingAddress?: MailingAddressInput | null;

    /**
     * Shipping documentation file.
     */
    shippingDocumentationFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * Whether to submit the evidence.
     */
    submitEvidence?: BaseTypes.Boolean | null;

    /**
     * Uncategorized file.
     */
    uncategorizedFile?: ShopifyPaymentsDisputeFileUploadUpdateInput | null;

    /**
     * Uncategorized text.
     */
    uncategorizedText?: BaseTypes.String | null;
};

export type ShopifyPaymentsDisputeFileUploadUpdateInput = {
    /**
     * Whether to delete this file upload.
     */
    destroy?: BaseTypes.Boolean | null;

    /**
     * The ID of the file upload to be updated.
     */
    id: BaseTypes.ID;
};

export type StageImageInput = {
    /**
     * The image filename.
     */
    filename: BaseTypes.String;

    /**
     * HTTP method to be used by the staged upload.
     */
    httpMethod?: BaseTypes.StagedUploadHttpMethodType | null;

    /**
     * The image MIME type.
     */
    mimeType: BaseTypes.String;

    /**
     * The image resource.
     */
    resource: BaseTypes.StagedUploadTargetGenerateUploadResource;
};

export type StagedUploadInput = {
    /**
     * The size of the file to upload, in bytes. This is required when the request's resource property is set to
     * [VIDEO](https://shopify.dev/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#value-video)
     * or [MODEL_3D](https://shopify.dev/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#value-model3d).
     */
    fileSize?: BaseTypes.UnsignedInt64 | null;

    /**
     * The file's name and extension.
     */
    filename: BaseTypes.String;

    /**
     * The HTTP method to be used when sending a request to upload the file using the returned staged
     * upload target.
     */
    httpMethod?: BaseTypes.StagedUploadHttpMethodType | null;

    /**
     * The file's MIME type.
     */
    mimeType: BaseTypes.String;

    /**
     * The file's intended Shopify resource type.
     */
    resource: BaseTypes.StagedUploadTargetGenerateUploadResource;
};

export type StagedUploadTargetGenerateInput = {
    /**
     * The size of the file to upload, in bytes.
     */
    fileSize?: BaseTypes.UnsignedInt64 | null;

    /**
     * The filename of the asset being uploaded.
     */
    filename: BaseTypes.String;

    /**
     * The HTTP method to be used by the staged upload.
     */
    httpMethod?: BaseTypes.StagedUploadHttpMethodType | null;

    /**
     * The MIME type of the asset being uploaded.
     */
    mimeType: BaseTypes.String;

    /**
     * The resource type being uploaded.
     */
    resource: BaseTypes.StagedUploadTargetGenerateUploadResource;
};

export type StandardizedProductTypeInput = {
    /**
     * The ID of the node in the Shopify taxonomy that represents the product type.
     */
    productTaxonomyNodeId: BaseTypes.ID;
};

export type StoreCreditAccountCreditInput = {
    /**
     * The amount to credit the store credit account.
     */
    creditAmount: MoneyInput;

    /**
     * The date and time when the credit expires.
     */
    expiresAt?: BaseTypes.DateTime | null;
};

export type StoreCreditAccountDebitInput = {
    /**
     * The amount to debit the store credit account.
     */
    debitAmount: MoneyInput;
};

export type StorefrontAccessTokenDeleteInput = {
    /**
     * The ID of the storefront access token to delete.
     */
    id: BaseTypes.ID;
};

export type StorefrontAccessTokenInput = {
    /**
     * A title for the storefront access token.
     */
    title: BaseTypes.String;
};

export type SubscriptionAtomicLineInput = {
    /**
     * The discount to be added to the subscription line.
     */
    discounts?: Array<SubscriptionAtomicManualDiscountInput> | null;

    /**
     * The new subscription line.
     */
    line: SubscriptionLineInput;
};

export type SubscriptionAtomicManualDiscountInput = {
    /**
     * The maximum number of times the subscription discount will be applied on orders.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The title associated with the subscription discount.
     */
    title?: BaseTypes.String | null;

    /**
     * Percentage or fixed amount value of the discount.
     */
    value?: SubscriptionManualDiscountValueInput | null;
};

export type SubscriptionBillingAttemptInput = {
    /**
     * Select the specific billing cycle to be billed.
     * Default to bill the current billing cycle if not specified.
     */
    billingCycleSelector?: SubscriptionBillingCycleSelector | null;

    /**
     * A unique key generated by the client to avoid duplicate payments. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
     */
    idempotencyKey: BaseTypes.String;

    /**
     * The date and time used to calculate fulfillment intervals for a billing attempt that
     * successfully completed after the current anchor date. To prevent fulfillment from being
     * pushed to the next anchor date, this field can override the billing attempt date.
     */
    originTime?: BaseTypes.DateTime | null;
};

export type SubscriptionBillingCycleBulkFilters = {
    /**
     * Filters the billing cycles based on the presence of billing attempts.
     */
    billingAttemptStatus?: BaseTypes.SubscriptionBillingCycleBillingAttemptStatus | null;

    /**
     * Filters the billing cycles based on their status.
     */
    billingCycleStatus?: Array<BaseTypes.SubscriptionBillingCycleBillingCycleStatus> | null;

    /**
     * Filters the billing cycles based on the status of their associated subscription contracts.
     */
    contractStatus?: Array<BaseTypes.SubscriptionContractSubscriptionStatus> | null;
};

export type SubscriptionBillingCycleInput = {
    /**
     * The ID of the subscription contract associated with the billing cycle.
     */
    contractId: BaseTypes.ID;

    /**
     * Selects the billing cycle by date or index.
     */
    selector: SubscriptionBillingCycleSelector;
};

export type SubscriptionBillingCycleScheduleEditInput = {
    /**
     * Sets the expected billing date for the billing cycle.
     */
    billingDate?: BaseTypes.DateTime | null;

    /**
     * The reason for editing.
     */
    reason: BaseTypes.SubscriptionBillingCycleScheduleEditInputScheduleEditReason;

    /**
     * Sets the skip status for the billing cycle.
     */
    skip?: BaseTypes.Boolean | null;
};

export type SubscriptionBillingCycleSelector = {
    /**
     * Returns a billing cycle by date.
     */
    date?: BaseTypes.DateTime | null;

    /**
     * Returns a billing cycle by index.
     */
    index?: BaseTypes.Int | null;
};

export type SubscriptionBillingCyclesDateRangeSelector = {
    /**
     * The end date and time for the range.
     */
    endDate: BaseTypes.DateTime;

    /**
     * The start date and time for the range.
     */
    startDate: BaseTypes.DateTime;
};

export type SubscriptionBillingCyclesIndexRangeSelector = {
    /**
     * The end index for the range.
     */
    endIndex: BaseTypes.Int;

    /**
     * The start index for the range.
     */
    startIndex: BaseTypes.Int;
};

export type SubscriptionBillingPolicyInput = {
    /**
     * Specific anchor dates upon which the billing interval calculations should be made.
     */
    anchors?: Array<SellingPlanAnchorInput> | null;

    /**
     * The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
     */
    interval: BaseTypes.SellingPlanInterval;

    /**
     * The number of billing intervals between invoices.
     */
    intervalCount: BaseTypes.Int;

    /**
     * Maximum amount of cycles required in the subscription.
     */
    maxCycles?: BaseTypes.Int | null;

    /**
     * Minimum amount of cycles required in the subscription.
     */
    minCycles?: BaseTypes.Int | null;
};

export type SubscriptionContractAtomicCreateInput = {
    /**
     * The attributes used as input for the Subscription Draft.
     */
    contract: SubscriptionDraftInput;

    /**
     * The currency used for the subscription contract.
     */
    currencyCode: BaseTypes.CurrencyCode;

    /**
     * The ID of the customer to associate with the subscription contract.
     */
    customerId: BaseTypes.ID;

    /**
     * A list of discount redeem codes to apply to the subscription contract.
     */
    discountCodes?: Array<BaseTypes.String> | null;

    /**
     * A list of new Subscription Lines.
     */
    lines: Array<SubscriptionAtomicLineInput>;

    /**
     * The next billing date for the subscription contract.This field is independent of billing cycles.It stores metadata set by the apps, and thus not managed by Shopify.It can be queried from subscriptionContract.nextBillingDate.
     */
    nextBillingDate: BaseTypes.DateTime;
};

export type SubscriptionContractCreateInput = {
    /**
     * The attributes used as input for the Subscription Draft.
     */
    contract: SubscriptionDraftInput;

    /**
     * The currency used for the subscription contract.
     */
    currencyCode: BaseTypes.CurrencyCode;

    /**
     * The ID of the customer to associate with the subscription contract.
     */
    customerId: BaseTypes.ID;

    /**
     * The next billing date for the subscription contract.
     */
    nextBillingDate: BaseTypes.DateTime;
};

export type SubscriptionContractProductChangeInput = {
    /**
     * The price of the product.
     */
    currentPrice?: BaseTypes.Decimal | null;

    /**
     * The ID of the product variant the subscription line refers to.
     */
    productVariantId?: BaseTypes.ID | null;
};

export type SubscriptionDeliveryMethodInput = {
    /**
     * The input fields for the local delivery method.
     */
    localDelivery?: SubscriptionDeliveryMethodLocalDeliveryInput | null;

    /**
     * The input fields for the pickup delivery method.
     */
    pickup?: SubscriptionDeliveryMethodPickupInput | null;

    /**
     * The input fields for the shipping delivery method.
     */
    shipping?: SubscriptionDeliveryMethodShippingInput | null;
};

export type SubscriptionDeliveryMethodLocalDeliveryInput = {
    /**
     * The address to deliver to.
     */
    address?: MailingAddressInput | null;

    /**
     * The details of the local delivery method to use.
     */
    localDeliveryOption?: SubscriptionDeliveryMethodLocalDeliveryOptionInput | null;
};

export type SubscriptionDeliveryMethodLocalDeliveryOptionInput = {
    /**
     * A custom reference to the delivery method for use with automations.
     */
    code?: BaseTypes.String | null;

    /**
     * The details displayed to the customer to describe the local delivery option.
     */
    description?: BaseTypes.String | null;

    /**
     * The delivery instructions that the customer can provide to the merchant.
     */
    instructions?: BaseTypes.String | null;

    /**
     * The phone number that the customer must provide to the merchant.
     * Formatted using E.164 standard. For example, `+16135551111`.
     */
    phone: BaseTypes.String;

    /**
     * The presentment title of the local delivery option.
     */
    presentmentTitle?: BaseTypes.String | null;

    /**
     * The title of the local delivery option.
     */
    title?: BaseTypes.String | null;
};

export type SubscriptionDeliveryMethodPickupInput = {
    /**
     * The details of the pickup method to use.
     */
    pickupOption?: SubscriptionDeliveryMethodPickupOptionInput | null;
};

export type SubscriptionDeliveryMethodPickupOptionInput = {
    /**
     * A custom reference to the delivery method for use with automations.
     */
    code?: BaseTypes.String | null;

    /**
     * The details displayed to the customer to describe the pickup option.
     */
    description?: BaseTypes.String | null;

    /**
     * The ID of the pickup location.
     */
    locationId: BaseTypes.ID;

    /**
     * The presentment title of the pickup option.
     */
    presentmentTitle?: BaseTypes.String | null;

    /**
     * The title of the pickup option.
     */
    title?: BaseTypes.String | null;
};

export type SubscriptionDeliveryMethodShippingInput = {
    /**
     * The address to ship to.
     */
    address?: MailingAddressInput | null;

    /**
     * The details of the shipping method to use.
     */
    shippingOption?: SubscriptionDeliveryMethodShippingOptionInput | null;
};

export type SubscriptionDeliveryMethodShippingOptionInput = {
    /**
     * The carrier service ID of the shipping option.
     */
    carrierServiceId?: BaseTypes.ID | null;

    /**
     * The code of the shipping option.
     */
    code?: BaseTypes.String | null;

    /**
     * The description of the shipping option.
     */
    description?: BaseTypes.String | null;

    /**
     * The presentment title of the shipping option.
     */
    presentmentTitle?: BaseTypes.String | null;

    /**
     * The title of the shipping option.
     */
    title?: BaseTypes.String | null;
};

export type SubscriptionDeliveryPolicyInput = {
    /**
     * The specific anchor dates upon which the delivery interval calculations should be made.
     */
    anchors?: Array<SellingPlanAnchorInput> | null;

    /**
     * The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
     */
    interval: BaseTypes.SellingPlanInterval;

    /**
     * The number of billing intervals between invoices.
     */
    intervalCount: BaseTypes.Int;
};

export type SubscriptionDraftInput = {
    /**
     * The billing policy for the subscription contract.
     */
    billingPolicy?: SubscriptionBillingPolicyInput | null;

    /**
     * A list of the custom attributes added to the subscription contract.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * The delivery method for the subscription contract.
     */
    deliveryMethod?: SubscriptionDeliveryMethodInput | null;

    /**
     * The delivery policy for the subscription contract.
     */
    deliveryPolicy?: SubscriptionDeliveryPolicyInput | null;

    /**
     * The shipping price for each renewal the subscription contract.
     */
    deliveryPrice?: BaseTypes.Decimal | null;

    /**
     * The next billing date for the subscription contract.
     */
    nextBillingDate?: BaseTypes.DateTime | null;

    /**
     * The note field that will be applied to the generated orders.
     */
    note?: BaseTypes.String | null;

    /**
     * The ID of the payment method to be used for the subscription contract.
     */
    paymentMethodId?: BaseTypes.ID | null;

    /**
     * The current status of the subscription contract.
     */
    status?: BaseTypes.SubscriptionContractSubscriptionStatus | null;
};

export type SubscriptionFreeShippingDiscountInput = {
    /**
     * The maximum number of times the subscription free shipping discount will be applied on orders.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The title associated with the subscription free shipping discount.
     */
    title?: BaseTypes.String | null;
};

export type SubscriptionLineInput = {
    /**
     * The price of the product.
     */
    currentPrice: BaseTypes.Decimal;

    /**
     * The custom attributes for this subscription line.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * Describes expected price changes of the subscription line over time.
     */
    pricingPolicy?: SubscriptionPricingPolicyInput | null;

    /**
     * The ID of the product variant the subscription line refers to.
     */
    productVariantId: BaseTypes.ID;

    /**
     * The quantity of the product.
     */
    quantity: BaseTypes.Int;

    /**
     * The selling plan for the subscription line.
     */
    sellingPlanId?: BaseTypes.ID | null;

    /**
     * The selling plan name for the subscription line.
     *
     * Defaults to using the selling plan's current name when not specified.
     */
    sellingPlanName?: BaseTypes.String | null;
};

export type SubscriptionLineUpdateInput = {
    /**
     * The price of the product.
     */
    currentPrice?: BaseTypes.Decimal | null;

    /**
     * The custom attributes for this subscription line.
     */
    customAttributes?: Array<AttributeInput> | null;

    /**
     * Describes expected price changes of the subscription line over time.
     */
    pricingPolicy?: SubscriptionPricingPolicyInput | null;

    /**
     * The ID of the product variant the subscription line refers to.
     */
    productVariantId?: BaseTypes.ID | null;

    /**
     * The quantity of the product.
     */
    quantity?: BaseTypes.Int | null;

    /**
     * The selling plan for the subscription line.
     */
    sellingPlanId?: BaseTypes.ID | null;

    /**
     * The selling plan name for the subscription line.
     */
    sellingPlanName?: BaseTypes.String | null;
};

export type SubscriptionManualDiscountEntitledLinesInput = {
    /**
     * Specify whether the subscription discount will apply on all subscription lines.
     */
    all?: BaseTypes.Boolean | null;

    /**
     * The ID of the lines to add to or remove from the subscription discount.
     */
    lines?: SubscriptionManualDiscountLinesInput | null;
};

export type SubscriptionManualDiscountFixedAmountInput = {
    /**
     * Fixed amount value.
     */
    amount?: BaseTypes.Float | null;

    /**
     * Whether the amount is intended per line item or once per subscription.
     */
    appliesOnEachItem?: BaseTypes.Boolean | null;
};

export type SubscriptionManualDiscountInput = {
    /**
     * Entitled line items used to apply the subscription discount on.
     */
    entitledLines?: SubscriptionManualDiscountEntitledLinesInput | null;

    /**
     * The maximum number of times the subscription discount will be applied on orders.
     */
    recurringCycleLimit?: BaseTypes.Int | null;

    /**
     * The title associated with the subscription discount.
     */
    title?: BaseTypes.String | null;

    /**
     * Percentage or fixed amount value of the discount.
     */
    value?: SubscriptionManualDiscountValueInput | null;
};

export type SubscriptionManualDiscountLinesInput = {
    /**
     * The ID of the lines to add to the subscription discount.
     */
    add?: Array<BaseTypes.ID> | null;

    /**
     * The ID of the lines to remove from the subscription discount.
     */
    remove?: Array<BaseTypes.ID> | null;
};

export type SubscriptionManualDiscountValueInput = {
    /**
     * Fixed amount input in the currency defined by the subscription.
     */
    fixedAmount?: SubscriptionManualDiscountFixedAmountInput | null;

    /**
     * The percentage value of the discount. Value must be between 0 - 100.
     */
    percentage?: BaseTypes.Int | null;
};

export type SubscriptionPricingPolicyCycleDiscountsInput = {
    /**
     * The price adjustment type.
     */
    adjustmentType: BaseTypes.SellingPlanPricingPolicyAdjustmentType;

    /**
     * The price adjustment value.
     */
    adjustmentValue: SellingPlanPricingPolicyValueInput;

    /**
     * The cycle after which the pricing policy applies.
     */
    afterCycle: BaseTypes.Int;

    /**
     * The computed price after the adjustments are applied.
     */
    computedPrice: BaseTypes.Decimal;
};

export type SubscriptionPricingPolicyInput = {
    /**
     * The base price per unit for the subscription line in the contract's currency.
     */
    basePrice: BaseTypes.Decimal;

    /**
     * An array containing all pricing changes for each billing cycle.
     */
    cycleDiscounts: Array<SubscriptionPricingPolicyCycleDiscountsInput>;
};

export type TranslationInput = {
    /**
     * On the resource that this translation belongs to, the reference to the value being translated.
     */
    key: BaseTypes.String;

    /**
     * ISO code of the locale being translated into. Only locales returned in `shopLocales` are valid.
     */
    locale: BaseTypes.String;

    /**
     * The ID of the market that the translation is specific to. Not specifying this field means that the translation will be available in all markets.
     */
    marketId?: BaseTypes.ID | null;

    /**
     * Hash digest representation of the content being translated.
     */
    translatableContentDigest: BaseTypes.String;

    /**
     * The value of the translation.
     */
    value: BaseTypes.String;
};

export type UTMInput = {
    /**
     * The name of the UTM campaign.
     */
    campaign: BaseTypes.String;

    /**
     * The UTM campaign medium.
     */
    medium: BaseTypes.String;

    /**
     * The name of the website or application where the referral link exists.
     */
    source: BaseTypes.String;
};

export type UpdateMediaInput = {
    /**
     * The alt text associated to the media.
     */
    alt?: BaseTypes.String | null;

    /**
     * Specifies the media to update.
     */
    id: BaseTypes.ID;

    /**
     * The source from which to update the media preview image. May be an external URL or staged upload URL.
     */
    previewImageSource?: BaseTypes.String | null;
};

export type UrlRedirectInput = {
    /**
     * The old path to be redirected from. When the user visits this path, they will be redirected to the target location.
     */
    path?: BaseTypes.String | null;

    /**
     * The target location where the user will be redirected to.
     */
    target?: BaseTypes.String | null;
};

export type ValidationCreateInput = {
    /**
     * Whether the validation should block on failures other than expected violations.
     */
    blockOnFailure?: BaseTypes.Boolean | null;

    /**
     * Whether the validation should be live on the merchant checkout.
     */
    enable?: BaseTypes.Boolean | null;

    /**
     * The function ID representing the extension to install.
     */
    functionId: BaseTypes.String;

    /**
     * Additional metafields to associate to the validation.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The title of the validation.
     */
    title?: BaseTypes.String | null;
};

export type ValidationUpdateInput = {
    /**
     * Whether the validation should block on failures other than expected violations.
     */
    blockOnFailure?: BaseTypes.Boolean | null;

    /**
     * Whether the validation should be live on the merchant checkout.
     */
    enable?: BaseTypes.Boolean | null;

    /**
     * Additional metafields to associate to the validation.
     */
    metafields?: Array<MetafieldInput> | null;

    /**
     * The title of the validation.
     */
    title?: BaseTypes.String | null;
};

export type VariantOptionValueInput = {
    /**
     * Specifies the product option value by ID.
     */
    id?: BaseTypes.ID | null;

    /**
     * Specifies the product option value by name.
     */
    name?: BaseTypes.String | null;

    /**
     * Specifies the product option by ID.
     */
    optionId?: BaseTypes.ID | null;

    /**
     * Specifies the product option by name.
     */
    optionName?: BaseTypes.String | null;
};

export type WebPixelInput = {
    /**
     * The
     * [settings object](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings)
     * for the web pixel. This object specifies configuration options that control the web pixel's functionality and behavior.
     * You can find the settings for a web pixel in `extensions/<your_extension_name>/shopify.extension.toml`.
     */
    settings: BaseTypes.JSON;
};

export type WebhookSubscriptionInput = {
    /**
     * URL where the webhook subscription should send the POST request when the event occurs.
     */
    callbackUrl?: BaseTypes.URL | null;

    /**
     * A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.
     */
    filter?: BaseTypes.String | null;

    /**
     * The format in which the webhook subscription should send the data.
     */
    format?: BaseTypes.WebhookSubscriptionFormat | null;

    /**
     * The list of fields to be included in the webhook subscription.
     */
    includeFields?: Array<BaseTypes.String> | null;

    /**
     * The list of namespaces for any metafields that should be included in the webhook subscription.
     */
    metafieldNamespaces?: Array<BaseTypes.String> | null;
};

export type WeightInput = {
    /**
     * Unit of measurement for `value`.
     */
    unit: BaseTypes.WeightUnit;

    /**
     * The weight value using the unit system specified with `weight_unit`.
     */
    value: BaseTypes.Float;
};

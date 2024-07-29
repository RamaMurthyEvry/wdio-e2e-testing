# Feature: Amazon add to cart functionality

#     Scenario Outline: Verify the product details and add to cart and remove

#         Given Open the application url <pageUrl> in browser
#         Then Verify that <user> is on the home page
#         When User search <productName> product
#         Then Verify that the search results page displays <productName> in search results
#         When Apply filter to display products priced between Rs "10000" and Rs "15000" only
#         And the user selects first product and navigates to its details screen
#         Then Add product to the cart from product description page
#         When the user opens the shopping cart
#         Then the product should be listed in the cart with correct details
#         And Remove item from the cart and verify

#         Examples:
#             | pageUrl               | user  | productName    |
#             | https://www.amazon.in | Hello | Samsung M34 5G |




Feature: Manage items in Amazon cart and save for later

    Scenario Outline: Add item to cart, save for later, and move back to cart

        Given Open the application url <pageUrl> in browser
        When User search <productName> product
        Then Verify that the search results page displays <productName> in search results
        And the user selects first product and navigates to its details screen
        Then Add product to the cart from product description page
        When the user opens the shopping cart
        Then I save the <productName> for later and verify
        Then Move <productName> from Saved for Later to the cart and verify
        # And the <productName> should not be present in the Saved for Later section

        Examples:
            | pageUrl               | productName    |
            | https://www.amazon.in | HP Laptop |
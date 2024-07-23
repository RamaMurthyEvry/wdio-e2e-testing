@swe
Feature: Amazon add to cart functionality

    Scenario Outline: Verify the product details and add to cart and remove

        Given Open the application url <pageUrl> in browser
        Then Verify that <user> is on the home page
        When User search <productName> product
        Then Verify that the search results page displays <productName> search results
        Then User filter the product by price between Rs "10000" and "15000"
        Then Verify that all displayed products fall within the specified price range Rs "10000" and "15000"
        Then Select one product and go to product details screen
        Then Add product to the cart from product description page
        Then Open the cart
        Then Verify that the product is listed in the cart with correct details name, price, quantity
        # Then Remove item from the cart and verify
        

        Examples:
            | pageUrl               | user  | productName    |
            | https://www.amazon.in | Hello | Samsung M34 5G |
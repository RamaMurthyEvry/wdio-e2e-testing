@swe
Feature: Amazon add to cart functionality

    Scenario Outline: Verify the product details and add to cart and remove

        Given Open the application url <pageUrl> in browser
        Then Verify that <user> is on the home page
        When User search <productName> product
        Then Verify that the search results page displays <productName> search results
        Then User filter the product by price between Rs "10000" and "15000"
        Then Verify that all displayed products fall within the specified price range Rs "10000" and "15000"
        # When the user filters products within the price range of Rs “10000” to “15000” then only those products should be displayed
        Then Select one product and go to product details screen
        Then Add product to the cart from product description page
        Then the user opens the shopping cart
        Then the product should be listed in the cart with correct details - name, price, and quantity
        Then Remove item from the cart and verify


        Examples:
            | pageUrl               | user  | productName    |
            | https://www.amazon.in | Hello | Samsung M34 5G |
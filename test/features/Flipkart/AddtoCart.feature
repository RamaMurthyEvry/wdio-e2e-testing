Feature: Verify User can search for a product, and verify search results
    Scenario Outline: Login and search for a product

        Given Launch Flipkart application
        When Enter "<product>" into the search bar
        And Filters for the price within the range <min> <max>
        And Navigate to <product> details page
        And Add the product to a cart
        Then Verify that product is added to the cart successfully
        When user locates the product to be removed
        When confirms the removal if prompted

        Examples:
            | product        | min    | max    | message              |
            | Samsung M34 5G | ₹10000 | ₹30000 | Successfully removed |
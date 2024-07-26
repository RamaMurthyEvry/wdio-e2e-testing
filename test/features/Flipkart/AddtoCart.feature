Feature: Verify add to cart feature

    Scenario Outline: Add a product to cart, verify, and remove it
        Given user is on the Flipkart home page
        When user enters "<product>" into the search bar
        And user clicks on the Search button
        And user selects one product and goes to the product details screen
        And user clicks on the "Add to Cart" button
        Then verify a success message is displayed
        When user clicks on the "Cart" icon
        Then verify the product is listed in the cart with correct details
        When user locates the product to be removed
        When confirms the removal if prompted
        Then verify the product is no longer listed in the cart

        Examples:
            | product                                        |
            | SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB) |
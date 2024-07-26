Feature: Add item to cart and click on save later verify item moved to save later and move to cart and item should move to cart.

    Scenario Outline: Add a product to cart, verify, and remove it
        Given user is on the Flipkart home page
        When user enters "<product>" into the search bar
        And user clicks on the Search button
        And user selects one product and goes to the product details screen
        And user clicks on the "Add to Cart" button
        Then verify a success message is displayed
        When user clicks on the "Cart" icon
        Then verify the product is listed in the cart with correct details
        Then Click on save later
        Then Verify the product moved to save later
        Then Click on move to cart

        Examples:
            | product                                        |
            | SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB) |
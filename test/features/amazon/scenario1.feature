Feature: Add two items in the cart

    Scenario Outline: Verify details after adding two product in cart

        Given Open the application url <pageUrl> in browser
        When User search <productName> product
        Then User add multiple Products <numberOfProduct> to cart from search result and verify
        Then User remove all the products from the cart and verify that cart is empty

        Examples:
            | pageUrl               | productName | numberOfProduct |
            | https://www.amazon.in | iphone      | 2               |

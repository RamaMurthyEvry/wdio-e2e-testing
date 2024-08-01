Feature: Add two items in the cart

    Scenario Outline: Verify details after adding two product in cart

        Given Open the application url <pageUrl> in browser
        When User search <productName> product
        Then User add multiple Products <numberOfProduct> to cart from search result
        
        Examples:
            | pageUrl               | productName | numberOfProduct |
            | https://www.amazon.in | iPhone      | 2               |

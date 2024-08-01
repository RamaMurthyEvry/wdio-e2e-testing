@Flipkart
Feature: FlipKart Apply Filters and Add To Cart Functionality

    Scenario Outline: Verify filter condition and view the product
        Given Open the application url <pageUrl> in browser
        Then Verify that "Login" in the home page
        When User searches for the <product>
        Then Verify that the <product> text is displyed in search results
        And Filters for the price within the range <min> <max>
        And Filters for the Brand <Brand>
        And Filters for the RAM <RAM>
        And User select one product and go to product details screen
        And User click on Add To Cart button in product details screen
        And Verify <RAM> and <Brand> filtered product added to the cart
        And User click on the remove button in the cart page
        And Verify <text> message is displayed

        Examples:
            | pageUrl                   | product        | min    | max    | Brand   | RAM  | text                 |
            | https://www.flipkart.com/ | samsung m34 5g | ₹10000 | ₹30000 | SAMSUNG | 6 GB | Successfully removed |
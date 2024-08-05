@Flipkart
Feature: FlipKart Add 2 items and Remove items from the cart Functionality

    Scenario Outline: Verify Add 2 items and Remove items from the cart
        Given Open the application url <pageUrl> in browser
        Then Verify that "Login" in the home page
        When User searches for the <product>
        Then Verify that the <product> text is displyed in search results
        And Filters for the price within the range <min> <max>
        And User select one product and go to product details screen
        And User click on Add To Cart button in product details screen
        And Navigate back to product search Page and search <product2>
        And Filters for the price within the range <min> <max>
        And User select one product and go to product details screen
        And Switch back to product details screen
        And User click on Add To Cart button in product details screen
        And User click on the remove button in the cart page
        And Verify <text> message is displayed
        And User click on the remove button in the cart page
        And Verify <text> message is displayed

        Examples:
            | pageUrl                   | product        | min    | max    | text                 | product2       |
            | https://www.flipkart.com/ | samsung m34 5g | ₹10000 | ₹30000 | Successfully removed | samsung m35 5g |

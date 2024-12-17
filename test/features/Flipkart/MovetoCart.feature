Feature: Verify User can search product and move to cart and save for later
    Scenario Outline: Login and search for a product

        Given Open Flipkart Application
        When Enter "<product>" into the search box
        And Filters for the prices within the range <min> <max>
        And Navigate to <product> detail page
        And Add the product to the cart
        Then Verify that product is added to cart successfully
        Then select "save for later" the selected product
        Then Again "move to the cart" the selected product

        Examples:
            | product        | min    | max    |
            | Samsung M34 5G | ₹10000 | ₹30000 |
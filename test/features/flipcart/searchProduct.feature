Feature: Verify User can search for a product, and verify search results

  Scenario Outline: Login and search for a product
    Given Open the application url <pageUrl> in browser
    When User searches for the <product>
    And Filters for the price within the range <min> <max>
    And Navigate to <product> details page
    And Add the product to a cart
    Then Verify that product is added to the cart successfully
    And Verify <product> and <min> <max> price for the added item in cart details
    When User remove the added product <product> from cart
    Then Verify confirmation <message> is displayed
    And Verify <product> is removed from the cart

    Examples:
    | pageUrl                    | product           |min   |max   |message             |
    | https://www.flipkart.com/  |SAMSUNG Galaxy A35 |₹10000|₹30000|Successfully removed|        
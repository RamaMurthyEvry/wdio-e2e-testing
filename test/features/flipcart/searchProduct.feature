Feature: Verify User can search for a product, and verify search results
  Scenario Outline: Login and search for a product

    Given user is on the Flipkart home page
    When user searches for the "<product>"
    And filters for the price within the range "<min>" "<max>"
    And navigate to "<product>" details page
    And Add the product to a cart
    Then verify that product is added to the cart successfully
    Then assert for the "<product>" and the "<min>" "<max>" for the added item in cart details
    When user remove the added product "<product>" from cart
    Then user should be displayed with the "<message>" confirmation message
    And removed "<product>" should not be displayed in the cart

    Examples:
    | product           |min|max|message|
    |SAMSUNG Galaxy A35 |₹10000|₹30000|Successfully removed|
    
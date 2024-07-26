Feature: Verify User can search for a product, and verify search results
  
  
  Scenario Outline: Login and search for a product

    Given User is on the Flipkart home page
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
    | product           |min   |max   |message             |
    |SAMSUNG Galaxy A35 |₹10000|₹30000|Successfully removed|
    

  @Flipkart
  Scenario Outline: Verify  Out of stock product
    Given User is on the Flipkart home page
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
    | product                           |min   |max    |message             |
    |OnePlus 12R (Sunset Dune, 256 GB)  |₹10000|₹30000+|Successfully removed|
 
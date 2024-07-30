@Flip
Feature: Verify User can Add 2 items each and 2 products to cart and verify all items present and delete the card item and verify.
  Scenario Outline: Add items and verify the present iteams and delete the cart item and verify

    Given Open the application url <pageUrl> in browser
    When User searches for the <product>
    And Filters for the price within the range <min> <max>
    # Then Verify that all displayed products fall within the specified price range "10000" and "30000"
    And Navigate to <product> details page
    And Add the product to a cart
    And Navigate back to product details Page and search <product2>
    And Filters for the price within the range <min> <max>
    And User click on add to cart
    # Then user click on the shopping cart
    # And Add the product to a cart
    Then Verify that product is added to the cart successfully
    And user click on the cart
    And Verify <product> and <min> <max> price for the added item in cart details
    When User remove the added product <product> from cart
    Then Verify confirmation <message> is displayed
    And Verify <product> is removed from the cart
    # And user click on the cart
    # And Verify <product2> and <min> <max> price for the added item in cart details
    When User remove the added product <product2> from cart
    # Then Verify confirmation <message> is displayed
    And Verify <product2> is removed from the cart

    Examples:
      | pageUrl                   | product            | product2           | min    | max    | message              |
      | https://www.flipkart.com/ | SAMSUNG Galaxy A35 | SAMSUNG Galaxy A34 | ₹10000 | ₹30000 | Successfully removed |
      # | https://www.flipkart.com/ | oppo mobile        | SAMSUNG Galaxy A34 | ₹10000 | ₹30000 | Successfully removed |
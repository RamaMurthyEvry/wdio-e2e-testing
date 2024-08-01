Feature: Verify User can search for a product, and verify search results

  @Flipkart3
  Scenario Outline: Customer adds an HP laptop to the shopping cart
    Given Open the application url <pageUrl> in browser
    Then Verify that "Login" in the home page
    When I navigate to the Electronics section
    When User searches for the <product>
  
    When I choose an Laptop from the list
    And I click on the "Add to Cart" button
    
     Then Verify that the <product> text is displyed in search results
        And Verify that the <product> name list appears in the search results
    Examples:
      | product                          | pageUrl                                      |
      | HP Victus Intel Core i5 12th Gen | https://www.flipkart.com/mobile-phones-store |

#   @Flipkart4
#   Scenario Outline: Add item to cart and click on save later, then move it back to the cart
#     Given Open the application url <pageUrl> in browser
#     Then Verify that "Login" in the home page
#     When I navigate to the Electronics section
#     When user enters <product> into the search bar
#     When I choose an Laptop from the list
#     And I click on the "Add to Cart" button
#     And I click on the "Save for Later"
#     When I move the item back to the cart
#     And the product name <product> should appear in the search results

#     Examples:
#       | product                          | pageUrl                                      |
#       | HP Victus Intel Core i5 12th Gen | https://www.flipkart.com/mobile-phones-store |

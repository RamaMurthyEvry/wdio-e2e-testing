Feature: Verify User can search for a product, and verify search results
 
  @Flipkar
 Scenario Outline: Login and search for a product
   Given user is on the Flipkart home page
   When user enters "<product>" into the search bar
   And user clicks on the Search button
   Then user should see search results displaying relevant products
   And the product name "<product>" should appear in the search results
 
   Examples:
    | product          |
     | Samsung M34 5G   |


     
 @Flipkar
  Scenario Outline: Add a product to cart, verify, and remove it
   Given user is on the Flipkart home page
   When user enters "<product>" into the search bar
   And user clicks on the Search button
   And user selects one product and goes to the product details screen
   And user clicks on the "Add to Cart" button
   Then verify a success message is displayed
     When user clicks on the "Cart" icon
    Then verify the product is listed in the cart with correct details
     When user locates the product to be removed
     When confirms the removal if prompted
     Then verify the product is no longer listed in the cart

  Examples:
    | product       |
    | SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)     |
    
@HP

  Scenario Outline: Customer adds an HP laptop to the shopping cart
    Given user is on the Flipkart home page
    When I navigate to the Electronics section
   When user enters "<product>" into the search bar
    Then I should see a list of HP laptops
    When I choose an HP laptop from the list
    And I click on the "Add to Cart" button
    Then the HP laptop should be added to my shopping cart

 Examples:
    | product       |
    | HP laptop i5     |
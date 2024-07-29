Feature: Verify User can search for a product, and verify search results
 
  @Flipkart1
 Scenario Outline: Login and search for a product
   Given Open the application url <pageUrl> in browser
   When user enters "<product>" into the search bar
   And user clicks on the Search button
   Then user should see search results displaying relevant products
   And the product name "<product>" should appear in the search results
 
   Examples:
   
    | product          | pageUrl                                     |
    | Samsung M34 5G   | https://www.flipkart.com/mobile-phones-store| 
 @Flipkart
  Scenario Outline: Add a product to cart, verify, and remove it
  Given Open the application url <pageUrl> in browser
  When user enters "<product>" into the search bar
  And user clicks on the Search button
  And user selects one product and goes to the product details screen 
  And user clicks on the "Add to Cart" button
  Then verify a success message is displayed
  When user clicks on the "Cart" icon
  Then verify the "<product>" is listed in the cart with correct details
  When user locates the product to be removed
  When confirms the removal if prompted
  Then verify the "<product>" is no longer listed in the cart

  Examples:
     | product          | pageUrl                                     |
     | Samsung M34 5G   | https://www.flipkart.com/mobile-phones-store| 

    

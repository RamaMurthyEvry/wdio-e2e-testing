@Flipkart
Feature: Verify User can search for a product, and verify search results
 
 Scenario Outline: Login and search for a product
   Given user is on the Flipkart home page
   When user enters "<product>" into the search bar
   And user clicks on the "Search" button
   Then user should see search results displaying relevant products
   And the product name "<product>" should appear in the search results
   When user click on selected  "<product>" should open
   Then user add item to cart page
   And verify item added to cart page
   When user remove item to cart page
   Then verify item remvoed from the cart page
 
   Examples:
    | product          |
     | Samsung M34 5G   |
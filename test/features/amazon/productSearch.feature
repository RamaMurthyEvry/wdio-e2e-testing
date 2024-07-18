Feature: Amazon product search functionality

Scenario Outline: Verify the search product

Given Open the application url <pageUrl> in browser
Then Verify that the user is on the homepage
#Then Verify that <homePageTex> text in the homepage
#When User enters the product name <productName> into the search bar
#When Click on the Search button
#Then Verify that the search results page displays the relevant products
#Then Verify that the product name appears in the search results

Examples:
      | pageUrl                 | homePageTex    |   productName    | 
      | https://www.amazon.in   | Hello          |   Samsung M34 5G |
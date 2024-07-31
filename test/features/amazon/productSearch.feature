Feature: Amazon product search functionality

      Scenario Outline: Verify the search product

            Given Open the application url <pageUrl> in browser
            Then Verify that <user> is on the home page
            When User search <productName> product
            Then Verify that the search results page displays <productName> in search results
            Then Verify that the product name appears in the search results <productName>

            Examples:
                  | pageUrl               | user  | productName |
                  | https://www.amazon.in | Hello | iPhone      |     

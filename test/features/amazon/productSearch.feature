Feature: Amazon product search functionality

      Scenario Outline: Verify the search product

            Given Open the application url <pageUrl> in browser
            Then Verify that <user> is on the home page
            When User search <productName> product
            #Then Verify that the search results page displays the relevant products
            #Then Verify that the product name appears in the search results

            Examples:
                  | pageUrl               | user  | productName    | locator                                    |
                  | https://www.amazon.in | Hello | Samsung M34 5G | //*[@id="nav-link-accountList-nav-line-1"] |

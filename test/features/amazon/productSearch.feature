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



Feature: Shopping for HP laptops on Amazon

      Scenario Outline: Navigate to Electronics, search for HP laptops, and add one to the cart

            Given Open the application url <pageUrl> in browser
            When I navigate to the Electronics from <menu>
            And I select Laptops and accessories from the <submenu>
            And I select laptop from <catagory>
            Then I should see a list of brand laptops
            Then I select <brand> laptop from filter
            Then The user selects first product and navigates to its details screen from search Result grid
            Then Add product to the cart from product description page
            When the user opens the shopping cart
            Then the product should be listed in the cart with correct details

            Examples:
                  | pageUrl               | menu        | submenu                | catagory | brand |
                  | https://www.amazon.in | Electronics | Laptop and accessories | Laptop   | HP    |

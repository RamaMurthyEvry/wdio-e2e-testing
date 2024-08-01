Feature: Shopping for HP laptops on Amazon

    Scenario Outline: Navigate to Electronics, search for HP laptops, and add one to the cart

        Given Open the application url <pageUrl> in browser
        When user select <mainMenu> option from main menu
        Then user select <Menu> and <subMenu>
        Then Apply filter <brand> and select checkbox for subfilter <product_company>
        Then The user selects first product and navigates to its details screen from search Result grid
        Then Add product to the cart from product description page
        When the user opens the shopping cart
        Then the product should be listed in the cart with correct details

        Examples:
            | pageUrl               | mainMenu    | Menu                  | subMenu | brand | product_company |
            | https://www.amazon.in | Electronics | Laptops & Accessories | Laptops | Brand | HP              |
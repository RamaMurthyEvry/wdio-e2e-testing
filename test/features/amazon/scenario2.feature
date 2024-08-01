Feature: Add two items in the cart

      Scenario Outline: Verify details after adding a product in cart
            Given Open the application url <pageUrl> in browser
            Then Verify that <user> is on the home page
            When User search <productCategory> product
            Then Verify that the search results page displays <productCategory> in search results
            Then Apply filter <brand> and select checkbox for subfilter <product_company>
            When Apply filter to display products priced between Rs "15000" and Rs "35000" only
            Then Select specific product <productname> from search result page
            Then Add product to the cart from product description page
            When the user opens the shopping cart
            Then the product should be listed in the cart with correct details

            Examples:
                  | pageUrl               | user  | productCategory | brand  | product_company | productname           |
                  | https://www.amazon.in | Hello | mobile          | Brands | Samsung         | Samsung Galaxy M34 5G |

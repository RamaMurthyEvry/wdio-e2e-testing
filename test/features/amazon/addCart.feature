@swe
Feature: Amazon add to cart functionality
      
      Scenario Outline: Verify the product details and add to cart and remove

            Given Open the application url <pageUrl> in browser
            Then Verify that <user> is on the home page
            When User search <productName> product
            Then Verify that the search results page displays <productName> search results
            # Then Verify that the product name appears in the search results
            And user filter the product by price between Rs "10000" – "15000"
            And Verify that all displayed products fall within the specified price range Rs "₹10,000" – "₹15,000"
            And user select one product and go to product details screen
            And user click on the "Add to Cart" button


            Examples:
                  | pageUrl               | user  | productName    |
                  | https://www.amazon.in | Hello | Samsung M34 5G |
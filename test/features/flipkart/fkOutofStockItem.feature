@Flipkart
Feature: FlipKart Item Outof Stock Functionality

Scenario Outline: Verify Outofstock Product in cart
        Given Open the application url <pageUrl> in browser
        Then Verify that "Login" in the home page
        When User searches for the <product>
        Then Verify that the <product> text is displyed in search results
        And Filters for the price within the range <min> <max>
        And User select one product and go to product details screen
        And User click on NofiyMe button in product details screen        
        And Verify Outofstock <Message> is displayed

        Examples:
            | pageUrl                   | product                             | min    | max    | Message                                       |
            | https://www.flipkart.com/ | OnePlus 6T (Thunder Purple, 128 GB) | ₹10000 | ₹30000+ | notify you when this product is back in stock|
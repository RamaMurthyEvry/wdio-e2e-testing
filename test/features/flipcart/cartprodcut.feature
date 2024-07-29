Feature: Verify Product is out of stock

  Scenario Outline: Verify Product is Outofstock 
    Given Open the application url <pageUrl> in browser
    When User searches for the <product>
    And Filters for the price within the range <min> <max>
    And Navigate to <product> details page
    Then Verify the product <message> is out of stock  
    When Click on nofiy me button 
    Then Notification <message1> displayed 

    Examples:
    | pageUrl                    | product                             | min   |max    |message                            |message1                                            | 
    | https://www.flipkart.com/  |Apple iPhone 6s (Rose Gold, 128 GB)  | ₹10000|₹30000+|This item is currently out of stock| We'll notify you when this product is back in stock|
 
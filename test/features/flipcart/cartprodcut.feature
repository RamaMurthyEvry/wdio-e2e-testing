Feature: Verify Product is out of stock

@Flipkart
  Scenario Outline: Verify Product is Outofstock 
    Given Open the application url <pageUrl> in browser
    When User searches for the <product>    
    And Navigate to <product> details page
    Then Verify the product <message> is out of stock  
    When Click on nofiy me button 
    Then Notification <message1> displayed 

    Examples:
    | pageUrl                    | product                             | 
    | https://www.flipkart.com/  |Apple iPhone 6s (Rose Gold, 128 GB)  | 
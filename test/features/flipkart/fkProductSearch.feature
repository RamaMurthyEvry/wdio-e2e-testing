@Flipkart
Feature: FlipKart Product Search Functionality

    Scenario Outline: Verify the searched product
        Given Open the application url <pageUrl> in browser
        Then Verify that "Login" in the home page
        When User searches for the <product>
        Then Verify that the <product> text is displyed in search results
        Then Verify that the <product> name list appears in the search results

        Examples:
            | pageUrl                   | product |
            | https://www.flipkart.com/ | Samsung |

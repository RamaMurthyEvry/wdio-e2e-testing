@Flipkart
Feature: FlipKart Product Sort By Functionality

    Scenario Outline: Verify the searched product
        Given Open the application url <pageUrl> in browser
        Then Verify that "Login" in the home page
        When User searches for the <product>
        Then Verify that the <product> text is displyed in search results
        And Sort by Popularity tab
        And Sort by Price -- Low to High tab
        And Sort by Price -- High to Low
        And Sort by Newest First

        Examples:
            | pageUrl                   | product |
            | https://www.flipkart.com/ | mobile  |
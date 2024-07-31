Feature: Verify User can search for a product, and verify search results

    Scenario Outline: Login and search for a product
        Given user is on the Flipkart home page
        When user enters "<product>" into the search bar
        And user clicks on the "Search" button
        Then user should see search results displaying relevant products
        And the product name "<product>" should appear in the search results

        Examples:
            | product        |
            | Samsung M34 5G |
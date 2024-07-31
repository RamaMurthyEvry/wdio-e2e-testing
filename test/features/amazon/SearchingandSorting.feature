Feature: Amazon product search and sort functionality

    Scenario Outline: Verify the search product

        Given Open the application url <pageUrl> in browser
        Then Verify that <user> is on the home page
        When User search <productName> product
        Then Verify that the search results page displays <productName> in search results
        Then Verify that the product name appears in the search results <productName>
        When Apply sorting by <sort> and verify

        Examples:
            | pageUrl               | user  | productName | sort            |
            | https://www.amazon.in | Hello | iPhone      | price-desc-rank |
            | https://www.amazon.in | Hello | iPhone      | price-asc-rank  |
            | https://www.amazon.in | Hello | iPhone      | review-rank     |




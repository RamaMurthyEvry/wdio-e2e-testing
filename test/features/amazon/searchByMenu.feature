Feature: selecting for submenu from Menu options

    Scenario Outline:  Searching for option from Menu

        Given Open the application url <pageUrl> in browser
        Then Verify that <user> is on the home page
        When user select <mainMenu> option from main menu
        Then user select <Menu> and <subMenu>

        Examples:
            | pageUrl               | user  | mainMenu    | Menu    | subMenu |
            | https://www.amazon.in | Hello | Electronics | Cameras | Cameras |
Feature: Memo

  Background:
    Given I enter the URL of the homepage

  Scenario: User saves a single ad to favorites
    When I click on "Real estate" ad category
    And I click on "Flats" ad sub-category
    And I click on "Jurmala" ad sub-category
    And I choose lower "Town" filter with value "Pumpuri"
    And I select ad number "2"
    And I click on "Pievienot izvēlētos Memo" link
    And I get a confirmation pop-up with "Sludinājumi ir pievienoti Memo." and close it
    And I go to "Memo" page from the header menu
    Then I should see "1" ads in saved memo list

  Scenario: User saves & removes multiple ads from favorites
    When I click on "Animals" ad category
    And I click on "Dogs, puppies" ad sub-category
    And I select ad number "1"
    And I select ad number "2"
    And I select ad number "3"
    And I click on "Pievienot izvēlētos Memo" link
    And I get a confirmation pop-up with "Sludinājumi ir pievienoti Memo." and close it
    And I go to "Memo" page from the header menu
    And I should see "3" ads in saved memo list
    And I select ad number "1"
    And I select ad number "2"
    And I click on "Remove selected from favourites" link
    Then I should see "1" ads in saved memo list

  Scenario: User can search & add to favorites from detailed view
    When I go to "Search" page from the header menu
    And I enter "iPhone X" in the "Ought word or phrase" input box
    And I click on Search button
    And I click on the picture of the ad number "1"
    And I click on "Add to favorites" link
    And I get a confirmation pop-up with "Advertisement added to favorites." and close it
    And I go to "Memo" page from the header menu
    Then I should see "1" ads in saved memo list

  Scenario: User can switch from 'List' to 'Album' view
    When I click on "Animals" ad category
    And I click on "Cats, kittens" ad sub-category
    And I choose lower "Breed:" filter with value "Bengal"
    And I select ad number "1"
    And I click on "Pievienot izvēlētos Memo" link
    And I get a confirmation pop-up with "Sludinājumi ir pievienoti Memo." and close it
    And I go to "Memo" page from the header menu
    Then I should see "1" ads in saved memo list
    When I choose lower "List" filter with value "Album"
    Then I should see ads displayed in Album view

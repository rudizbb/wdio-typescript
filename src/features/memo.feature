Feature: Memo

  Scenario: Anonymous User saves a single memo
    Given I enter the URL of the homepage
    Then I click on "Real estate" ad category
    And I click on "Flats" ad sub-category
    And I click on "Jurmala" ad sub-category
    And I choose lower "Town" filter with value "Pumpuri"
    And I select ad number "2"
    And I click on "Pievienot izvēlētos Memo" link
    And I get a confirmation pop-up with "Sludinājumi ir pievienoti Memo." and close it
    And I go to "Memo" page from the header menu
    And I should see "1" ads in saved memo list

  Scenario: Anonymous User can search & add to favorites from a detailed view
    Given I enter the URL of the homepage
    Then I go to "Search" page from the header menu
    And I enter "iPhone X" in the "Ought word or phrase" input box
    And I click on Search button
    And I click on the picture of the ad number "1"
    And I click on "Add to favorites" link
    And I get a confirmation pop-up with "Advertisement added to favorites." and close it

  Scenario: Anonymous User saves multiple memos
    Given I enter the URL of the homepage
    Then I click on "Transport" ad category
    And I click on "Buggies" ad sub-category
    And I select ad number "1"
    And I select ad number "3"
    And I click on "Pievienot izvēlētos Memo" link
    And I get a confirmation pop-up with "Sludinājumi ir pievienoti Memo." and close it
    And I go to "Memo" page from the header menu
    And I should see "2" ads in saved memo list

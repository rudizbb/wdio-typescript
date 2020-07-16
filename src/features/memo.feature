Feature: Memo

  Scenario: Anonymous User saves a single memo 
    Given I enter the URL of the homepage
    Then I click on "Real estate" ad category
    Then I click on "Flats" ad sub-category
    Then I click on "Jurmala" ad sub-category
    And I choose lower "Town" filter with value "Pumpuri"
    And I select ad number "2"
    And I click on "Pievienot izvēlētos Memo" link
    Then I get a confirmation pop-up and close it
    Then I go to "Memo" page from the header menu
    Then I see "1" saved memo

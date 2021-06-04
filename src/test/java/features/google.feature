@Featuretag
Feature: Search functionality


  @Regression @Sanity
  Scenario Outline: scenario4
    Given User is on the search page
    When user write "<searchvalue>" in "<variable1>", "<variable2>" box
    And click on seach button
    Then results "<variable3>" be displayed

    Examples: 
      | searchvalue | variable1  | variable2 | variable3 |
      | IBM         | sampledata | value2    | value3    |

  @Smoke
  Scenario: scenario1
    And click on seach button
    Then results should be displayed

  @Regression
  Scenario: scenario2
    And click on seach button
    Then results should be displayed

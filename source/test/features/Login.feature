Feature: Login test

  Background:
    Given User navigates to the application
@test
  Scenario: Login should be success
    And User enters the salonId {} and the salonPassword {}
    And User enter the password from test data
    When User click on the login button
    Then Login should be success

    |salonId|
    ||

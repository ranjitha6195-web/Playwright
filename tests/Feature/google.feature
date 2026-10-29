Feature: Demopage account creation
  As a user
  I want to open the Demopage homepage and start the registration flow
  So that I can verify the website and account creation page load correctly

@homepage
Scenario: Opening the Demopage homepage
    Given the user navigates to the Demopage homepage
    Then the page title should contain "Demopage"
    And I pause for manual inspection

  @login
  Scenario: Opening the automationexcercise login page
    Given the user opens the automationexcercise login page
    Then the automation login page should load
    Then verify user can complete login
    

@registration
Scenario: Opening the Demopage registration page
  Given the user opens the Demopage registration page
  Then The user enter email id
  And verify the title of the page account creation page
  And verify user can complete registration 
  
  Scenario: Filling the Amazon registration form with sample data
    Given the user opens the Amazon registration page
    When the user enters sample registration data
    Then the form fields should accept the typed values

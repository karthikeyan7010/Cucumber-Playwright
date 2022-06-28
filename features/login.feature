Feature: New customer Registration

Scenario: Empty registration Authentication (Negative scenario)
    Given the user navigates to HomepageURL.
    When the user clicks on the create a account button
    Then the user should be navigated to customer account page
    When the user clicks on create an account button
    Then the user should see 5 error message
    # And "This is a required field" should be displayed
    When User enters that email with invalid format
    Then the user should see Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com
    When User enters password with invalid format
    Then the user should see Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters message



Scenario: valid Registration Authentication (Postive scenario)
    Given The user will navigates to HomepageURL.
    When The user will clicks on the create a account button
    Then The user will should be navigated to customer account page
    When The user enters valid credentials in the required fields for customer registration
    And click create an account button
    Then the user should be redirected to My account landing page
    
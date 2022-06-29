Feature: New customer Registration


Background: User is Logged In
	Given the user navigates to Homepage
	When the user clicks on the create a account button
	Then the user should be navigated to customer account page

Scenario: Empty registration Authentication (Negative scenario)
    When the user clicks on create an account button
    Then the user should see 5 error message
    # And "This is a required field" should be displayed
    When I fill the login form with "<emailid>"
    Then the user should see Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com
    When User enters password with invalid format
    Then the user should see Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters message

    Examples:
            | emailid | 
            | karthikeyan3071997gmail.com | 

Scenario: valid Registration Authentication (Postive scenario)
    Given The user will navigates to Homepage url
    When The user will clicks on the create a account button
    Then The user will should be navigated to customer account page
    When The user enters valid credentials in the required fields for customer registration
    And click create an account button
    Then the user should be redirected to My account landing page
    
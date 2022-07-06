Feature: New customer Registration


Background: customer Registration
	Given the user navigates to Homepage
    And clicks on Create an Account button

Scenario: Empty Customer Registration Authentication (Negative scenario)
    Given user is in customer registration page
    When the user clicks on create an account button
    Then the user should see 5 error message "This is a required field"

Scenario: Emailid  validation for Customer Registration Authentication (Negative scenario)
    When I fill the login form with "<emailid>"
    Then the user should see "Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com"
        Examples:
                | emailid | 
                | karthikeyan3071997gmail.com |
                | karthikeyan3071997@gmail|
                | karthikeyan3071997.com|

Scenario: Password  validation for Customer Registration Authentication (Negative scenario)
    When User enters password with invalid format "<password>"
    Then the user should see "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters" message
    Examples:
            | password | 
            | karthick | 
            | 12345678 |
            | karthick1234 |



Scenario: valid Registration Authentication (Postive scenario)
    Given The user enters valid credentials in the required fields for customer registration
    When click create an account button
    Then the user is created and redirected to My Account page
Feature: New customer Registration


Background: customer Registration
	Given the user navigates to Homepage
	When the user clicks on the create a account button
	Then the user should be navigated to customer account page

Scenario: Empty Customer Registration Authentication (Negative scenario)
    When the user clicks on create an account button
    Then the user should see 5 error message "This is a required field"

Scenario: Emailid validation (Negative scenario)  
    When I fill the login form with "<emailid>"
    Then the user should see Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com
        Examples:
            | emailid | 
            | karthikeyan3071997gmail.com | 

Scenario: Password validation (Negative scenario)    
    When User enters password with invalid format
    Then the user should see Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters message


Scenario: valid Registration Authentication (Postive scenario)
    When The user enters valid credentials in the required fields for customer registration
    And click create an account button
    Then the user should be redirected to My account landing page
    
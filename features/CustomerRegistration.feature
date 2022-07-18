Feature:Customer Registration


Background:Customer Registration
	Given the user in Homepage and clicks Create an Account button in header
    And user is in customer registration page

Scenario: Empty Customer Registration (Negative scenario)
    When the user clicks on create an account button
    Then the user should see 5 error message "This is a required field"

Scenario: Emailid  validation for Customer Registration(Negative scenario)
    When I fill the login form with "<emailid>"
    Then the user able see "Please enter a valid email address"
        Examples:
                | emailid | 
                | karthikeyan3071997gmail.com |
                | karthikeyan3071997@gmail|
                | karthikeyan3071997.com|

Scenario: Password  validation for Customer Registration (Negative scenario)
    When User enters password with invalid format "<password>"
    Then the user should see "Minimum of different classes of characters in password... " error message
    Examples:
            | password | 
            | karthick | 
            | 12345678 |
            | karthick1234 |



Scenario: Customer Registration (Postive scenario)
    When User create account with "<FirstName>","<LastName>","<EmailID>","<Passwords>","<confirmpassword>"
    And click create an account button
    Then the user is created and redirected to My Account page


    Examples:
        | FirstName   | LastName  | EmailID | Passwords| confirmpassword |
        | Karthick    | keyan     | karthikeyan3071990@gmail.com | admin@123 | admin@123 |
        | Abdul    | Nishar     | abdulnishar@gmail.com | admin@123 | admin@123 |
        | Karthick    | AK     | karthickAK3071990@gmail.com | admin@123 | admin@123 |
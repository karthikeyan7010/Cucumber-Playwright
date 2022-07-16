Feature: Logged In Customer

Background: Logged In Customer
    Given the user navigates to Homepage URL
    And clicks on Sigin button

Scenario: Validate Empty Logged In Customer(negative scenario)
    Given user is in customer Sigin page 
    When The user clicks on Sigin button
    Then the user should see 2 error messages "This is a required field"

Scenario: Emailid validation for Logged In Customer(Negative scenario)    
    When  I fill the login email form with "<emailid>"
    And click sigin Now button
    Then the user able see "Please enter a valid email address"
        Examples:
            | emailid | 
            | karthikeyan3071997gmail.com | 
            | karthikeyan3071997@gmail|
            | karthikeyan3071997.com|

Scenario: Password validation for Logged In Customer (Negative scenario)    
    When the user enters Invalid password in the required fields "<EmailID>","<password>"
    And click a sigin button
    Then the user should see "Incorrect CAPTCHA"
        Examples:
        | EmailID   | password  |
        | karthickdk33@gmail.com  | karthick   |
        |  karthikeyan3071997@gmail.com | 12345678   | 
        |  karthick33@gmail.com     | karthick1234     | 

Scenario: Logged In Customer(postive scenario)
    Given the user should navigated to Sigin page
    When The user enters valid credentials in the required fields for customer Sigin page "<EmailID>","<password>"
    And  click sigin button
    Then the user should be on respective landing Home page
    When the user clicks on the Name of the product
    And  the user clicks Add to Cart button
    Then the product is added to minicart wrapper
    When User clicks on the proceed to checkout button
    And  User check that payment method and clicks on a place Order button
    Then The user should be navigated in Order Success page 
    
        Examples:
        | EmailID   | password  |
        | karthickdk33@gmail.com  | admin@123   |
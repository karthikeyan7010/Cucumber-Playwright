Feature: Logged In Customer

Background: Logged In Customer
    Given the user in Homepage and clicks Sigin button in header
    And the user is in customer sigin page

Scenario: Validate Empty Logged In Customer(negative scenario)
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
    When The user enters valid credentials in the required fields for customer Sigin page "<EmailID>","<password>"
    And  click sigin button
    Then the user should be on respective landing Home page
    And the user select on the Name of the product
    When The user adds a product to the cart
    And the user clicks a minicard and proceeds to checkout button
    Then The user should redirected checkout payment page
    And The user clicks on Next button
    When The user checks the payment method and clicks on a Place Order button
    Then The user should navigated in Order Success page
    Examples:
        | EmailID   | password  |
        | karthickdk33@gmail.com  | admin@123   |
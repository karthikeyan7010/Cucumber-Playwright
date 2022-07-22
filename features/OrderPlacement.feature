Feature:Order Placement


Background:Order Placement
    Given the user navigates to Homepage URL
    When The user select a configurableproduct adds a product to the cart
    And the user clicks a minicard and proceeds to checkout button
    Then The user is on Checkout landing Page

Scenario:Validate Empty field in Guest user (Negative scenario)
    When The user clicks on Next button
    Then The user should see 8 error messages "This is a required field"

Scenario: Emailid validation for Guest user (Negative scenario)
    When  I fill the email field form with "<emailid>"
    And click Next button
    Then "Please enter a valid email address" should be displayed
    Examples:
        | emailid | 
        | karthikeyan3071997gmail.com | 
        | karthikeyan3071997@gmail|
        | karthikeyan3071997.com|

Scenario:Validate Empty field in Login user (Negative scenario)  
    When The user clicks on Next button
    Then The user should see 8 error messages "This is a required field"



Scenario: Emailid validation for Login user (Negative scenario)
    When  I fill the email field form with "<emailid>"
    And  click Next button
    Then "Please enter a valid email address" should be displayed
    Examples:
        | emailid | 
        | karthikeyan3071997gmail.com | 
        | karthikeyan3071997@gmail|
        | karthikeyan3071997.com|  


Scenario: Guest order placement (postive scenario)
    When  The guest user enter valid details for shipping address page "<emailid>","<FirstName>","<LastName>","<Street>","<City>","<Postcode>","<Telephone>"
    And The user clicks on Next button
    Then The user should redirected checkout payment page
    When The user checks the payment method and clicks on a Place Order button
    Then The user should navigated in Order Success page
    Examples:
        | emailid   | FirstName  | LastName | Street| City | Postcode | Telephone |
        | KarthikeyanSKY1@gamil.com |  karthick     | SKY | T.nagar | Chennai | 12345 | 7010776772 |


Scenario: Logged In order placement (postive scenario)
    When  The user enter valid details for shipping address page "<emailid>","<Password>"
    And The user clicks on Next button
    Then The user should redirected checkout payment page
    When The user checks the payment method and clicks on a Place Order button
    Then The user should navigated in Order Success page
    Examples:
        | emailid | Password |
        | karthickdk33@gmail.com | admin@123 |

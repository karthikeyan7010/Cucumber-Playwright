Feature:Order Placement


Background:Order Placement
    Given the user navigates to Homepageurl
    And the user will clicks on the Product
    And  The user added a product to the cart to proceed to a checkout page

    Scenario:Validate Empty field in Guest user (Negative scenario)
    Given The user is on Checkout landing Page
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

    Scenario:Validate Empty field in Logged In user (Negative scenario)  
    Given The user is on Checkout landing Page
    When The user clicks on Next button
    Then The user should see 8 error messages "This is a required field"



    Scenario: Emailid validation for Logged In user (Negative scenario)
        When  I fill the email field form with "<emailid>"
        And  click Next button
        Then "Please enter a valid email address" should be displayed
        Examples:
            | emailid | 
            | karthikeyan3071997gmail.com | 
            | karthikeyan3071997@gmail|
            | karthikeyan3071997.com|  


    Scenario: Guest order placement (postive scenario)
    Given The user is on Checkout landing Page
    And  The guest user enter valid details for shipping address page "<emailid>","<FirstName>","<LastName>","<Street>","<City>","<Postcode>","<Telephone>"
    When The user clicks on Next button
    Then The user should redirected checkout payment page
    When The user checks the payment method and clicks on a Place Order button
    Then The user should navigated in Order Success page
        Examples:
        | emailid   | FirstName  | LastName | Street| City | Postcode | Telephone |
        | KarthikeyanSKY1@gamil.com |  karthick     | SKY | T.nagar | Chennai | 12345 | 7010776772 |


    Scenario: Logged In order placement (postive scenario)
    Given The user is on Checkout landing Page
    And  The user enter valid details for shipping address page "<emailid>","<Password>"
    When The user clicks on Next button
    Then The user should redirected checkout payment page
    When The user checks the payment method and clicks on a Place Order button
    Then The user should navigated in Order Success page
    
        Examples:
            | emailid | Password |
            | karthickdk33@gmail.com | admin@123 |

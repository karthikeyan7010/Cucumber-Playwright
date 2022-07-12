Feature: Guest order Place


Background:Guest Order Place
    Given The guest user will navigates to homepageurl
    And Guest user will clicks on the respective Product

    Scenario: Guest Order Place (Negative scenario)
    Given The guest user can be navigated to product details page 
    And  Guest User adds product to the cart 
    Then  Guest User should be able to view and add the from minicart 
    When Guest user will be clicks on the proceed to checkout button
    Then The guest user will should be navigated in Shipping address page 
    When The guest user click on a Next button
    Then the user should see error messages "This is a required field" and "Select the shipping method and try again."
    When I fill the valid email form with "<emailid>"
    Then the user able see "Please enter a valid email address"
        Examples:
            | emailid |
            | karthikeyan3071997@.com | 
            | karthikeyanAK33gmail.com |
            | karthikeyanVK18@gmail |   




Scenario: Guest Order Place (Postive scenario)
    Given The guest user should be navigated to pdp page
    When  I clicks on the add to cart button
    Then The product is added to minicart wrapper
    When Guest user will click the proceed to checkout button
    Then The guest user should seen a Shipping address page 
    When The guest user enters valid details for shipping address page "<Emailid>","<FirstName>","<LastName>","<Street>","<City>","<Postcode>","<Telephone>"
    And  click on a Next button
    Then The guest user should redirected checkout payment page
    When Guest user check the payment method and while click on a place Order button
    Then The guest user should navigated in Order Success pageurl 


    Examples:
        | Emailid   | FirstName  | LastName | Street| City | Postcode | Telephone |
        | KarthikeyanSKY@gamil.com  | karthick     | SKY | T.nagar | Chennai | 12345 | 7010776772 |


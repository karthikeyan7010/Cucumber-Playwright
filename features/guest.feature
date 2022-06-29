Feature: Guest order Registration

Scenario: Guest order placement using (Negative scenario)
    Given The guest user will navigates to homepageurl
    When Guest user will clicks on the respective Product
    Then The guest user can be navigated to product details page
    When Guest user can click the add to cart button
    Then The product will added from minicart basket
    When Guest user will be clicks on the proceed to checkout button
    Then The guest user will should be navigated in Shipping address page 
    When The guest user click on a Next button
    Then we can see a both errors in shipping method and required field error
    # And the user should see"The shipping method is missing. Select the shipping method and try again."and "This is a required field" should be displayed
    When I fill the valid email form with "<emailid>"
    Then the user should will seen Please enter a valid email address Ex: johndoe@domain.com. message



        Examples:
            | emailid | 
            | karthikeyan3071997@gmail.com |    




Scenario: Guest Order placement using (Postive scenario)
    Given A user is on homepageurl
    When the user clicks on the respective Product
    Then The guest user should be navigated to pdp page
    When  I clicks on the add to cart button
    Then The product is added to minicart wrapper
    When Guest user will click the proceed to checkout button
    Then The guest user should seen a Shipping address page 
    When The guest user enters valid credentials in the required fields for shipping address page
    And  click on a Next button
    Then The guest user should redirected checkout payment page
    When Guest user check the payment method and while click on a place Order button
    Then The guest user should navigated in Order Success pageurl 




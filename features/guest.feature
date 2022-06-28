Feature: Shopping order using Guest user
    As a visitor of the ecommerce website
    I want to buy a shopping things
    So that I can see the products and costs of what I want to purchase

Scenario: Guest order placement using (Negative scenario)
    Given The guest user will navigates to HomepageURL
    When Guest user clicks on the respective Product
    Then The guest user will should be navigated to product details page
    When Guest user click the add to cart button
    Then The product will added to minicart basket
    When Guest user will clicks on the proceed to checkout button
    Then The guest user should be navigated in Shipping address page 
    When The guest user clicks on Next button
    Then we can see both error in shipping method and required field error
    # And the user should see"The shipping method is missing. Select the shipping method and try again."and "This is a required field" should be displayed
    When User fill that email input field with invalid credentials 
    Then the user should will see Please enter a valid email address Ex: johndoe@domain.com. message
    When User fill that Zipcode input field with invalid credentials
    # And the user should see Provided Zip/Postal Code seems to be invalid message




Scenario: Guest Order placement using (Postive scenario)
    Given The guest user navigates to HomepageURL.
    When Guest user click on the respective Product
    Then The guest user should be navigated to product details page
    When  I click the add to cart button
    Then The product is added to minicart
    When Guest user clicks on the proceed to checkout button
    Then The guest user should see  Shipping address page 
    When The guest user enters valid details in the required fields for shipping address page
    And  click Next button
    Then The guest user should be redirected to checkout payment page
    When Guest user check the payment method and click on a place Order button
    Then The guest user should be navigated in Order Success page 
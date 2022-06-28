Feature: Order placement using Logged in customer


Scenario: Order Placement using (negative scenario)
    Given The user will navigates to HomepageURL.
    When User clicks on the Sigin button
    Then The user should be navigated to Sigin page
    When The user clicks on Sigin button
    Then the user should see 2 error message
    # And "This is a required field" should be displayed
    When User fill that email with invalid credentials 
    Then the user should see Please enter a valid email address Ex: johndoe@domain.com. message
    And The user fill that password with invalid credentials
    # Then the user should see The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later. message


Scenario: Order placement using (postive scenario)
    Given The user navigates to HomepageURL.
    When The user clicks on the Sigin button
    Then The user should be navigated to Sigin account page
    When The user enters valid credentials in the required fields for customer Sigin page
    And click sigin button
    Then the user should be redirected to  HomepageURL
    When User click on the respective Product
    And  I click the add to basket button
    Then the product is added to minicart
    When User clicks on the proceed to checkout button
    And User check that payment method and clicks on a place Order button
    Then The user should be navigated in Order Success page 
    
Feature: Order placement using Logged in customer


Scenario: Empty Registration Authentication (negative scenario)
    Given the user navigates to Homepage
    When User clicks on the Sigin button
    Then The user should be navigated to Sigin page
    When The user clicks on Sigin button
    Then the user should see 2 error message This is a required field


Scenario: Emailid validation (negative scenario)
    Given the registration Landing page is shown
    When  I fill the login email form with "<emailid>"
    And click sigin Now button
    Then the user should see Please enter a valid email address Ex: johndoe@domain.com. message

        Examples:
            | emailid | 
            | karthikeyan3071997gmail.com |    

Scenario: Order placement using (postive scenario)
    Given The user will navigates to HomepageURL.
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
    
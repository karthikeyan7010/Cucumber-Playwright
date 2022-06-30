# Feature: Order placement using Register customer

# Background: Order placement using Register customer
#     Given the user navigates to Homepage URL
#     When the user clicks on the Sigin button
#     Then the user should be navigated to Sigin page

# Scenario: Validate Empty Register customer Authentication (negative scenario)
#     When The user clicks on Sigin button
#     Then the user should see 2 error messages "This is a required field"

# Scenario: Emailid validation for register customer (negative scenario)
#     When  I fill the login email form with "<emailid>"
#     And click sigin Now button
#     Then the user should see Please enter a valid email address Ex: johndoe@domain.com. message
#         Examples:
#             | emailid | 
#             | karthikeyan3071997gmail.com |    

#     Scenario: Password validation for register customer (negative scenario)
#     When the user enters Invalid password in the required fields "<password>"
#     And click a sigin button
#     Then the user should see "Incorrect CAPTCHA"
#         Examples:
#             | password | 
#             | karthick | 

# Scenario: Order placement using Register customer (postive scenario)
#     When The user enters valid credentials in the required fields for customer Sigin page
#     And  click sigin button
#     Then the user should be on respective landing Home page
#     When the user clicks on the Name of the product
#     And  the user clicks Add to Cart button
#     Then the product is added to minicart wrapper
#     When User clicks on the proceed to checkout button
#     And User check that payment method and clicks on a place Order button
#     Then The user should be navigated in Order Success page 
    
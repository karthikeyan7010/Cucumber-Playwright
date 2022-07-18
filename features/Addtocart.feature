Feature: Add to cart

Background:Add to cart
	Given the user in Homepage and select on the Product
    And The user can be navigated to the product details page 


    Scenario:Validate Empty Add to cart(Neagtive scenario)
    When The user clicks on Add to Cart button
    Then the user should see 2 error messages "This is a required field"



    Scenario:Out of stock Add to cart(Neagtive scenario)
    When the user gives more than the stock and clicks Add to cart
    Then The user should see error messages "The requested qty is not available"



    Scenario:Add to cart (Postive scenario) 
    When The user added a product to the cart to proceed to a checkout page
    Then The user should be navigated in Shipping address page
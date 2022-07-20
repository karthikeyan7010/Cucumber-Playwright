Feature: Add to cart

Background:Add to cart
	Given the user in Homepage and select on the Product
    And The user can be navigated to the product details page 


Scenario:Validate Empty Add to cart(Neagtive scenario)
    When The user clicks on Add to Cart button
    Then the user should see "This is a required field" at colour and size attribute



Scenario:Out of stock Add to cart(Neagtive scenario)
    When the user add more stock to cart than the available stock
    Then The user should see error messages "The requested qty is not available"



Scenario:Add to cart (Postive scenario) 
    When The user adds a product to the cart 
    And the user get success message "You added Breathe-Easy Tank to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page
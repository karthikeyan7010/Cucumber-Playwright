Feature: Add to cart

Background:Add to cart
	Given the user navigates to Homepageurl
    And the user will clicks on the Product

    Scenario:Add to cart(Postive scenario)
    Given The guest user can be navigated to the product details page 
    And  The user added a product to the cart to proceed to a checkout page
    Then The guest user should be navigated in Shipping address page 
Feature: Add to cart

Background:Add to cart
	Given the user navigates to Homepage URL

Scenario:Validate Out of stock Add to cart using Simple product(Neagtive scenario)
    When the user select a product add more stock to cart 
    Then The user should see error messages "The requested qty is not available"

Scenario:validate Empty Field Add to cart using Configurable Product(Neagtive scenario)
    When the user select a product and click Add to cart button
    Then the user should see "This is a required field" at colour and size attribute

Scenario:Validate Out of stock Add to cart using Configurable product(Neagtive scenario)
    When the user add more stock to cart than the available stock
    Then The user should see error messages "The requested qty is not available"


Scenario:Validate Out of stock Add to cart using Bundle Product(Neagtive scenario)
    When the user select a product add more stock to cart in Bundle product
    Then The user should see error messages "The requested qty is not available"

Scenario:Validate Out of stock Add to cart using Grouped product(Neagtive scenario)
    When the user select a product add more stock to cart in Grouped product
    Then The user should see error messages "The requested qty is not available"

Scenario:Add to cart using simple Product (Postive scenario) 
    When The user select a simpleproduct adds a product to the cart 
    And the user get success message "You added Fusion Backpack to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page

Scenario:Add to cart using Configurable Product (Postive scenario) 
    When The user select a configurableproduct adds a product to the cart 
    And the user get success message "You added Breathe-Easy Tank to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page

Scenario:Add to cart using Bundle Product (Postive scenario) 
    When The user select a bundleproduct adds a product to the cart 
    And the user get success message "You added Sprite Yoga Companion Kit to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page

Scenario:Add to cart using Grouped Product (Postive scenario) 
    When The user select a Groupedproduct adds a product to the cart 
    And the user get success message "You added Set of Sprite Yoga Straps to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page    

Scenario:Add to cart using Downloadable Product (Postive scenario) 
    When The user select a Downloadableproduct adds a product to the cart 
    And the user get success message "You added LifeLong Fitness IV to your shopping cart."
    When the user clicks a minicard and proceeds to checkout button
    Then The user should be navigated in Shipping address page        
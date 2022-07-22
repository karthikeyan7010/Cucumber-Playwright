const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { Addtocart } = require('../page-objects/Addtocart-page')

const cart = new Addtocart()

Given('the user navigates to Homepage URL', async function () {
    await cart.naviagatehomepage()
})

When('the user select a product add more stock to cart',{timeout: 2 * 5000}, async function () {
    await cart.simpleproductoutofstock()
})

Then('The user should see error messages "The requested qty is not available"', async function () {
    await cart.outofstockerror()
})

When('the user select a product and click Add to cart button', async function () {
    await cart.configproductaddtocart()
})

Then('the user should see "This is a required field" at colour and size attribute', async function () {
    await cart.requirefielderror()
})

When('the user add more stock to cart than the available stock',{timeout: 2 * 5000}, async function () {
    await cart.configoutofstock()
})

When('the user select a product add more stock to cart in Bundle product', async function () {
    await cart.bundleproductoutofstock()
})

When('the user select a product add more stock to cart in Grouped product',{timeout: 2 * 5000}, async function () {
    await cart.groupedproductoutofstock()
})

When('The user select a simpleproduct adds a product to the cart', async function () {
    await cart.simpleproductaddtocart()
})

defineStep('the user get success message "You added Fusion Backpack to your shopping cart."', async function () {
    await cart.simpleproductsuccess()
})

When('the user clicks a minicard and proceeds to checkout button', async function () {
    await cart.proceedtocheckout()
})

Then('The user should be navigated in Shipping address page', async function () {
    await cart.shippingpage()
}) 

When('The user select a configurableproduct adds a product to the cart', async function () {
    await cart.configurableproductaddtocart()
})

defineStep('the user get success message "You added Breathe-Easy Tank to your shopping cart."', async function () {
    await cart.productsuccess()
})

When('The user select a bundleproduct adds a product to the cart', async function () {
    await cart.bundleproductaddtocart()
})

defineStep('the user get success message "You added Sprite Yoga Companion Kit to your shopping cart."', async function () {
    await cart.productsuccess()
})

When('The user select a Groupedproduct adds a product to the cart', async function () {
    await cart.Groupedproductaddtocart()
})

defineStep('the user get success message "You added Set of Sprite Yoga Straps to your shopping cart."', async function () {
    await cart.productsuccess()
})

When('The user select a Downloadableproduct adds a product to the cart', async function () {
    await cart.Downloadableproductaddtocart()
})

defineStep('the user get success message "You added LifeLong Fitness IV to your shopping cart."', async function () {
    await cart.productsuccess()
})


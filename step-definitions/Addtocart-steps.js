const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { Addtocart } = require('../page-objects/Addtocart-page')

const cart = new Addtocart()

Given('the user in Homepage and select on the Product', async function () {
    await cart.naviagateproduct()
})

defineStep('The user can be navigated to the product details page',{timeout: 2 * 5000}, async function () {
    await cart.productdetailspage()
})

When('The user clicks on Add to Cart button',{timeout: 2 * 5000}, async function () {
    await cart.addtocart()
})

Then('the user should see "This is a required field" at colour and size attribute',{timeout: 2 * 5000}, async function () {
    await cart.requirefielderror()
})

When('the user add more stock to cart than the available stock',{timeout: 2 * 5000}, async function () {
    await cart.outofstock()
})

Then('The user should see error messages "The requested qty is not available"',{timeout: 2 * 5000}, async function () {
    await cart.outofstockerror()
})

When('The user adds a product to the cart', async function () {
    await cart.addtocart()
})

defineStep('the user get success message "You added Breathe-Easy Tank to your shopping cart."', async function () {
    await cart.productsuccess()
})

When('the user clicks a minicard and proceeds to checkout button', async function () {
    await cart.proceedtocheckout()
})
Then('The user should be navigated in Shipping address page', async function () {
    await cart.shippingpage()
})
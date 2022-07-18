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

When('the user gives more than the stock and clicks Add to cart',{timeout: 2 * 5000}, async function () {
    await cart.outofstock()
})

Then('The user should see error messages "The requested qty is not available"',{timeout: 2 * 5000}, async function () {
    await cart.outofstockerror()
})

When('The user added a product to the cart to proceed to a checkout page', async function () {
    await cart.proceedtocheckout()
})

Then('The user should be navigated in Shipping address page', async function () {
    await cart.shippingpage()
})
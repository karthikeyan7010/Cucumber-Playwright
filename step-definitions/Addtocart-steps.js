const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { Addtocart } = require('../page-objects/Addtocart-page')

const cart = new Addtocart()

Given('the user navigates to Homepageurl', async function () {
    await cart.navigateToHomePage()
})

defineStep('the user will clicks on the Product', async function () {
    await cart.productname()
})

Given('The guest user can be navigated to the product details page', async function () {
    await cart.productdetailspage()
})

defineStep('The user added a product to the cart to proceed to a checkout page',{timeout: 2 * 5000}, async function () {
    await cart.proceedtocheckout()
})

Then('The guest user should be navigated in Shipping address page', async function () {
    await cart.shippingpage()
})
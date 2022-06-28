const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { Guestacc } = require('../page-objects/guest-page')

const guestacc = new Guestacc()

Given('The guest user will navigates to HomepageURL', async function () {
    await guestacc.navigateToHomePage()
})

When('Guest user clicks on the respective Product', async function () {
    await guestacc.guestorderpurchase()
})

Then('The guest user will should be navigated to product details page', async function () {
    await guestacc.productdetails()
})

When('Guest user click the add to cart button', async function () {
    await guestacc.addtocart()
})

Then('The product will added to minicart basket', async function () {
    await guestacc.minicart()
})

When('Guest user will clicks on the proceed to checkout button', async function () {
    await guestacc.checkoutbutton()
})

Then('The guest user should be navigated in Shipping address page', async function () {
    await guestacc.shippingpage()
})


When('The guest user clicks on Next button', async function () {
    await guestacc.nextbuttton()
})

Then('we can see both error in shipping method and required field error', async function () {
    await guestacc.errormessage()
})

When('User fill that email input field with invalid credentials', async function () {
    await guestacc.invalidemail()
})

Then('the user should will see Please enter a valid email address Ex: johndoe@domain.com. message', async function () {
    await guestacc.emailerrormessage()
})

When('User fill that Zipcode input field with invalid credentials', async function () {
    await guestacc.invalidZipcode()
})

Given('The guest user navigates to HomepageURL.', async function () {
    await guestacc.navigateHomePage()
})

When('Guest user click on the respective Product', async function () {
    await guestacc.selectproduct()
})

Then('The guest user should be navigated to product details page', async function () {
    await guestacc.pdp()
})

When('I click the add to cart button', async function () {
    await guestacc.addtocart1()
})

Then('The product is added to minicart', async function () {
    await guestacc.minicart1()
})

When('Guest user clicks on the proceed to checkout button', async function () {
    await guestacc.checkoutbutton1()
})

Then('The guest user should see  Shipping address page', async function () {
    await guestacc.shippingpage1()
})


When('The guest user enters valid details in the required fields for shipping address page', async function () {
    await guestacc.validdetails()
})

defineStep('click Next button', async function () {
    await guestacc.nextpagebutton()
})

Then('The guest user should be redirected to checkout payment page', async function () {
    await guestacc.paymentpage()
})


When('Guest user check the payment method and click on a place Order button', async function () {
    await guestacc.placeorder()
})

Then('The guest user should be navigated in Order Success page', async function () {
    await guestacc.successpage()
})


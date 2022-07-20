const { Given, When,Then,defineStep } = require('@cucumber/cucumber')
const { orderplacement } = require('../page-objects/OrderPlacement-page')

const guestacc = new orderplacement()

Then('The user is on Checkout landing Page', async function () {
    await guestacc.checkoutpage()
})

When('The user clicks on Next button',{timeout: 2 * 5000}, async function () {
    await guestacc.nextbutton()
})

Then('The user should see 8 error messages "This is a required field"', async function () {
    await guestacc.requiredfielderror()
})

When(
    /^I fill the email field form with "([^"]*)"$/,{timeout: 2 * 5000},
    async function (emailid) {
    await guestacc.invalidemail(emailid)
})

defineStep('click Next button', async function () {
    await guestacc.nextbutton()
})

Then('"Please enter a valid email address" should be displayed',{timeout: 2 * 5000}, async function () {
    await guestacc.emailerrormessage()
})

When('The guest user click on a Next button', async function () {
    await guestacc.nextbuttton()
})

When(
    /^The guest user enter valid details for shipping address page "([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"$/,{timeout: 2 * 5000},
    async function (emailid,FirstName,LastName,Street,City,Postcode,Telephone) {
    await guestacc.validdetails(emailid,FirstName,LastName,Street,City,Postcode,Telephone)
})

Then('The user should redirected checkout payment page', async function () {
    await guestacc.paymentpage()
})

When('The user checks the payment method and clicks on a Place Order button', async function () {
    await guestacc.placeorder()
})

Then('The user should navigated in Order Success page', async function () {
    await guestacc.successpage()
})

When(
    /^The user enter valid details for shipping address page "([^"]*)","([^"]*)"$/,{timeout: 2 * 5000},
    async function (emailid,Password) {
    await guestacc.loggedinemailid(emailid,Password)
})

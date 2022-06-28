const { Given, When,Then  ,defineStep } = require('@cucumber/cucumber')
const { RegCust } = require('../page-objects/register-page')

const regcust = new RegCust()

Given('The user will navigates to HomepageURL.', async function () {
    await regcust.navigateToHomePage()
})

When('User clicks on the Sigin button', async function () {
    await regcust.siginaccount()
})

Then('The user should be navigated to Sigin page', async function () {
    await regcust.signinpage()
})


When('The user clicks on Sigin button', async function () {
    await regcust.signinbutton()
})

Then('the user should see 2 error message', async function () {
    await regcust.errormessage()
})

When('User fill that email with invalid credentials', async function () {
    await regcust.invalidemailid()
})

Then('the user should see Please enter a valid email address Ex: johndoe@domain.com. message', async function () {
    await regcust.emailerrormessage()
})

defineStep('The user fill that password with invalid credentials', async function () {
    await regcust.invalidpass()
})

Given('The user navigates to HomepageURL.', async function () {
    await regcust.homepage()
})

When('The user clicks on the Sigin button', async function () {
    await regcust.signinbutton1()
})

Then('The user should be navigated to Sigin account page', async function () {
    await regcust.siginaccpage()
})

When('The user enters valid credentials in the required fields for customer Sigin page', async function () {
    await regcust.valid()
})

defineStep('click sigin button', async function () {
    await regcust.clicksigin()
})

Then('the user should be redirected to  HomepageURL', async function () {
    await regcust.navigatehomepage()
})

When('User click on the respective Product', async function () {
    await regcust.selectproduct()
})

defineStep('I click the add to basket button', async function () {
    await regcust.addtocart()
})

Then('the product is added to minicart', async function () {
    await regcust.minicart()
})

When('User clicks on the proceed to checkout button', async function () {
    await regcust.proceedtocheckout()
})

defineStep('User check that payment method and clicks on a place Order button',{timeout: 2 * 5000}, async function () {
    await regcust.placeorder()
})

Then('The user should be navigated in Order Success page',{timeout: 2 * 5000}, async function () {
    await regcust.successpage()
})
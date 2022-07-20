const { Given, When,Then  ,defineStep } = require('@cucumber/cucumber')
const { RegCust } = require('../page-objects/LoggedInCustomer-page')

const regcust = new RegCust()

Given('the user in Homepage and clicks Sigin button in header', async function () {
    await regcust.navigateTosignaccpage()
})

defineStep('the user is in customer sigin page', async function () {
    await regcust.signinpage()
})

When('The user clicks on Sigin button', async function () {
    await regcust.signinbutton()
})

Then('the user should see 2 error messages "This is a required field"',{timeout: 2 * 5000}, async function () {
    await regcust.requriedfielderror()
})

When(
    /^I fill the login email form with "([^"]*)"$/,
    async function (emailid) {
    await regcust.invalidemailerror(emailid)
})

defineStep('click sigin Now button', async function () {
    await regcust.signinnow()
})

Then('the user able see "Please enter a valid email address"', async function () {
    await regcust.emailerrormessage()
})

When(
    /^the user enters Invalid password in the required fields"([^"]*)","([^"]*)"$/,
    async function (EmailID,password) {
    await regcust.invalidpassworderror(EmailID,password)
})

defineStep('click a sigin button', async function () {
    await regcust.clicksigin1()
})

Then('the user should see "Incorrect CAPTCHA"', async function () {
    await regcust.incorrectcapchaerror()
})


//Order placement using (postive scenario)
When(
    /^The user enters valid credentials in the required fields for customer Sigin page"([^"]*)","([^"]*)"$/,
    async function (EmailID,password) {
    await regcust.validlogin(EmailID,password)
})


defineStep('click sigin button', async function () {
    await regcust.clicksigin()
})

Then('the user should be on respective landing Home page', async function () {
    await regcust.navigatehomepage()
})

When('the user select on the Name of the product', async function () {
    await regcust.selectproduct()
})
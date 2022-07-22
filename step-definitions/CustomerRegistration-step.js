const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { CustomerRegistration } = require('../page-objects/CustomerRegistration-page')

const loginPage = new CustomerRegistration()

Given('the user in Homepage and clicks Create an Account in header', async function () {
    await loginPage.navigateaccpage()
})

defineStep('user is in customer registration page', async function () {
    await loginPage.customerform()
})

When('the user clicks on create an account button', async function () {
    await loginPage.clickbutton()
})

Then('the user should see 5 error message "This is a required field"', async function () {
    await loginPage.requriedfielderror()
})

When(
    /^I fill the login form with "([^"]*)"$/,
    async function (emailid) {
    await loginPage.submitLoginWithParameters(emailid)
})

Then('the user able see "Please enter a valid email address"', async function () {
    await loginPage.emailerrormessage()
})

When(
    /^User enters password with invalid format "([^"]*)"$/,
    async function (password) {
    await loginPage.userpassword(password)
})

Then('the user should see "Minimum of different classes of characters in password... " error message', async function () {
    await loginPage.passworderrormessage()
})

When(
    /^User create account with "([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"$/,
    async function (FirstName, LastName,EmailID,Passwords,confirmpassword) {
    await loginPage.customerdetails(FirstName, LastName,EmailID,Passwords,confirmpassword)
})

defineStep('click create an account button',{timeout: 2 * 5000}, async function () {
    await loginPage.formsubmit()
})

Then('the user is created and redirected to My Account page', async function () {
    await loginPage.myaccpage()
})
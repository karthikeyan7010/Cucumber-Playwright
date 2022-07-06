const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { CustomerRegistration } = require('../page-objects/NewCustomerRegistration-page')

const loginPage = new CustomerRegistration()

Given('the user navigates to Homepage', async function () {
    await loginPage.navigateToHomePage()
})

defineStep('clicks on Create an Account button', async function () {
    await loginPage.createaccount()
})

Given('user is in customer registration page', async function () {
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
    }
    )

Then('the user should see "Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com"', async function () {
    await loginPage.emailerrormessage()
})

When(
    /^User enters password with invalid format "([^"]*)"$/,
    async function (password) {
        await loginPage.userpassword(password)
    }
    )

Then('the user should see "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters" message', async function () {
    await loginPage.passworderrormessage()
})


Given('The user enters valid credentials in the required fields for customer registration', async function () {
    await loginPage.validcredentials()
})

When('click create an account button', async function () {
    await loginPage.formsubmit()
})

Then('the user is created and redirected to My Account page', async function () {
    await loginPage.myaccpage()
})
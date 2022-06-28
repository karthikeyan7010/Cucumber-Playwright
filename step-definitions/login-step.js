const { Given, When,Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('the user navigates to HomepageURL.', async function () {
    await loginPage.navigateToHomePage()
})

When('the user clicks on the create a account button', async function () {
    await loginPage.createaccount()
})

Then('the user should be navigated to customer account page', async function () {
    await loginPage.customerform()
})

When('the user clicks on create an account button', async function () {
    await loginPage.clickbutton()
})

Then('the user should see 5 error message', async function () {
    await loginPage.errormessage()
})

When('User enters that email with invalid format', async function () {
    await loginPage.invalidemailid()
})

Then('the user should see Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com', async function () {
    await loginPage.emailerrormessage()
})

When('User enters password with invalid format', async function () {
    await loginPage.userpassword()
})

Then('the user should see Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters message', async function () {
    await loginPage.passworderrormessage()
})

Given('The user will navigates to HomepageURL.', async function () {
    await loginPage.landingpage()
})

When('The user will clicks on the create a account button', async function () {
    await loginPage.clickcreateaccount()
})

Then('The user will should be navigated to customer account page', async function () {
    await loginPage.clickcreateaccount()
})

When('The user enters valid credentials in the required fields for customer registration', async function () {
    await loginPage.validcredentials()
})

defineStep('click create an account button', async function () {
    await loginPage.formsubmit()
})

Then('the user should be redirected to My account landing page', async function () {
    await loginPage.myaccpage()
})




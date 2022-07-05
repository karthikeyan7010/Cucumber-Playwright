const { Given, When,Then,defineStep } = require('@cucumber/cucumber')
const { RegCust } = require('../page-objects/registercustomer-page')
const { LoginPage } = require('../page-objects/NewCustomerRegistration-page')

const regcust = new RegCust()
const loginPage = new LoginPage()

Given('the user navigates to Homepage URL', async function () {
    await regcust.navigateToHomePage()
})

defineStep('clicks on login Sigin button', async function () {
    await regcust.siginaccount()
})

Given('the user should be navigated to Sigin page', async function () {
    await regcust.signinpage()
})


When('The user clicks on Sigin button', async function () {
    await regcust.signinbutton()
})

Then('the user should see 2 error messages "This is a required field"', async function () {
    await regcust.errormessage()
})

When(
    /^I fill the login email form with "([^"]*)"$/,
    async function (emailid) {
        await regcust.invalidemailid(emailid)
    }
    )

defineStep('click sigin Now button', async function () {
    await regcust.signinnow()
})

Then('the user should see Please enter a valid email address Ex: johndoe@domain.com. message', async function () {
    await regcust.emailerrormessage()
})

When(
    /^the user enters Invalid password in the required fields"([^"]*)"$/,
    async function (password) {
        await regcust.invalidpassword(password)
    }
    )

defineStep('click a sigin button', async function () {
    await regcust.clicksigin1()
})

Then('the user should see "Incorrect CAPTCHA"', async function () {
    await regcust.incorrectcapcha()
})


//Order placement using (postive scenario)

Given('the user should navigated to Sigin page', async function () {
    await regcust.signinpage1()
})

When('The user enters valid credentials in the required fields for customer Sigin page', async function () {
    await regcust.valid()
})

defineStep('click sigin button', async function () {
    await regcust.clicksigin()
})

Then('the user should be on respective landing Home page', async function () {
    await regcust.navigatehomepage()
})

When('the user clicks on the Name of the product', async function () {
    await regcust.selectproduct()
})

defineStep('the user clicks Add to Cart button', async function () {
    await regcust.addtocart()
})

Then('the product is added to minicart wrapper', async function () {
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

//  Empty registration Authentication (Negative scenario)

Given('the user navigates to Homepage', async function () {
    await loginPage.navigateToHomePage()
})

defineStep('clicks on login create a account button', async function () {
    await loginPage.createaccount()
})

Given('the user should be navigated to customer account page', async function () {
    await loginPage.customerform()
})

When('the user clicks on create an account button', async function () {
    await loginPage.clickbutton()
})

Then('the user should see 5 error message "This is a required field"', async function () {
    await loginPage.errormessage()
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

defineStep('User enters password with invalid format', async function () {
    await loginPage.userpassword()
})

Then('the user should see "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters" message', async function () {
    await loginPage.passworderrormessage()
})

// valid Registration Authentication (Postive scenario)
When('the user click on the create a account button', async function () {
    await loginPage.createaccountbutton()
})

Then('the user should navigated to customer account page', async function () {
    await loginPage.customerformpage()
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





const { Given, When,Then,defineStep } = require('@cucumber/cucumber')
const { RegCust } = require('../page-objects/registercustomer-page')
const { LoginPage } = require('../page-objects/NewCustomerRegistration-page')
const { Guestacc } = require('../page-objects/guestorder-page')

const regcust = new RegCust()
const loginPage = new LoginPage()
const guestacc = new Guestacc()

Given('the user navigates to Homepage URL', async function () {
    await regcust.navigateToHomePage()
})

When('the user clicks on the Sigin button', async function () {
    await regcust.siginaccount()
})

Then('the user should be navigated to Sigin page', async function () {
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
    /^the user enters Invalid password in the required fields "([^"]*)"$/,
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

When('the user clicks on the create a account button', async function () {
    await loginPage.createaccount()
})

Then('the user should be navigated to customer account page', async function () {
    await loginPage.customerform()
})

When('the user clicks on create an account button', async function () {
    await loginPage.clickbutton()
})

Then('the user should see 5 error message "This is a required field"', async function () {
    await loginPage.errormessage()
})

defineStep(
    /^I fill the login form with "([^"]*)"$/,
    async function (emailid) {
        await loginPage.submitLoginWithParameters(emailid)
    }
    )

Then('the user should see Please enter a valid email address Please enter a valid email address Ex: johndoe@domain.com', async function () {
    await loginPage.emailerrormessage()
})

When('User enters password with invalid format', async function () {
    await loginPage.userpassword()
})

Then('the user should see Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters message', async function () {
    await loginPage.passworderrormessage()
})

// valid Registration Authentication (Postive scenario)

When('The user enters valid credentials in the required fields for customer registration', async function () {
    await loginPage.validcredentials()
})

defineStep('click create an account button', async function () {
    await loginPage.formsubmit()
})

Then('the user should be redirected to My account landing page', async function () {
    await loginPage.myaccpage()
})

// Guest order placement using (Negative scenario)

Given('The guest user will navigates to homepageurl', async function () {
    await guestacc.navigateToHomePage()
})

When('Guest user will clicks on the respective Product', async function () {
    await guestacc.guestorderpurchase()
})

Then('The guest user can be navigated to product details page', async function () {
    await guestacc.productdetails()
})

When('Guest user can click the add to cart button', async function () {
    await guestacc.addtocart()
})

Then('The product will added from minicart basket', async function () {
    await guestacc.minicart()
})

When('Guest user will be clicks on the proceed to checkout button', async function () {
    await guestacc.checkoutbutton()
})

Then('The guest user will should be navigated in Shipping address page', async function () {
    await guestacc.shippingpage()
})


When('The guest user click on a Next button', async function () {
    await guestacc.nextbuttton()
})

Then('we can see a both errors in shipping method and required field error', async function () {
    await guestacc.errormessage()
})

When('User filled with invalid credentials for email', async function () {
    await guestacc.invalidemail()
})

Then('the user should will seen Please enter a valid email address Ex: johndoe@domain.com. message', async function () {
    await guestacc.emailerrormessage()
})

// Guest Order placement using (Postive scenario)

Given('A user is on homepageurl', async function () {
    await guestacc.navigateHomePage()
})

When('the user clicks on the respective Product', async function () {
    await guestacc.selectproduct()
})

Then('The guest user should be navigated to pdp page', async function () {
    await guestacc.pdp()
})

When('I clicks on the add to cart button', async function () {
    await guestacc.addtocart1()
})

Then('The product is added to minicart wrapper', async function () {
    await guestacc.minicart1()
})

When('Guest user will click the proceed to checkout button', async function () {
    await guestacc.checkoutbutton1()
})

Then('The guest user should seen a Shipping address page', async function () {
    await guestacc.shippingpage1()
})


When(
    /^I fill the valid email form with "([^"]*)"$/,
    async function (emailid) {
        await guestacc.validdetails(emailid)
    }
    )

defineStep('click on a Next button', async function () {
    await guestacc.nextpagebutton()
})

Then('The guest user should redirected checkout payment page', async function () {
    await guestacc.paymentpage()
})


When('Guest user check the payment method and while click on a place Order button', async function () {
    await guestacc.placeorder()
})

Then('The guest user should navigated in Order Success pageurl', async function () {
    await guestacc.successpage()
})





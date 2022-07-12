const { Given, When,Then,defineStep } = require('@cucumber/cucumber')
const { Guestacc } = require('../page-objects/guestorder-page')

const guestacc = new Guestacc()

Given('The guest user will navigates to homepageurl', async function () {
    await guestacc.navigateToHomePage()
})

defineStep('Guest user will clicks on the respective Product', async function () {
    await guestacc.guestorderpurchase()
})

Given('The guest user can be navigated to product details page', async function () {
    await guestacc.productdetailspage()
})

defineStep('Guest User adds product to the cart', async function () {
    await guestacc.addtocart()
})

Then('Guest User should be able to view and add the from minicart', async function () {
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

Then('the user should see error messages "This is a required field" and "Select the shipping method and try again."', async function () {
    await guestacc.errormessage()
})

When(
    /^I fill the valid email form with "([^"]*)"$/,
    async function (emailid) {
        await regcust.invalidemail(emailid)
    }
    )
Then('the user able see "Please enter a valid email address"', async function () {
    await guestacc.emailerrormessage()
})

// Guest Order placement using (Postive scenario)


Given('The guest user should be navigated to pdp page', async function () {
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
    /^The guest user enters valid details for shipping address page"([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"$/,
    async function (Emailid, FirstName,LastName,Street,City,Postcode,Telephone) {
        await loginPage.validdetails(Emailid, FirstName,LastName,Street,City,Postcode,Telephone)
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





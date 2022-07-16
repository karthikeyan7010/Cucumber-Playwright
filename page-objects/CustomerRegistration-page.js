locators = {
    "email_input": "#email_address",
    "password_input": "#password",
    "firstname_input": "#firstname",
    "lastname_input": "#lastname",
    "email_address_input": "#email_address",
    "password_input": "#password",
    "passwordconfirmation_input": "#password-confirmation"
}
class CustomerRegistration {

    async navigateToHomePage() {
        await page.goto(global.BASE_URL);
}

    async createaccount() {
        await page.click('text=Create an Account')
}

    async customerform() {
        await page.waitForSelector('.customer-account-create')
        const visible =  await page.isVisible('.customer-account-create');
        return expect(visible).to.equal(true);

    }
    async clickbutton() {
        await page.click('button:has-text("Create an Account")');
}

async requriedfielderror() {
    const requriedfielderror =  await page.isVisible('.mage-error');
        return expect(requriedfielderror).to.equal(true);
}

async submitLoginWithParameters(emailid) {
    await page.locator(locator.email_input).fill(emailid);
    await page.waitForTimeout(3000);
    await page.click('button:has-text("Create an Account")');
}

async emailerrormessage() {
    const emailerrormessage =  await page.isVisible('#email_address-error');
    return expect(emailerrormessage).to.equal(true);
}

async userpassword(password) {
    await page.locator(locators.password_input).fill(password);
    await page.waitForTimeout(3000);
    await page.click('button:has-text("Create an Account")');
}

async passworderrormessage() {
    const passworderrormessage =  await page.isVisible('#password-error');
    return expect(passworderrormessage).to.equal(true);
    
}

async registrationformpage() {
    await page.waitForSelector('.customer-account-create')
    const visible =  await page.isVisible('.customer-account-create');
    return expect(visible).to.equal(true);
    
}

    async customerdetails(FirstName,LastName,EmailID,Passwords,confirmpassword) {
        await page.locator(locator.firstname_input).fill(FirstName);
        await page.locator(locator.lastname_input).fill(LastName);
        await page.locator(locator.email_address_input).fill(EmailID);
        await page.locator(locator.password_input).fill(Passwords);
        await page.locator(locator.passwordconfirmation_input).fill(confirmpassword);
        await page.waitForTimeout(1000);

}

async formsubmit() {
    await page.click('button:has-text("Create an Account")');
    await page.waitForTimeout(1000);

}

async myaccpage() {
    await page.waitForSelector('.page-title')
    const visible =  await page.isVisible('.page-title');
        return expect(visible).to.equal(true);
}
}
module.exports = { CustomerRegistration }

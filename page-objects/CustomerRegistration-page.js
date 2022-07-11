class CustomerRegistration {
    
    async navigateToHomePage() {
        await page.goto(global.BASE_URL);
        await page.waitForTimeout(1000);
}

    async createaccount() {
        await page.click('text=Create an Account')
        await page.waitForTimeout(1000);
}

    async customerform() {
        await page.waitForSelector('.customer-account-create')
        const visible =  await page.isVisible('.customer-account-create');
        return expect(visible).to.equal(true);

    }
    async clickbutton() {
        await page.click('button:has-text("Create an Account")');
        await page.waitForTimeout(1000);
}

async requriedfielderror() {
    const requriedfielderror =  await page.isVisible('.mage-error');
        return expect(requriedfielderror).to.equal(true);
}

async submitLoginWithParameters(emailid) {
    await page.locator('#email_address').fill(emailid);
    await page.waitForTimeout(3000);
    await page.click('button:has-text("Create an Account")');
}

async emailerrormessage() {
    const emailerrormessage =  await page.isVisible('#email_address-error');
    return expect(emailerrormessage).to.equal(true);
}

async userpassword(password) {
    await page.locator('#password').fill(password);
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
        await page.locator('#firstname').fill(FirstName);
        await page.locator('#lastname').fill(LastName);
        await page.locator('#email_address').fill(EmailID);
        await page.locator('#password').fill(Passwords);
        await page.locator('#password-confirmation').fill(confirmpassword);
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

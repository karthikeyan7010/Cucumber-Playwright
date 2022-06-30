class LoginPage {
    async navigateToHomePage() {
        await page.goto('http://local.magento.com/');
        await page.waitForTimeout(1000);
}

    async createaccount() {
        await page.click('text=Create an Account')
        await page.waitForTimeout(1000);
}

    async customerform() {
        await page.waitForSelector('.customer-account-create')
        await page.waitForTimeout(1000);
    }
    async clickbutton() {
        await page.click('button:has-text("Create an Account")');
        await page.waitForTimeout(1000);
}

async errormessage() {
    await page.waitForSelector('.mage-error')
    await page.waitForTimeout(1000);
}

async submitLoginWithParameters(emailid) {
    await page.locator('#email_address').fill(emailid);
    await page.waitForTimeout(3000);
    await page.click('button:has-text("Create an Account")');
}

async emailerrormessage() {
    await page.waitForSelector('#email_address-error');
    await page.waitForTimeout(2000);
}

async userpassword() {
    await page.locator('#password').fill("karthick");
    await page.waitForTimeout(3000);
    await page.click('button:has-text("Create an Account")');
}

async passworderrormessage() {
    await page.waitForSelector('#password-error');
    await page.waitForTimeout(2000);
}

    async validcredentials() {
        await page.locator('#firstname').fill("karthick");
        await page.locator('#lastname').fill("Ak");
        await page.locator('#email_address').fill("karthickak1329@gmail.com");
        await page.locator('#password').fill("admin@123");
        await page.locator('#password-confirmation').fill("admin@123");
        await page.waitForTimeout(1000);

}

async formsubmit() {
    await page.click('button:has-text("Create an Account")');
    await page.waitForTimeout(1000);

}

async myaccpage() {
    await page.waitForSelector('.page-title')
    await page.waitForTimeout(1000);

}
}
module.exports = { LoginPage }

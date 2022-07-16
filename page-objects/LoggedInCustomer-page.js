locators = {
    "email_input": "#email"
}
class RegCust {

async navigateToHomePage() {
    await page.goto(global.BASE_URL);
}

async siginaccount() {
    await page.click('text=Sign In');
}


async signinpage() {
    await page.waitForSelector('.customer-account-login')
    const visible =  await page.isVisible('.customer-account-login');
        return expect(visible).to.equal(true);
}
async signinbutton() {
    await page.click('#send2');
}

async requriedfielderror() {
    const requriedfielderror =  await page.isVisible('.mage-error');
    return expect(requriedfielderror).to.equal(true);
}

async invalidemailerror(emailid) {
    await page.locator(locator.email_input).fill(emailid);
    await page.waitForTimeout(2000);
}

async signinnow() {
    await page.click('#send2');
}


async emailerrormessage() {
    const emailerrormessage =  await page.isVisible('#email-error');
    return expect(emailerrormessage).to.equal(true);
}

async invalidpassworderror(EmailID,password) {
    await page.locator(locator.email_input).fill(EmailID);
    await page.waitForTimeout(2000);
    await page.type('input[name="login[password]"]', password);
}

async clicksigin1() {
    await page.click('#send2');
}

async incorrectcapchaerror() {
    const incorrectcapchaerror =  await page.isVisible('.messages');
    return expect(incorrectcapchaerror).to.equal(true);
}


async signinpage1() {
    await page.waitForSelector('.customer-account-login')
    const visible =  await page.isVisible('.customer-account-login');
        return expect(visible).to.equal(true);
    
}

async validlogin(EmailID,password) {
    await page.locator(locator.email_input).fill(EmailID);
    await page.waitForTimeout(2000);
    await page.type('input[name="login[password]"]',password);
}
async clicksigin() {
    await page.click('#send2');
}

async navigatehomepage() {
    await page.waitForSelector('.cms-home')
    const visible =  await page.isVisible('.cms-home');
    return expect(visible).to.equal(true);
}

async selectproduct() {
    await page.click('text=Push It Messenger Bag');
}

async addtocart() {
    await page.click('#product-addtocart-button');
}

async minicart() {
        await page.waitForTimeout(2000);
        await page.click('.minicart-wrapper');
}

async proceedtocheckout() {
    await page.click('#top-cart-btn-checkout');
    await page.click('text=Fixed');
}

async placeorder() {
    await page.click('text=Next');
    await page.click('text= Place Order');
    await page.waitForTimeout(4000);
    
}

async successpage() {
    await page.waitForSelector('.page-title-wrapper')
    const visible =  await page.isVisible('.page-title-wrapper');
    return expect(visible).to.equal(true);
    
}
}
module.exports = { RegCust }
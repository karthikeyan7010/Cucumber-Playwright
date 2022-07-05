class RegCust {

async navigateToHomePage() {
    await page.goto('http://local.magento.com/')
    await page.waitForTimeout(2000);
}

async siginaccount() {
    await page.click('text=Sign In');
    await page.waitForTimeout(2000);
}


async signinpage() {
    await page.waitForSelector('.customer-account-login')
    const visible =  await page.isVisible('.customer-account-login');
        return expect(visible).to.equal(true);
}
async signinbutton() {
    await page.click('#send2');
}

async errormessage() {
    await page.waitForSelector('.mage-error')
    await page.waitForTimeout(1000);
}

async invalidemailid(emailid) {
    await page.locator('#email').fill(emailid);
    await page.waitForTimeout(2000);
}

async signinnow() {
    await page.click('#send2');
}


async emailerrormessage() {
    await page.waitForSelector('#email-error');
    await page.waitForTimeout(2000);
}

async invalidpassword(password) {
    await page.locator('#email').fill("karthickdk33@gmail.com");
    await page.waitForTimeout(2000);
    await page.type('input[name="login[password]"]', password);
}

async clicksigin1() {
    await page.click('#send2');
}

async incorrectcapcha() {
    await page.waitForSelector('.messages')
}


async signinpage1() {
    await page.waitForSelector('.customer-account-login')
    const visible =  await page.isVisible('.customer-account-login');
        return expect(visible).to.equal(true);
    
}

async valid() {
    await page.locator('#email').fill("karthickdk33@gmail.com");
    await page.waitForTimeout(2000);
    await page.type('input[name="login[password]"]', 'admin@123');
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
    await page.waitForTimeout(2000);
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
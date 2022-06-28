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
}
async signinbutton() {
    await page.click('#send2');
}

async errormessage() {
    await page.waitForSelector('.mage-error')
    await page.waitForTimeout(1000);
}

async invalidemailid() {
    await page.locator('#email').fill("karthickraina321gmail.com");
    await page.waitForTimeout(2000);
    await page.click('#send2');
    
    
}

async emailerrormessage() {
    await page.waitForSelector('#email-error');
    await page.waitForTimeout(2000);
}


async invalidpass() {
    await page.fill('#pass', 'Peter');
    await page.click('#send2');
    await page.waitForTimeout(2000);

}

async homepage() {
    await page.goto('http://local.magento.com/');
}

async signinbutton1() {
    await page.click('text=Sign In');
}

async siginaccpage() {
    await page.waitForSelector('.customer-account-login')
}

async valid() {
    await page.locator('#email').fill("karthickrabd@gmail.com");
    await page.locator('#pass').fill("admin@123");
}
async clicksigin() {
    await page.click('#send2');
}

async navigatehomepage() {
    await page.waitForSelector('.cms-home')
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
    
}
}
module.exports = { RegCust }
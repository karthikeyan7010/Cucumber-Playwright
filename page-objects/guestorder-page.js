class Guestacc {
    async navigateToHomePage() {
        await page.goto(global.BASE_URL);
        await page.waitForTimeout(1000);
}

    async guestorderpurchase() {
        await page.click('text=Push It Messenger Bag');
        await page.waitForTimeout(1000);
}

async productdetailspage() {
    const productdetailspage =  await page.isVisible('.catalog-product-view');
    return expect(productdetailspage).to.equal(true);
}

    async addtocart() {
        await page.click('#product-addtocart-button');
        await page.waitForTimeout(1000);
}

    async minicart() {
        await page.waitForTimeout(3000);
        await page.click('.minicart-wrapper');
}

async checkoutbutton() {
    await page.click('#top-cart-btn-checkout'); 
    await page.waitForTimeout(1000);
}

async shippingpage() {
    const shippingpage =  await page.isVisible('.checkout-shipping-address');
    return expect(shippingpage).to.equal(true);
}


async nextbuttton() {
    await page.click('text=Next');
    await page.waitForTimeout(1000);
}

async errormessage() {
    const errormessage =  await page.isVisible('.table-checkout-shipping-method');
    return expect(errormessage).to.equal(true);
    
}

async invalidemail(emailid) {
    await page.type('#customer-email',emailid);
    await page.waitForTimeout(2000);
}

async emailerrormessage() {
    const emailerrormessage =  await page.isVisible('#customer-email-error');
    return expect(emailerrormessage).to.equal(true);
}


async selectproduct() {
    await page.click('text=Push It Messenger Bag');
    await page.waitForTimeout(1000);
}

async pdp() {
    const pdp =  await page.isVisible('.catalog-product-view');
    return expect(pdp).to.equal(true);

}

async addtocart1() {
    await page.click('#product-addtocart-button');
    await page.waitForTimeout(1000);
}

async minicart1() {
    await page.waitForTimeout(4000);
    await page.click('.minicart-wrapper'); 
}

async checkoutbutton1() {
    await page.click('#top-cart-btn-checkout'); 
    await page.waitForTimeout(1000);
}

async shippingpage1() {
    const shippingpage1 =  await page.isVisible('.checkout-shipping-address');
    return expect(shippingpage1).to.equal(true);
    
}


async validdetails(Emailid, FirstName,LastName,Street,City,Postcode,Telephone) {
    await page.type('#customer-email',Emailid);
    await page.type('input[name="firstname"]',FirstName);
    await page.type('input[name="lastname"]', LastName);
    await page.type('input[name="street[0]"]',Street);
    await page.selectOption('select[name="region_id"]', '2');
    await page.type('input[name="city"]', City);
    await page.type('input[name="postcode"]',Postcode);
    await page.type('input[name="telephone"]',Telephone);
    await page.click('text=Fixed');
    await page.waitForTimeout(3000);

}
async nextpagebutton() {
    await page.click('text=Next');
    await page.waitForTimeout(4000);

}

async paymentpage() {
    await page.waitForTimeout(4000);
    const paymentpage =  await page.isVisible('#checkoutSteps');
    return expect(paymentpage).to.equal(true);

}

async placeorder() {
    await page.click('text= Place Order');
    

}

async successpage() {
    await page.waitForTimeout(3000);
    await page.click('text=Continue Shopping');

}
}
module.exports = { Guestacc }

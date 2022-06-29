class Guestacc {
    async navigateToHomePage() {
        await page.goto('https://magento2-demo.magebit.com/');
        await page.waitForTimeout(1000);
}

    async guestorderpurchase() {
        await page.click('text=Push It Messenger Bag');
        await page.waitForTimeout(1000);
}

async productdetails() {
    await page.waitForSelector('.catalog-product-view')
    await page.waitForTimeout(1000);
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
    await page.waitForSelector('.checkout-shipping-address')
    await page.waitForTimeout(1000);
}


async nextbuttton() {
    await page.click('text=Next');
    await page.waitForTimeout(1000);
}

async errormessage() {
    await page.waitForSelector('.table-checkout-shipping-method')
    await page.waitForTimeout(1000);
    
}

async invalidemail() {
        await page.type('#customer-email', 'karthikeyan39945972gmail.com');
        await page.waitForTimeout(1000);
        await page.click('text=Next');
}

async emailerrormessage() {
    await page.waitForSelector('#customer-email-error');
}


async navigateHomePage() {
    await page.goto('http://local.magento.com/');
    await page.waitForTimeout(1000);
}

async selectproduct() {
    await page.click('text=Push It Messenger Bag');
    await page.waitForTimeout(1000);
}

async pdp() {
    await page.waitForSelector('.catalog-product-view')

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
    await page.waitForSelector('.checkout-shipping-address')
    await page.waitForTimeout(1000);
}


async validdetails(emailid) {
    await page.type('#customer-email', emailid);
    await page.type('input[name="firstname"]', 'karthick');
    await page.type('input[name="lastname"]', 'keyan');
    await page.type('input[name="street[0]"]', 'T.nagar');
    await page.selectOption('select[name="region_id"]', '2');
    await page.type('input[name="city"]', 'chennai');
    await page.type('input[name="postcode"]', '12345');
    await page.type('input[name="telephone"]', '7010776772');
    await page.click('text=Fixed');
    await page.waitForTimeout(3000);

}
async nextpagebutton() {
    await page.click('text=Next');
    await page.waitForTimeout(4000);

}

async paymentpage() {
    await page.waitForTimeout(4000);
    await page.waitForSelector('#checkoutSteps')

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

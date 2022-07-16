class Addtocart {

    async navigateToHomePage() {
        await page.goto(global.BASE_URL);
}

    async productname() {
        await page.click('text=Push It Messenger Bag');
}

    async productdetailspage() {
        const productdetailspage =  await page.isVisible('.catalog-product-view');
        return expect(productdetailspage).to.equal(true);

}
    async proceedtocheckout() {
        await page.click('#product-addtocart-button');
        await page.waitForTimeout(5000);
        await page.click('.minicart-wrapper');
        await page.click('#top-cart-btn-checkout'); 
}

    async shippingpage() {
        await page.waitForSelector('.checkout-shipping-address')
        const shippingpage =  await page.isVisible('.checkout-shipping-address');
        return expect(shippingpage).to.equal(true);
}
}
module.exports = { Addtocart }

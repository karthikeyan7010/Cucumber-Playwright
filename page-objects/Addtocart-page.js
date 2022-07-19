class Addtocart {

    async naviagateproduct() {
        await page.goto(global.BASE_URL);
        await page.click('text=Breathe-Easy Tank');
}

    async productdetailspage() {
        const productdetailspage =  await page.isVisible('.catalog-product-view');
        return expect(productdetailspage).to.equal(true);

}
    async addtocart() {
        await page.click('#product-addtocart-button');
}

    async outofstock() {
        await page.click('#option-label-size-143-item-169');
        await page.click('#option-label-color-93-item-57');
        await page.type('input[name="qty"]',"500");
        await page.click('#product-addtocart-button');
        await page.waitForTimeout(4000);
}

    async outofstockerror() {
        const outofstockerror =  await page.isVisible('.page messages');
        return expect(outofstockerror).to.equal(true);
    
}

    async proceedtocheckout() {
        await page.click('#option-label-size-143-item-169');
        await page.click('#option-label-color-93-item-57');
        await page.type('input[name="qty"]',"5");
        await page.waitForTimeout(2000);
        await page.click('#product-addtocart-button');
        await page.waitForTimeout(4000);
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

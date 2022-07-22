class Addtocart {

async naviagatehomepage() {
    await page.goto(global.BASE_URL);
}

async simpleproductoutofstock() {
    await page.click('text=Fusion Backpack');
    await page.type('input[name="qty"]',"1000");
    await page.click('#product-addtocart-button');
}

async outofstockerror() {
    const outofstockerror =  await page.isVisible('.page messages');
    return expect(outofstockerror).to.equal(true);   
}

async configproductaddtocart() {
    await page.click('text=Breathe-Easy Tank');
    await page.click('#product-addtocart-button');
}

async requirefielderror() {
    const requriedfielderror =  await page.isVisible('.mage-error');
    return expect(requriedfielderror).to.equal(true);
}

async configoutofstock() {
    await page.click('text=Breathe-Easy Tank');
    await page.click('#option-label-size-143-item-169');
    await page.click('#option-label-color-93-item-57');
    await page.type('input[name="qty"]',"5000");
    await page.click('#product-addtocart-button');
    await page.waitForTimeout(4000);
}

async outofstockerror() {
    const outofstockerror =  await page.isVisible('.page messages');
    return expect(outofstockerror).to.equal(true);   
}

async bundleproductoutofstock() {
    await page.type('input[name="q"]',"Sprite Yoga Companion Kit");
    await page.waitForTimeout(2000)
    await page.click('.qs-option-name selected');
    await page.click('text=Sprite Yoga Companion Kit');
    await page.click('#bundle-slide');
    await page.type('input[name="qty"]',"500");
    await page.click('#product-addtocart-button');
    
}

async groupedproductoutofstock() {
    await page.type('input[name="q"]',"Set of Sprite Yoga Straps");
    await page.waitForTimeout(2000)
    await page.click('.qs-option-name selected');
    await page.click('text=Set of Sprite Yoga Straps');
    await page.type('input[name="qty"]',"500");
    await page.click('#product-addtocart-button'); 
}

async simpleproductaddtocart() {
    await page.click('text=Fusion Backpack');
    await page.waitForTimeout(2000);
    await page.click('#product-addtocart-button');
}

async productsuccess() {
    const productsuccess =  await page.isVisible('.message-success success message');
    return expect(productsuccess).to.equal(true);
}

async proceedtocheckout() {
    await page.waitForTimeout(4000);
    await page.click('.minicart-wrapper');
    await page.click('#top-cart-btn-checkout'); 
}

async shippingpage() {
    await page.waitForSelector('.checkout-shipping-address')
    const shippingpage =  await page.isVisible('.checkout-shipping-address');
    return expect(shippingpage).to.equal(true);
}

async configurableproductaddtocart() {
    await page.click('text=Breathe-Easy Tank');
    await page.click('#option-label-size-143-item-169');
    await page.click('#option-label-color-93-item-57');
    await page.click('#product-addtocart-button');
    await page.waitForTimeout(4000);
}

async bundleproductaddtocart() {
    await page.type('input[name="q"]',"Sprite Yoga Companion Kit");
    await page.waitForTimeout(2000)
    await page.click('.qs-option-name selected');
    await page.click('text=Sprite Yoga Companion Kit');
    await page.click('#bundle-slide');
    await page.click('#product-addtocart-button');
}

async Groupedproductaddtocart() {
    await page.type('input[name="q"]',"Set of Sprite Yoga Straps");
    await page.waitForTimeout(2000)
    await page.click('.qs-option-name selected');
    await page.click('text=Set of Sprite Yoga Straps');
    await page.type('input[name="super_group[33]"]',"5");
    await page.click('#product-addtocart-button');
}

async Downloadableproductaddtocart() {
    await page.click('text=LifeLong Fitness IV');
    await page.click('#product-addtocart-button');
}

}
module.exports = { Addtocart }

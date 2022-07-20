locators = {
    "email_input": "#customer-email",
    "password_input": "#customer-password"
}

class orderplacement {


async checkoutpage() {
    await page.waitForSelector('.checkout-shipping-address')
    const checkoutpage =  await page.isVisible('.checkout-shipping-address');
    return expect(checkoutpage).to.equal(true);
}

async nextbutton() {
    await page.waitForTimeout(4000);
    await page.click('text=Fixed');
    await page.click('text=Next');
    await page.waitForTimeout(4000);
}

async requiredfielderror() {
    await page.click('text=Next');
    await page.waitForTimeout(4000);
    const requriedfielderror =  await page.isVisible('.mage-error');
    return expect(requriedfielderror).to.equal(true);

}

async invalidemail(emailid) {
    await page.waitForTimeout(3000);
    await page.type(locators.email_input,emailid);
}

async emailerrormessage() {
    const emailerrormessage =  await page.isVisible('#customer-email-error');
    return expect(emailerrormessage).to.equal(true);
}

async validdetails(emailid,FirstName,LastName,Street,City,Postcode,Telephone) {
    await page.type(locators.email_input,emailid);
    await page.type('input[name="firstname"]',FirstName);
    await page.type('input[name="lastname"]', LastName);
    await page.type('input[name="street[0]"]',Street);
    await page.selectOption('select[name="region_id"]', '2');
    await page.type('input[name="city"]', City);
    await page.type('input[name="postcode"]',Postcode);
    await page.type('input[name="telephone"]',Telephone);
    

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
    const successpage =  await page.isVisible('.action primary continue');
    return expect(successpage).to.equal(true);

}

async loggedinemailid(emailid,Password) {
    await page.type(locators.email_input,emailid);
    await page.waitForTimeout(3000);
    await page.type(locators.password_input,Password);
    await page.click('text=Login');
    await page.waitForTimeout(3000);
}

}
module.exports = { orderplacement }

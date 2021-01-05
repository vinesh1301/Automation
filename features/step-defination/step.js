const { Given, When, Then } = require('cucumber');
// const expect = require('chai').expect;


Given('I launch the url', { timeout: 60 * 1000 }, async function () {
    await browser.driver.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000)
    });
});
When('I click on bank manager Login', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Bank Manager Login']")).click();
    await browser.sleep(1000)

});
When('I click on Add Customer', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[contains(text(),'Add Customer')]")).click();
    await browser.sleep(1000)

});
When('I give the customer details {string},{string},{string}', { timeout: 60 * 1000 }, async function (fname, lname, postcode) {
    await element(by.model("fName")).sendKeys(fname);
    await element(by.model("lName")).sendKeys(lname);
    await element(by.model("postCd")).sendKeys(postcode);
    await browser.sleep(1000)
});
When('I click on add customer button', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Add Customer']")).click();
    await browser.sleep(1000)

});

Then('I should get the popup', { timeout: 60 * 1000 }, async function(){

    await browser.switchTo().alert().accept();
    await browser.sleep(1000)

});

// New Scenario


Given('I launch the url again', { timeout: 60 * 1000 }, async function () {
    await browser.driver.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000)
    });
});
When('I click on customer Login', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Customer Login']")).click();
    await browser.sleep(1000)

});
When('I click on your name dropdown', { timeout: 60 * 1000 }, async function () {
    await element(by.model('custId')).click();
    await browser.sleep(1000)

});
When('I give your name {string}', { timeout: 60 * 1000 }, async function (cust) {
    await element(by.model('custId')).sendKeys(cust).click();
    await browser.sleep(1000)
});
Then('I click on Login button', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Login']")).click();
    await browser.sleep(1000)

});

// New scenario

Given('I launch the url again again', { timeout: 60 * 1000 }, async function () {
    await browser.driver.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000)
    });
});
When('I click on bank manager Login again', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Bank Manager Login']")).click();
    await browser.sleep(1000)

});
When('I click on your open account', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[contains(text(),'Open Account')]")).click();
    await browser.sleep(1000)

});
When('I give customer name {string}', { timeout: 60 * 1000 }, async function (customer) {
    await element(by.model('custId')).sendKeys(customer).click();
    await browser.sleep(1000)
});
When('I give currency {string}', { timeout: 60 * 1000 }, async function (currency) {
    await element(by.model('currency')).sendKeys(currency).click();
    await browser.sleep(1000)
});

Then('I click on process button', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Process']")).click();
    await browser.sleep(1000)

});

// New scenario

Given('I launch the url again again again', { timeout: 60 * 1000 }, async function () {
    await browser.driver.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000)
    });
});
When('I click bank manager login', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Bank Manager Login']")).click();
    await browser.sleep(1000)

});

When('I click on customer', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[contains(text(),'Customers')]")).click();
        await browser.sleep(1000)
  
});
When('I give the details {string}', { timeout: 60 * 1000 }, async function (name,) {
    await element(by.model("searchCustomer")).sendKeys(name);
    
    await browser.sleep(1000)
});
Then('I click on delete', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Delete']")).click();
    await browser.sleep(1000)

});

// New Feature 
Given('I type google',async function () {
    await browser.driver.get("https://google.com/").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(1000)
    });
});





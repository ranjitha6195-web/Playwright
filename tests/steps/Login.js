const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

let browser;
let page;
// let homePage;
let loginPage;
//let accountCreationPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
loginPage = new LoginPage(page);
});

After(async function () {
  if (page) {
    await page.close();
  }
  if (browser) {
    await browser.close();
  }
});
Given('the user opens the automationexcercise login page', async function () {
  await loginPage.open();
});

Given('the automation login page should load', async function () {
  const title = await page.title();
  console.log('Page Title:', title);
  await expect(title).toContain('Automation Exercise - Signup / Login');
  console.log('Success: The page title is as expected');
});
Then('verify user can complete login', async function () {
    await loginPage.login();
    console.log('User details filled and form submitted successfully.');

});

//await loginPage.login();   // uses rose1234@gmail.com / rose@1234

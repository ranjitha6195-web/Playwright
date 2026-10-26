const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const AccountCreationPage = require('../pages/accountCreationPage');

let browser;
let page;
// let homePage;
// let loginPage;
let accountCreationPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  accountCreationPage = new AccountCreationPage(page);
});

After(async function () {
  if (page) {
    await page.close();
  }
  if (browser) {
    await browser.close();
  }
});
Given('the user opens the Demopage registration page', async function () {
  await accountCreationPage.open();
  await expect(page).toHaveURL(/Register\.html/i);
});

Given('The user enter email id', async function () {
  await accountCreationPage.fillSampleData();
  const emailInput = page.locator('input[ng-model="EmailAdress"]');
  await expect(emailInput).toHaveValue('test.user@example.com');
  await expect(page.locator('#submitbtn')).toBeVisible();
});

Given('verify the title of the page account creation page', async function () {
  const title = await page.title();
  console.log('Page Title:', title);
  await expect(title).toContain('Register');
  console.log('Success: The page title is Register');
});


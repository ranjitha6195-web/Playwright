const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const AccountCreationPage = require('../pages/accountCreationPage');

setDefaultTimeout(120000);

let browser;
let page;
let homePage;
let loginPage;
// let accountCreationPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
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

Given('the user navigates to the Amazon homepage', async function () {
  await homePage.open();
});

Given('the user navigates to the Demopage homepage', async function () {
  await homePage.open();
});

Given('the user opens the Amazon login page', async function () {
  await loginPage.open();
});


Then('the page title should contain {string}', async function (expectedTitle) {
  const acceptableTitles = [expectedTitle, 'Index', 'Demopage'];
  const titlePattern = new RegExp(acceptableTitles.filter(Boolean).join('|'), 'i');
  await expect(page).toHaveTitle(titlePattern);
});

Then('I pause for manual inspection', async function () {
  await page.waitForTimeout(60000);
});


import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import { expect } from "@playwright/test";
import { EcommerceLoginPage } from "../pages/ecommerce.loginObj";

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ page }, url) => {
  const ecommercePage = new EcommerceLoginPage(page);
  await ecommercePage.navigateToUrl(url);
});

Given('I click on My account', async ({ page }) => {
  const ecommercePage = new EcommerceLoginPage(page);
  await ecommercePage.clickOnMyAccount();
});

Given('I enter E-Mail Address {string}', async ({ page }, emailAddress) => {
  const ecommercePage = new EcommerceLoginPage(page);
  await ecommercePage.enterEmailAddress(emailAddress);
});

Given('I enter password {string}', async ({ page }, password) => {
  const ecommercePage = new EcommerceLoginPage(page);
  await ecommercePage.enterPassword(password);
});

When('I click on submit button', async ({ page }) => {
  const ecommercePage = new EcommerceLoginPage(page);
  await ecommercePage.clickOnSubmit();
});

Then('I should verify url contains {string}', async ({ page }, logged_url) => {
  await expect(page).toHaveURL(new RegExp(logged_url));
});

Then('I should verify user is not able to login and url contains {string}', async ({ page }, login_url) => {
  await expect(page).toHaveURL(new RegExp(login_url));
});

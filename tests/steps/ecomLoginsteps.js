import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Before, Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ ecomLoginPage, page }, url) => {
  await ecomLoginPage.navigateToUrl(url);
});

Given('I click on My account', async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickOnMyAccount();
});

Given('I enter E-Mail Address {string}', async ({ ecomLoginPage }, emailAddress) => {
  await ecomLoginPage.enterEmailAddress(emailAddress);
});

Given('I enter password {string}', async ({ ecomLoginPage }, password) => {
  await ecomLoginPage.enterPassword(password);

});

When('I click on submit button', async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickOnSubmit();
});

Then('I should verify url contains {string}', async ({ page }, logged_url) => {
  await expect(page).toHaveURL(new RegExp(logged_url))
});

Then('I should verify user is not able to login and url contains {string}', async ({ page }, login_url) => {
  await expect(page).toHaveURL(new RegExp(login_url));
});

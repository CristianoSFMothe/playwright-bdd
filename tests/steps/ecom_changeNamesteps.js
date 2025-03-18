import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Before, After, Given, When, Then } = createBdd(test);

Given('I navigate to my account {string}', async ({ page }, url) => {
   const cookies = require('../../playwright/.auth/user2.json');
   const cookiesArray = cookies.cookies;
   await page.context().addCookies(cookiesArray);
   await page.goto(url);
});

When('I click on Edit your account information', async ({ page, ecomChangePage }) => {
   await ecomChangePage.clickOnEditMyAccount();
});

When('I change first name to {string}', async ({ ecomChangePage }, firstnm) => {
   await ecomChangePage.editFirstName(firstnm);
});

When('I change last name to {string}', async ({ ecomChangePage }, lastnm) => {
   await ecomChangePage.editLastName(lastnm);
});

When('I click on Continue button', async ({ ecomChangePage }) => {
   await ecomChangePage.clickOnContinue();
});

Then('I should see the success message {string}', async ({ ecomChangePage }, message) => {
   await expect(ecomChangePage.sucess_Message).toContainText(new RegExp(message));
});


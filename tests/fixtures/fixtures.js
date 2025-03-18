import { test as base } from 'playwright-bdd';
import { EcommerceLoginPage } from '../pages/ecommerce.loginObj';

export const test = base.extend({
  ecommercePage: async ({ page }, use) => {
    const loginPage = new EcommerceLoginPage(page);
    await use(loginPage);
  }
});

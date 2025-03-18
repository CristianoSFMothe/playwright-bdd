import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

const testDir = defineBddConfig({
  importTestFrom: 'tests/fixtures/fixtures.js',
  paths: ['tests/features/**/*.feature'],
  require: ['tests/steps/**/*steps.js']
});

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  },
  projects: [
    {
      name: 'RegressionTest',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],
});

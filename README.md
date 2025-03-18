# Playwright BDD

## Init Playwright

```bash
npm init playwright@latest
```

## Configurations

- Install Playwright from BDD

```bash
npm i -D playwright-bdd
```

- Install Cucumber

```bash
npm i -D @cucumber/cucumber@latest
```

- Initial Test

```bash
npx playwright test
```

- Alter file `playwright.config.js`

```bash
import { defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  paths: ['ecommerceLogin.feature'],
  require: ['ecommerceSteps.js']
})
```

- Create file bddgen

```bash
npx bddgen
```

## Execute

```bash
npx bddgen; npx playwright test --reporter=html,list
```

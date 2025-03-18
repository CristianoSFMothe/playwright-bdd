# 🚀 Playwright BDD with Cucumber

This project demonstrates using Playwright with BDD (Behavior Driven Development) and Cucumber. The example is based on automated tests for the sample site: [E-commerce Playground](https://ecommerce-playground.lambdatest.io/).

## 🌐 What is Playwright?

Playwright is a browser automation framework that allows end-to-end testing of modern web applications. It supports multiple browsers (Chromium, Firefox, and WebKit), as well as running tests on mobile devices and headless environments.

## 📖 What is BDD (Behavior Driven Development)?

BDD is an agile development methodology that encourages collaboration between developers, QA, and business stakeholders through clear and understandable descriptions of expected behaviors. In the context of testing, a syntax called Gherkin is used, allowing test scenarios to be described in a readable format.

## 🥒 What is Cucumber?

Cucumber is a tool that supports writing and running BDD tests, interpreting Gherkin-formatted files and mapping these scenarios to functions that perform the necessary actions to validate the described behavior.

---

## 📁 Project Structure

```plaintext
playwright-bdd/
├── tests/
│   ├── features/
│   │   ├── ecomic_changeName.feature
│   │   ├── ecomlogin.feature
│   ├── fixtures/
│   │   ├── fixture.js
│   │   ├── page.js
│   ├── hooks/
│   │   └── hooks.js
│   ├── pages/
│   │   ├── ecomic_changeNameObjs.js
│   │   ├── ecomloginObjs.js
│   └── steps/
│       ├── ecomic_changeNamesteps.js
│       ├── ecomLoginstpes.js
├── playwright.config.js
├── package.json
└── README.md
```

- **tests/features/**: Contains files with scenarios written in Gherkin.
- **tests/fixtures/**: Contains configuration and initialization files needed for the tests.
- **tests/hooks/**: Contains hooks that run before or after the tests.
- **tests/pages/**: Implementation of the page objects used in the tests.
- **tests/steps/**: Implementation of the steps defined in the features.
- **playwright.config.js**: Playwright configuration file.
- **package.json**: Manages project dependencies and scripts.
- **README.md**: Project usage instructions.

---

## ⚙️ Setting Up the Environment

1. Initialize the Playwright project:

```bash
npm init playwright@latest
```

2. Install the necessary dependencies:

```bash
npm i -D playwright-bdd @cucumber/cucumber@latest
```

3. Modify the `playwright.config.js` file to support BDD:

```javascript
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  paths: ["tests/features/ecomlogin.feature"],
  require: ["tests/steps/ecomLoginstpes.js"],
});
```

4. Generate the basic BDD structure:

```bash
npx bddgen
```

---

## ▶️ Running the Tests

To run the tests with an HTML report:

```bash
"test": "npx playwright test",
"test:ui": "npx playwright test --ui",
"test:debug": "npx playwright test --debug"
```

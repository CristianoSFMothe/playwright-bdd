// Generated from: tests\features\ecommerce.login.feature
import { test } from "playwright-bdd";

test.describe('Verify login', () => {

  test('Verify user is able to login with valid credentials', async ({ Given, page, And, When, Then }) => { 
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
    await And('I click on My account', null, { page }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { page }); 
    await And('I enter password "Test1234"', null, { page }); 
    await When('I click on submit button', null, { page }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

  test.describe('Verify user is not able login with following credentails', () => {

    test('Example #1', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
      await And('I click on My account', null, { page }); 
      await And('I enter E-Mail Address "xzy@gmail.com"', null, { page }); 
      await And('I enter password "TesMeTest"', null, { page }); 
      await When('I click on submit button', null, { page }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #2', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
      await And('I click on My account', null, { page }); 
      await And('I enter E-Mail Address "srk@testroverautomation.com"', null, { page }); 
      await And('I enter password "Jawan123"', null, { page }); 
      await When('I click on submit button', null, { page }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #3', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
      await And('I click on My account', null, { page }); 
      await And('I enter E-Mail Address "testerrgreat@123.com"', null, { page }); 
      await And('I enter password "Tesrxzy123"', null, { page }); 
      await When('I click on submit button', null, { page }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #4', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
      await And('I click on My account', null, { page }); 
      await And('I enter E-Mail Address "srk_jawan@test.com"', null, { page }); 
      await And('I enter password "great123"', null, { page }); 
      await When('I click on submit button', null, { page }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #5', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
      await And('I click on My account', null, { page }); 
      await And('I enter E-Mail Address "SalmanDabang@gmail.com"', null, { page }); 
      await And('I enter password "test 123"', null, { page }); 
      await When('I click on submit button', null, { page }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\ecommerce.login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"xzy@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"xzy@gmail.com\"","children":[{"start":24,"value":"xzy@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"TesMeTest\"","stepMatchArguments":[{"group":{"start":17,"value":"\"TesMeTest\"","children":[{"start":18,"value":"TesMeTest","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk@testroverautomation.com\"","children":[{"start":24,"value":"srk@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"Jawan123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Jawan123\"","children":[{"start":18,"value":"Jawan123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"testerrgreat@123.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"testerrgreat@123.com\"","children":[{"start":24,"value":"testerrgreat@123.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"Tesrxzy123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Tesrxzy123\"","children":[{"start":18,"value":"Tesrxzy123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk_jawan@test.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk_jawan@test.com\"","children":[{"start":24,"value":"srk_jawan@test.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"great123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"great123\"","children":[{"start":18,"value":"great123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"SalmanDabang@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"SalmanDabang@gmail.com\"","children":[{"start":24,"value":"SalmanDabang@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"test 123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"test 123\"","children":[{"start":18,"value":"test 123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
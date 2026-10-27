const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const InputsPage = require('../pageobjects/inputs.page');

Given('estoy en la pagina de inputs', async () => {
    await InputsPage.open();
});

When('ingreso el numero {string}', async (value) => {
    await InputsPage.enterNumber(value);
});

Then('el campo deberia tener el valor {string}', async (expectedValue) => {
    await expect(InputsPage.numberInput).toHaveValue(expectedValue);
});

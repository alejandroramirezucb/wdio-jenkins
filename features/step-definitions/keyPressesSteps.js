const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const KeyPressesPage = require('../pageobjects/keyPresses.page');

Given('estoy en la pagina de pulsacion de teclas', async () => {
    await KeyPressesPage.open();
});

When('presiono la tecla {string}', async (key) => {
    await KeyPressesPage.pressKey(key);
});

Then('deberia ver el resultado {string}', async (expectedResult) => {
    await expect(KeyPressesPage.result).toHaveText(expectedResult);
});

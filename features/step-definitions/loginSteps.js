const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

Given('estoy en la pagina de login', async () => {
    await LoginPage.open();
});

When('ingreso {string} y {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('deberia ver el mensaje {string}', async (expectedMessage) => {
    await SecurePage.isMessageDisplayed(expectedMessage);
});

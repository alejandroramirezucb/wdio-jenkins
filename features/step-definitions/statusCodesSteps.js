const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const StatusCodesPage = require('../pageobjects/statusCodes.page');

Given('estoy en la pagina de codigos de estado', async () => {
    await StatusCodesPage.open();
});

When('hago clic en el codigo {string}', async (code) => {
    await StatusCodesPage.clickCode(code);
});

Then('la pagina deberia mostrar el texto {string}', async (expectedText) => {
    await expect(StatusCodesPage.pageText).toHaveText(expect.stringContaining(expectedText));
});

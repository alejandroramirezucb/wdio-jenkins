const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const HoversPage = require('../pageobjects/hovers.page');

Given('estoy en la pagina de hovers', async () => {
    await HoversPage.open();
});

When('paso el mouse sobre el primer avatar', async () => {
    await HoversPage.hoverFirstAvatar();
});

Then('deberia ver el texto {string}', async (expectedText) => {
    await expect(HoversPage.firstCaption).toHaveText(expectedText);
});

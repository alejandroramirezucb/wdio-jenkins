const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const SliderPage = require('../pageobjects/slider.page');

Given('estoy en la pagina del control deslizante', async () => {
    await SliderPage.open();
});

When('presiono la flecha derecha {int} veces', async (times) => {
    await SliderPage.pressRightArrow(times);
});

Then('el valor del slider deberia ser {string}', async (expectedValue) => {
    await expect(SliderPage.rangeValue).toHaveText(expectedValue);
});

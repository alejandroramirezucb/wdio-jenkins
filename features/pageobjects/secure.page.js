const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }

    async getFlashMessage () {
        return await this.flashAlert.getText();
    }

    async isMessageDisplayed (expectedText) {
        await expect(this.flashAlert).toBeDisplayed();
        const text = await this.getFlashMessage();
        expect(text).toContain(expectedText);
    }
}

module.exports = new SecurePage();

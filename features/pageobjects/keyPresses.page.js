const { $ } = require('@wdio/globals')
const Page = require('./page');

class KeyPressesPage extends Page {
    get targetInput () {
        return $('#target');
    }

    get result () {
        return $('#result');
    }

    async pressKey (key) {
        await this.targetInput.click();
        await this.targetInput.setValue(key);
    }

    open () {
        return super.open('key_presses');
    }
}

module.exports = new KeyPressesPage();

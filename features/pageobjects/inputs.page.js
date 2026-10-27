const { $ } = require('@wdio/globals')
const Page = require('./page');

class InputsPage extends Page {
    get numberInput () {
        return $('input[type="number"]');
    }

    async enterNumber (value) {
        await this.numberInput.setValue(value);
    }

    open () {
        return super.open('inputs');
    }
}

module.exports = new InputsPage();

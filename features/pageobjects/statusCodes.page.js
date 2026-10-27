const { $ } = require('@wdio/globals')
const Page = require('./page');

class StatusCodesPage extends Page {
    get pageText () {
        return $('.example p');
    }

    linkForCode (code) {
        return $(`a=${code}`);
    }

    async clickCode (code) {
        await this.linkForCode(code).click();
    }

    open () {
        return super.open('status_codes');
    }
}

module.exports = new StatusCodesPage();

const { $ } = require('@wdio/globals')
const Page = require('./page');

class HoversPage extends Page {
    get firstFigure () {
        return $('.figure');
    }

    get firstCaption () {
        return $('.figure .figcaption h5');
    }

    async hoverFirstAvatar () {
        await this.firstFigure.moveTo();
    }

    open () {
        return super.open('hovers');
    }
}

module.exports = new HoversPage();

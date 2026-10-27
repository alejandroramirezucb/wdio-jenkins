const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class SliderPage extends Page {
    get slider () {
        return $('input[type="range"]');
    }

    get rangeValue () {
        return $('#range');
    }

    async pressRightArrow (times) {
        await this.slider.execute((elem) => elem.focus());
        for (let i = 0; i < times; i++) {
            await browser.keys('ArrowRight');
        }
    }

    open () {
        return super.open('horizontal_slider');
    }
}

module.exports = new SliderPage();

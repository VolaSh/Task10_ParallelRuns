const StartPage = require("./start_page");
const Tab = require("../base_elements/tab");


class HelpPage extends StartPage {
    constructor() {
        super();
        this.learnInFiveSteps = new Tab('//div[text()="LEARN in 5 Steps"]');
    };
};

module.exports = HelpPage;
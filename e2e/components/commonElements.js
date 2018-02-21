class CommonElements {
    constructor() {
        this.title = element(by.css("#main h1"));
        this.warningMessage = element(by.css(".alert-message.warning"));
    }
}

module.exports = CommonElements;

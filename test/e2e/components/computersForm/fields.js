class Fields {
    constructor(parentElement) {
        this.container = parentElement.element(by.css("fieldset"));

        this.computerName = this.container.element(by.id("name"));
        this.introducedDate = this.container.element(by.id("introduced"));
        this.discontinuedDate = this.container.element(by.id("discontinued"));

        this.error = this.container.element(by.className("error"));
    }
}

module.exports = Fields;

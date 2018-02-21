const helper = require("protractor-helper");

const ButtonsComponent = require("./buttons");
const FieldsComponent = require("./fields");

class ComputersForm {
    constructor() {
        this.container = element(by.css("form[action='/computers']"));

        this.buttons = new ButtonsComponent(this.container);
        this.fields = new FieldsComponent(this.container);
    }

    fillWithProvidedDataAndSubmit(data) {
        helper.fillFieldWithTextWhenVisible(this.fields.computerName, data.computerName);
        helper.fillFieldWithTextWhenVisible(this.fields.introducedDate, data.introducedDate);
        helper.fillFieldWithTextWhenVisible(this.fields.discontinuedDate, data.discontinuedDate);
        helper.clickWhenClickable(this.buttons.createThisComputer);
    }
}

module.exports = ComputersForm;

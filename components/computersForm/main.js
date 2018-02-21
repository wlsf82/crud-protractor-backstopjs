const faker = require("faker");
const helper = require("protractor-helper");

const ButtonsComponent = require("./buttons");
const FieldsComponent = require("./fields");

class ComputersForm {
    constructor() {
        this.container = element(by.css("form[action='/computers']"));

        this.buttons = new ButtonsComponent(this.container);
        this.fields = new FieldsComponent(this.container);
    }

    fillWithValidDataAndSubmit() {
        const randomComputerName = faker.hacker.adjective();
        const introducedDate = "2018-02-01";
        const discontinuedDate = "2016-02-01";
        const successMessage = `Done! Computer ${randomComputerName} has been created`;

        helper.fillFieldWithTextWhenVisible(this.fields.computerName, randomComputerName);
        helper.fillFieldWithTextWhenVisible(this.fields.introducedDate, introducedDate);
        helper.fillFieldWithTextWhenVisible(this.fields.discontinuedDate, discontinuedDate);
        helper.clickWhenClickable(this.buttons.createThisComputer);
        return successMessage;
    }

    fillWithProvidedDataAndSubmit(data) {
        helper.fillFieldWithTextWhenVisible(this.fields.computerName, data.computerName);
        helper.fillFieldWithTextWhenVisible(this.fields.introducedDate, data.introducedDate);
        helper.fillFieldWithTextWhenVisible(this.fields.discontinuedDate, data.discontinuedDate);
        helper.clickWhenClickable(this.buttons.createThisComputer);
    }
}

module.exports = ComputersForm;

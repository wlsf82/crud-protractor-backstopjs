const ButtonsComponent = require("./buttons");
const FieldsComponent = require("./fields");

class ComputersForm {
    constructor() {
        this.container = element(by.css("form[action='/computers']"));

        this.buttons = new ButtonsComponent(this.container);
        this.fields = new FieldsComponent(this.container);
    }
}

module.exports = ComputersForm;

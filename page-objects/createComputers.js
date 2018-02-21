const ComputersFormComponent = require("../components/computersForm/main");

class CreateComputers {
    constructor() {
        this.relativeUrl = "computers/new"

        this.form = new ComputersFormComponent();
    }
}

module.exports = CreateComputers;

class Buttons {
    constructor(parentElement) {
        this.container = parentElement.element(by.className("actions"));

        this.createThisComputer = this.container.element(by.css("input[type='submit']"));
    }
}

module.exports = Buttons;

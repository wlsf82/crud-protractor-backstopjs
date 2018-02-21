module.exports = function (chromy) {
    chromy
        .wait("form[action='/computers'] #name")
        .type("form[action='/computers'] #name", "some computer")
        .wait("form[action='/computers'] .actions input[type='submit']")
        .click("form[action='/computers'] .actions input[type='submit']")
        .wait(".alert-message.warning");
};

const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

const MailerQRenderer = (dirPath) => {
    return (templateFileName, vars) => {
        const templateString = fs.readFileSync(path.join(dirPath, templateFileName), "utf8");

        const templateFunc = Handlebars.compile(templateString);

        return templateFunc(vars);
    }
}

module.exports = MailerQRenderer;

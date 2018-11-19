let Globals = require("../app/classes/Globals");
let Template = require("../app/classes/Template");
let winston = require('winston');
let fs = require("fs");

let Navbar = require("../app/components/navbar");
let MainContainer = require("../app/components/mainContainer");

const logDir = "./app/storage";

class App
{
    constructor()
    {
        this.setUpLogger();
        this.setUpGlobals();
        this.setUpGlobalsVariables();
        this.setUpTemplate();
        this.setUpComponents()
    }

    setUpLogger()
    {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    timestamp: true
                }),
                new winston.transports.File({
                    filename: `${logDir}/complete.log`,
                    timestamp: true
                })
            ]
        });
    }

    setUpGlobals()
    {
        this.globals = new Globals();
    }

    setUpGlobalsVariables()
    {
        this.globals.setVariable("websiteName", "Electron Boilerplate App")
    }

    setUpTemplate()
    {
        this.appTemplate = new Template("App");
        this.appTemplate.setHtml(`
        <Navbar />
        <MainContainer />
        `)
    }

    setUpComponents()
    {
        this.navbar = new Navbar(this);
        this.mainContainer = new MainContainer(this);
    }
}

module.exports = App;
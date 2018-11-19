let Template = require("../../classes/Template");

class Navbar
{
    constructor(app)
    {
        this.app = app;
        this.setUp();
        this.enableMobileToggle();
        this.enableButtonsEvents();
    }

    setUp()
    {
        let template = new Template("Navbar");
        template.setHtml(`
       <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
        
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarFirst">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarFirst" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item" id="buttonOne">
                        Button 1
                    </a>
                    <a class="navbar-item" id="buttonTwo">
                        Button 2
                    </a>
                </div>
            </div>
        </nav>
        `)
    }

    enableMobileToggle()
    {
        $(".navbar-burger").click(function()
        {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });
    }

    enableButtonsEvents()
    {
        $("#buttonOne").click(function () {
            alert("Button 1 :D")
        })
    }
}

module.exports = Navbar;
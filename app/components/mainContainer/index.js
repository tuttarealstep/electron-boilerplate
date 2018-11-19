let Template = require("../../classes/Template");

let HeroSection = require("./components/heroSection");

class MainContainer
{
    constructor(app)
    {
        this.app = app;
        this.setUp();
        this.setUpComponents();
        this.setUpEvents();
    }

    setUp()
    {
        let template = new Template("MainContainer");
        template.setHtml(`
        <HeroSection />
        <div class="container">
            <div class="columns">
                <div class="column is-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit tortor, porttitor eget dictum eu, auctor sed ante. In viverra quis augue ac accumsan. Vivamus sollicitudin accumsan neque nec pharetra. Phasellus non nisi eu magna semper hendrerit ut vitae eros. Nunc a lectus id lectus ullamcorper tincidunt id nec felis.</p>
                    <br>
                    <input type="text" id="counter" class="input" value="0">
                    <button class="button" id="incrementButton">Increment</button>
                </div>
            </div>
        </div>
        `)
    }

    setUpComponents()
    {
        this.heroSection = new HeroSection(this);
    }

    setUpEvents()
    {
        $("#incrementButton").click(function () {
            $("#counter").val(parseInt($("#counter").val()) + 1);
        })
    }
}

module.exports = MainContainer;
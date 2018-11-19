let Template = require("../../../../classes/Template");

class HeroSection
{
    constructor(mainContainer)
    {
        this.mainContainer = mainContainer;
        this.setUp();
    }

    setUp()
    {
        let template = new Template("HeroSection");
        template.setHtml(`
<section class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        ${ this.mainContainer.app.globals.getVariable("websiteName") }
      </h1>
      <h2 class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
</section>
        `)
    }
}

module.exports = HeroSection;
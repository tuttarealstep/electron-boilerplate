class Template
{
    constructor(querySearch)
    {
        this.querySearch = querySearch;
        this.element = $(querySearch)
    }

    setHtml(value)
    {
        this.getElement().replaceWith(function () {
            return $(value);
        });
    }

    appendHtml(value)
    {
        this.getElement().append($(value))
    }

    getQuerySearch()
    {
        return this.querySearch;
    }

    getElement()
    {
        return this.element;
    }
}

module.exports = Template;
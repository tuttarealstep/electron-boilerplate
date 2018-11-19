class Globals
{
    constructor() {
        this.variables = [];
    }

    setVariable(key, value)
    {
        this.variables[key] = value;
    }

    getVariable(key)
    {
        return this.variables[key];
    }

    getVariables()
    {
        return this.variables;
    }
}

module.exports = Globals;
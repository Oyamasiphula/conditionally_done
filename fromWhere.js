const assert = require('assert');
var fromWhere = function(registrationNumber) {
    if (registrationNumber.startsWith("CY")) {
        return "Bellville";
    }
    if (registrationNumber.startsWith("CJ")) {
        return "Paarl"
    }
    if (registrationNumber.startsWith("CA")) {
        return "Cape Town"
    } else {
        return "Some other place!"
    }
};
assert.equal(fromWhere("CY 907"), "Bellville");
assert.equal(fromWhere("CJ 7578"), "Paarl");
assert.equal(fromWhere("CA 43445"), "Cape Town");
assert.equal(fromWhere("DRT 43445 L"), "Some other place!");

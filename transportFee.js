const assert = require('assert');

var transportFee = function(shift){
    if (shift === 'morning' ) {
        return "R20"
    }
    if (shift === 'afternoon') {
      return "R10"
    }
    else if (shift === 'night shift') {
      return ""
    }
}
assert.equal(transportFee('morning'),"R20")
assert.equal(transportFee('afternoon'),"R10")
assert.equal(transportFee('night shift'),"")

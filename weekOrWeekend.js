const assert = require('assert');

var weekOrWeekend = function(day){
  if (day === 'Monday' || day === 'Wednesday' || day === 'Thursday')  {
    return "week";
  }
  else if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
      return 'weekend';
  }
};
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Friday'), 'weekend');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

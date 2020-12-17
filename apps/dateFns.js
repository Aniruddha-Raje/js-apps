var add = require("date-fns/add");
var parse = require("date-fns/parse");
var formatDate = require("date-fns/format");
var getTime = require('date-fns/getTime')

console.log(
  parse("2020-12-16", "yyyy-MM-dd", new Date())
);

console.log(
  parse("2020-07-25T00:00:00.000Z", "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date())
);

console.log(
  typeof(parse("2020-12-20T11:12:58Z", "yyyy-MM-dd'T'HH:mm:ssX", new Date()))
);

console.log(
  add(new Date(), {
    months: 1,
    days: -3
  })
);

console.log(
  formatDate(
    add(new Date(), {
      months: 1,
      days: -3
    }),
    "yyyy-MM-dd"
  )
);

console.log(formatDate(new Date(), "yyyy-MM-dd"));

console.log(getTime(new Date()));
var add = require("date-fns/add");
var parse = require("date-fns/parse");
var formatDate = require("date-fns/format");

console.log(
  parse("2020-07-25T00:00:00.000Z", "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date())
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

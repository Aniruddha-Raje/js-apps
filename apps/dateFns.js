var add = require("date-fns/add");
var sub = require("date-fns/sub");
var parse = require("date-fns/parse");
var format = require("date-fns/format");
var getTime = require('date-fns/getTime');
var getMonth = require('date-fns/getMonth')

console.log(format(new Date(), "MMMM"));

console.log(format(parse("18/02/2021", "dd/MM/yyyy", new Date()), "MMMM"));

console.log(
  new Date()
);

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

console.log(getTime(new Date()));

console.log(parseInt(format(new Date(), "yyyyMMddHHmmss")));

console.log(format(sub(parse("18/02/2021", "dd/MM/yyyy", new Date()), {
  days: 10
}),"dd/MM/yyyy"));

parse("18/02/2021", "dd/MM/yyyy", new Date())

console.log(
  format(
      add(parse("2021-02-01", "yyyy-MM-dd", new Date()), {
        months: 1,
        days: -1
      }),
    "yyyy-MM-dd"
  )
);

let failSMSMessage = "bolttech: Your bolttech Mobile Protec plan has been cancelled. Your phone is no longer protected after #NEXTDUEDATE.";

// failSMSMessage = failSMSMessage.replace("#NEXTDUEDATE", await format(await parse(subscription.endDate, "yyyy-MM-dd", new Date()), "dd/MM/yyyy"));
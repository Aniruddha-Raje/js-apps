var moment = require('moment-timezone');

console.log("Convert from Asia/Kuala_Lumpur to Unix -> ", moment.tz("2019-10-09 00:00:00","UTC").unix());
console.log("Convert from Asia/Kuala_Lumpur to Unix -> ", moment.tz("2019-10-09 23:59:59","UTC").unix());
// Outputs - 1570595400

console.log("Epoch to Specific TimeZone Epoch -> ",moment.unix(1570579200).tz("Asia/Kuala_Lumpur").unix());


console.log("Epoch to Specific TimeZone Epoch -> ",moment.unix(1555296000).tz("Asia/Kuala_Lumpur").format('YYYY-MM-DD hh:mm:ss'));

console.log("Epoch to Specific TimeZone and Format -> ",moment.unix(1555296000).tz("Asia/Calcutta").format('YYYY-MM-DD hh:mm:ss'));

console.log("UTC to Local ", moment().tz("Asia/Kuala_Lumpur").format('H'));


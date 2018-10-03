// https://github.com/samuelmr/spire-tracker
// https://app.spire.io/my/portals

// CMD:
// $ node spire-events.js
// destination folder = same as node.js install, e.g. c:/program files/nodejs

const json2csv = require('json2csv').parse;
const Spire = require('spire-tracker')
var fs = require("fs");

// set the date
var date = '20181003'

var token = 'YOUR_SPIRE_TOKEN'
var client = new Spire(token)
client.events(date).then(function(data) {
  console.log(JSON.stringify(data, null, 1))

  try {
  const csv = json2csv(data);
  console.log(csv);
  fs.writeFile('spire-events-'+date+'.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });

 } catch (err) {
  console.error(err);
 }

}).catch(function(error){
  console.error(error)
})

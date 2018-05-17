var app1 = require('./app1');
var _ = require('lodash');
var data = require('./data.json');
var fs = require('fs');

console.log(data);
console.log(app1.text);
console.log(_.random(1,90));

fs.readFile('./data.json', 'utf-8', function(err, data) {
  console.log(JSON.parse(data));
});

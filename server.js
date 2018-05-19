var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
  {name: 'P', text: 'This is p'},
  {name: 'PP', text: 'This is pp'}
];
app.get('/messages', (req, res) => {
    res.send(messages);
});

var server = app.listen(9000, function() {
  console.log('server is listening on port', server.address().port);
});

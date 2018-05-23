var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var dbUrl = "mongodb://ppp:ARIHANT@ds231720.mlab.com:31720/nodecourse";

var Message = mongoose.model('Message', {
  name: String,
  text: String
});

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
      if(err) {
        res.sendStatus(500);
      }
      res.send(messages);
    });
});
app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if(err) {
      res.sendStatus(500);
    }
    io.emit('message', req.body);
    res.sendStatus(200);
  });
});

io.on('connection', (socket) => {
  console.log('user connected');
});

mongoose.connect(dbUrl, function(err) {
  console.log('mongodb connection', err);
});

var server = http.listen(9000, function() {
  console.log('server is listening on port', server.address().port);
});

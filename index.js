var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
  socket.on('message', function(msg){
	  io.emit('message', msg);
  });

	  
  
  
});

server.listen(3000, function(){
	console.log('listening on *:3000');

});
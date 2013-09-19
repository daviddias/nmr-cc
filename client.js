var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  // , ioServer = require('socket.io').listen(8080)
  , fs = require('fs');

var socket = io.connect('192.168.0.102', {
  port: 8888
});

socket.on('connect', function () {
  console.log('socket connected');
});

var sendcontroller = function (filename){
	var stream = ss.createStream();
	var filepath = './controllers/'+filename;

	ss(socket).emit('addController', stream, {name: filename});
	fs.createReadStream(filepath).pipe(stream);
};

sendcontroller('bananathrower.js');
// setTimeout(function() {
  // sendcontroller('nerfgun.js');
// },1000)
// setTimeout(function() {
//   sendcontroller('steering.js')
// },2000)
// setTimeout(function() {
//   sendcontroller('engine.js')
// },3000)

// setTimeout(function() {
//   var options = {
//     controllerID: 'banana',
//     command: 'fire'
//   };
//   socket.emit('execute', options);
// },2000);


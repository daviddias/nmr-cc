var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  , ioServer = require('socket.io').listen(8080)
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
setTimeout(function() {
   sendcontroller('nerfgun.js');
},1000)
setTimeout(function() {
   sendcontroller('steering.js')
},2000)
setTimeout(function() {
   sendcontroller('engine.js')
},3000)

	ioServer.sockets.on('connection', function(browserSocket){
		console.log('connection!!!!');
		browserSocket.on('forward', function(data){
			console.log('forward');
			options = {
				controllerID:"engine",
				command: "forward"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('backward', function(data){
			console.log('backward');
			options = {
				controllerID:"engine",
				command: "backward"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('stop', function(data){
			console.log('stop');
			options = {
				controllerID:"engine",
				command: "stop"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('left', function(data){
			console.log('left');
			options = {
				controllerID:"steering",
				command: "left"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('right', function(data){
			console.log('right');
			options = {
				controllerID:"steering",
				command: "right"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('center', function(data){
			console.log('center');
			options = {
				controllerID:"steering",
				command: "center"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('bananaFire', function(data){
			console.log('bananaFire');
			options = {
				controllerID:"banana",
				command: "fire"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('bananaReady', function(data){
			console.log('bananaReady');
			options = {
				controllerID:"banana",
				command: "ready"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('nerfFire', function(data){
			console.log('nerfFire');
			options = {
				controllerID:"nerfgun",
				command: "fire"
			}
			socket.emit('execute', options);
		});
		browserSocket.on('nerfReady', function(data){
			console.log('nerfReady');
			options = {
				controllerID:"nerfgun",
				command: "ready"
			}
			socket.emit('execute', options);
		});
	})

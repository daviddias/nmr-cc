var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  , fs = require('fs');


module.exports = function (carIP, carPort) {
	var socket = io.connect(carIP, {
	  port: carPort
	});

	// var socket = io.connect('192.168.0.102', {
	//   port: 8888
	// });

	socket.on('connect', function () {
	  console.log('socket connected');

		var sendController = function (filepath, filename){
			var stream = ss.createStream();
			ss(socket).emit('addController', stream, {name: filename});
			fs.createReadStream(filepath).pipe(stream);
		};

		var sendCommand = function (options) {
			socket.emit('execute', options);
		};

    return {
			sendController: sendController,
			sendCommand: sendCommand
		};

	});
};






var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  , ioServer = require('socket.io').listen(8080)
  , fs = require('fs')

socket = io.connect('192.168.0.102', {
  port: 8888
})

socket.on('connect', function () { 
  console.log("socket connected") 
})

var sendcontroller = function (filename){
	var stream = ss.createStream();
	var filepath = './controllers/'+filename;

	ss(socket).emit('addController', stream, {name: filename})
	fs.createReadStream(filepath).pipe(stream)
}

sendcontroller('bananathrower.js')
setTimeout(function() {
  sendcontroller('nerfgun.js')
},1000)
setTimeout(function() {
  sendcontroller('steering.js')
},2000)
setTimeout(function() {
  sendcontroller('engine.js')
},3000)



ioServer.sockets.on('connection', function (browserSocket) {
  browserSocket.on('forward', function (data) {
	  options = {
		controllerID: "engine",
		command: "forward"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('backward', function (data) {
	  options = {
		controllerID: "engine",
		command: "backward"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('left', function (data) {
	  options = {
		controllerID: "steering",
		command: "left"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('right', function (data) {
	  options = {
		controllerID: "steering",
		command: "right"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('center', function (data) {
	  options = {
		controllerID: "steering",
		command: "center"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('center', function (data) {
	  options = {
		controllerID: "engine",
		command: "stop"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('bananaFire', function (data) {
	  options = {
		controllerID: "banana",
		command: "fire"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('nerfFire', function (data) {
	  options = {
		controllerID: "nerfgun",
		command: "fire"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('bananaReady', function (data) {
	  options = {
		controllerID: "banana",
		command: "ready"
	  }
	  socket.emit('execute', options)
  });
  browserSocket.on('nerfReady', function (data) {
	  options = {
		controllerID: "nerfgun",
		command: "ready"
	  }
	  socket.emit('execute', options)
  });
})

// socket.emit('private message', { user: 'me', msg: 'whazzzup?' })

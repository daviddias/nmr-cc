var io = require('socket.io-client')
  , ss = require('socket.io-stream')
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

setTimeout(function () { 
	sendcontroller('engine.js')
}, 3000)	


setTimeout(function () {
  options = {
    controllerID: "banana",
    command: "ready"
  }
  socket.emit('execute', options)
}, 5000)

setTimeout(function () {
  options = {
    controllerID: "banana",
    command: "fire"
  }
  socket.emit('execute', options)
}, 7000)

setTimeout(function () {
  options = {
    controllerID: "engine",
    command: "forward"
  }
  socket.emit('execute', options)
}, 9000)

setTimeout(function () {
  options = {
    controllerID: "engine",
    command: "stop"
  }
  socket.emit('execute', options)
}, 11000)

// socket.emit('private message', { user: 'me', msg: 'whazzzup?' })

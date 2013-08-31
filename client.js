var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  , fs = require('fs')

socket = io.connect('localhost', {
  port: 8080
})

socket.on('connect', function () { 
  console.log("socket connected") 
})


var stream = ss.createStream();
var filename = 'bananathrower.js';
var filepath = './controllers/bananathrower.js'

ss(socket).emit('addController', stream, {name: filename})
fs.createReadStream(filepath).pipe(stream)



setTimeout(function () {
  options = {
    controllerID: "banana",
    command: "ready"
  }
  socket.emit('execute', options)
}, 3000)

setTimeout(function () {
  options = {
    controllerID: "banana",
    command: "fire"
  }
  socket.emit('execute', options)
}, 5000)

// socket.emit('private message', { user: 'me', msg: 'whazzzup?' })
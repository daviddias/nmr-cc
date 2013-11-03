var io = require('socket.io-client')
  , ss = require('socket.io-stream')
  , fs = require('fs');


module.exports = function (kartIP, carPort, cb) {
  var socket = io.connect(kartIP, {
    port: carPort
  });

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
    
    cb({ sendController: sendController,
         sendCommand: sendCommand
    });

  });
};






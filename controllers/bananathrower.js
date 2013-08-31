var five = require('johnny-five')
  , board = require('./../controlCenter')

var version = "0.0.0"
  , id = "banana"

var pin = 8
var servo = new five.Servo(pin)

// this.inject = function () {
// board.repl.inject({
//      b: this.servo
//    })
//  }

var ready = function () {
  servo.move(135)
}

var fire = function () {
  servo.move(10)  
}

module.exports = {
  ready: ready,
  fire: fire,
  id: id
}
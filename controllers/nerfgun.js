var five = require('johnny-five')
  , board = require('./../controlCenter')

var version = "0.0.0"
  , id = "nerfgun"

var pin = 6
var servo = new five.Servo(pin)

var ready = function () {
  servo.move(60)
}

var fire = function () {
  servo.move(45)  
}

module.exports = {
  ready: ready,
  fire: fire,
  id: id
}

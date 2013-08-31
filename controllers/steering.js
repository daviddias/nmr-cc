var five = require('johnny-five')
  , board = require('./../controlCenter')

var version = "0.0.0"
  , id = "steering"

var pin = 5
var servo = new five.Servo(pin)

this.turn = function (degree){
  this.servo.move(degree)
}

this.left = function () {
  this.servo.move(135)
}

this.center = function () {
  this.servo.move(90)
}

this.right = function () {
  this.servo.move(45)  
}

module.exports = {
  left: left,
  right: right,
  center: center,
  turn: turn,
  id: id
}

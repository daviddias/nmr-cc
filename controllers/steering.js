var five = require('johnny-five')
  , board = require('./../controlCenter')

var version = "0.0.0"
  , id = "steering"

var pin = 5
var servo = new five.Servo(pin)

var turn = function (degree){
  servo.move(degree)
}

var left = function () {
  servo.move(135)
}

var center = function () {
  servo.move(90)
}

var right = function () {
  servo.move(45)  
}

module.exports = {
  left: left,
  right: right,
  center: center,
  turn: turn,
  id: id
}

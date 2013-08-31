var five = require('johnny-five')
  , board = require('./../controlCenter')

var version = "0.0.0"
  , id = "engine"

var pin = 3
var servo = new five.Servo(pin)
var speed = 30

var setSpeed = function (value){
	// from 0 to 45
	if(value > 45){ value = 45 }
	if(value < 0){ value = 0 }
	
    speed = value
}

var stop = function() {
	servo.center()
}

var forward = function () {
	servo.move(90+speed)  
}

var backward = function () {
	servo.move(90-speed)  
}

module.exports = {
  setSpeed: setSpeed,
  stop: stop,
  forward: forward,
  backward: backward,
  id: id
}

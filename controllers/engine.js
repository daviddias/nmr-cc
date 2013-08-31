module.exports = function () {

  var version = "0.0.0"
    , id = "engine"

  var five, board, servo, pin = 3

  var init = function (_five, _board) {
    five = _five
    board = _board    
    servo = new five.Servo(pin)
  }
  
  // this.inject = function () {
  // board.repl.inject({
  //      b: this.servo
  //    })
  //  }

  var setSpeed = function (degree){
    servo.move(degree)
  }

  var stop = function() {
    servo.center()
  }

  var forward = function () {
    servo.move(135)  
  }

  var backward = function () {
    servo.move(45)  
  }
}




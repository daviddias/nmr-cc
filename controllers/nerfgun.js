module.exports = function () {

  var version = "0.0.0"
    , id = "nerfgun"

  var five, board, servo, pin = 9

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

  var ready = function () {
    servo.move(60)
  }

  var fire = function () {
    servo.move(45)  
  }
}
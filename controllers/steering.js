module.exports = function () {

  var version = "0.0.0"
    , id = "steering"

  var five, board, servo, pin = 5

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

this.turn = function (degree){
    this.servo.move(degree)
  }

  this.left = function () {
    this.servo.move(135)
  }

  this.right = function () {
    this.servo.move(45)  
}

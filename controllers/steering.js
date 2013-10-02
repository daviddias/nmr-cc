module.exports = function(five) {
  var pin = 5;
  var servo = new five.Servo(pin);

  return {
    id: 'steering',
    pin: pin,
    servo: servo,
    turn: function (degree){
      servo.move(degree);
    },
    left: function () {
      servo.move(135);
    },
    center: function () {
      servo.move(90);
    },
    right: function () {
      servo.move(45);
    }
  }
};


module.exports = function(five) {
  var pin = 3;
  var servo = new five.Servo(pin);
  var speed = 45;
  servo.move(45);
  return {
    id: 'engine',
    pin: pin,
    servo: servo,
    setSpeed: function (value){
      if (value > 45) {
        value = 45;
      }
      if (value < 0) {
        value = 0;
      }
      speed = value;
    },
    stop: function() {
      servo.center();
    },
    forward: function () {
      servo.move(90+speed);
    },
    backward: function () {
      servo.move(90-speed);
    }
  };
};

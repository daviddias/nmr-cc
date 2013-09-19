module.exports = function(five) {
  var pin = 6;
  var servo = new five.Servo(pin);

  return {
    id: 'banana',
    pin: pin,
    servo: servo,
    ready: function() {
      servo.move(135);
    },
    fire: function () {
      servo.move(10);
    }
  };
};

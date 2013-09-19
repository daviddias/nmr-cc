module.exports = function(five) {
  var pin = 9;
  var servo = new five.Servo(pin);

  return {
    id: 'nerfgun',
    pin: pin,
    servo: servo,
    ready: function () {
      servo.move(60);
    },
    fire: function () {
      servo.move(45);
    }
  };
};

var five = require("johnny-five"),
		Q = require("q");

// local tilt/rotation position variables
var tiltPos = 90;
var rotationPos = 90;

var tiltDelta = 2;
var rotationDelta = 2;

var servo1;
var servo2;
var laser;
var laserStatus = false;

var config1 = {
  	pin: 10,
  	startAt: tiltPos
  };

var config2 = {
    pin: 11,
    startAt: rotationPos
};

var config3 = {
    pin: 8
};

// Deferred object
var deferred = Q.defer();

function init() {
	var commands = {};

	five.Board().on("ready", function() {
		// Initialize the servo
		servo1 = new five.Servo(config1);
		servo2 = new five.Servo(config2);
		laser = new five.Led(config3);

		// Setup commands object
		commands = {
			down: function () {
				servo1.step(tiltDelta);
			},
			up: function () {
				servo1.step(-1*tiltDelta);
			},
			left: function () {
				servo2.step(rotationDelta);
			},
			right: function () {
				servo2.step(-1*rotationDelta);
			},
			toggle: function () {
				laserStatus = !laserStatus;
				if (laserStatus) { laser.on();}
				else { laser.off(); }
			}
		};

		deferred.resolve(commands) ;
	});
	return deferred.promise;
}

module.exports = init();

var five = require("johnny-five");

// local tilt/rotation position variables
var tiltPos = 90;
var rotationPos = 90;

var tiltDelta = 10;
var rotationDelta = 10;

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

five.Board().on("ready", function() {

	console.log("Connected");



	// Initialize the servo
	servo1 = new five.Servo(config1);
	servo2 = new five.Servo(config2);
	laser = new five.Led(config3);
});

module.exports = {
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
		console.log(-1*rotationDelta);
	},
	// fire: function () {
	// 	console.log(arguments);
	// },
	toggle: function () {
		laserStatus = !laserStatus;
		if (laserStatus) { laser.on();}
		else { laser.off(); }
	}
}
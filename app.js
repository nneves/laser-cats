var bot = require("./laserdrone");
var keypress = require('keypress');
var five = require("johnny-five");

keypress(process.stdin);


process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);

  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }

  switch( key.name ) {
    case "q":
      bot.up();
      break;
    case "a":
      bot.down();
      break;
    case "o":
      bot.left();
      break;
    case "p":
      bot.right();
      break;
    default:
      break;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

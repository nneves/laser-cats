var bot = require("./laserdrone");
var keypress = require('keypress');



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
    case "b":
      bot.toggle();
      break;
    default:
      console.log(key.name);
      break;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

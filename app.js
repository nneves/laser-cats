var bot = require("./laserdrone");
var keypress = require('keypress');

keypress(process.stdin);

bot.then( function( commands ) {
  process.stdin.on('keypress', function (ch, key) {

    if (key && key.ctrl && key.name == 'c') {
      process.stdin.resume();
      process.stdin.pause();
    }

    switch( key.name ) {
      case "q":
        commands.up();
        break;
      case "a":
        commands.down();
        break;
      case "o":
        commands.left();
        break;
      case "p":
        commands.right();
        break;
      case "b":
        commands.toggle();
        break;
      default:
        console.log(key.name);
        break;
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
});

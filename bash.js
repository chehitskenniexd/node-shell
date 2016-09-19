var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    //var cmd = data.toString().trim(); // remove the newline
    var words = data.toString().trim().split(" ");
    var cmd = words[0];
    var args = words.slice(1).join(' ');

    if (commands.hasOwnProperty(cmd)) {
        commands[cmd](args);
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write("\nprompt > ");
    }
});
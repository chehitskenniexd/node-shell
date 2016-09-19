var commands = require('./commands.js');
process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
    var cmd = data.toString().trim(); //remove trailing '\n'

    if(commands.hasOwnProperty(cmd)){
        process.stdout.write(commands[cmd]() + '\n');
    } else { process.stdout.write('You typed: ' + cmd + '\n'); }
    process.stdout.write('prompt > ');
});
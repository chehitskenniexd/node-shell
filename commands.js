var fs = require('fs');

module.exports = {
    pwd: function () { return process.cwd(); }, // Prints the current working directory
    date: function () { return new Date().toString(); }, // Prints the current date and time
    ls: function () { 
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    }, // Prints out the files in a directory
    // end of object
};

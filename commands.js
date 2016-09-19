var fs = require('fs');
var request = require('request');

module.exports = {
	pwd: function() {
		process.stdout.write(process.cwd());
		process.stdout.write("\nprompt > ");
	},
	date: function() {
		process.stdout.write(new Date().toString());
		process.stdout.write("\nprompt > ");
	},
	ls: function() {fs.readdir('.', function(err, files) {
		if (err) throw err;
		files.forEach(function(file) {
			process.stdout.write(file.toString() + "\n");
		});
		process.stdout.write("prompt > ");
	});},
	echo: function(words){
		process.stdout.write(words + '\n');
		process.stdout.write("prompt > ");		
	},
	cat: function(filenames){
		var files = filenames.split(' ');
		files.forEach(function(file){
			process.stdout.write(fs.readFileSync(file, "utf-8") + '\n');
		})
		process.stdout.write("prompt > ");		
	},
	head: function(filenames){
		var files = filenames.split(' ');
		files.forEach(function(file){
			var lines = fs.readFileSync(file, "utf-8").split('\n');
			for(var i = 0; i < 5; ++i){
				process.stdout.write(lines[i] + '\n');
			}
		});
		process.stdout.write("prompt > ");		
	},
	tail: function(filenames){
		var files = filenames.split(' ');
		files.forEach(function(file){
			var lines = fs.readFileSync(file, "utf-8").split('\n');
			for(var i = lines.length - 5; i < lines.length; ++i){
				process.stdout.write(lines[i] + '\n');
			}
		});
		process.stdout.write("prompt > ");		
	},
	wc: function(filenames){
		var files = filenames.split(' ');
		files.forEach(function(file){
			var lines = fs.readFileSync(file, "utf-8").split('\n');
			process.stdout.write((lines.length - 1).toString() + '\n');
		});
		process.stdout.write("prompt > ");		
	},
	sort: function(filenames){
		var files = filenames.split(' ');
		files.forEach(function(file){
			var lines = fs.readFileSync(file, "utf-8").split('\n');
			process.stdout.write(lines.sort().join('\n'));
		});
		process.stdout.write("prompt > ");		
	},
	curl: function(link) {
		request(link, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
			}
		})
	},
};

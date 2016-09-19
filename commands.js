var fs = require('fs');
var request = require('request');
var bash = require('./bash');

module.exports = {
	done: function(output){
		process.stdout.write(output + "\nprompt > ");
	},
	pwd: function() {
		return process.cwd();
	},
	date: function() {
		return new Date().toString();
	},
	ls: function() {fs.readdir('.', function(err, files) {
		if (err) throw err;
		var output;
		files.forEach(function(file) {
			//process.stdout.write(file.toString() + "\n");
			output += file.toString();
		});
		//process.stdout.write("prompt > ");
		bash.done(output);
		});
	},
	echo: function(words){
		return words;	
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

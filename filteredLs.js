var fs = require('fs');
var path = require('path');
var filesList = new Array();
var path = process.argv[2];
var ext = '.' + process.argv[3];

function readFiles(callback) {
fs.readdir(path, function doneReading (err, files) {
	if(err) throw err;
	filesList = files;
	callback();
	});
}

function printFiles() {
for (var i = 0; i < filesList.length; i++) {
		if (path.extname(filesList[i]) !== ext) continue;
		console.log(filesList[i]);
	}
}
readFiles(printFiles);

var fs = require('fs');
var result = undefined;

function countLines(callback) {
fs.readFile(process.argv[2], function doneReading (err, data) {
	result = data.toString().split('\n').length - 1;
	callback();
});
}

function logLines() {
	console.log(result);
}

countLines(logLines);

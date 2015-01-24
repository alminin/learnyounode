var filtmodule = require('./filtmodule.js');
filtmodule(process.argv[2], process.argv[3], function doneReading (err, files) {
	if (err) return console.error(err);
	files.forEach(function (file) {
		console.log(file);
	})
})
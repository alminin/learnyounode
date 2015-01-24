var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	var data = new Array();
	fs.readdir(dir, function doneReading (err, files) {
		if (err)
			return callback(err);

		for (var i = 0, j = 0; i < files.length; i++) {
			if (path.extname(files[i]) === '.' + ext) {
				data[j] = files[i];
				j++;
			}
		}

		/*files = files.filter(function (file) {
			return path.extname(file) === '.' + ext
		})*/

		callback(null, data);
		//callback(null, files)
	})
}
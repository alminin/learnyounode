var http = require('http');
var bl = require('bl');
var allData = [],
	urls = [];

for (var i = 2, j = 0; i < process.argv.length; i++, j++) {
	urls[j] = process.argv[i];
}

function readUrl(url, callback) {
	var result = undefined;
	http.get(url, function(res) {
		res.pipe(bl(function (err, data) {
		if (err)
			return console.error(err);
		result = data.toString();
		callback(result);
	}));
	});
}

function print() {
		allData.forEach(function(data) {
			console.log(data);
		});
}

function series(url) {
	if(urls.length >= 0 && url !== undefined) {
		readUrl(url, function(result) {
			allData.push(result);
			series(urls.shift());
		});
	} else {
		print();
	}
}

series(urls.shift());





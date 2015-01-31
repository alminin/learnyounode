var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function (socket) {
	var time = strftime('%Y-%m-%d %H:%M');
	socket.end(time + '\n');
});
server.listen(port);
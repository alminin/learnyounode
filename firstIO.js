var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var text = buf.toString();
var lines = text.split('\n');
var result = lines.length - 1;
console.log(result);
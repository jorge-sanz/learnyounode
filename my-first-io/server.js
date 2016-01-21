var fs = require('fs');

var string = fs.readFileSync(process.argv[2]).toString();
var numberOfLines = string.split("\n").length - 1;

console.log(numberOfLines);

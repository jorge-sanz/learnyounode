var fs = require('fs');
var numberOfLines = undefined;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  numberOfLines = data.toString().split("\n").length - 1;
  console.log(numberOfLines);
});

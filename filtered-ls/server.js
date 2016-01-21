var fs = require('fs');
var path = require('path');

var extensionInitials = process.argv[3];
var point = '.';
var extension = point.concat(extensionInitials);

fs.readdir(process.argv[2], function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (extension == path.extname(files[i])){
      console.log(files[i]);
    }
  }
});

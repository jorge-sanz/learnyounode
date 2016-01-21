var modulelib = require('./modulelib');

var dirname = process.argv[2];
var ext = process.argv[3];

modulelib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

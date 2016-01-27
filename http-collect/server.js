var http = require('http');

var paragraph = '';

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
      paragraph = paragraph.concat(data);
  });
  response.on('end', function () {
    console.log(paragraph.length);
    console.log(paragraph);
  });
});

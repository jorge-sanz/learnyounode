var http = require('http');
var url = require('url');

function parseTime(time) {
  return {
    'hour': time.getHours(),
    'minute': time.getMinutes(),
    'second': time.getSeconds()
  }
}

function unixTime(time) {
  return {
    'unixtime': time.getTime()
  }
}

var server = http.createServer(function (req, res) {
  var time;

  if (url.parse(req.url, true).pathname == '/api/parsetime') {
    time = parseTime(new Date(url.parse(req.url, true).query.iso));
  } else if (url.parse(req.url, true).pathname == '/api/unixtime') {
    time = unixTime(new Date(url.parse(req.url, true).query.iso));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(time));
}).listen(process.argv[2]);

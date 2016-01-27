var net = require('net');

function previousZero (number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}

function time () {
  var date = new Date();

  return date.getFullYear()
            + '-' + previousZero(date.getMonth() + 1)
            + '-' + previousZero(date.getDate())
            + ' ' + previousZero(date.getHours())
            + ':' + previousZero(date.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.end(time() + '\n');
});

server.listen(process.argv[2]);

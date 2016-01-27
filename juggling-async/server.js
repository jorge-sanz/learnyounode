var http = require('http');

function request (index, callback) {
  http.get(process.argv[2 + index], function (response) {
    var paragraph = '';
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        paragraph += chunk;
    });
    response.on('end', function () {
      console.log(paragraph);
      waterfall(callback.functionName, callback.nextArguments);
    });
  });
}

// Code recommendation by @javierprovecho
function waterfall(functionName, arguments) {
  if (arguments.length == 0) {
    // console.log("done");
    return
  }
  var nextArguments = [];
  for (i = 1; i < arguments.length; i++) {
    nextArguments.push(arguments[i]);
  }

  var callback = {
    functionName,
    nextArguments
  };

  functionName(arguments[0], callback);
}

waterfall(request, [0, 1, 2]);

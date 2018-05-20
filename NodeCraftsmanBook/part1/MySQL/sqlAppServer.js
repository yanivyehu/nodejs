var http = require('http');
var url  = require('url');
var querystring = require('querystring');


function startServer(routeFn, handler) {
  http.createServer(function(request, response) {
    var urlParsed = url.parse(request.url);
    var payload = '';
    var postParamsObj = null;
    request.on('data', function(data) {
      payload += data;
    });
    request.on('end', function(){
      if (payload) {
        console.log("payload -->" + payload)
        var postParamsObj = querystring.parse(payload);
      } else {
        console.log("no payload!!!");
      }
      routeFn(urlParsed.pathname, handler, postParamsObj, request, response);
    });

  }).listen(8080);
}


exports.startServer = startServer;

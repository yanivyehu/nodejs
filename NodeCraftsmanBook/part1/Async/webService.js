var http = require("http");
var url = require("url");
var querystring = require("querystring");


http.createServer(function(request,response) {
  console.log("HTTP request arrived!!!");

  console.log("request.url=" + request.url);
  var parsedUrl = url.parse(request.url);
  var nummber = querystring.parse(parsedUrl.query)['number'];

  var result = {
    result : nummber * 2
  }

  response.setHeader('X-Foo', 'bar');
  response.setHeader('Set-Cookie','yanivcookie=1');
  response.writeHead(200, {'Content-Type': 'application/json'});

  //delay response
  setTimeout(
    function(){
      response.end(JSON.stringify(result))
    },
    500 + Math.floor(Math.random() * 1000)
  );

}).listen(8080);

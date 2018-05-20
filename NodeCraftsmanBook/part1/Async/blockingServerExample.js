var http = require('http');

http.createServer(function(request, response) {
  console.log('Handling HTTP request');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<b>Hello World</b>');
  response.end();
}).listen(8080);

//all requests won't be handled until this loop is over
var a;
for (var i=0; i < 10000000000; i += 1) {
  a = i;
}
console.log('For loop has finished');

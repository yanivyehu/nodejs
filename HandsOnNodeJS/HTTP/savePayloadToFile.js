var http = require('http');
var url  = require('url');
var fs   = require('fs');

var index = 0;

var server = http.createServer( function(req, res) {
    console.log("[Server]: incoming request! url--> " + req.url);

    //create a write stream
    var ws = fs.createWriteStream('files/body' + index + '.txt');
    //req is a read stream, so we can consme the payload by pipe to our created write-stream.
    req.pipe(ws);

    req.on('end', function() {
        index++;
        res.end('[Server: response!');
    })

    /**
     * the following is not efficient!!!! keeping all data and then makes one write.
     */
    //var payload = "";
    // req.on('data', function(data) {
    //     //data is recived in type Buffer, toString() makse is utf8 encoding.
    //     console.log("[Request]:" + data.toString()); 
    //     payload += data;
    // });

    // req.on('end', function(data) {
    //     console.log("[Request]: end request!")
    //     console.log("[Request]: writing payload to file");

    //     fs.appendFile('files/body.txt', payload, function(err) {
    //         console.log(err);
    //     });

    // });    
});

server.listen(8080);
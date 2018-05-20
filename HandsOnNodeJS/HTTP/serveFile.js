var http = require('http');
var url  = require('url');
var fs   = require('fs');

/**
 * req - IncomingMessage which is a readable Stream
 * res - serverResposne which is a writeable Stream
 */
var server = http.createServer(function(req, res) {
    console.log("url--> " + req.url);
    
    res.on('end', function() {
        console.log('connection end!')
    })
    
    res.on('finish', function() {
        console.log("res emitted 'finish' event");  
    });


    /**
     * returns an image
     */
    // res.writeHead(200, {"Content-Type" : "image/png"});
    // var readStream = fs.createReadStream("files/test.png");

    /**
     * returns a text file
     */
    res.writeHead(200, {"Content-Type" : "txt/plain"});

    /**
     * we need to return a file.
     * first we need to read it.
     * we can do it by first read all the file using fs api, but in case
     * the file is big we can fill the memory (altough reading the file is async).
     * So instead we use a read stream which allows to read data chunk by chunk.
     */
    var readStream = fs.createReadStream("files/file1.txt");

    // readStream.addListener('data', function(data){
    //     console.log("[readStream]: addListener cb! received -->" + data);
    // });

    // readStream.on('data', function(data) {
    //     console.log("[readStream]: data event! received -->" + data);
    //     res.write(data);
    // });

    // readStream.on('end', function() {
    //     console.log("[readStream]: end!");
    //     res.end();
    // });

    /**
     *calling 'pipe' on a ReadStrem object triggers data events 
     * when the readStrema emit the end event, then end() is being called 
     * on the writeable stream (response).
     * NOTE: pipe method equlas in meaning to consume a stream using events - like above
     */
    readStream.pipe(res);
});

server.listen(8080);
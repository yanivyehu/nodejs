var http = require('http');
var file = "files/file1.txt";

//create http client to send post requst
const options = {
    host   : 'localhost',
    port   : 8080,
    path   : '/ex4',
    method : 'POST'
}


//read the file to send its content as the payload


var httpClientRequest = http.request(options, function(res) {
    res.on('data', function(data){
        console.log(data.toString());
    });
    console.log("response!!!");
});

httpClientRequest.on('connect', function(res, socket, head) {
    console.log('got connected!');
});

httpClientRequest.on('error', function(err) {
    console.log("[Error]:" + err)
});

httpClientRequest.write("Yaniv is the\n");
httpClientRequest.write("king\n");
httpClientRequest.end(); //actually sends the request

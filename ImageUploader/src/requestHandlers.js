var exec = require('child_process').exec;
var qs = require('querystring');
var fs = require("fs"); //internal modeule, already installed as a part of node js
var formidable = require('formidable'); //external module, needed to bo installed before use
var util = require("util");

exports.handle = ( function () {

//private
function start(request, response, postData) {
  console.log("running start handler...");

  //non-blocking action
  // exec('ls -lah', { timeout: 5000, maxBuffer: 20000*1024 }, function(error, stdout, stderr) {
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write(stdout);
  //   response.end();
  // });

/*
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
 */

 var body =
  '<form action="/upload" enctype="multipart/form-data" method="post">'+
  //'<input type="text" name="title"><br>'+
  '<input type="file" name="upload" multiple="multiple"><br>'+
  '<input type="submit" value="Upload">'+
  '</form>'

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

  handlerDone();


}

function upload(request, response, postData) {
  console.log("running upload handler..." );
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // response.write("You've sent: " + qs.parse(postData).title);
  // response.end();

  /**
   1. Need to get the bytes of the image and save it to disk
   2. send this image as response (like we did in show function)
  **/
  var form = new formidable.IncomingForm();
  form.uploadDir = "./tmp";

  form.parse(request, function(error, fields, files) {
      console.log("file uploaded to:"  + files.upload.path);
      var responseBody =
        " <h1> Your file was uploaded!!!!! </h1>" +
        " <img src=" + files.upload.path + ">";
      response.writeHead(200, {'content-type': "image/png"});
      fs.createReadStream(files.upload.path).pipe(response);
    });

  handlerDone();
}


/**
 returns an image as response.
 doing this by reading a stream of bytes
**/
function show(request, response) {
  console.log("show handler...");
  response.writeHead(200, {"Content-Type" : "image/png"});
  fs.createReadStream("tmp/test.png").pipe(response); //writing to payload?
  handlerDone();
}

function handlerDone() {
  console.log("handler is done!")
}


//public
return {
  '/'      : start,
  '/start' : start,
  '/upload': upload,
  '/show'  : show
};

})();

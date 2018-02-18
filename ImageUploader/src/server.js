var http = require("http");
var url = require("url");

/**
Start HTTP Server
**/
function startServer (routeFn, handleObj) {

	function onRequest(request, response) {
		 console.log("Request received for " + request.url);
 	   var parsedUrl = url.parse(request.url);

		 var postData = "";
		 //set request properties and event handlers
		 // request.setEncoding("utf8");
		 // request.addListener("data", function (postDataChunk) {
			//  postData += postDataChunk;
			//  //console.log("got post data: " + postDataChunk);
		 // })
     //
		 // request.addListener("end", function () {
			//  //dependecy injection of the response object
			//  routeFn(parsedUrl.pathname, postData, handleObj, request, response);
		 // })

		  routeFn(parsedUrl.pathname, postData, handleObj, request, response);


	}


	//create HTTP server
	http.createServer(onRequest).listen(8888);
}

console.log("Server has started.");



//Public API
exports.startServer = startServer;

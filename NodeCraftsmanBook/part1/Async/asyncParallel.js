/**
  Parallel tasks - perfomr action on the end of all of them
**/


var request = require("request"); //external node module to create http requests easily
var myasync = require("async"); //external node module to sync complex control flows

//async.parallel example
var getCalc1 = function(callback){
  request.get('http://localhost:8080/?number=1', function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    var result = JSON.parse(body);
    callback(error, result.result); //adds result
  });
}

var getCalc2 = function(callback){
  request.get('http://localhost:8080/?number=2', function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    var result = JSON.parse(body);
    callback(error, result.result); //adds result
  });
}

myasync.parallel([getCalc1, getCalc2], function(err, results) {
  console.log("got all responses! total sum is:" + results);
});

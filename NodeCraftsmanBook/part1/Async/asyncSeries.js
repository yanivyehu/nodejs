/**
  Series tasks - order of the tasks is important  - perform action on the end of all of them
**/

var request = require("request"); //external node module to create http requests easily
var myasync = require("async"); //external node module to sync complex control flows



//async.series
myasync.series(
  [
    function(cb){
      request.get('http://localhost:8080/?number=1', function(error, response, body) {
        if (error) {
          console.log(error);
          return;
        }

        var result = JSON.parse(body);
        cb(null, result.result); //adds result
      });
    },
    function(cb){
      request.get('http://localhost:8080/?number=2', function(error, response, body) {
        if (error) {
          console.log(error);
          return;
        }

        var result = JSON.parse(body);
        cb(null, result.result); //adds result
      });
    }
  ],

  function(err, results) {
    for (var i=0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
);

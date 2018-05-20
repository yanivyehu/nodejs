var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node' //replace 'USE table' command
});

connection.query('USE node', function(err) {
    if (err) {
      console.log('Could not switch to database "node".');
    }
 });

//basic callback pattern - blocking
// connection.query(
//  'SELECT * FROM test',
//  function (err, results, fields) {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log(results);
//    }
//    connection.end();
//  }
// );

//using streamingAPI
var queryObject = connection.query('SELECT * FROM test');
queryObject.on('result', function(result){
  console.log(result);
});

queryObject.on('fields', function(fields){
  console.log(fields);
});

queryObject.on('row', function(row){
  console.log('Content of id ' + row.id + ' is ' + row.content);
});

queryObject.on('end', function() {
  console.log('Query execution has finished.');
  connection.end();
});

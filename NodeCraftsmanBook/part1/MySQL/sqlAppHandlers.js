var qs = require('querystring');
var mysql = require('mysql');

exports.handle = (function() {

  function home(postParamsObj, request, response) {
    console.log("home handler");
    var body = '<html>' +
                    '<head>' +
                      '<meta http-equiv="Content-Type" ' +
                      'content="text/html; charset=UTF-8" />' +
                    '</head>' +
                    '<body>' +
                      '<form action="/add" method="post">' +
                        '<input type="text" name="content">' +
                        '<input type="submit" value="Add content" />' +
                      '</form>' +
                      '<div>' +
                        '<strong>Content in database:</strong>' +
                        '<pre>' +
                          'DBCONTENT' +
                        '</pre>' +
                      '</div>' +
                      '<form action="/" method="get">' +
                        '<input type="text" name="q">' +
                        '<input type="submit" value="Filter content" />' +
                      '</form>' +
                    '</body>' +
                  '</html>';

     response.writeHead(200, {"Content-Type": "text/html"});
     response.write(body);
     response.end();
  }

  function add(postParamsObj, request, response) {
    console.log("add handler");
    console.log(postParamsObj);
    addDataToDataBase(postParamsObj.content, function(){
      response.writeHead(302, {'Location' : '/'}); //redirect to home page
      response.end();
    });
  }

  function view(postParamsObj, request, response) {
    console.log("view handler");
    console.log(postParamsObj);
  }

  //private
  function addDataToDataBase(data, cb){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'node'
    });
    console.log("Going to Insert...." + data);
    connection.query('INSERT INTO test (content) VALUES ("Hello")');
    connection.query('INSERT INTO test (content) VALUES ("' + data + '")', function(err) {
      if (err) {
        console.log("Failed to insert data to DB");
      }
      cb();
    });
  }

  function getDataFromDataBase(){

  }

  //public
  return {
    '/'     : home,
    '/home' : home,
    '/add'  : add,
    '/view' : view
  };

})();

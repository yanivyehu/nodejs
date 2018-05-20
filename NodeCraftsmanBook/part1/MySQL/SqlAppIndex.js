/**
Main Module.
Bootstrap the Application.
**/

var server = require('./sqlAppServer');
var router = require('./sqlAppRouter');
var handler = require('./sqlAppHandlers')

/**
  Dependecy injection of the route function and the handle object
**/
server.startServer(router.route, handler.handle);

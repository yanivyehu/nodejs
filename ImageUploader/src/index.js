/**
Main Module.
Bootstrap the Application.
**/

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers')

/**
Dependecy injection of the route function and the handle object
**/
server.startServer(router.route, requestHandlers.handle);

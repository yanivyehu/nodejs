const net = require('net');

const options = {
    ip : 'localhost',
    port: 8888
};

var clientId = -1;

var clientSocket = net.createConnection(options, function() {
    console.log('connected to server!');
});

clientSocket.once('data', function(id) {
    clientId = id;
});

clientSocket.on('data', function(data) {
    console.log("[client " + clientId + " received]:" + data +"\n");
});

clientSocket.on('end', () => {
    console.log('disconnected from server');
    interval.unref();
});


var interval = setInterval(function() {
    clientSocket.write(clientId + "\n")
}, 500);


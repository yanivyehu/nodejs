const net = require('net');

var connections = [];

var tcpServer = net.createServer((serverSocket) => {
    serverSocket.on('data', (data) => {
        connections.forEach(connection => {
            if (connection !== serverSocket) {
                connection.write(data);
            }
        });
    });
});

tcpServer.on('connection', (serverSocket) => {
    console.log('tcpServer: connection received!');
    connections.push(serverSocket);

    tcpServer.getConnections( function(err, count) {
        if (err) {
            console.log('failed tp get number of connections');
        } else {
            serverSocket.write(count +"");
        }
    });
});

tcpServer.on('error', (err) => {
    console.log(err);
});


tcpServer.listen(8888);


//let the server run for 20 seconds
setTimeout(function() {
    connections.forEach(connection => {
        connection.end();

        tcpServer.close();
    });
}, 20000)







const http = require("http");
const WebSocketServer = require('websocket').server;
let connection = null;

const httpServer = http.createServer((request, response) => {
    console.log("Server created!");
});

const websocket = new WebSocketServer({
    "httpServer": httpServer
});

websocket.on('request', (request) => {
    connection = request.accept(null, request.origin);
    console.log("Connection established!");
    connection.on('open', () =>console.log("Opened"));

    connection.on('close', () =>console.log("Closed"));
    connection.on('message', (message)=>{
        console.log(`message from client : ${message.utf8Data}`)
    });
})

httpServer.listen(8080, ()=>console.log("Server listnening!"));
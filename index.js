const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

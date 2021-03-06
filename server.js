const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
let players = [];

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    players.push(socket.id);

    io.emit('playerIDJoined', players.length);


    socket.on('dealCards', function () {
        io.emit('dealCards');
    });

    socket.on('cardPlayed', function (gameObject, playerJoinID) {
        io.emit('cardPlayed', gameObject, playerJoinID);
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});
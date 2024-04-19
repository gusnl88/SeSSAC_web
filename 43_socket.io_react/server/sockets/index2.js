const socketIO = require('socket.io');
function socketHandler(server) {
    const io = socketIO(server, {
        cors: {
            origin: 'http://localhost:3000',
        },
    });
    io.on('connection', (socket) => {
        socket.on('test', (message) => {
            console.log(message);
            socket.emit('test2', '잘 받았읍니다.');
        });
        socket.on('hello', (message) => {
            console.log(message);
            socket.emit('hello2', '네, 안녕하세요');
        });
        socket.on('study', (message) => {
            console.log(message);
            socket.emit('study2', '공부 중입니다.');
        });
        socket.on('bye', (message) => {
            console.log(message);
            socket.emit('bye2', '안녕히가세요...');
        });
        socket.on('disconnect', () => {
            // 클라이언트 연결 해제
        });
    });
}

module.exports = socketHandler;

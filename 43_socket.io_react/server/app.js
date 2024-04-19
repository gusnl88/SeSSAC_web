const express = require('express');
const http = require('http');
const cors = require('cors'); // cors: 다른 서버에서 보내는 요청 제한

const PORT = 8080;
const app = express();
const server = http.createServer(app);

const socketHandler = require('./sockets');
socketHandler(server);
// socketHandler(server) 로 sockets/index.js의 코드 호출
/* /sockets/index.js
const socketIO = require('socket.io');
function socketHandler(server) {
    const io = socketIO(server, {
        cors: {
            origin: 'http://localhost:3000',
        },
    });
    io.on('connection', (socket) => {
        socket.on('disconnect', () => {
            // 클라이언트 연결 해제
        });
    });
}

module.exports = socketHandler; */

app.use(cors());

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

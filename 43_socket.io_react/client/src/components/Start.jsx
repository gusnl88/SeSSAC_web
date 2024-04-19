import { useEffect } from 'react';
import io from 'socket.io-client';
import Prac1 from './Prac1';

const socket = io.connect('http://localhost:8080', {
    autoConnect: false,
});

export default function Start() {
    const initSocketConnect = () => {
        console.log(socket.connected);
        if (!socket.connected) socket.connect();
        console.log('connected?', socket.connected);
    };

    useEffect(() => {
        initSocketConnect();

        socket.emit('test', '테스트입니다.');
        socket.on('test2', (message) => {
            console.log(message);
        });
    }, []);
    return (
        <>
            <p>소켓 연결 테스트</p>
            {/*
            방법 2. components 안의 components 사용 시
            컴포넌트 안에 컴포넌트를 사용하는 경우 props로 socket을 보내주면됨
            socket과 initialSocketConnect 선언을 최상위에서 했기 때문에 자식 components는 선언할 필요 없음.
            */}
            <Prac1 socket={socket} />
        </>
    );
}

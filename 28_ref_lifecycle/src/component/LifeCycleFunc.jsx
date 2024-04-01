import { useState, useEffect } from 'react';

function MyComponent({ number }) {
    const [text, setText] = useState('');
    // useEffect(effect, deps)
    /* 
        effect: callback Function
            - 콜백 함수 내의 특정 시점에서 실행시킬 코드 작성
        deps: 해당 배열 값이 변하는 경우 cb 함수 실행
            - 생략 할 경우 -> mount,update 시 항상 동작
            - [] -> mount시에만 실행
            - [data] - mount 시 , data가 변경됐을 시 실행(update 시)
    */
    // mount 동작
    useEffect(() => {
        console.log('함수형 컴포넌트 마운트됨.');
    });
    // unmount 동작
    useEffect(() => {
        return () => {
            console.log('함수형 컴포넌트 unmount');
        };
    });
    // mount와 unmount를 함수 하나에 같이 작성해도 됨
    useEffect(() => {
        console.log('함수형 컴포넌트 마운트됨.');

        return () => {
            console.log('함수형 컴포넌트 unmount');
        };
    });
    useEffect(() => {
        console.log('함수형 컴포넌트 | update 될 때 마다');
    });
    useEffect(() => {
        console.log('함수형 컴포넌트 | number 변경될 때마다 실행');
    },[number]);

    return (
        <>
            <p>MyComponent {number}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
        </>
    );
}
export default function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumState = () => {
        setNumber(number + 1);
    };
    const changeVisibleState = () => {
        setVisible(!visible);
    };
    return (
        <>
            <button onClick={changeNumState}>number+1</button>
            <button onClick={changeVisibleState}>on/off</button>
            {visible && <MyComponent number={number} />}
        </>
    );
}
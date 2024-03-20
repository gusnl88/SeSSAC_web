import { useState } from "react";

const Counter=()=>{
    const [number,setNumber]=useState(0);
    const increase=()=>{
        setNumber(number+1);
    }
    const alertMsg=(envet,msg)=>{
        console.log(envet.target)
        alert(`${msg}~,현재 숫자는 ${number}입니다.`)
    }
    
    const consoleMsg=(msg)=>{
        alert(`${msg}~,현재 숫자는 ${number}입니다.`)
    }
    const handleEvent=(e)=>{
        console.log(e.target)
        console.log(e.currentTarget)
    }
        return(
        <div>
            <h2>{number}</h2>
            <button onClick={increase}>숫자증가+1</button>
            <button onClick={(e)=>alertMsg(e,'안녕하시오')}>alert 출력</button>
            <button onClick={()=>consoleMsg('콘솔이요')}>콘솔 출력</button>
            <button onClick={(e)=>handleEvent(e)}>
                <span>target 확인</span>
            </button>
        </div>
    )
}

export default Counter;
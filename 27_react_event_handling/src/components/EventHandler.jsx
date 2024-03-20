import { useState } from "react"

export default function EventHandler(){
    let title="검은색"
    const [color,setColor]=useState("black");
    const redBtn=()=>{
        setColor("red")
        title="빨간색"
    }
    const blueBtn=()=>{
        setColor("blue")
        title="파란색"

    }
    return(
        <div>
            <h1 style={{color}}>{title}글씨</h1>
            <button onClick={redBtn}>빨간색</button>
            <button onClick={blueBtn}>파란색</button>
        </div>
    )
}
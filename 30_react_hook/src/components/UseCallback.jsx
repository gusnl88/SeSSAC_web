import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"

export default function UseCallback(){
    const[number,setNumber]=useState(0);
    const[isTrue,setIsTrue]=useState(true);

    const func1=()=>{
        console.log(`number: ${number} 😁`)
    }

    const func2=useCallback(()=>{
        console.log(`number: ${number} 😡`)
    },[])
    
    useEffect(()=>{
        console.log('함수1 변경 😁')
    },[func1])
    useEffect(()=>{
        console.log('함수2 변경 😡')
    },[func2])

    return(
        <>
        <input type="number" />
        <br />
        <button onClick={()=>{func1() ;func2();}}>call funtion</button>
        <button>{isTrue.toString()}</button>
        </>
    )
}
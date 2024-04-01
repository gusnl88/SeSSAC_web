import { useState } from "react";
import { useRef } from "react"

export function RefFunction1(){
    const myInput=useRef();

    function focusBtn(){
        myInput.current.focus()
    }
    function disabledBtn(){
        myInput.current.disabled=true;
    }
    function disabledOpen(){
        if(myInput.current.disabled===true){
            myInput.current.disabled=false;
        }
    }
    return(
        <>
        <p>버튼 클릭시 인풋에 포커스 처리(useRef)</p>
        <input type="text" ref={myInput}/>
        <button onClick={focusBtn}>focus</button>
        <button onClick={disabledBtn}>disabled</button>
        <button onClick={disabledOpen}>disabled-open</button>
        </>
    )
}
export function RefFunction2(){
    const refVal=useRef(1);
    const [stateVal,setStateVal]=useState(1);
    let variable= 1;

    const plusRef=()=>{
        refVal.current+= 1;
        console.log(refVal.current)
    }
    const plusState=()=>{
        setStateVal(stateVal+1)
    }
    const plusVariable=()=>{

        variable+=1;
        console.log(variable)
    }
    return(
        <>
        <h3>ref:{refVal.current}</h3>

        <h3>state:{stateVal}</h3>

        <h3>variable :{variable}</h3>

        <button onClick={plusRef}>ref+1</button>
        <button onClick={plusState}>state+1</button>
        <button onClick={plusVariable}>variable+1</button>
        </>
    )
}
import React from "react";

export class RefClass extends React.Component{
   handleFocus=()=>{
        this.myInput.focus();
    }
    render(){
        return(
            <>
            <p>버튼클릭시 input 창에 포커스 처리(콜백사용)</p>
            <input ref={(ref)=>{
                this.myInput=ref;
            }} type="text" />
            <button onClick={this.handleFocus}>클릭</button>
            </>
        )
    }
}

export class Refclass2 extends React.Component{
    myInput=React.createRef();

    handleFocus=()=>{
        this.myInput.current.focus()
    }
    render(){

        return(
            <>
            <p>버튼 클릭시 input에 focus 처리 (createRef()사용)</p>
            <input type="text" ref={this.myInput} />
            <button onClick={this.handleFocus}>클릭</button>
            </>
        )
    }
}
// import { Component } from "react";

import { useState } from "react"

// class  HandlerEx extends Component{
//     state={
//         text:'Hello, World!!!'
//     }
//     textChange=()=>{
//         this.setState({text:"GoodBye World!"})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.text}</h1>
//                 <button onClick={this.textChange}>클릭</button>
//             </div>
//             ) 
            
//     }
// }

// export {HandlerEx}

export default function HandlerEx(){
    const [text,setText]=useState('Hello, World!!!')
    const textChange=()=>{
        setText("GoodBye World!")
    }
    return(
        <div>
                 <h1>{text}</h1>
                 <button onClick={textChange}>클릭</button>
             </div>
    )
}
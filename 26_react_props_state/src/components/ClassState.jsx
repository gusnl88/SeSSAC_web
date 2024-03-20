const { Component, useState } = require("react");

class ClassState extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         apple:'사과'
    //     }
    // }
    state={
        apple:"사과"
    }
    render(){
        const {apple}=this.state;
        return(
            <div style={{color:'yellow',backgroundColor:"#000",fontSize:"700"}}>
                <div>{apple}</div>
                <button onClick={()=>{this.setState({apple:"apple"})}}>영어로 변경!</button>
            </div>
        )
    }
}

export{ClassState};
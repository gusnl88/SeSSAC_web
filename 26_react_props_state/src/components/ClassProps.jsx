import { Component } from "react";

class ClassProps extends Component {
    render(){
        console.log(this.props);
        const divStyle={
            color:this.props.color,
        };
        return(
            <div style={divStyle}>
                <h4>hi, my name is{this.props.name}</h4>
                <ul>
                    <li>별명:{this.props.nickname}</li>
                    <li>좋아하는 색:{this.props.color}</li>
                </ul>
            </div>
        )
    }
        
}
//구조 분해 할당 
class ClassProps2 extends Component{
    render(){
        const {name,color,nickname}=this.props
        const divStyle={
            color:color,
            backgroundColor:this.props.bgColor,
        }
        return(
            <div style={divStyle}>
                <h4>hi, my name is{name}</h4>
                <ul>
                    <li>별명:{nickname}</li>
                    <li>좋아하는 색:{color}</li>
                </ul>
            </div>
        )
    }
    
}
export {ClassProps,ClassProps2};
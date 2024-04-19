interface Props1{
    name:string
}
export function Props1({name}:Props1){
    return (
        <h2>hello {name}</h2>
    )
}
interface Props2{
    width:string,
    height:string,
    color:string
    // [key:string]:string;  // 여러개의 값이 들어올때  어떤값이 들어올지 모를때 사용
}
export function Props2(props:Props2){
    const dicStyle={
        width:props.width,
        height:props.height,
        background:props.color
    }
    return(
        <div style={dicStyle}> </div>
    )
}
interface Props3{
    width:number,
    height:number,
    color?:string,
    text:string
}
export function Props3(props:Props3){
    const {width,height,color,text}=props
    const divStyle:object={
        width:`${width}px`,
        height:`${height}px`,
        backgroundColor:color ? color :"gray",
        textAlign:"center",
        lineHeight:`${height}px`
    }
    return <div style={divStyle}>{text}</div>
}
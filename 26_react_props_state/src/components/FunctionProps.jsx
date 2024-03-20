export function FunctionProps({name,number,price}){
    // const{name,number,price}=props;//객체구조분해 할당ㅈ
    return(
        <div>
            <h5>{name}</h5>
            <p>{number}개에 {price}원</p><hr />
        </div>
    )
}

export function FunctionProps2(props){
    const {name,number,price}=props
    return(
        <div>
            <h5>{name}</h5>
            <p>{number}개에 {price}원</p>
            <div>{props.children}</div>
            <hr />
        </div>
    )
}
// 컴포넌트이름.defualtProps={정의할 데이터를 객체로 포함}
FunctionProps2.defaultProps={
    number:3,
    name:"샤인머스켓"
}
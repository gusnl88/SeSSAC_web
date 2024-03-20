function SyntheticEvent(){
    function SyntheticEvent(e){
        console.log(e)
    }
    function printInputValue(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <button onClick={SyntheticEvent}>클릭 이벤트 콘솔에 찍기</button>
            <br />
            <input type="text" placeholder="입력" onChange={printInputValue} />
        </div>
    )
}

export default SyntheticEvent;
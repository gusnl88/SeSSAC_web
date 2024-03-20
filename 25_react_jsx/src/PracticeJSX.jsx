export default function PracticeJSX(){
    const name='몽실이';
    const animal='강아지'
    const a=6;
    const b=5;
    return(
        <div>
            <div>제 반려 동물의 이름은 {name}입니다.{name}는{animal}입니다.</div>
            <br />
            <div>{3+5==8?'정답입니다':'오답입니다'}</div>
            <div>{a>b&&'a가 b보다 큽니다.'}</div>

            <div className="login">
                <h3>Hello World</h3>
                <div className="inputBox">
                아이디:<input type="text" name="" id="" /><br />
                비밀번호:<input type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}
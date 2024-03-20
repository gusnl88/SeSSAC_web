export default function UseJSX() {
  const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "gray",
    textAlign: "center",
    color: "green",
    marginTop: "0.5rem",
    display: "inline-line",
  };
  // return(
  //     <div>
  //         <div style={divStyle}>first</div>
  //         <div style={divStyle}>second</div>
  //         <div style={divStyle}>third</div>
  //         <div style={divStyle}>fourth</div>
  //     </div>
  // )
  const isShow = true;
  function myFunction() {
    alert("안녕, 내일름은 진형이야");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunction()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true 일때 보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>
        {isShow && "true 일 때 보임?"}
      </div>
      <div style={{ backgroundColor: "skyblue" }}>
        {isShow === false ? "isShow 가 false 이군요!" : "true 이군요"}
      </div>
      <div style={{ backgroundColor: "purple" }}>
        {!isShow && "false 일 때 보임"}
      </div>
      <div onClick={() => addNum(8, 5)}>
        8더하기 5의 결과를 alert로 확인해봐요
      </div>
        <br />
        <br />
        
        <hr />
      <div className="div">

      </div>
    </div>
  );
}

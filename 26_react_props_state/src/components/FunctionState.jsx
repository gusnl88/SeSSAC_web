import { useState } from "react";

export function FunctionState() {
  //   let banana = "바나나";
  //   // const [banana,setBanana]=useState("바나나");
  //   function changeEnglish() {
  //     const fruit = document.querySelector(".fruitName");
  //     fruit.textContent ==="바나나" ? banana="banana":banana="바나나"

  //       fruit.textContent = banana;
  //   }

  const [banana, setBanana] = useState("바나나");
  const [isEnglish,setIsEnglish]=useState(true)

  function changeEnglish() {
    setIsEnglish(!isEnglish)
  }
  return (
    <div>
      <div style={{ background: "red", color: "#fff" }} className="fruitName">
        {isEnglish?'banana':'바나나'}
      </div>
      <button onClick={changeEnglish}>{isEnglish?'한글로 변경':'영어로 변경'}</button>
    </div>
  );
}

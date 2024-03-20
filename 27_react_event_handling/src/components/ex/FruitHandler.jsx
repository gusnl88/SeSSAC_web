import apple from "../img/apple.jpg";
import bananas from "../img/bananas.jpg";
import grapes from "../img/grapes.jpg";
import peaches from "../img/peaches.jpg";

import { useState } from "react";

export default function FruitHandler() {
  const [text, setText] = useState("text");
  const [bacColor, setBacColor] = useState("black");
  const [color, setcolor] = useState("white");
  const [image, setImeage] = useState("apple");
  const fruit = {
    apple: apple,
    bananas: bananas,
    grapes: grapes,
    peaches: peaches,
  };
  function changText(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  function bgColor(e) {
    console.log(e.target.value);
    setBacColor(e.target.value);
  }
  function fontColor(e) {
    console.log(e.target.value);
    setcolor(e.target.value);
  }
  function imgBtn(e) {
    console.log(e.target.value);
    setImeage(e.target.value);
  }
  return (
    <>
      과일 :s
      <select
        onChange={(e) => {
          imgBtn(e);
        }}
      >
        <option value="apple">사과</option>
        <option value="bananas">바나나</option>
        <option value="peaches">복숭아</option>
        <option value="grapes">포도</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          bgColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          fontColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <div style={{display: "flex",
    flexDirection: "column",
    width: "300px"}}>
        내용:
        <input type="text" name="" id="" onChange={changText} />
        <img src={fruit[image]} alt="과일 이미지" />
        <h1 style={{ background: bacColor, color: color }}>{text}</h1>
      </div>
    </>
  );
}

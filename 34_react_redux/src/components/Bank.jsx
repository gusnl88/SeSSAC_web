import { useDispatch, useSelector } from "react-redux";
import { BankIn, BankOut } from "../store/module/BankReducer";
import { useState } from "react";
import { useRef } from "react";

export function Bank() {
  const money = useSelector((state) => state.money);
  console.log(money);
  const dispath = useDispatch();

  const inpuRef = useRef();
  
  const inClick = () => {
      const inputValue = inpuRef.current.value;
    dispath(BankIn(inputValue));
  };

  const outClick = () => {
    const inputValue = inpuRef.current.value;
    dispath(BankOut(inputValue));
  };
  return (
    <div>
      <h1> 코딩온 은행</h1>
      <h4>잔액: {money}원</h4>
      <input type="number" ref={inpuRef} />
      <button onClick={inClick}>입금</button>
      <button onClick={outClick}>출금</button>
    </div>
  );
}

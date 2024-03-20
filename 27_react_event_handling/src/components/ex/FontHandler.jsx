import { useState } from "react";

export default function FontHandler() {
  const [title, setTitle] = useState("안녕하세요");
  const [titleBtn, setTitleBtn] = useState(true);
  const titleHandler = () => {
    if (titleBtn) {
      setTitle("");
      setTitleBtn(false);
    } else {
      setTitleBtn(true);
      setTitle("안녕하세요");
    }
  };
  return (
    <div>
      <button onClick={titleHandler}>{titleBtn ? "사라져라" : "보여라"}</button>
      <h1>{title}</h1>
    </div>
  );
}

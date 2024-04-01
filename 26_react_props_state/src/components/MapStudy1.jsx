import { useState } from "react";

export default function MapStudy1() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addBtn = () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
        setName("")
        setEmail("")
      return;
    }
    const newItem = { name: name, email: email };
    const newList = list.concat(newItem);
    setList(newList);
    setName("");
    setEmail("");
  };
  const addEnter = (e) => {
    if (e.key === "Enter") {
      addBtn();
    }
  };
  const doubkeClick = (id) => {
    const selectItem = list.filter((item, index) => index !== id);
    setList(selectItem);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
        value={name}
        onKeyDown={(e) => addEnter(e)}
      />
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        onKeyDown={(e) => addEnter(e)}
      />
      <button onClick={addBtn}>등록</button>
      {list?.map((el, index) => {
        return (
          <h3 key={index} onDoubleClick={doubkeClick(index)}>
            {el.name}:{el.email}
          </h3>
        );
      })}
    </div>
  );
}

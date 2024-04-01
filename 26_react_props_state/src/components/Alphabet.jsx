import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alph: "a" },
    { id: 2, alph: "b" },
    { id: 3, alph: "c" },
    { id: 4, alph: "d" },
    { id: 5, alph: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpa = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alph: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha(" ");
  };
  const activeEnter=(e)=>{
    if(e.key==="Enter"){
        addAlpa()
    }
  }
  const deleteAlpha=(id)=>{
    const newAlpha= list.filter((alpha)=>alpha.id !== id)
    console.log(newAlpha)
    setList(newAlpha);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputAlpha(e.target.value)}
        value={inputAlpha}
        onKeyDown={(e)=>activeEnter(e)}
      />
      <button onClick={addAlpa}>add alphbet</button>
      <ol>
        {list?.map((alph) => {
          return <li key={alph.id}
          onDoubleClick={()=>deleteAlpha(alph.id)}>{alph.alph}</li>;
        })}
      </ol>
    </div>
  );
}

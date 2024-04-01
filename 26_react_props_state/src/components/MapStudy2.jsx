import { useRef } from "react";
import { useState } from "react";

export default function MapStudy2() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [result, setResult] = useState([]);
  const inputName=useRef();
  const addBtn = () => {
    if (name.trim().length === 0 || title.trim().length === 0) {
      alert("값을 모두 입력하세요 ");
      setTitle("");
      setName("");
      inputName.current.focus(); // 포커스 설정
      return;
    }
    const newList = {
      name: name,
      title: title,
    };
    console.log(newList);
    setList([...list, newList]);
    setTitle("");
    setName("");

  };
  const searchBtn = () => {
    let newList;
    if (searchType === "name") {
      newList = list.filter((item) => item.name === search);
    } else {
      newList = list.filter((item) => item.title === search);
    }
    setResult(newList);
    setSearch("");
  };
  const addEnter = (e) => {
    if (e.key === "Enter") {
      addBtn();
      setName("");
      setTitle("");
    }
  };
  const searchEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      searchBtn();
      setSearch("");
    }
  };
  return (
    <div style={{ width: "800px" }}>
      <fieldset style={{ width: "60%" }}>
        작성자:{" "}
        <input
          ref={inputName}
          type="text"
          onKeyDown={(e) => addEnter(e)}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        제목:{" "}
        <input
          type="text"
          onKeyDown={(e) => addEnter(e)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={addBtn}>작성</button>
      </fieldset>
      <div style={{ margin: "30px", justifyContent: "left" }}>
        <select name="" id="" onChange={(e) => setSearchType(e.target.value)}>
          <option value="name">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="검색어"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => searchEnter(e)}
        />
        <button onClick={searchBtn}>검색</button>
      </div>
      <p>전체목록</p>
      <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </thead>
        {list?.map((item, index) => {
          return (
            <tbody key={index} style={{ width: "100%" }}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.name}</td>
            </tbody>
          );
        })}
      </table>
      {result.length === 0 ? (
        ""
      ) : (
        <>
            <h1>검색결과</h1>
            <table border={1} style={{ borderCollapse: "collapse", width: "100%" ,marginTop:"20px"}}>
            <thead>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </thead>
            <tbody>
                {result.map((item, index) => {
                return (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.name}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </>
      )}
    </div>
  );
}

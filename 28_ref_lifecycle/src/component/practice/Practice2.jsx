import axios from "axios";
import { useEffect, useState } from "react";

export default function Practice2() {
  const [list, setList] = useState([]);
  useEffect(async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setList(res.data.slice(0,10));
  },[]);

    
  return (
    <>
      {list?.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.body}</li>
          </ul>
        );
      })}
    </>
  );
}

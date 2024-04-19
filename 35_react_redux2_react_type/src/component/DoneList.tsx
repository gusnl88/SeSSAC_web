import { useSelector } from "react-redux";
import { RootState } from "../types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DoneList() {
    const list = useSelector((state:RootState) => state.todo.list);
  
    const doneList = list.filter((item) => item.done === true);
    console.log(doneList);
    return (
      <section className="DoneList">
        <h2>완료한 일</h2>
        {doneList.length===0?(<p>다한게 없어요</p>):(
          <ul>
          {doneList.map((item, index) => ( // 각 아이템에 고유한 key 추가
            <li key={index}>
              <span className="doneTask">{item.text}</span><span><FontAwesomeIcon icon={faTrash} /></span> {/* 완료된 작업 목록 아이템에 대한 스타일 */}
            </li>
          ))}
        </ul>
        )}
        
      </section>
    );
}

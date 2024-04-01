import { useSelector } from "react-redux";

export default function DoneList() {
    const list = useSelector((state) => state.todo.list);
  
    const todoList = list.filter((item) => item.done === true);
    console.log(todoList);
    return (
      <section className="DoneList">
        <h2>완료한 일</h2>
        <ul>
          {todoList.map((item, index) => ( // 각 아이템에 고유한 key 추가
            <li key={index}>
              <span className="doneTask">{item.text}</span> {/* 완료된 작업 목록 아이템에 대한 스타일 */}
            </li>
          ))}
        </ul>
      </section>
    );
}

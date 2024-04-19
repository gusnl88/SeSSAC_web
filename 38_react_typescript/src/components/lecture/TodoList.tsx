import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export default function TodoList() {
  // todolist 전체를 담을 state
  const [todos, setTodos] = useState<Todo[]>([]);
  // 새로운 todo를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");
  const addTodo = () => {
    if (newTodo.trim() != "") {
      const updated = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updated);
      setTodos(updated);
      setNewTodo("");
      focusInput();
    }
  };
  const handleKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter") addTodo();
  }
const ref=useRef(null);
  const toggleComplete=(id:number)=>{
    const updatedtodo= todos.map((item)=>
      (id===item.id?{...item,done:!item.done}:item));

    setTodos(updatedtodo);
    
  }
  const inputRef=useRef<HTMLInputElement>(null);
  const focusInput=()=>{
    if(inputRef.current){
        inputRef.current.focus();
    }
  }
  return (
    <div>
      <h4>Todo list</h4>
      <input
        ref={inputRef}
        type="text"
        placeholder="Todo...."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>add</button>
      <button onClick={focusInput}>focus</button>

      <ul ref={ref}>
        todo
        {todos?.map((item) => {
          return item.done?null:<TodoItem todo={item} toggle={toggleComplete} key={item.id}/>;
        })}
      </ul>
      <ul>
        done
        {todos?.map((item)=>{
            return item.done?<TodoItem todo={item} toggle={toggleComplete} key={item.id}/>:null
        })}
      </ul>
    </div>
  );
}

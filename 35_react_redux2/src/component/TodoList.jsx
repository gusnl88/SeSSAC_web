import { useEffect, useRef } from "react"
import{useDispatch, useSelector} from "react-redux"
import { create, done } from "../store/module/todo"

export default function TodoList(){
    const list= useSelector((state)=>state.todo.list)
    const nextId=useSelector((state)=>state.todo.nextId)
    console.log(list)
    const todoList=list.filter((item)=>!item.done)
    console.log(todoList)
    const dispatch=useDispatch()
    const todoRef=useRef()
    const createTodo=()=>{
        const text=todoRef.current.value
        dispatch({type:"todo/CREATE",payload:{id:nextId,text:text}})
        todoRef.current.value=""
    }
    return(
        <section className="TodoList">
            <h2>오늘의 할 일</h2>
            <div>
                <input type="text" placeholder="Todo" ref={todoRef} />
                <button onClick={createTodo}>할 일 추가</button>
            </div>
            <ul>
                {todoList?.map((item)=>{
                    return <li key={item.id}><span>{item.text}</span><button onClick={()=>dispatch(done(item.id))}>완료</button></li>
                })}
            </ul>
        </section>
        
        ) 
}
import { useEffect, useRef } from "react"
import{useDispatch, useSelector} from "react-redux"
import { create, done } from "../store/module/todo"
import styled from "styled-components";
import { RootState } from "../types/interface";
import axios from "axios";

export default function TodoList (){
    useEffect( ()=>{
    },[])
    const todoLists= async()=>{
        const list=await axios.get("")
    }
    const list= useSelector((state :RootState)=>state.todo.list)
    const nextId=useSelector((state:RootState)=>state.todo.nextId)
    console.log(list)
    const todoList=list.filter((item)=>!item.done)
    console.log(todoList)
    const dispatch=useDispatch()
    const todoRef=useRef<HTMLInputElement>(null);
      const createTodo = () => {
        if (nextId && todoRef.current) {
            const text = todoRef.current.value;
            dispatch(create({ id: nextId, text: text }));
            todoRef.current.value = "";
        }
    };
    const UlStyle=styled.ul`
        
    `
    return(
        <section className="TodoList">
            <h2>오늘의 할 일</h2>
            <div>
                <input type="text" placeholder="Todo" ref={todoRef} />
                <button onClick={createTodo}>할 일 추가</button>
            </div>
            <ul className="">
                {todoList?.map((item)=>{
                    return <li key={item.id}><span style={{
                        
                      }}>{item.text}</span><button onClick={()=>dispatch(done(item.id))}>완료</button></li>
                })}
            </ul>
        </section>
        
        ) 
}
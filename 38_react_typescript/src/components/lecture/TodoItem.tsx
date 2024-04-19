interface Todo{
    id:number,
    text:string,
    done:boolean;
}
interface Props{
    todo:Todo;
    toggle:(id:number)=> void;
}
export default function TodoItem({todo,toggle}:Props){
    return(<>
            {todo.done?<li style={{textDecoration:"line-through"}}>{todo.text}</li>:<li >
                <input type="checkbox" onChange={()=>toggle(todo.id)}/>
                    {todo.text}
                </li>}
    </>
        
    )
}
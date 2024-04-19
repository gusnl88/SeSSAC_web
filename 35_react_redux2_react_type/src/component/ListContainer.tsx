import DoneList from "./DoneList";
import TodoList from "./TodoList";

export default function ListContainer(){
    return(
        <div className="">
            <div className="ListContainer">

            <TodoList/>
            <DoneList/>
            </div>
        </div>
    )
}
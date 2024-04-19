import { TodoState } from "../../types/interface";

// interface State {
//     list: { id: number; text: string; done: boolean }[];
//     nextId: number;
//   }
  
  const initialState: TodoState = {
    list: [
      {
        id: 0,
        text: '리액트 공부하기',
        done: false,
      },
      {
        id: 1,
        text: '자바 공부하기',
        done: false,
      },
      
    ],
    nextId: 3, // 초기 nextId 설정
  };
  

const CREATE='todo/CREATE' as const;
const DONE='todo/DONE' as const;

const count=initialState.list.length;
initialState["nextId"]=count;


export const create = (payload: { id: number; text: string }) => ({
    type: CREATE,
    payload,
  });export const done=(id:number)=>({type:DONE,id,})//id=number 값으로


interface Create{
  type:typeof CREATE,
  payload:{id:number,text:string}
}
interface Done{
  type:typeof DONE,
  id:number
}
type Action=Create|Done
export function todoReducer(state=initialState,action:Action){
    switch(action.type){
        case CREATE:
            if (action.payload.text.trim() === "") return state;
            return {
              ...state,
              list: state.list.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false,
              }),
              nextId: action.payload.id + 1, // 다음 아이디 설정
            };
        case DONE:
            return {
                ...state,
                list:state.list.map((li)=>{
                    if(li.id===action.id){
                        return{
                            ...li,
                            done:true,
                        }
                    }else{
                        return li;
                    }
                })
            }
        default:return state;
    }    
}
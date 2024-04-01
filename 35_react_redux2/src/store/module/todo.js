const initialState={
    list:[
        {
            id:0,
            text:'리액트 공부하기',
            done:false
        },
        {
            id:1,
            text:'자바 공부하기',
            done:false
        },
        {
            id:2,
            text:'술먹기',
            done:true
        },
    ],
}

const CREATE='todo/CREATE';
const DONE='todo/DONE';

const count=initialState.list.length;
initialState["nextId"]=count;


export const create=(payload)=>({type:CREATE,payload,})//객체형태로 id,text
export const done=(id)=>({type:DONE,id,})//id=number 값으로

export function todoReducer(state=initialState,action){
    switch(action.type){
        case CREATE:
            if(action.payload.text.trim()==="") return state;
            return {
                ...state,
                list:state.list.concat({
                    id:action.payload.id,
                    text: action.payload.text,
                    done:false,
                }),
                nextId:action.payload.id +1,
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
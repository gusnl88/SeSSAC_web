const initialState=false;
const CHANGE='isData/CHANGE'

export const change=()=>{
    return {type:CHANGE}
}
export const isDataReducer=(state=initialState,action)=>{
    if(action.type==='isData/CHANGE'){
        return !state;
    }
    return state;
}
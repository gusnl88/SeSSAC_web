const initialState=0;
const IN='bank/IN'
const OUT='bank/OUT'

export const BankIn=(money)=>{
    return {type:IN ,payload:money}
};
export const BankOut=(money)=>{
    return {type:OUT,payload:money}
};
export const BankReducer=(state=initialState,action)=>{
    console.log('진입')
    if(action.type==="bank/IN"){
        return state + parseInt(action.payload);;
    }else if(action.type==="bank/OUT"){
        return state - parseInt(action.payload);;
    }else{
        return state;
    }

}
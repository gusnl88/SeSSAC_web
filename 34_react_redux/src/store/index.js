import { combineReducers } from "redux";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { BankReducer } from "./module/BankReducer";


// 여러가지의 리듀서를 하나로 합처쥬는 combineReducers
const rootReducer=combineReducers({
  isData:isDataReducer,
  counter:counterReducer,
  money:BankReducer,
});

export default rootReducer;
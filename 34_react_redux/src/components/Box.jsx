//APP.js >> Box1 >> Box2

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { change } from "../store/module/isDataReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h3>Box1</h3>
      <Box2 />
    </div>
  );
}
function Box2() {
  //전체 state를 가져오는건 비추천 사용할 것 만 가져오기
  // const state=useSelector((state)=>state)
  // console.log(state)
  const dispatch = useDispatch();
  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);
  return (
    <div style={{ border: "1.5px solid skyblue", padding: "10px" }}>
      <h3>Box2</h3>
      <p>counter:{counter}</p>
      <p>isData:{isData.toString()}</p>
      <button onClick={() => dispatch( countPlus() )}>
        count +1
      </button>
      <button onClick={() => dispatch(countMinus() )}>
        count -1
      </button>
      <button onClick={() => dispatch(change())}>
        to {(!isData).toString()}
      </button>
    </div>
  );
}

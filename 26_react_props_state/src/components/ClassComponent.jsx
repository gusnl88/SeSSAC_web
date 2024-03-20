// import React, { Component} from "react";

import { useState } from "react";

// class ClassComponent extends Component {
//   state = {
//     num: 0,
//   };
//   numPlus = () => {
//     this.setState({ num: this.state.num + 2 });
//   };

//   numMinus = () => {
//     this.setState({ num: this.state.num - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.num > 7 ? this.state.num + "😈" : this.state.num + "😊"}</p>
//         <button onClick={this.numPlus}>+2</button>
//         <button onClick={this.numMinus}>-1</button>
//       </div>
//     );
//   }
// }

// export { ClassComponent };

export default function ClassComponent() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div>{number > 7 ? number + "👿" : number + "😊"}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

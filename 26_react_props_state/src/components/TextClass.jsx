import React, { Component } from "react";

class TextClass extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <button onClick={() => validConsole(valid)}>확인</button>
      </div>
    );
  }
}
function validConsole(valid) {
  console.log(valid);
}
TextClass.defaultProps = {
  text: "이건 기본 text props입니다.",
};

export { TextClass };

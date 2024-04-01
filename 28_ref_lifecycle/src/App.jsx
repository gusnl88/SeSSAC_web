// import LifeCycleFunc from "./component/LifeCycleFunc";
// import { RefClass, Refclass2 } from "./component/RefClass";
// import { RefFunction1, RefFunction2 } from "./component/RefFunction";

import Container from "./component/practice/Container";
import Practice1 from "./component/practice/Practice1";
import Practice2 from "./component/practice/Practice2";

function App() {
  return (
    <>
      <h1>하이</h1>
      {/* <RefClass/>
    <Refclass2></Refclass2>
    <RefFunction1/>
    <RefFunction2/> */}
      {/* <LifeCycleFunc/> */}
      {/* <Practice1/> */}
      <Container>
        <Practice2 />
      </Container>
    </>
  );
}

export default App;

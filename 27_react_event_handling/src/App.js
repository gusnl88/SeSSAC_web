import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import EventHandler from "./components/EventHandler";
import FontHandler from "./components/ex/FontHandler";
import FruitHandler from "./components/ex/FruitHandler";
import  HandlerEx  from "./components/ex/HandlerEx";


function App() {
  return (
    <div>
      <h1>합성이벤트</h1>
      <SyntheticEvent/>
      <Counter/>
      <HandlerEx></HandlerEx>
      <EventHandler></EventHandler>
      <FontHandler/>
      <FruitHandler/>
    </div>
  );
}

export default App;

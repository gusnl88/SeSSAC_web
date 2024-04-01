import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./context/ThermeContext";
import AgeProvider from "./provider/AgeProvider";
import NameProvider from "./provider/NameProvider";


function App() {
  return (
    <div className="App">
      <h1>상태관리1 contect API</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box/>
      </ThemeContext.Provider>

      {/* state 저장해 보기 */}
      <AgeProvider>
        <NameProvider>
          <Profile/>
        </NameProvider>
      </AgeProvider>
    </div>
  );
}

export default App;

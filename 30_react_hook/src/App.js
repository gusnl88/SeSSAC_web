import CustomHook from "./components/CustomHook";
import Preactice1 from "./components/Preactice1";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseForm from "./components/UseForm";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle('React Hook')
  return (
    <>
    <h1>react hook</h1>
    {/* <UseMemo/> */}
    {/* <UseMemoObj></UseMemoObj> */}
    {/* <UseCallback/> */}
    {/* <UseCallback2></UseCallback2> */}
    {/* <UseReducer/> */}
    {/* <CustomHook/> */}
    {/* <UseForm/> */}
    <Preactice1/>
    </>
  );
}

export default App;

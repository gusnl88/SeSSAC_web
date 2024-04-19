import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import Matzip from "./pages/Matzip";
import MatzipDetail from "./pages/MatzipDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/lecture" element={<Lecture/>}></Route>
        <Route path="/practice" element={<Practice/>}></Route>
        <Route path="/practice/matzip" element={<Matzip/>}></Route>
        <Route path="/practice/matzip/:title" element={<MatzipDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

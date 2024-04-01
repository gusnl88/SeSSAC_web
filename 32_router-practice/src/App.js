import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <div className="Main">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/student/:paramId" element={<EventPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

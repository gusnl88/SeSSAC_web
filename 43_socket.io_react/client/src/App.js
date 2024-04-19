import Chatting1 from './components/Chatting1';
import Chatting2 from './components/Chatting2';
import Chatting3 from './components/Chatting3';
import Prac1 from './components/Prac1';
import Start from './components/Start';
import './styles/chat.css'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
    return (
        <div className="App">
            {/* <Start /> */}
            {/* 방법 1. component 내에 직접 socket과 initialSocketConnect 선언. */}
            {/* <Prac1 /> */}
            {/* <Chatting1/> */}
            {/* <Chatting2/> */}
            <Chatting3/>
        </div>
    );
}

export default App;

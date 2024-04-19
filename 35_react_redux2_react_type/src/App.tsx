import styled from "styled-components";
import ListContainer from "./component/ListContainer";
import './styles/style.scss'
const Main=styled.main`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh; 

`
function App() {
  return (
    <Main>
      <ListContainer></ListContainer>
    </Main>
  );
}

export default App;

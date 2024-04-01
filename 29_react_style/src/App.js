import './App.css';
import BasicCss from './component/BasicCss';
import ModuleCss from './component/ModuleCss';
import Sass from './component/Sass';
import StyledComp from './component/StyledComp';
import Practice1 from './component/Practice1';
import Practice2 from './component/Practice2';

function App() {
  return (
    <div >
      <h1>react에 style 적용하기</h1>
      {/* <BasicCss/>
      <ModuleCss/>
      <StyledComp/> */}
      {/* <Sass/> */}
      {/* <Practice1/> */}
      <Practice2/>

    </div>
  );
}

export default App;


// import styled, { keyframes } from 'styled-components';
// import logo from './logo.svg';
// const RootDiv = styled.div`
//     text-align: center;
// `;
// const AppHeader = styled.header`
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
// `;
// const AppLogoSpin = keyframes`
//     from {
//         transform: rotate(0deg);
//     } to {
//         transform: rotate(360deg);
//     }
// `;
// const AppLogo = styled.img`
//     height: 40vmin;
//     pointer-events: none;
//     @media (prefers-reduced-motion: no-preference) {
//         animation: ${AppLogoSpin} infinite 20s linear;
//     }
// `;
// const MyA = styled.a`
//     color: #61dafb;
// `;
// function App() {
//     return (
//         <RootDiv>
//             <AppHeader>
//                 <AppLogo src={logo} alt="app" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <MyA href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </MyA>
//             </AppHeader>
//         </RootDiv>
//     );
// }
// export default App;
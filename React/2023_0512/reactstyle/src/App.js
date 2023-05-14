import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Ex from "./Components/Ex";
import Hello from "./Components/Hello";


const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;
const ContentH2 = styled.h2`
  font-size: 40px;
  color: ${(props) => props.className === 'hello'? 'red' : 'gray'};
`

function App() {
    return (
        <>
            <GlobalStyle />
            <h1>hello world 1</h1>
            <ContentH2 className='hello'>헬로</ContentH2>
            <Hello/>
            <span>hello world 2</span>
            <Ex />
            
        </>
    );
}

export default App;

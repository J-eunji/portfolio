import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./components/Home";
import "./font.css";
import Wrap from "./components/Wrap";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Wrap>
        <Header />
        <Home />
      </Wrap>
    </RecoilRoot>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}

:root {
  p, span {
  font-family: 'content';
  }
  h4 {
  font-family: 'contentBold';
  }
  header, h1, h2, h3, h5, h6 {
  font-family: 'titleEn';
  font-weight: lighter;
  }
}

body {
  overflow-x: hidden;
}
`;

export default App;

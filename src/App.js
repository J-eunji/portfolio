import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./components/Home";
import scdream from "./assets/fonts/SCDream1.ttf";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Home />
    </RecoilRoot>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SCDream1";
  src: url(${scdream});
}

* {
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}

html {
  font-family: "SCDream1";
}
`;

export default App;

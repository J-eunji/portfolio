<<<<<<< HEAD
import styled from "styled-components";
import MainContainer from "./MainContainer";
import CloneContainer from "./CloneContainer";

export default function MainSection() {
  return (
    <Section>
      <MainContainer />
      <CloneContainer />
=======
import { useState } from "react";
import styled from "styled-components";
import MainContainer from "./MainContainer";

export default function MainSection() {
  const [maskX, setMaskX] = useState(0);
  const [maskY, setMaskY] = useState(0);
  const handleMask = (e) => {
    setMaskX(e.clientX);
    setMaskY(e.clientY);
  };

  return (
    <Section onMouseMove={(e) => handleMask(e)}>
      <MainContainer />
      <MainContainer isClone={true} maskX={maskX} maskY={maskY} />
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
    </Section>
  );
}

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
<<<<<<< HEAD
=======
  overflow: hidden;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
`;

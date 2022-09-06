import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Ability from "./Ability";
import { aboutIndex } from "../atoms";
import { useRecoilValue } from "recoil";

export default function About() {
  const index = useRecoilValue(aboutIndex);
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleX = index === 1 && scroll >= window.innerHeight / 3;

  return (
    <Container index={index}>
      <AboutMe />
      <Ability scaleX={scaleX} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vw;
  height: 100vh;
  overflow: hidden;
  ${({ index }) => css`
    transform: translate(${index * -100}vw);
    transition-duration: 0.8s;
  `}
`;

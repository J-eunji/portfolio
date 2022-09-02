<<<<<<< HEAD
import { BsChevronDoubleDown } from "react-icons/bs";
import styled from "styled-components";
import mainImgMono from "../../assets/imgs/mainImgMono.png";

export default function MainContainer() {
  return (
    <Container>
      <MainBox>
        <h2>FRONT-END PORTFOLIO</h2>
        <Name>JUNG EUNJI</Name>
      </MainBox>
      <ScrollBtn>
=======
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import styled, { css } from "styled-components";
import mainImgMono from "../../assets/imgs/mainImgMono.png";
import mainImg from "../../assets/imgs/mainImg.png";

export default function MainContainer({ maskX, maskY, isClone }) {
  const [maskSize, setMaskSize] = useState(10);
  const bigMouseOver = () => {
    setMaskSize(20);
  };
  const defaultMouseOver = () => {
    setMaskSize(10);
  };
  const wheelPage = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

  return (
    <Container
      isClone={isClone}
      maskX={maskX}
      maskY={maskY}
      maskSize={maskSize}
    >
      <MainBox isClone={isClone}>
        <ContentBox
          onMouseOver={() => bigMouseOver()}
          onMouseLeave={() => defaultMouseOver()}
        >
          <h2>FRONT-END PORTFOLIO</h2>
          <Name>JUNG EUNJI</Name>
        </ContentBox>
      </MainBox>
      <ScrollBtn onClick={() => wheelPage()} isClone={isClone}>
        <p>SCROLL</p>
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
        <BsChevronDoubleDown />
      </ScrollBtn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
<<<<<<< HEAD
  background-image: url(${mainImgMono});
  background-repeat: no-repeat;
  background-size: cover;
=======
  transition: clip-path 0.1s;
  background-image: url(${mainImgMono});
  background-repeat: no-repeat;
  background-size: cover;
  ${({ isClone, maskX, maskY, maskSize }) =>
    isClone &&
    css`
      background-image: url(${mainImg});
      clip-path: circle(${maskSize}% at ${maskX}px ${maskY}px);
    `}
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  color: #ddd;
  margin-top: 130px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
<<<<<<< HEAD
=======

  ${({ isClone }) =>
    isClone &&
    css`
      color: #fff;
    `}
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 500px;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  h2 {
    font-size: 2.7em;
  }
`;

const Name = styled.h1`
  font-size: 3.5em;
  margin-top: 20px;
`;

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  font-size: 2.5em;
  width: 50px;
  height: 50px;
  margin-top: 100px;
  cursor: pointer;
=======
  font-size: 1.5em;
  width: 200px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
  ${({ isClone }) =>
    isClone &&
    css`
      color: #fff;
    `}
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
`;

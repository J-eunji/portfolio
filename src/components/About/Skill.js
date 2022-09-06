import styled, { css, keyframes } from "styled-components";

export default function Skill({ skill, scaleX }) {
  const { name, degree } = skill;
  return (
    <Container>
      <Name>{name}</Name>
      <Bar>
        <Percentage degree={degree} scaleX={scaleX} />
      </Bar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 30px 60px;
`;

const Name = styled.span`
  width: 100px;
  font-size: 1.2em;
`;

const scaling = keyframes`
  from {
    transform: scaleX(0) ;
  }
`;

const Bar = styled.div`
  border: #000 2px solid;
  width: 400px;
  height: 14px;
  border-radius: 9px;
  position: relative;
`;

const Percentage = styled.div`
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  ${({ degree }) => css`
    width: ${degree * 4}px;
  `}
  ${({ scaleX }) =>
    scaleX &&
    css`
      animation: ${scaling} 1.5s;
      animation-fill-mode: forwards;
      transform: scaleX(1);
      transform-origin: 0 100%;
    `}
`;

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { maskState } from "./atoms/mask";

export default function Wrap({ children }) {
  const [mask, setMask] = useRecoilState(maskState);
  const handleMask = (e) => {
    setMask({ x: e.clientX, y: e.clientY });
  };
  const { x, y } = mask;

  return (
    <Container onMouseMove={(e) => handleMask(e)} x={x} y={y}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

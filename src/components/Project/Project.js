import styled from "styled-components";
import { bg_color } from "../../assets/color";
import ProjectItem from "./ProjectItem";

export default function Project() {
<<<<<<< HEAD
  const Item = [
    { id: 1, link: "", text: "" },
    { id: 2, link: "", text: "" },
    { id: 3, link: "", text: "" },
  ];
  return (
    <Container>
      <Box>
        {Item.map((item) => (
          <ProjectItem key={item.key} item={item} />
        ))}
      </Box>
    </Container>
  );
=======
  return <Container></Container>;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
}

const Container = styled.div`
  display: flex;
<<<<<<< HEAD
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${bg_color};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 1400px;
  height: 600px;
  padding: 0 30px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
=======
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffdfe4;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
`;

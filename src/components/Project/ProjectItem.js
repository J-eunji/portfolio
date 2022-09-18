import styled, { css } from "styled-components";

export default function ProjectItem({ item }) {
  const { link, text, img, title, use, git } = item;
  console.log(img);
  return (
    <Container>
      <ImgBox img={img}>
        <a href={link} target="_blank">
          <img src={require(`../../assets/imgs/${img}`)} alt={img} />
        </a>
      </ImgBox>
      <Title>{title}</Title>
      <Text>
        <p>{text}</p>
        <p>code: {git}</p>
        <p>{use}</p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 450px;
  height: 570px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #000;
  }
`;

const ImgBox = styled.div`
  width: 400px;
  height: 220px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 400px;
    height: 200px;
    border-radius: 8px;
  }
`;

const Title = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.div`
  width: 400px;
  height: 280px;
  word-spacing: 2.5px;
  line-height: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

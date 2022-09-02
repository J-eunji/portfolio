import styled from "styled-components";

export default function ContactItem({ contact }) {
  const { icon, text, link } = contact;
  return (
    <Container>
      <span>{icon}</span>
<<<<<<< HEAD
      <a href={link} target="_blank">
        {text}
      </a>
=======
      <a href={link}>{text}</a>
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
<<<<<<< HEAD
  font-family: "contact";
  span {
    font-size: 30px;
    margin-right: 10px;
=======
  span {
    :nth-child(1) {
      font-size: 30px;
      margin-right: 10px;
    }
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  }
  a {
    color: black;
  }
`;

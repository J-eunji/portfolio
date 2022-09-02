import styled from "styled-components";
import { AiFillGithub, AiFillTool, AiFillMail } from "react-icons/ai";
import ContactItem from "./ContactItem";
<<<<<<< HEAD
import { bg_color } from "../../assets/color";
=======
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5

export default function Contact() {
  const contactList = [
    { id: 1, icon: <AiFillMail />, text: "sun220711@gmail.com" },
    {
      id: 2,
      icon: <AiFillGithub />,
      link: "https://github.com/J-eunji",
      text: "https://github.com/J-eunji",
    },
    {
      id: 3,
      icon: <AiFillTool />,
      link: "https://devrecordabc.tistory.com/",
      text: "https://devrecordabc.tistory.com/",
    },
  ];
  return (
    <Container>
      <Box>
        <Thx>img</Thx>
        <ContactBox>
<<<<<<< HEAD
          <h6>Contact</h6>
=======
          <p>Contact</p>
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
          {contactList.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ContactBox>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
<<<<<<< HEAD
  background-color: ${bg_color};
=======
  background-color: #d1ffd1;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 500px;
  position: relative;
`;

const Thx = styled.div`
  width: 480px;
  height: 500px;
  background-color: rgb(0, 0, 0, 0.2);
`;

const ContactBox = styled.div`
  width: 480px;
  height: 500px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
<<<<<<< HEAD
  h6 {
    font-size: 1.4em;
    padding: 7px 0;
=======
  p {
    font-size: 1.5em;
    margin-bottom: 20px;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  }
`;

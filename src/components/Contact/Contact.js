import styled from "styled-components";
import { AiFillGithub, AiFillTool, AiFillMail } from "react-icons/ai";
import ContactItem from "./ContactItem";
import { bg_color } from "../../assets/color";
import profile from "../../assets/imgs/profile.png";

export default function Contact() {
  const contactList = [
    { id: 1, icon: <AiFillMail />, text: "sun220711@gmail.com" },
    {
      id: 2,
      icon: <AiFillGithub />,
      link: "https://github.com/J-eunji",
      text: <b>"https://github.com/J-eunji"</b>,
    },
    {
      id: 3,
      icon: <AiFillTool />,
      link: "https://velog.io/@sun220711",
      text: <b>"https://velog.io/@sun220711"</b>,
    },
  ];
  return (
    <Container>
      <Box>
        <Img />
        <ContactBox>
          <h6>Contact</h6>
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
  background-color: ${bg_color};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 500px;
  position: relative;
`;

const Img = styled.div`
  width: 180px;
  height: 210px;
  border-radius: 8px;
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  margin-left: 230px;
`;

const ContactBox = styled.div`
  width: 480px;
  height: 500px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-size: 1.4em;
    padding: 7px 0;
  }
`;

import styled, { css } from "styled-components";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import aboutImg from "../../assets/imgs/about.png";
<<<<<<< HEAD
import { bg_color } from "../../assets/color";
=======
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
import Skill from "./Skill";
import Strength from "./Strength";

export default function About() {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const skillList = [
    { id: 1, name: "HTML", degree: 95 },
    { id: 2, name: "CSS", degree: 95 },
    { id: 3, name: "JS", degree: 91 },
    { id: 4, name: "React", degree: 90 },
    { id: 5, name: "Python", degree: 60 },
  ];
  const strengthList = [
    { id: 1, name: "소통", icon: <FaPeopleArrows /> },
    { id: 2, name: "수용", icon: <BsChatDots /> },
    { id: 3, name: "배움", icon: <IoBookOutline /> },
  ];
<<<<<<< HEAD

=======
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  const handleSection = (id) => {
    setAboutIndex(id);
  };

<<<<<<< HEAD
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

=======
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  const scaleX = aboutIndex === 1 && scroll >= window.innerHeight;

  return (
    <Container aboutIndex={aboutIndex}>
      <IntroduceSection>
        <ImgBox>
          <Title>
<<<<<<< HEAD
            <h3>About Me</h3>
          </Title>
          <Img />
          <Name>
            <h4>효율성을 추구하는 개발자</h4>
=======
            <p>About Me</p>
          </Title>
          <Img />
          <Name>
            <p>효율성을 추구하는 개발자</p>
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
          </Name>
        </ImgBox>
        <IntroduceText>
          <p>
<<<<<<< HEAD
            안녕하세요. 프론트엔드 웹 개발 지원자 정은지입니다.
            <br /> 제 적성에 맞는 길을 찾아 신중히 한 선택 후회없도록 열심히
            하겠습니다. <br /> 5년 간 사회복지사로서 쌓은 소통, 협력, 수용
            능력과
            <br />
            저의 장점인 끈기, 노력을 보여드리겠습니다.
=======
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sit quasi, obcaecati eos animi alias molestiae
            dolores illo? Id, obcaecati eius? Rerum mollitia corporis nam, illum
            nobis velit vitae deleniti suscipit aliquam, eaque ipsum? Ad
            delectus esse, laborum molestiae dolorem dolor perspiciatis eius
            expedita excepturi nihil voluptatum, corporis maiores minus.
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
          </p>
        </IntroduceText>
        <BsChevronDoubleRight
          className="Btn"
          onClick={() => handleSection(1)}
          size={40}
        />
      </IntroduceSection>
      <AbilitySection>
        <BsChevronDoubleLeft
          className="Btn"
          onClick={() => handleSection(0)}
          size={40}
        />
        <Box>
          <SkillBox>
            <h6>Skill</h6>
            {skillList.map((skill) => (
              <Skill key={skill.id} skill={skill} scaleX={scaleX} />
            ))}
          </SkillBox>
          <StrengthBox>
            <h6>Strength</h6>
            <StrengthList>
              {strengthList.map((strength) => (
                <Strength key={strength.id} strength={strength} />
              ))}
            </StrengthList>
          </StrengthBox>
        </Box>
      </AbilitySection>
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
  ${({ aboutIndex }) => css`
    transform: translate(${aboutIndex * -100}vw);
    transition-duration: 0.8s;
  `}
`;

const IntroduceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  width: 100vw;
  height: 100vh;
  position: relative;
<<<<<<< HEAD
  background-color: ${bg_color};
=======
  background-color: peachpuff;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  .Btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 50px;
  }
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  height: 500px;
  margin-left: 300px;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: -40px;
  left: -140px;
  font-size: 4em;
  font-weight: 700;
`;

const Img = styled.div`
  width: 400px;
  height: 500px;
  background-image: url(${aboutImg});
  background-size: cover;
`;

const Name = styled.div`
  position: absolute;
  top: 100px;
  left: 300px;
  width: 800px;
  font-size: 2em;
  font-weight: 700;
`;

const IntroduceText = styled.div`
  width: 600px;
  margin: 400px 0 0 0px;
  font-size: 1.2em;
  line-height: 30px;
`;

const AbilitySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
<<<<<<< HEAD
  background-color: ${bg_color};
=======
  background-color: lightblue;
>>>>>>> e3f8d6e60bdd5cbed9486ba20d8ec4234ad1bed5
  position: relative;
  .Btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  height: 670px;
  padding: 50px 0;
  margin-bottom: 100px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h6 {
    font-size: 1.7em;
    font-weight: 700;
  }
  p {
    font-size: 1.2em;
  }
`;

const StrengthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.7em;
  font-weight: 700;
  flex: 1;
`;

const StrengthList = styled.div`
  display: flex;
  padding: 20px 0;
`;

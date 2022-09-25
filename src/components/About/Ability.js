import styled from "styled-components";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { MdChairAlt } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { bg_color } from "../../assets/color";
import Skill from "./Skill";
import { aboutIndex } from "../atoms";
import { useSetRecoilState } from "recoil";
import Strength from "./Strength";

export default function Ability({ scaleX }) {
  const eduList = [
    { id: 1, date: "2021.11 ~ 2022.04", name: "Python & AI" },
    { id: 1, date: "2022.07 ~ 2022.08", name: "Front-End" },
  ];
  const skillList = [
    { id: 1, name: "HTML", degree: 80 },
    { id: 2, name: "CSS", degree: 80 },
    { id: 3, name: "JS", degree: 85 },
    { id: 4, name: "React", degree: 85 },
    { id: 5, name: "Python", degree: 60 },
  ];
  const strengthList = [
    { id: 1, name: "배움", icon: <IoBookOutline /> },
    { id: 2, name: "협업", icon: <FaPeopleArrows /> },
    { id: 3, name: "끈기", icon: <MdChairAlt /> },
  ];
  const setAboutIndex = useSetRecoilState(aboutIndex);
  const handleSection = (id) => {
    setAboutIndex(id);
  };
  return (
    <Container>
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
        <Right>
          <EducationBox>
            <h6>Education</h6>
            {eduList.map((edu) => {
              return (
                <div>
                  <p>{edu.date}</p>
                  <p>{edu.name}</p>
                </div>
              );
            })}
          </EducationBox>
          <StrengthBox>
            <h6>Strength</h6>
            <StrengthList>
              {strengthList.map((strength) => (
                <Strength key={strength.id} strength={strength} />
              ))}
            </StrengthList>
          </StrengthBox>
        </Right>
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
  position: relative;
  .Btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50px;
    &:hover {
      transform: translateX(-10px);
      transition: 0.1s;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 330px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 330px;
  h6 {
    font-size: 1.7em;
    font-weight: 700;
    height: 30px;
    margin-left: 100px;
  }
  p {
    font-size: 1.2em;
  }
`;

const Right = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EducationBox = styled.div`
  height: 165px;
  padding: 0 40px;
  h6 {
    font-size: 1.7em;
    font-weight: 700;
    text-align: center;
    height: 30px;
    margin-bottom: 20px;
  }
  div {
    p {
      display: inline;
      font-size: 1.7em;
      &:nth-child(1) {
        font-size: 1.52em;
        line-height: 35px;
        margin-right: 30px;
      }
    }
  }
`;

const StrengthBox = styled.div`
  height: 165px;
  font-size: 1.7em;
  font-weight: 700;
  flex: 1;
  h6 {
    text-align: center;
    margin-bottom: 20px;
    height: 30px;
  }
`;

const StrengthList = styled.div`
  display: flex;
`;

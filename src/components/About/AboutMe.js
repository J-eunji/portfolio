import styled from "styled-components";
import { BsChevronDoubleRight } from "react-icons/bs";
import aboutImg from "../../assets/imgs/about.png";
import { bg_color } from "../../assets/color";
import { aboutIndex } from "../atoms";
import { useSetRecoilState } from "recoil";

export default function AboutMe() {
  const setAboutIndex = useSetRecoilState(aboutIndex);
  const handleSection = (id) => {
    setAboutIndex(id);
  };
  return (
    <Container>
      <Box>
        <ImgBox>
          <Img />
        </ImgBox>
        <TextBox>
          <TitleBox>
            <Title>About Me</Title>
            <Name>효율성을 추구하는 개발자</Name>
          </TitleBox>
          <Introduce>
            안녕하세요. <b>프론트엔드 웹 개발 지원자 정은지</b>입니다.
            <br />
            <b>5년, 10년 뒤의 저의 모습</b>을 떠올리며 열심히 하겠습니다.
            <br />
            반복되는 실패에도 <b>끊임없이 시도</b>하며 성장하겠습니다.
            <br />
            5년 간의 사회복지사 경력으로 쌓은 <b>최소한의 협업능력</b>과
            <br />
            저의 장점인 <b>끈기</b>와 <b>노력</b>을 보여드리겠습니다.
            <br />
          </Introduce>
        </TextBox>
      </Box>
      <BsChevronDoubleRight
        className="Btn"
        onClick={() => handleSection(1)}
        size={40}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${bg_color};
  .Btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 50px;
    &:hover {
      transform: translateX(10px);
      transition: 0.1s;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 350px;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 350px;
`;

const Img = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 15px;
  background-image: url(${aboutImg});
  background-size: cover;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 350px;
  font-size: 1.2em;
  padding: 7px;
`;

const TitleBox = styled.div``;

const Title = styled.h3`
  font-size: 1.5em;
`;

const Name = styled.h4`
  margin: 10px 0;
  font-size: 1.5em;
`;

const Introduce = styled.p`
  font-size: 1em;
  line-height: 30px;
  b {
    font-weight: 700;
  }
`;

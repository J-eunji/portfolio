import styled from "styled-components";
import { bg_color } from "../../assets/color";
import ProjectItem from "./ProjectItem";

export default function Project() {
  const Item = [
    {
      id: 1,
      img: "tmdb.png",
      link: "https://j-eunji.github.io/tmdb/",
      title: "영화 검색 사이트",
      text: (
        <>
          <p>
            <a href="https://www.themoviedb.org/?language=ko">TMDB</a>의 무료
            API를 이용하여 미디어(영화, TV, 인물)검색 사이트를 구현했습니다.
          </p>
          <p>
            React의 특성을 이용하여 같은 디자인의 컴포넌트들로 구성하여 깔끔하고
            가독성있게 작업했습니다.
          </p>
          <p>
            메인, 영화, TV, 인물 페이지 및 상세 페이지를 구성하여 편리하게
            미디어 정보를 볼 수 있습니다.
          </p>
        </>
      ),
      git: (
        <a href="https://github.com/J-eunji/tmdb.git">
          https://github.com/J-eunji/tmdb.git
        </a>
      ),
      use: "React, Recoil, CSS, JS",
    },
    {
      id: 2,
      img: "todolist.png",
      link: "https://j-eunji.github.io/todolist/",
      title: "투두리스트",
      text: (
        <>
          <p>
            react-calendar 라이브러리로 깔끔하고 이용하기 편리한 저만의
            투두리스트를 만들어 보았습니다.
          </p>
          <p>
            할 일을 작성하면 달력에 마크가 표시됩니다. 헤더에 남은 할 일의
            갯수가 입력되고 할 일을 모두 완료하면 달력의 마크 색이 변합니다.
            데이터를 로컬스토리지에 저장하여 새로고침해도 데이터를 유지할 수
            있습니다.
          </p>
        </>
      ),
      git: (
        <a href="https://github.com/J-eunji/todolist.git">
          https://github.com/J-eunji/todolist.git
        </a>
      ),
      use: "React, Recoil, CSS, JS",
    },
    {
      id: 3,
      img: "python.png",
      link: "https://gravel-tulip-09d.notion.site/Python-501108a9bb644618b25d7f2dbd63b826",
      title: "파이썬 미니 프로젝트 모음",
      text: (
        <>
          <p>
            python을 배울 때 만들었던 여러가지 미니 프로젝트들을 모아놓은 노션
            페이지 입니다.
          </p>
          <p>
            자판기, 타이핑 게임, 정보관리와 AI 딥러닝을 이용하여 동영상의 물체를
            인식하는 프로그램 등이 있습니다. 처음 코딩을 접하고 만든 HTML
            페이지로 제가 얼마나 발전했는지 알 수 있었습니다.
          </p>
        </>
      ),
      git: "노션 페이지 참조",
      use: "Python",
    },
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
}

const Container = styled.div`
  display: flex;
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
  width: 1500px;
  height: 600px;
  padding: 0 30px;
  position: relative;
`;

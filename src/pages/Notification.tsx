import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NoticeCard from "../components/NoticeCard";

// 임시데이터
const data = [
  {
    title: "🎾 테니스 같이 치실 분",
    content: "참여가 수락되었습니다.",
    time: "5분 전",
  },
  {
    title: "🏸 배드민턴 칠 사람 구해요",
    content: "모임에서 추방되었습니다.",
    time: "10분 전",
  },
];
function Notification() {
  const navigate = useNavigate();
  return (
    <NotificationStyle>
      <TopContainer>
        <IoIosArrowBack
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <h1 style={{ fontSize: "1.2rem" }}>알림</h1>
      </TopContainer>
      <hr />
      {data.map((item, index) => (
        <NoticeCard
          key={index}
          title={item.title}
          content={item.content}
          time={item.time}
        />
      ))}
    </NotificationStyle>
  );
}
const NotificationStyle = styled.div`
  height: 100vh;
`;
const TopContainer = styled.div`
  display: flex;
  height: 3rem;
  width: 20%;
  align-items: center;
  justify-content: space-around;
`;
export default Notification;

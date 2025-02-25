import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { TopContainer } from "./Notification";
import ChatCard from "../components/ChatCard";

// 임시데이터
const data = [
  {
    title: "🎾 테니스 같이 치실 분",
    member:7,
    message: "안녕하세요",
    time: "오후 14:24",
    isHost: true
  },
  {
    title: "🏸 배드민턴 칠 사람 구해요",
    member:5,
    message: "아 오늘 진짜 힘들다",
    time: "오후 13:00",
    isHost: false
  },
];

function ChatList() {
  const navigate = useNavigate();
  return (
    <ChatListStyle>
      <TopContainer>
        <IoIosArrowBack
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <h1 style={{ fontSize: "1.2rem" }}>채팅</h1>
      </TopContainer>
      <hr />
      {data.map((item, index) => (
        <ChatCard
          key={index}
          title={item.title}
          message={item.message}
          member ={item.member}
          time={item.time}
          isHost={item.isHost}
        />
      ))}
    </ChatListStyle>
  );
}
const ChatListStyle = styled.div``;
export default ChatList;

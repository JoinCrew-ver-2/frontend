import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCirclePlus } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import OtherMessage from "../components/chat/OtherMessage";
import MyMessage from "../components/chat/MyMessage";

type Message = {
  id: number;
  sender_id: string;
  nickname: string;
  content: string;
  time: string;
};

function Chat() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const { title, member } = location.state;

  // 임시 데이터
  const myId = "abc123";
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender_id: "abc123",
      nickname: "마이구미",
      content: "안녕하세요",
      time: "오전 11:00",
    },
    {
      id: 2,
      sender_id: "abc123",
      nickname: "마이구미",
      content: "반가워요 !",
      time: "오전 11:00",
    },
    {
      id: 3,
      sender_id: "def456",
      nickname: "아이셔",
      content: "반갑습니다",
      time: "오전 11:05",
    },
    {
      id: 4,
      sender_id: "def456",
      nickname: "아이셔",
      content: "하위",
      time: "오전 11:05",
    },
    {
      id: 5,
      sender_id: "def456",
      nickname: "아이셔",
      content: "안녕",
      time: "오전 11:06",
    },
    {
      id: 6,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      time: "오전 11:05",
    },
    {
      id: 7,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      time: "오전 11:05",
    },
    {
      id: 8,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      time: "오전 11:05",
    },
    {
      id: 9,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      time: "오전 11:05",
    },
    {
      id: 10,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      time: "오전 11:05",
    },
  ]);

  // 메시지 전송 함수
  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender_id: myId,
      nickname: "마이구미",
      content: message,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  // Enter 키로 메시지 전송
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ChatStyle>
      <HeaderStyle>
        <div className="title">
          <IoIosArrowBack
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => navigate("/chatlist")}
          />
          <p className="name">{title}</p>
          <p className="count">{member}</p>
        </div>
        <RxHamburgerMenu style={{ color: "#5D5D5D", fontSize: "1.5rem" }} />
      </HeaderStyle>
      <hr />
      <ChatContent>
        {messages.map((msg, index) => {
          if (myId != msg.sender_id) {
            // 이전 메시지와 비교하여 같은 사람이 같은 시간에 보낸 메시지인지 확인
            const showProfile =
              index === 0 ||
              messages[index - 1].sender_id !== msg.sender_id ||
              messages[index - 1].time !== msg.time;

            // 다음 메시지와 비교하여 시간을 표시할지 결정
            const showTime =
              index === messages.length - 1 ||
              messages[index + 1].sender_id !== msg.sender_id ||
              messages[index + 1].time !== msg.time;

            return (
              <OtherMessage
                key={msg.id}
                nickname={msg.nickname}
                content={msg.content}
                time={msg.time}
                showProfile={showProfile}
                showTime={showTime}
              />
            );
          } else {
            const showTime =
              index === messages.length - 1 ||
              messages[index + 1].sender_id !== msg.sender_id ||
              messages[index + 1].time !== msg.time;
            return (
              <MyMessage
                key={msg.id}
                content={msg.content}
                time={msg.time}
                showTime={showTime}
              />
            );
          }
        })}
      </ChatContent>
      <BottomStyle>
        <FaCirclePlus style={{ color: "white" }} />
        <TextareaAutosize
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          maxRows={8}
        />
        <LuSend onClick={sendMessage} />
      </BottomStyle>
    </ChatStyle>
  );
}
const ChatStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d2e2ee;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const HeaderStyle = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;

  .title {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .count {
      color: #5d5d5d;
      font-size: 1.2rem;
    }
  }
`;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 3.5rem;
`;

const BottomStyle = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  display: flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  gap: 0.5rem;
  bottom: 0;
  background-color: #d2e2ee;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  svg {
    width: fit-content;
    cursor: pointer;
    font-size: 1.5rem;
  }

  textarea {
    width: 80%;
    min-height: 2.5rem;
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    resize: none;
    overflow: hidden;
    line-height: 1.2;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }
`;
export default Chat;

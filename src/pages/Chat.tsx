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
import DateSeparator from "../components/chat/DateSeparator";
import { formatDateString, getDateOnly, getNotSeconds } from "../Utils/DateUtils";
import { getTimeOnly } from './../Utils/DateUtils';

type Message = {
  id: number;
  sender_id: string;
  nickname: string;
  content: string;
  created_at: string;
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
      created_at: "2025-02-19 14:30:00",
    },
    {
      id: 2,
      sender_id: "abc123",
      nickname: "마이구미",
      content: "반가워요 !",
      created_at: "2025-02-19 14:30:00",
    },
    {
      id: 3,
      sender_id: "def456",
      nickname: "아이셔",
      content: "반갑습니다",
      created_at: "2025-02-19 14:30:01",
    },
    {
      id: 4,
      sender_id: "def456",
      nickname: "아이셔",
      content: "하위",
      created_at: "2025-02-19 14:30:02",
    },
    {
      id: 5,
      sender_id: "def456",
      nickname: "아이셔",
      content: "하위",
      created_at: "2025-02-19 14:31:02",
    },
    {
      id: 6,
      sender_id: "def456",
      nickname: "아이셔",
      content: "안녕",
      created_at: "2025-02-20 14:30:00",
    },
    {
      id: 7,
      sender_id: "f456",
      nickname: "왕꿈틀이",
      content: "하이",
      created_at: "2025-02-20 14:30:00",
    },
  ]);

  const sendMessage = () => {
    if (message.trim() === "") return;
  
    // 현재 날짜와 시간을 YYYY-MM-DD HH:MM:SS 형식으로 생성
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    const newMessage: Message = {
      id: messages.length + 1,
      sender_id: myId,
      nickname: "마이구미",
      content: message,
      created_at: formattedDateTime,
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
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => navigate("/chatlist")}
          />
          <p className="name">{title}</p>
          <p className="count">{member}</p>
        </div>
        <RxHamburgerMenu
          style={{ color: "#5D5D5D", fontSize: "1.5rem", cursor: "pointer" }}
        />
      </HeaderStyle>
      <hr />
      <ChatContent>
        {messages.map((msg, index) => {
          // 날짜 구분선 표시
          const currentDate = getDateOnly(msg.created_at);
          const showDateSeparator =
            index === 0 ||
            currentDate !== getDateOnly(messages[index - 1].created_at);

          // 다음 메시지와 비교하여 시간을 표시할지 결정
          const showTime =
            index === messages.length - 1 ||
            messages[index + 1].sender_id !== msg.sender_id ||
            getNotSeconds(messages[index + 1].created_at) !== getNotSeconds(msg.created_at);

          if (myId != msg.sender_id) {
            // 이전 메시지와 비교하여 같은 사람이 같은 시간에 보낸 메시지인지 확인
            const showProfile =
              showDateSeparator ||
              index === 0 ||
              messages[index - 1].sender_id !== msg.sender_id ||
              getNotSeconds(messages[index - 1].created_at) !== getNotSeconds(msg.created_at);

            return (
              <>
                {showDateSeparator && (
                  <DateSeparator
                    key={`date-${index}`}
                    date={formatDateString(msg.created_at)}
                  />
                )}
                <OtherMessage
                  key={msg.id}
                  nickname={msg.nickname}
                  content={msg.content}
                  time={getTimeOnly(msg.created_at)}
                  showProfile={showProfile}
                  showTime={showTime}
                />
              </>
            );
          } else {
            return (
              <>
                {showDateSeparator && (
                  <DateSeparator
                    key={`date-${index}`}
                    date={formatDateString(msg.created_at)}
                  />
                )}
                <MyMessage
                  key={msg.id}
                  content={msg.content}
                  time={getTimeOnly(msg.created_at)}
                  showTime={showTime}
                />
              </>
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

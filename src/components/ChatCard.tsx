import styled from "styled-components";
import { FaCrown } from "react-icons/fa6";

interface ChatCardProps {
  title: string;
  message: string;
  member: number;
  time: string;
  isHost: boolean;
}
function ChatCard({ title, message, member, time, isHost}: ChatCardProps) {
  return (
    <ChatCardStyle>
      <Chat>
        <div className="info">
          <p className="title">{title}</p>
          <p className="member">{member}</p>
          {isHost && <FaCrown style={{color:"#FFE400"}}/>}
        </div>
        <p className="time">{time}</p>
      </Chat>
      <p className="message">{message}</p>
    </ChatCardStyle>
  );
}
const ChatCardStyle = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
  
  .message {
    width: 100%;
    color: #5D5D5D;
    font-size: 0.9rem;
  }
`;

const Chat = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  font-size: 1.1rem;

  .info {
    display: flex;
    width: 75%;
    gap: 2rem;
    align-items: center;

    .title {
      font-weight: bold;
    }
  }

   .time {
    color: #8c8c8c;
    width: 25%;
    font-size: 0.8rem;
    text-align: center;
  }
  
  .member {
    color: #8c8c8c;
  }
`;
export default ChatCard;

import styled from "styled-components";
import Members from "../components/chat/Members";
import { MdLogout } from "react-icons/md";

export interface MemberProps {
  id: string;
  profile?: string;
  nickname: string;
  isHost: boolean;
}
interface ChatMemberListProps {
  onClose: () => void;
  members: MemberProps[];
}

function ChatMemberList({ onClose, members }: ChatMemberListProps) {
  return (
    <ChatMemberListStyle>
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <div className="header">
          <h2>대화 상대</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="member-list">
          {members.map((member) => (
            <div key={member.id} className="member-item">
              <Members
                id={member.id}
                profile={member.profile}
                nickname={member.nickname}
                isHost={member.isHost}
              />
            </div>
          ))}
        </div>
        <div className="bottom">
          <MdLogout />
        </div>
      </div>
    </ChatMemberListStyle>
  );
}

const ChatMemberListStyle = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  display: flex;
  z-index: 100;

  .overlay {
    width: 20%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .content {
    width: 80%;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;

    .bottom {
      width: 100%;
      height: 4rem;
      border-top: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        cursor: pointer;
        padding: 1rem;
        font-size: 2rem;
        color: #5D5D5D;

        &:hover {
          color: #111;
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    h2 {
      margin: 0;
      font-size: 1.2rem;
    }

    button {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 101;
    }
  }

  .member-list {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
  }

  .member-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f5f5f5;
  }
`;
export default ChatMemberList;

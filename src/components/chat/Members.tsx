import styled from "styled-components";
import { MemberProps } from "../../pages/ChatMemberList";
import { FaCrown } from "react-icons/fa6";

function Members({ id, profile, nickname, isHost }: MemberProps) {
  const myId = "abc123"; // 임시데이터
  return (
    <MembersStyle>
      <div className="profile-image">
        {profile ? profile : nickname.charAt(0)}
      </div>
      <div className="contents">
        <div className="nickname">
          {id === myId && <div className="me">나</div>}
          {nickname}
        </div>
        {isHost && <FaCrown style={{ color: "#FFE400" }} />}
        {/* 이 부분은 방장일 때만 되게 고쳐야 됨 */}
        {id !== myId && <button>내보내기</button>}
      </div>
    </MembersStyle>
  );
}
const MembersStyle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #c1c1ff;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  .contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    .nickname {
      font-size: 1rem;
      display: flex;

      .me {
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
        border-radius: 50%;
        background-color: #565151;
        margin-right: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }

    svg {
      font-size: 1.2rem;
      margin-right: 1rem;
    }

    button {
      border: 1px solid #fe0106;
      border-radius: 10px;
      height: 2rem;
      background-color: #fff;
      cursor: pointer;
      color: #fe0106;

      &:hover {
        background-color: #fe0106;
        color: white;
      }
    }
  }
`;
export default Members;

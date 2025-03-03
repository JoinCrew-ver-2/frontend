import styled from "styled-components";

interface OtherMessageProps {
  nickname: string;
  content: string;
  time: string;
  profile?: string;
  showProfile: boolean;
  showTime: boolean;
}

function OtherMessage({
  nickname,
  content,
  time,
  profile,
  showProfile,
  showTime,
}: OtherMessageProps) {
  return (
    <OtherMessageStyle>
      {showProfile ? (
        <>
          <div style={{ width: "10%" }}>
            <ProfileImage>
              {profile ? profile : nickname.charAt(0)}
            </ProfileImage>
          </div>
          <MessageContent>
            <SenderName>{nickname}</SenderName>
            <MessageWrapper>
              <MessageBubble>{content}</MessageBubble>
              {showTime && <MessageTime>{time}</MessageTime>}
            </MessageWrapper>
          </MessageContent>
        </>
      ) : (
        <>
          <div style={{ width: "10%" }}>
            <EmptyProfile />
          </div>
          <MessageContent>
            <MessageWrapper style={{ marginTop: "0" }}>
              <MessageBubble>{content}</MessageBubble>
              {showTime && <MessageTime>{time}</MessageTime>}
            </MessageWrapper>
          </MessageContent>
        </>
      )}
    </OtherMessageStyle>
  );
}

const OtherMessageStyle = styled.div`
  display: flex;
  padding: 0 0.8rem;
  align-items: flex-start;
  width: 100%;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c1c1ff;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const EmptyProfile = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  visibility: hidden;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const SenderName = styled.span`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  background-color: white;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 75%;
  font-size: 0.95rem;
  white-space: pre-wrap; // 사용자가 입력한 줄바꿈 유지
  word-break: keep-all; // 한글 단어 중간에서 끊기지 않도록
  overflow-wrap: break-word; // 긴 단어는 줄바꿈
`;

const MessageTime = styled.span`
  font-size: 0.7rem;
  color: #888;
`;

export default OtherMessage;

import styled from "styled-components";

interface MyMessageProps {
  content: string;
  time: string;
  showTime: boolean;
}

function MyMessage({ content, time, showTime }: MyMessageProps) {
  return (
    <MyMessageContainer>
      {showTime && <MessageTime>{time}</MessageTime>}
      <MessageBubble>{content}</MessageBubble>
    </MyMessageContainer>
  );
}
const MyMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 0 10px;
  align-items: flex-end;
`;

const MessageBubble = styled.div`
  background-color: #ffeb33;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 70%;
  margin-left: 5px;
  font-size: 0.95rem;
`;

const MessageTime = styled.span`
  font-size: 0.7rem;
  color: #888;
`;

export default MyMessage;

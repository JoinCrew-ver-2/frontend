import React from 'react';
import styled from 'styled-components';

// 알림 컴포넌트의 props 타입 정의
interface NotificationProps {
  title: string;
  content: string;
  time: string;
}

const NoticeCard: React.FC<NotificationProps> = ({ title, content, time }) => {
  return (
    <Notifications>
      <Notice>
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </Notice>
      <p className="time">{time}</p>
    </Notifications>
  );
};

const Notifications = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 4rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  &:hover {
    background-color: #F6F6F6;
  }

  .time {
    color: #8C8C8C;
    width: 20%;
    text-align: center;
  }
`;

const Notice = styled.div`
  width: 80%;
  line-height: 2;

  .title {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export default NoticeCard;

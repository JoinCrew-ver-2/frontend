import React from "react";
import styled from "styled-components";

interface DateSeparatorProps {
  date: string;
}

const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  return (
    <SeparatorContainer>
      <DateBadge>{date}</DateBadge>
    </SeparatorContainer>
  );
};

const SeparatorContainer = styled.div`
  text-align: center;
  width:100%;
  height:fit-content;
  margin: 0.5rem 0;
`;

const DateBadge = styled.span`
  background-color: rgba(111, 111, 111, 0.1);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 14px;
  color:white;
`;
export default DateSeparator;

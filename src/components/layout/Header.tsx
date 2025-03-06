import styled from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <h1
        onClick={() => {
          navigate("/");
        }}>
        <span style={{ color: "#6969DC" }}>Join</span>
        <span style={{ color: "#3AE159" }}>Crew</span>
      </h1>
      <Icons>
        <IoMdNotificationsOutline
          style={{ fontSize: "30px" }}
          onClick={() => {
            navigate("/notification");
          }}
        />
        <FiSend
          style={{ fontSize: "30px" }}
          onClick={() => {
            navigate("/chatlist");
          }}
        />
      </Icons>
    </HeaderStyle>
  );
}
const HeaderStyle = styled.div`
  box-sizing: border-box;
  height: 65px;
  padding: 10px;
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;

  h1 {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Icons = styled.div`
  width: 25%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export default Header;

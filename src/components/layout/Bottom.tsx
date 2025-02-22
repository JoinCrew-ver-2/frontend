import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";

function Bottom() {
  return (
    <BottomStyle>
      <IoMdHome />
      <FaSearch />
      <MdAddBox />
      <MdOutlinePersonOutline />
    </BottomStyle>
  );
}
const BottomStyle = styled.div`
  background-color: #6969DC;
  height: 65px;
  width: 100%;
  max-width: 480px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  z-index: 10;

  svg {
    color: white;
    font-size:35px;

     &:hover {
      color: #111;
    }
  }
`;
export default Bottom;

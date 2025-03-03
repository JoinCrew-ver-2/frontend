import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?:() => void;
  type?: "button" | "submit";
  width?: string;
  height?: string;
}
function Button({text, onClick, type="button", width = "100%", height="3rem"}: ButtonProps) {
  return (
    <ButtonStyle type={type} onClick={onClick} width={width} height={height}>
      {text}
    </ButtonStyle>
  );
}
const ButtonStyle = styled.button<{ width: string , height: string}>`
  width: ${props => props.width}; 
  height: ${props => props.height};
  border: none;
  border-radius: 10px;
  background-color: #3AE159;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    color: white;
    background-color: #32c94e;
  }
`;

export default Button;
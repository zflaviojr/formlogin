import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} {...disabled? {disabled : true}: null}>{title}</ButtonContainer>;
};

export default Button;

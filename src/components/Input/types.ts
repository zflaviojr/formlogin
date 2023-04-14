import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name:  "email" | "password",
    control: Control<IFormLogin, any>,
    errorMessage?: string,
}
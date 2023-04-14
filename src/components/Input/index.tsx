import { ErrorMessage, InputContainer } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({name, control, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
    <InputContainer>
      <Controller
        name={name}
        control={control}
        render={({field}) => <input {...field} {...rest} />}
      />
    </InputContainer>
    {errorMessage? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;

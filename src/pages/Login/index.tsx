import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import {IFormLogin, defaultValues} from "./types";

const Login = () => {

  const schema = yup.object({
    email: yup.string().email("E-mail inválido").required ("Campo obrigatório"),
    password: yup.string().min (6, "No minimo 6 caracteres").required ("Campo obrigatório"),
  }).required();

  const {control, watch, formState:{errors, isValid}} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  });

  const formWatch = watch();

  // console.log(formWatch);
  // console.log(errors);

  console.log("Is Valid: ", isValid);

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" control={control} type='email' errorMessage={errors?.email?.message} placeholder="Email"  /> {/*{... register('email')} */}
          <Spacing />
          <Input name="password" control={control} type='password' errorMessage={errors?.password?.message} placeholder="Senha"  /> {/*{... register('password')}*/}
          <Spacing />
          <Button title="Entrar" disabled={!isValid} onClick={() => {window.alert('Form Válido')}}/>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;

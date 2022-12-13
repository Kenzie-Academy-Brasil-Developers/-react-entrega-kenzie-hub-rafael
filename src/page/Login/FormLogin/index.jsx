import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { StyledForm } from "./styled";
import { registerSchemaLogin } from "./registerSchemaLogin/index.js";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../context/ContextApi";

export function FormLogin() {
  const { login, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaLogin),
  });

  return (
    <StyledForm onSubmit={handleSubmit(login)} noValidate>
      <Input
        register={register}
        name="email"
        type="email"
        label="Email"
        id="login-email"
        placeholder="digite aqui seu E-mail"
      />
      {errors.email?.message && (
        <p className="LabelText">{errors.email.message}</p>
      )}
      <Input
        register={register}
        type="password"
        name="password"
        label="Senha"
        placeholder="digite sua senha"
        id="login-password"
      />
      {errors.password?.message && (
        <p className="LabelText">{errors.password.message}</p>
      )}
      <Button className="buttonLogin" type="submit">
        {!loading ? "Entrar" : <AiOutlineLoading3Quarters className="girar" />}
      </Button>
      <label className="LabelText LabelTextRegister">
        Ainda não possui uma conta?
      </label>
      <Link to={"/register"} className="buttonRegister">
        Cadastre-se
      </Link>
    </StyledForm>
  );
}

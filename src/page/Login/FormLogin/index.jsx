import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { api } from "../../../service/api";
import { StyledForm } from "./styled";
import { registerSchemaLogin } from "./registerSchemaLogin/index.js";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

export function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaLogin),
  });

  async function submit(data) {
    setLoading(true);
    try {
      const response = await api.post("sessions", data);
      localStorage.setItem("@token", JSON.stringify(response.data.token));
      toast.success("Login feito com sucesso.");
      setNextPage(false);
      setTimeout(() => {
        setNextPage(true);
      }, 500);
    } catch (error) {
      toast.error("Usuario não existe");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      {!nextPage ? <Navigate to={"/dashbord"} /> : ""}
      <Input
        register={register}
        name="email"
        type="email"
        label=" Email"
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
      <Link to={"register"} className="buttonRegister">
        Cadastre-se
      </Link>
    </StyledForm>
  );
}

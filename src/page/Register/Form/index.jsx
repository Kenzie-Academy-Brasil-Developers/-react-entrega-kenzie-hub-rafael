import { Button } from "../../../components/Button";
import { StyledForm } from "./styled";
import { Input } from "../../../components/Input/index.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { toast } from "react-toastify";
import { api } from "../../../service/api";
import { registerSchema } from "./registerSchema";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Form() {
  const [nextPage, setNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { course_module: "Primeiro Módulo" },
    mode: "onblur",
    resolver: yupResolver(registerSchema),
  });
  async function submit(data) {
    setLoading(true);
    try {
      await api.post("users", data);
      reset();
      toast.success("Usuario criado com sucesso!");
      setNextPage(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)} method="post" noValidate>
      {!nextPage ? <Navigate to="/" /> : ""}
      <Input
        register={register}
        name="name"
        label="Nome"
        type="text"
        id="POST-name"
        placeholder="Digite aqui seu nome"
      />
      {errors.name?.message && (
        <p className="LabelText">{errors.name.message}</p>
      )}
      <Input
        register={register}
        name="email"
        label=" E-mail"
        type="email"
        id="POST-email"
        placeholder="Digite aqui seu email"
      />
      {errors.email?.message && (
        <p className="LabelText">{errors.email.message}</p>
      )}
      <Input
        register={register}
        name="password"
        label="Senha"
        type="password"
        id="POST-password"
        placeholder="Digite aqui sua senha"
      />
      {errors.password?.message && (
        <p className="LabelText">{errors.password.message}</p>
      )}
      <Input
        register={register}
        name="password_check"
        label="Confirmar Senha"
        type="password"
        id="POST-againPassWord"
        placeholder="Digite novamente sua senha"
      />
      {errors.password_check?.message && (
        <p className="LabelText">{errors.password_check.message}</p>
      )}
      <Input
        register={register}
        name="bio"
        label="Bio"
        type="text"
        id="POST-bio"
        placeholder="Fale sobre você"
      />
      {errors.bio?.message && <p className="LabelText">{errors.bio.message}</p>}
      <Input
        register={register}
        name="contact"
        label="Contato"
        type="text"
        id="POST-contato"
        placeholder="Opção de contato"
      />
      {errors.contact?.message && (
        <p className="LabelText">{errors.contact.message}</p>
      )}
      <label htmlFor="POST-modulo"></label>
      <select
        {...register("course_module")}
        label="Selecionar módulo"
        id="POST-modulo"
      >
        <option>Primeiro Módulo</option>
        <option>Segundo Módulo</option>
        <option>Terceiro Módulo</option>
        <option>Quarto Módulo</option>
        <option>Quinto Módulo</option>
        <option>Sexto Módulo</option>
      </select>
      {errors.course_module?.message && (
        <p className="LabelText">{errors.course_module.message}</p>
      )}
      <Button type="submit">
        {!loading ? (
          "Cadastrar"
        ) : (
          <AiOutlineLoading3Quarters className="girar" />
        )}
      </Button>
    </StyledForm>
  );
}

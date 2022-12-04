import * as yup from "yup";

export const registerSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Esse campo é obrigatório")
    .email("è necessario fornecer um email"),
  password: yup.string().required("senha obrigatória").min(0, "Senha invalida"),
});

import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisar ter no minimo 3 caracteres")
    .max(30, "O nome só pode ter até 30 caracteres"),
  email: yup
    .string()
    .required("Esse campo é obrigatório")
    .email("é necessario fornecer um email"),
  password: yup
    .string()
    .required("senha obrigatória")
    .matches(/(?=.*[a-z])/, "é necessario pelo menos uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "é necessario pelo menos uma letra maiúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um dígito")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Pelo menos um caractere especial")
    .matches(/.{8,}/, "No mínimo de oito"),
  password_check: yup
    .string()
    .required("senha obrigatória")
    .oneOf([yup.ref("password"), null], "Sua senha não condiz"),
  contact: yup
    .string("ee porrra !!!")
    .required("Esse campo é obrigatório")
    .max(300, "o maximo de caracteres é de 300"),
  bio: yup.string().max(500, "Sua bio só pode ter até 500 caracteres"),
  course_module: yup
    .string()
    .required("esse campo é obrigatório")
    .max(100, "O modulo só pode ter até 100 caracteres"),
});

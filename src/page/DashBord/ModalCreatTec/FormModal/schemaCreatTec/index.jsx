import * as yup from "yup";

export const schemaCreatTec = yup.object().shape({
  title: yup.string().required("Esse campo é obrigatório"),
});

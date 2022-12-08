import * as yup from "yup";

export const schemaCreatTec = yup.object().shape({
  status: yup.string().required("Esse campo é obrigatório"),
});

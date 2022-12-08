import { FormEdit } from "./FormEdit";
import { StyledModalEdit } from "./styled.js";

export const ModalEdit = ({ setModalEdit, techs }) => (
  <StyledModalEdit>
    <FormEdit setModalEdit={setModalEdit} techs={techs} />
  </StyledModalEdit>
);

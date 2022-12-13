import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextApi";
import { ContextDashBord } from "../../context/TechUser";
import { DivDashBord } from "./DivDashBord";
import { HeaderDashBord } from "./HeaderDashBord";
import { ListTec } from "./ListTec";
import { ModalCreatTec } from "./ModalCreatTec";
import { ModalEdit } from "./ModalEdit";
import { ModalLogout } from "./ModalLogout";
import { StyledDivDash } from "./styled";

export function Dashbord() {
  const { user } = useContext(AuthContext);
  const { renderModalLogout, modalCreatTec, setModalCreatTec, modalEditUse } =
    useContext(ContextDashBord);

  const navigate = useNavigate();

  if (user === null) {
    navigate("/login");
  }

  return (
    <StyledDivDash>
      {renderModalLogout && <ModalLogout />}

      {modalCreatTec && <ModalCreatTec />}
      {modalEditUse ? <ModalEdit /> : ""}
      <HeaderDashBord />
      <DivDashBord />
      <div className="div-abrirModal">
        <h3 className="Title3">Tecnologias</h3>

        <button onClick={() => setModalCreatTec(true)}>+</button>
      </div>
      <ListTec />
    </StyledDivDash>
  );
}

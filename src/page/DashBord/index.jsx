import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DivDashBord } from "./DivDashBord";
import { HeaderDashBord } from "./HeaderDashBord";
import { ListTec } from "./ListTec";
import { ModalCreatTec } from "./ModalCreatTec";
import { ModalLogout } from "./ModalLogout";
import { StyledDivDash } from "./styled";

export function Dashbord() {
  const [renderModalLogout, setRenderModalLogout] = useState(false);
  const [modalCreatTec, setModalCreatTec] = useState(false);

  const { user } = useContext(AuthContext);
  const { techs } = user;

  const navigate = useNavigate();

  if (user === null) {
    navigate("/login");
  }

  return (
    <div>
      {renderModalLogout && (
        <ModalLogout setRenderModal={setRenderModalLogout} />
      )}

      {modalCreatTec && <ModalCreatTec setModalCreatTec={setModalCreatTec} />}

      <StyledDivDash>
        <HeaderDashBord setRenderModal={setRenderModalLogout} />
        <DivDashBord />
        <div className="div-abrirModal">
          <h3 className="Title3">Tecnologias</h3>

          <button onClick={() => setModalCreatTec(true)}>+</button>
        </div>
        <ListTec />
      </StyledDivDash>
    </div>
  );
}

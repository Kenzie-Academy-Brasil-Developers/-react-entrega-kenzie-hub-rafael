import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DivDashBord } from "./DivDashBord";
import { HeaderDashBord } from "./HeaderDashBord";
import { ListTec } from "./ListTec";
import { ModalLogout } from "./ModalLogout";
import { StyledDivDash } from "./styled";

export function Dashbord() {
  const [renderModal, setRenderModal] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (user === null) {
    navigate("/login");
  }

  return (
    <div>
      {renderModal && <ModalLogout setRenderModal={setRenderModal} />}
      <StyledDivDash>
        <HeaderDashBord setRenderModal={setRenderModal} />
        <DivDashBord />
        <div className="div-abrirModal">
          <h3 className="Title3">Tecnologias</h3>

          <button>+</button>
        </div>
        <ListTec />
      </StyledDivDash>
    </div>
  );
}

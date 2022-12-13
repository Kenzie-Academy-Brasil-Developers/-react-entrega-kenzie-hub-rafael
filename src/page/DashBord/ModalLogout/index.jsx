import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/ContextApi.jsx";
import { ContextDashBord } from "../../../context/TechUser.jsx";
import { StyledModalLogout } from "./styled.js";

export function ModalLogout() {
  const navigate = useNavigate();
  const { setRenderModalLogout } = useContext(ContextDashBord);

  const [logout, setLogout] = useState(false);

  const { setUser } = useContext(AuthContext);

  function logoutDash() {
    setLogout(true);
    setTimeout(() => {
      setUser({});
    }, 500);
    localStorage.removeItem("@token");
    setRenderModalLogout(false);
    navigate("/login");
  }
  return (
    <StyledModalLogout>
      {logout && <Navigate to={"/"} />}

      <div className="div-logout">
        <div className="div-close">
          <button onClick={() => setRenderModalLogout(false)} className="close">
            X
          </button>
        </div>
        <h2 className="Title1">Tem certeza que quer sair?</h2>

        <div>
          <button onClick={() => setRenderModalLogout(false)} className="no">
            Não
          </button>
          <button onClick={() => logoutDash()} className="yes">
            Sim
          </button>
        </div>
      </div>
    </StyledModalLogout>
  );
}

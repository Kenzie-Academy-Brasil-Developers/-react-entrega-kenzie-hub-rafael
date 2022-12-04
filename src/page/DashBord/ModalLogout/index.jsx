import { useState } from "react";
import { Navigate } from "react-router-dom";
import { StyledModalLogout } from "./styled.js";

export function ModalLogout({ setUser, setRenderModal }) {
  const [logout, setLogout] = useState(false);

  function logoutDash() {
    setLogout(true);
    setTimeout(() => {
      setUser({});
    }, 500);
    localStorage.removeItem("@token");
  }
  return (
    <StyledModalLogout>
      {logout && <Navigate to={"/"} />}

      <div className="div-logout">
        <div className="div-close">
          <button onClick={() => setRenderModal(false)} className="close">
            X
          </button>
        </div>
        <h2 className="Title1">Tem certeza que quer sair?</h2>

        <div>
          <button onClick={() => setRenderModal(false)} className="no">
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

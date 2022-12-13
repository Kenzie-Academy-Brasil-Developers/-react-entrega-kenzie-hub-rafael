import { useContext } from "react";
import { ContextDashBord } from "../../../context/TechUser";
import Image from "../../../IMG/Logo.svg";
import { StyledHeaderDash } from "./styled";

export function HeaderDashBord() {
  const { setRenderModalLogout } = useContext(ContextDashBord);
  return (
    <StyledHeaderDash>
      <div>
        <img src={Image} alt="kenzie hub" />
        <button onClick={() => setRenderModalLogout(true)}>Sair</button>
      </div>
    </StyledHeaderDash>
  );
}

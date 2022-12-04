import Image from "../../../IMG/Logo.svg";
import { StyledHeaderDash } from "./styled";

export function HeaderDashBord({ setRenderModal }) {
  return (
    <StyledHeaderDash>
      <div>
        <img src={Image} alt="kenzie hub" />
        <button onClick={() => setRenderModal(true)}>Sair</button>
      </div>
    </StyledHeaderDash>
  );
}

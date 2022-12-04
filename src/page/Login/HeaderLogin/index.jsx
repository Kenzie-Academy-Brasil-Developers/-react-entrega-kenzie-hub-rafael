import { StyledHeaderLogin } from "./styled";
import Image from "../../../IMG/Logo.svg";

export function HeaderLogin() {
  return (
    <StyledHeaderLogin>
      <div>
        <img src={Image} alt="Kenzie hub" />
      </div>
    </StyledHeaderLogin>
  );
}

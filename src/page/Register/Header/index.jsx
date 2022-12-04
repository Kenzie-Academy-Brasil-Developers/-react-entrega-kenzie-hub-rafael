import { StyledHeader } from "./styled.js";
import Image from "../../../IMG/Logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={Image} alt="Logo" />
        <Link to={"/"}>Voltar</Link>
      </div>
    </StyledHeader>
  );
}

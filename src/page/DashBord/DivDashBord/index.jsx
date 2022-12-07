import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { StyledDivDash } from "./styled";

export function DivDashBord() {
  const { user } = useContext(AuthContext);

  return (
    <StyledDivDash>
      <div className="divTextDash">
        <div>
          <h2 className="Title1">Olá, {user?.name}</h2>
          <span className="HeadlineBold">{user?.course_module}</span>
        </div>
      </div>
    </StyledDivDash>
  );
}

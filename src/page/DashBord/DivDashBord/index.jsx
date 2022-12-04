import { StyledDivDash } from "./styled";

export function DivDashBord({ user }) {
  return (
    <StyledDivDash>
      <div className="divTextDash">
        <div>
          <h2 className="Title1">Olá, {user.name}</h2>
          <span className="HeadlineBold">{user.course_module}</span>
        </div>
      </div>
      <div className="divTextDash1">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledDivDash>
  );
}

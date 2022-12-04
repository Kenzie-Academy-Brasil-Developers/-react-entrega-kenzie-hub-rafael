import { FormLogin } from "./FormLogin";
import { HeaderLogin } from "./HeaderLogin";
import { StyledLoginPage, StyledDivLogin } from "./styled";

export function Login({ setUser }) {
  return (
    <StyledDivLogin>
      <HeaderLogin />
      <StyledLoginPage>
        <h2 className="Title2">Login</h2>
        <FormLogin setUser={setUser} />
      </StyledLoginPage>
    </StyledDivLogin>
  );
}

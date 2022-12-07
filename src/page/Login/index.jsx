import { FormLogin } from "./FormLogin";
import { HeaderLogin } from "./HeaderLogin";
import { StyledLoginPage, StyledDivLogin } from "./styled";

export function Login() {
  return (
    <StyledDivLogin>
      <HeaderLogin />
      <StyledLoginPage>
        <h2 className="Title2">Login</h2>
        <FormLogin />
      </StyledLoginPage>
    </StyledDivLogin>
  );
}

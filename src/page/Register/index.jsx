import { Form } from "./Form/index.jsx";
import { Header } from "./Header";
import { StyledRegisterPage } from "./styled";

export function Register() {
  return (
    <div className="conteiner">
      <Header />
      <StyledRegisterPage>
        <h2 className="Title2">Crie sua conta</h2>
        <p className="Headline">Rapido e grátis, vamos nessa</p>
        <Form />
      </StyledRegisterPage>
    </div>
  );
}

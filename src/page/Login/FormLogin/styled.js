import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;

  display: flex;
  flex-direction: column;

  gap: 1.3125rem;

  margin: 5%;

  input {
    height: 38px;
    width: 100%;

    color: var(--Grey-0);

    border-radius: 3.198124408721924px;

    border: none;
  }
  input:hover {
    opacity: 80%;
  }
  label {
    color: var(--Grey-0);
  }
  .buttonLogin {
    height: 38.37749481201172px;
    width: 100%;

    border-radius: 4px;

    padding: 0px 22px 0px 22px;

    transition: 1s;

    background-color: var(--Color-Primary-Disable);
  }
  .buttonLogin:hover {
    background-color: var(--Color-Primary);
  }
  .LabelTextRegister {
    text-align: center;
  }
  .buttonRegister {
    height: 38.37749481201172px;
    width: 100%;

    border-radius: 4px;

    transition: 1s;

    background-color: var(--Grey-1);

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--Grey-0);
    text-decoration: none;
    font-size: 1rem;
  }
  .buttonRegister:hover {
    background-color: var(--Grey-2);
  }
  p {
    color: var(--Color-Primary-Disable);
  }
`;

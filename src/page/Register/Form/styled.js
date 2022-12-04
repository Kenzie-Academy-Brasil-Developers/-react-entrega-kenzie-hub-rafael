import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  height: max-content;

  display: flex;
  flex-direction: column;

  gap: 1.3125rem;

  margin-bottom: 2rem;

  input {
    height: 38px;
    width: 100%;

    border-radius: 3.198124408721924px;

    border: none;

    color: var(--Grey-0);

    transition: 1s;
  }
  input:hover {
    opacity: 80%;
  }
  label {
    color: var(--Grey-0);
  }
  button {
    height: 38.37749481201172px;
    width: 100%;

    border-radius: 4px;

    padding: 0px 22px 0px 22px;

    background-color: var(--Color-Primary-Disable);

    transition: 1s;
  }
  button:hover {
    background-color: var(--Color-Primary);
  }
  p {
    color: var(--Color-Primary-Disable);
  }
  select {
    height: 38px;
    width: 100%;

    border-radius: 3.198124408721924px;

    border: none;

    background-color: var(--Grey-2);
    color: var(--Grey-0);
  }
  select:hover {
    opacity: 80%;
  }
`;

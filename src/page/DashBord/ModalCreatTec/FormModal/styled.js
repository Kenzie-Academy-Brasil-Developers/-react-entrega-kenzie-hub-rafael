import styled from "styled-components";

export const StyledFormModal = styled.form`
  min-height: 342px;
  min-width: 310px;

  padding-bottom: 20px;

  border-radius: 4px;

  background-color: var(--Grey-3);
  color: var(--Grey-0);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  p {
    color: var(--Color-Primary-Disable);
  }

  select {
    height: 48px;
    width: 90%;

    border: none;
    border-radius: 4px;

    padding: 0 5% 0 5%;

    background-color: var(--Grey-2);
    color: var(--Grey-0);
  }
  input {
    height: 48px;
    width: 80%;

    border: none;
    border-radius: 4px;

    padding: 0 5% 0 5%;

    background-color: var(--Grey-2);
    color: var(--Grey-0);
  }

  label {
    width: 88%;
  }

  div {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--Grey-2);

    h3 {
      margin-left: 5%;
    }

    button {
      background: none;
      width: min-content;
      height: min-content;

      margin-right: 5%;
    }
    button:hover {
      width: 15px;
      height: 15px;

      background: none;
    }
  }
  button {
    background-color: var(--Color-Primary);
    color: var(--Grey-0);

    height: 48px;
    width: 90%;

    transition: 500ms;

    border: none;
    border-radius: 4px;

    padding: 0;
  }
  button:hover {
    background-color: var(--Color-Primary-Disable);
  }
  @media (min-width: 1000px) {
    min-width: 370px;
  }
`;

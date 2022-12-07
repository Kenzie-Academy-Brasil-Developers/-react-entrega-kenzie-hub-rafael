import styled from "styled-components";

export const StyledDivDash = styled.div`
  color: var(--Grey-0);

  .div-abrirModal {
    width: 90%;
    height: 70px;

    margin-left: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 30px;
      height: 30px;

      border: none;
      border-radius: 4px;

      background-color: var(--Grey-2);
      color: var(--Grey-0);

      font-size: 23px;
      font-weight: 700;

      transition: 500ms;
    }
    button:hover {
      background-color: var(--Grey-1);
    }

    @media (min-width: 1000px) {
      width: 60%;

      margin-left: 20%;
    }
  }
  .paragraph {
    text-align: center;
  }
`;

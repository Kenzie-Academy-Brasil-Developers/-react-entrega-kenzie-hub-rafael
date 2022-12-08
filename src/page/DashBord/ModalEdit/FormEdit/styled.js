import styled from "styled-components";

export const StyledFormEdit = styled.form`
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

  label {
    width: 88%;
  }

  .div-top {
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

      background: none;
      color: var(--Grey-0);

      border: none;

      margin-right: 5%;
    }
    button:hover {
      width: 15px;
      height: 15px;

      background: none;
    }
  }
  @media (min-width: 1000px) {
    min-width: 370px;
  }
  .div_button {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .registerTech {
      width: 60%;
      height: 38.37398147583008px;

      border-radius: 4px;
      border: none;

      background-color: var(--Color-Primary);
      color: var(--Grey-0);
    }
    .deletTech {
      width: 35%;
      height: 38.37398147583008px;

      border-radius: 4px;
      border: none;

      background-color: var(--Grey-1);
      color: var(--Grey-0);
    }
    .deletTech:hover {
      background-color: var(--Grey-2);
    }
    .registerTech:hover {
      background-color: var(--Color-Primary-Disable);
    }
  }
  .div_tche_value {
    height: 48px;
    width: 80%;

    p {
      color: var(--Grey-0);

      font-size: 12px;
    }
    display: flex;
    align-items: center;

    border: none;
    border-radius: 4px;

    padding: 0 5% 0 5%;

    background-color: var(--Grey-2);
    color: var(--Grey-0);
  }
`;

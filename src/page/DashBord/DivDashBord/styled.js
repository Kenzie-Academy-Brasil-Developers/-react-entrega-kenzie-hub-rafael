import styled from "styled-components";

export const StyledDivDash = styled.div`
  .divTextDash {
    width: 100%;
    min-height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid var(--Grey-3);
  }
  .divTextDash div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .divTextDash div > span {
    color: var(--Grey-1);
  }
  .divTextDash1 {
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: none;

    width: 0;
    height: 0;

    font-size: 0;
    font-weight: 0;
  }
  @media (min-width: 1000px) {
    .divTextDash div {
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
    }
    .divTextDash1 {
      background: local;

      height: 120px;
      width: 100%;

      h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;

        margin-left: 20%;
      }
      p {
        margin-left: 20%;

        font-size: 12px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
      }
    }
  }
`;

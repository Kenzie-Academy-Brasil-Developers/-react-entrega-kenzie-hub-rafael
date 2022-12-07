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
  @media (min-width: 1000px) {
    .divTextDash div {
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
    }
  }
`;

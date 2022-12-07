import styled from "styled-components";

export const StyledHeaderDash = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid var(--Grey-3);

  div {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    height: 2rem;
    width: 5rem;

    border-radius: 4px;
    border: none;

    padding: 0px 1rem 0px 1rem;

    background-color: var(--Grey-3);
    color: var(--Grey-0);
  }
  button:hover {
    background-color: var(--Grey-2);
  }
  @media (min-width: 1000px) {
    div {
      width: 60%;
    }
  }
`;

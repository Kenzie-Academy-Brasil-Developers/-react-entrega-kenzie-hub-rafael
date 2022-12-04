import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 370px;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80%;
    max-height: 891.1920166015625px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    height: 2rem;
    width: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border: none;

    padding: 0px 1rem 0px 1rem;

    background-color: var(--Grey-3);
    color: var(--Grey-0);

    text-decoration: none;

    transition: 1s;
  }
  a:hover {
    background-color: var(--Grey-2);
  }
  @media (min-width: 999px) {
    div {
      min-width: 370px;
    }
  }
`;

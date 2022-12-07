import styled from "styled-components";

export const StyledListTec = styled.ul`
  width: 90%;
  min-height: 350px;
  max-height: 350px;

  gap: 20px;
  margin-left: 5%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0 20px 0;

  background-color: var(--Grey-3);

  list-style: none;

  overflow: auto;

  li {
    width: 90%;
    min-height: 50px;

    padding: 0 2.5% 0 2.5%;

    border-radius: 4px;

    background-color: var(--Grey-4);

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: 500ms;

    span {
      color: var(--Grey-1);
    }

    div {
      width: auto;
      min-width: 100px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .delet-img {
      width: 13px;
      height: 13px;

      transition: 200ms;
    }
    .delet-img:hover {
      width: 15px;
      height: 15px;
    }
  }
  li:hover {
    background-color: var(--Grey-2);
  }
  button {
    background: none;

    border: none;

    color: var(--Grey-0);
  }
  @media (min-width: 1000px) {
    width: 60%;

    margin-left: 20%;
  }
`;

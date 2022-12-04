import styled from "styled-components";

export const StyledModalLogout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row-reverse;

  color: var(--Grey-0);

  background-color: #ffffff1c;

  h2 {
    margin-bottom: 2rem;
  }

  .div-logout {
    width: 90%;
    max-width: 300px;
    height: 150px;

    border-radius: 5px 0 5px 5px;

    margin-top: 1%;
    margin-right: 5%;

    background-color: var(--Grey-2);

    display: flex;
    align-items: center;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;

      width: 80%;

      button {
        border: none;

        width: 80px;
        height: 40px;

        border-radius: 5px;

        color: var(--Grey-0);

        transition: 1s;
      }
      .yes {
        background-color: var(--Sucess);
      }
      .no {
        background-color: var(--Negative);
      }
      button:hover {
        opacity: 70%;
      }

      .close {
        width: min-content;
        height: min-content;

        background: none;

        margin-left: 103%;
        margin-top: 2px;
      }
      .div-close {
        height: min-content;
        width: 80%;

        display: flex;
        flex-direction: row-reverse;
        justify-content: none;
      }
    }
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-start;
    .div-logout {
      margin-top: 1%;
      margin-right: 18%;
    }
  }
`;

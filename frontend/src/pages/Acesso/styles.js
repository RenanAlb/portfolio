import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  display: flex;

  .card {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  .card input {
    background-color: ${Themes.white};
    padding: 20px;
    border-radius: 10px;
    border: 1px solid ${Themes.gray};
    font-size: 1.3em;
    outline: none;

    &::placeholder {
      font-size: 0.9em;
    }
  }
  .card button {
    background-color: ${Themes.black};
    padding: 20px;
    border-radius: 10px;
    border: 1px solid ${Themes.gray};
    color: white;
    font-size: 0.95em;
    margin-top: 10px;
    transition: 0.2s;

    &:hover {
      background-color: ${Themes.gray};
      transition: 0.2s;
    }
  }
`;

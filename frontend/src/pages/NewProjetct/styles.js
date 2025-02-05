import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    margin: auto;
  }
  form p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  form input,
  textarea {
    background-color: rgba(249, 249, 249, 0.9);
    width: 100%;
    padding: 10px;
    font-size: 0.9em;
    border-radius: 10px;
    border: 1px solid rgba(189, 189, 189, 0.9);
    outline: none;
    margin: 10px 0;
  }
  form textarea {
    height: 200px;
    resize: none;
  }
  form button {
    background-color: ${Themes.black};
    width: 100%;
    padding: 10px;
    font-size: 0.9em;
    border-radius: 10px;
    border: 1px solid rgba(189, 189, 189, 0.9);
    outline: none;
    margin: 10px 0;
    color: white;
    transition: 0.2s;

    &:hover {
      background-color: ${Themes.gray};
      transition: 0.2s;
    }
  }
`;

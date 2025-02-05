import styled from "styled-components";
import Themes from "../../Themes";

export const FooterContainer = styled.footer`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  padding: 20px 0;
  margin-top: 200px;
  border-top: 1px solid
    ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;

  .message {
    justify-content: start;
    align-items: start;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
  }
  .message h1 {
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-size: 2.4em;
    margin-bottom: 10px;
    font-weight: 200;
  }
  .message button {
    background-color: transparent;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    padding: 15px 25px;
    border-radius: 40px;
    font-size: 1.2em;
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};

    &:hover {
      cursor: pointer;
    }
  }

  .links {
    justify-content: start;
    align-items: start;
    display: flex;
    flex-direction: column;
  }
  .links p {
    color: gray;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .links ul li {
    display: inline-flexbox;
    margin: 10px 0;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid
        ${(props) =>
          props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    }
  }
  .links ul li a {
    text-decoration: none;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-size: 1.1em;
  }

  @media screen and (max-width: 800px) {
    .message h1 {
      font-size: 1.9em;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;

    .message h1 {
      font-size: 1.7em;
    }

    .message {
      width: 100%;
      margin-bottom: 50px;
      padding: 10px;
    }
    .links {
      width: 100%;
      padding: 10px;
      border-top: 1px solid
        ${(props) =>
          props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    }

    .message button {
      background-color: transparent;
      color: ${(props) => (props.theme === "light" ? "black" : "white")};
      padding: 15px 25px;
      border-radius: 40px;
      font-size: 1em;
      border: 1px solid
        ${(props) =>
          props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
      margin-top: 15px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

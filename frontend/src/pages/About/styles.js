import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  min-height: 100dvh;
  transition: all 0.4s;

  .header {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: start;
    align-items: end;
    padding: 10px;
    overflow-y: hidden;
  }
  .header h1 {
    width: 80%;
    font-size: 4.5em;
    font-weight: 400;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    line-height: 1.25em;
    overflow-y: hidden;
  }

  .text,
  .tecnologias {
    width: 70%;
    margin: 150px auto 0 auto;
    padding: 10px;
  }
  .text p {
    margin: 50px 0;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-size: 1.5em;
  }

  .tecnologias h1 {
    font-size: 2em;
    font-weight: 400;
    color: ${Themes.gray};
    margin-bottom: 40px;
  }
  .tecnologias ul {
    opacity: 0;
    font-size: 0.2em;
  }
  .tecnologias ul li {
    display: inline-flexbox;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    padding: 5px;
    font-size: 5.4em;
  }

  @media screen and (max-width: 980px) {
    .header h1 {
      font-size: 4.5em;
    }
  }
  @media screen and (max-width: 850px) {
    .tecnologias ul li {
      font-size: 4em;
    }
  }
  @media screen and (max-width: 770px) {
    .header h1 {
      font-size: 3em;
      width: 100%;
    }
  }
  @media screen and (max-width: 520px) {
    .header h1 {
      font-size: 2.4em;
    }
    .text,
    .tecnologias {
      width: 100%;
    }

    .tecnologias ul li {
      font-size: 3em;
    }
  }
`;

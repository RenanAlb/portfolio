import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  min-height: 100dvh;
  overflow-y: hidden;
  transition: all 0.4s;
`;

export const Main = styled.main`
  overflow-y: hidden;
  width: 100%;
  height: auto;
  padding: 10px;

  .presentation {
    position: relative;
    width: 100%;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    opacity: 0;
    transition: all 0.4s;
  }
  .presentation h1 {
    font-size: 3em;
    font-weight: 200;
    line-height: 1.25em;
    overflow-y: hidden;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
  }
  .presentation p {
    width: 300px;
    font-size: 2em;
    background-color: transparent;
    border: none;
    color: ${Themes.gray};
    margin-top: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  .little-text {
    position: relative;
    justify-content: end;
    align-items: center;
    display: flex;
    height: calc(100dvh - 360px);
    margin-top: 50px;
    opacity: 0;
    transition: all 0.65s;
    z-index: 4;
  }
  .little-text p {
    width: 350px;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    line-height: 1.5em;
  }

  .projetos {
    width: 100%;
    padding-top: 100px;
  }
  .projetos h1 {
    font-size: 3em;
    font-weight: 200;
    padding-bottom: 50px;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
  }

  @media screen and (min-width: 1600px) {
    .presentation h1 {
      font-size: 4em;
      font-weight: 200;
      line-height: 1.2em;
    }
  }

  @media screen and (max-width: 920px) {
    .little-text {
      margin-top: 270px;
    }
  }

  @media screen and (max-width: 800px) {
    .presentation {
      margin-top: 90px;
    }
    .presentation h1 {
      font-size: 2.2em;
      line-height: 1.35em;
      mix-blend-mode: difference;
    }
  }

  @media screen and (max-width: 520px) {
    .projetos h1 {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 5000px) {
    .projetos h1 {
      font-size: 1.8em;
    }
  }
`;

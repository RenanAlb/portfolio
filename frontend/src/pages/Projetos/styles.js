import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  min-height: 100dvh;
  padding: 10px;
  transition: all 0.4s;
`;

export const ContainerProjetos = styled.div`
  .template {
    width: 100%;
    height: calc(100dvh - 50px);
    margin-top: 50px;
    overflow-y: hidden;
    position: relative;
    z-index: 5;
  }

  .template h1 {
    font-size: 13em;
    position: absolute;
    bottom: 20px;
    font-weight: 200;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};

    @media screen and (max-width: 1010px) {
      font-size: 9em;
    }

    @media screen and (max-width: 650px) {
      font-size: 4em;
    }
  }
`;

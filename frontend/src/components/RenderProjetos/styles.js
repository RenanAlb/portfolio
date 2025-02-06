import styled from "styled-components";
import Themes from "../../Themes";

export const ContainerProjetos = styled.div`
  transition: all 0.4s;
  width: 99.4%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 150px;
  z-index: 5;

  > p {
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    margin: 20px 0;
  }

  .projeto {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: all 0.3s;
    margin: 10px 0;
    border-bottom: 1px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid rgba(83, 83, 83, 0.2);
    }
  }
  .projeto p {
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    font-size: 4em;
    padding-bottom: 70px;
  }

  .projeto span {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    zoom: 30%;
    padding: 10px;
    overflow-y: hidden;
    border-radius: 50%;
    transition: 0.2s;
  }

  .projeto img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .projeto span {
    font-size: 2.25em;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 650px) {
    .projeto span {
      background-color: transparent;
      font-size: 1.25em;
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 1260px) {
    .projeto p {
      font-size: 3.5em;
    }
  }

  @media screen and (max-width: 1000px) {
    .projeto span {
      background-color: transparent;
      color: ${(props) =>
        props.theme === "light" ? Themes.black : Themes.white};
      border-radius: 0;
      font-size: 4.25em;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
`;

export const FixedImage = styled.div`
  position: fixed;
  width: 50%;
  height: auto;
  bottom: 20px;
  right: 20px;
  border-radius: 20px;
  transition: all background 0.4s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: all 1s;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

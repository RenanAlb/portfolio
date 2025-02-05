import styled from "styled-components";
import Themes from "../../../Themes";

const ModelStyleCards = `
  position: absolute;
  padding: 30px;
  border-radius: 20px;
  font-size: 3em;
  transition: all 0.4s;
`;

export const ContainerAnimationWebsiteAbout = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  min-height: 100dvh;
  transition: all 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  .blur {
    width: 100%;
    height: 100dvh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => (props.theme === "light" ? Themes.white : Themes.black)}
    );
    z-index: 6;
    transition: all 0.4s;
  }

  .experience {
    ${ModelStyleCards};
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-45%) rotate(-5deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    top: 390px;
    left: 45%;
    z-index: 3;
  }
  .website {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: translate(-39%) rotate(5deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    top: 210px;
    left: 39%;
    z-index: 2;
  }
  .design {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(-10deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 1;
    top: 80px;
    left: 57%;
  }
  .creativity {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(-15deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 1;
    top: 80px;
    left: 27%;
  }
  .innovation {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(15deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 2;
    top: 310px;
    left: 70%;
  }

  .programming {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(30deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 2;
    top: 250px;
    left: 15%;
  }

  .architecture {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(-2deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 4;
    top: 170px;
    left: 90%;
  }

  .language {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(-52deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 3;
    top: 450px;
    left: 90%;
  }

  .coding {
    ${ModelStyleCards}
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    box-shadow: -5px 3px 1px
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    transform: perspective(500px) translate(-57%) rotate(-22deg);
    border: 1px solid
      ${(props) =>
        props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    z-index: 3;
    top: 450px;
    left: 15%;
  }

  @media screen and (max-width: 880px) {
    .experience,
    .creativity,
    .architecture,
    .design,
    .programming,
    .language,
    .website,
    .innovation,
    .coding {
      font-size: 1.7em;
    }
  }
`;

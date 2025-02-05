import styled from "styled-components";
import Themes from "../../../../Themes";

export const ContainerAnimationBuildWebsite = styled.div`
  width: 100%;
  height: 100dvh;
  position: absolute;
  top: 50px;
  left: 0;
  overflow-y: hidden;
  transition: all 0.4s;

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
    z-index: 4;
    transition: all 0.4s;
  }
`;

export const Screen = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  transition: all 0.4s;
  z-index: 2;
  position: absolute;
  width: 500px;
  padding: 10px;
  height: 1200px;
  border: 1px solid;
  border-radius: 10px;
  top: 60px;
  right: 10px;
  color: ${(props) =>
    props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  overflow-y: hidden;
  transform: perspective(500px) rotate(-35deg) rotateY(0deg);
  box-shadow: -5px 3px 1px
    ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};

  transition: all 0.4s;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header .menu ul li {
    list-style: none;
    display: inline-block;
    margin: 0px 4px;
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  }

  h1 {
    margin: 20px 0 10px 0;
  }

  h2 {
    margin: 10px 0 10px 0;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .element-1 {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }

  @media screen and (max-width: 1150px) {
    right: -20%;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    right: -55%;
    top: 90px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
  }
  @media screen and (max-width: 520px) {
    width: 250px;
    right: -350px;
    top: 55px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
    h2 {
      margin: 30px 0 10px 0;
      font-size: 1em;
    }
  }
`;

export const Screen2 = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  transition: all 0.4s;
  z-index: 3;
  position: absolute;
  width: 500px;
  padding: 10px;
  height: 1200px;
  border: 1px solid;
  border-radius: 10px;
  top: 60px;
  right: 10px;
  color: ${(props) =>
    props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  overflow-y: hidden;
  transform: perspective(500px) rotate(-5deg) rotateY(0deg);
  box-shadow: -5px 3px 1px
    ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header .menu ul li {
    list-style: none;
    display: inline-block;
    margin: 0px 4px;
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  }

  h1 {
    margin: 20px 0 10px 0;
  }

  h2 {
    margin: 30px 0 10px 0;
  }

  .element-1 {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }

  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    position: relative;
    overflow-y: hidden;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    border-radius: 10px;
    margin-top: 10px;
    overflow-y: hidden;
  }

  @media screen and (max-width: 1150px) {
    right: -20%;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    right: -55%;
    top: -50px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
    h2 {
      margin: 30px 0 10px 0;
      font-size: 1em;
    }
  }
  @media screen and (max-width: 520px) {
    width: 250px;
    right: -350px;
    top: -85px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
    h2 {
      margin: 30px 0 10px 0;
      font-size: 1em;
    }
  }
`;

export const Screen3 = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  transition: all 0.4s;
  z-index: 1;
  position: absolute;
  width: 500px;
  padding: 10px;
  height: 1200px;
  border: 1px solid;
  border-radius: 10px;
  top: 60px;
  right: 10px;
  color: ${(props) =>
    props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  overflow-y: hidden;
  transform: perspective(500px) rotate(-65deg) rotateY(0deg);
  box-shadow: -5px 3px 1px
    ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header .menu ul li {
    list-style: none;
    display: inline-block;
    margin: 0px 4px;
    color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
  }

  h1 {
    margin: 20px 0 10px 0;
  }

  h2 {
    margin: 10px 0 10px 0;
  }

  .element-1 {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }

  @media screen and (max-width: 1150px) {
    right: -20%;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    right: -55%;
    top: 200px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
  }
  @media screen and (max-width: 520px) {
    width: 250px;
    right: -350px;
    top: 165px;
    transform: perspective(500px) rotate(-50deg) rotateY(10deg);
    h2 {
      margin: 30px 0 10px 0;
      font-size: 1em;
    }
  }
`;

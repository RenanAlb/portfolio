import styled from "styled-components";
import Themes from "../../Themes";
import { TbMenu } from "react-icons/tb";

export const MenuContainer = styled.header`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.rgbaWhite2 : Themes.rgbaBlack};
  width: 100%;
  position: fixed;
  top: -100px;
  left: 0;
  z-index: 50;
  opacity: 0;
  padding: 5px 10px;
  transition: all 0.4s;
  backdrop-filter: blur(20px);

  .global-menu-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px 5px 0px;
    margin: auto;
  }

  .global-menu-container p {
    font-size: 1em;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    margin-top: -5px;

    &:hover {
      cursor: pointer;
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    z-index: 4;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li > span {
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    font-size: 0.8em;
    margin-top: -2.5px;
    padding-right: 5px;
    margin-right: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  ul li .container-mode {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    width: 20px;
    height: 10px;
    border-radius: 20px;
    padding: 1px;
    display: flex;
    margin-right: 25px;
    transition: 0, 0.2s;

    &:hover {
      cursor: pointer;
    }
  }
  ul li .container-mode span {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    width: 7.2px;
    height: 7.2px;
    border-radius: 50%;
    display: block;
    transition: 0, 0.2s;
  }

  ul li a {
    text-decoration: none;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    font-size: 0.9em;
    margin: -2px 10px 0 10px;
    transition: 0.1s;

    &:hover {
      color: ${Themes.gray};
      transition: 0.1s;
    }
  }
`;

export const MenuIcon = styled(TbMenu)`
  color: ${(props) => (props.theme === "light" ? Themes.black : Themes.white)};

  &:hover {
    cursor: pointer;
  }
`;

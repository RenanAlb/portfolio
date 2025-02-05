import styled from "styled-components";
import Themes from "../../Themes";
import { IoCloseOutline } from "react-icons/io5";

export const ContainerMenuMobile = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  padding: 10px 10px;
  z-index: 90;
  transition: all 0.4s;
  animation: slowed 0.4s ease-in-out;

  @keyframes slowed {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  header {
    display: flex;
    align-items: end;
    justify-content: end;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 25%;
    margin-left: 20px;
  }
  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    font-size: 2.5em;
    border-bottom: 1px solid transparent;
    transition: 0.2s;
    margin: 12px 0;
    &:hover {
      border-bottom: 1px solid
        ${(props) =>
          props.theme === "light" ? Themes.lightGray : Themes.lightBlack};
      cursor: pointer;
      transition: 0.2s;
    }
  }
  ul li a {
    width: 100%;
    display: block;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    text-decoration: none;
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  color: ${(props) =>
    props.theme === "light" ? Themes.lightBlack : Themes.lightGray};
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.theme === "light" ? Themes.black : Themes.white};
    transition: 0.2s;
  }
`;

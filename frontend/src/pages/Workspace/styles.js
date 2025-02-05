import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  width: calc(100% - 20px);
  height: 100dvh;
  padding: 10px;
  position: relative;

  .add-project {
    background-color: ${Themes.black};
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    padding: 10px;
    border-radius: 20px;
    transition: 0.2s;

    &:hover {
      background-color: ${Themes.gray};
      transition: 0.2s;
      cursor: pointer;
    }
  }

  .add-project p {
    font-size: 0.9em;
    color: white;
  }

  main {
    width: 100%;
    height: auto;
    margin-top: 90px;
  }
`;

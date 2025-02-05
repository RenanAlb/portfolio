import styled from "styled-components";

export const MouseContainer = styled.div`
  background-color: white;
  width: ${(props) => (props.$valueMouse === null ? "20px" : "100px")};
  height: ${(props) => (props.$valueMouse === null ? "20px" : "50px")};
  position: fixed;
  z-index: 99;
  mix-blend-mode: difference;
  border-radius: ${(props) => (props.$valueMouse === null ? "50%" : "10px")};
  transform: translate(-50%, -50%);
  overflow: hidden;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

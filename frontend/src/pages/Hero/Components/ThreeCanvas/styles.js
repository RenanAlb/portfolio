import styled from "styled-components";

export const ContainerCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  overflow-y: hidden;
  opacity: 0;
  transform: translateY(-500px);
  pointer-events: none;
  z-index: 1;
  transition: 0.2s;
  margin-top: ${(props) => (props.tela < 920 ? "100px" : "0")};
`;

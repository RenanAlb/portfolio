import styled from "styled-components";
import Themes from "../../Themes";
import noiseImg from "../../assets/img/noise.png";

export const NoiseContainer = styled.div`
  background-color: ${Themes.rgbaWhite};
  background-image: url(${noiseImg});
  background-blend-mode: overlay;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

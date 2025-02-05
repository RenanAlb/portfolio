import { ContainerAnimationWebsiteAbout } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const AnimationWebsiteAbout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainerAnimationWebsiteAbout theme={theme}>
      <div className="blur"></div>
      <div className="experience">Experience</div>
      <div className="website">Website</div>
      <div className="design">Design</div>
      <div className="creativity">Creativity</div>
      <div className="innovation">Innovation</div>
      <div className="programming">Programming</div>
      <div className="architecture">Architecture</div>
      <div className="language">Language</div>
      <div className="coding">Coding</div>
    </ContainerAnimationWebsiteAbout>
  );
};

export default AnimationWebsiteAbout;

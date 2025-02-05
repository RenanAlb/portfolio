import { FooterContainer } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const handleEmail = () => {
    window.location.href =
      "mailto:renan.albuquerque2501@gmail.com?subject=Contato&body=Olá, gostaria de falar com você!";
  };

  return (
    <FooterContainer theme={theme}>
      <div className="message">
        <h1>Vamos criar algo novo?</h1>
        <button onClick={handleEmail}>Vamos lá!</button>
      </div>
      <div className="links">
        <p>Links</p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/renan_albuquerque_2501/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/renan-albuquerque-6925702a8/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/RenanAlb" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;

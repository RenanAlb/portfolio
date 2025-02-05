import { ContainerMenuMobile, CloseIcon } from "./styles";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const MenuMobile = ({ onSetEnableMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Bloqueando scroll...");
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <ContainerMenuMobile theme={theme}>
      <header>
        <CloseIcon
          theme={theme}
          size={25}
          onClick={() => onSetEnableMenu(!onSetEnableMenu)}
        />
      </header>
      <ul>
        <li>
          <Link to="/work">Projetos</Link>
        </li>
        <li>
          <Link to="/about">Sobre mim</Link>
        </li>
        <li>
          <Link onClick={toggleTheme}>
            {theme === "light" ? "Modo escuro" : "Modo claro"}
          </Link>
        </li>
      </ul>
    </ContainerMenuMobile>
  );
};

export default MenuMobile;

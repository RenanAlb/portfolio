import { MenuContainer, Nav, MenuIcon } from "./styles";
import { forwardRef, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { TelaContext } from "../../context/TelaContext";
import Themes from "../../Themes";
import MenuMobile from "../MenuMobile";

const Menu = forwardRef(({ onSetValueMouse }, ref) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { tela } = useContext(TelaContext);
  const navigate = useNavigate();
  const [enableMenu, setEnableMenu] = useState(false);

  useEffect(() => {
    if (tela > 740) {
      setEnableMenu(false);
    }
  }, [tela]);

  const handleEnableMenu = () => {
    document.body.style.overflowY = "hidden";
    setEnableMenu(!enableMenu);
  };

  return (
    <>
      {enableMenu && tela <= 740 ? (
        <MenuMobile onSetEnableMenu={setEnableMenu} />
      ) : null}
      <MenuContainer
        onMouseEnter={() => onSetValueMouse(null)}
        ref={ref}
        theme={theme}
        tela={tela}
      >
        <div className="global-menu-container">
          <p onClick={() => navigate("/")}>Renan</p>
          {tela <= 740 ? (
            <MenuIcon theme={theme} onClick={handleEnableMenu} size={25} />
          ) : (
            <Nav theme={theme} tela={tela}>
              <ul>
                <li onClick={toggleTheme}>
                  <span>{theme === "light" ? "Escuro" : "Claro"}</span>
                  <div
                    className="container-mode"
                    style={{
                      justifyContent: theme === "light" ? "end" : "start",
                      alignItems: theme === "light" ? "end" : "start",
                    }}
                  >
                    <span></span>
                  </div>
                </li>
                <li>
                  <a href="/work">Projetos</a>
                </li>
                <li>
                  <a href="/about">Sobre mim</a>
                </li>
              </ul>
            </Nav>
          )}
        </div>
      </MenuContainer>
    </>
  );
});

export default Menu;

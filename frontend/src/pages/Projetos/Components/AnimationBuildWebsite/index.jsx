import {
  ContainerAnimationBuildWebsite,
  Screen,
  Screen2,
  Screen3,
} from "./styles";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { TelaContext } from "../../../../context/TelaContext";
import { RiMenuFill } from "react-icons/ri";
import { IoPrism } from "react-icons/io5";
import Three from "../../Three";
import gsap from "gsap";

const AnimationBuildWebsite = () => {
  const { theme } = useContext(ThemeContext);
  const { tela } = useContext(TelaContext);

  const logoRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <ContainerAnimationBuildWebsite theme={theme}>
      <div className="blur"></div>
      <Screen theme={theme}>
        <header>
          <div className="logo" ref={logoRef}>
            Onix.Studio
          </div>
          <div className="menu">
            {tela <= 700 ? (
              <RiMenuFill size={20} />
            ) : (
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            )}
          </div>
        </header>
        <h1>Welcome!</h1>
        <div className="element-1"></div>
        <h2>About us</h2>
        <p>
          Criamos mundos digitais dinâmicos! No Prism3D, desenvolvemos
          aplicações web 3D envolventes, proporcionando interatividade e
          realismo para diversos setores.
        </p>
      </Screen>
      <Screen2 theme={theme}>
        <header>
          <div className="logo" ref={logoRef}>
            Prism3D <IoPrism size={15} />
          </div>
          <div className="menu">
            {tela <= 700 ? (
              <RiMenuFill size={20} />
            ) : (
              <ul>
                <li>Home</li>
                <li>Labs</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            )}
          </div>
        </header>
        <h2>
          Criamos mundos digitais dinâmicos! No Prism3D, desenvolvemos
          aplicações web 3D envolventes, proporcionando interatividade e
          realismo para diversos setores.
        </h2>
        <Three />
      </Screen2>
      <Screen3 theme={theme}>
        <header>
          <div className="logo" ref={logoRef}>
            Z3 Agency
          </div>
          <div className="menu">
            {tela <= 700 ? (
              <RiMenuFill size={20} />
            ) : (
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            )}
          </div>
        </header>
        <h1>Crie seus sites aqui na Z3 Agency!</h1>
        <p>
          Na Z3 Agency, nossa missão é transformar ideias em experiências
          digitais inesquecíveis. Especializados em criação de websites
          personalizados, buscamos entender as necessidades únicas de cada
          cliente para entregar soluções inovadoras e de alta performance. Seja
          para uma presença online simples ou um projeto complexo, nossa equipe
          está pronta para levar sua marca para o próximo nível, com design
          moderno e tecnologia de ponta.
        </p>
      </Screen3>
    </ContainerAnimationBuildWebsite>
  );
};

export default AnimationBuildWebsite;

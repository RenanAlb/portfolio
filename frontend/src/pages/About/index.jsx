import { Container } from "./styles";
import Menu from "../../components/Menu";
import Mouse from "../../components/Mouse";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import gsap from "gsap";
import AnimationWebsiteAbout from "./AnimationWebsiteAbout";
import Footer from "../../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { theme } = useContext(ThemeContext);
  const menuRef = useRef(null);
  const ulRef = useRef(null);
  const [valueMouse, setValueMouse] = useState(null);

  useEffect(() => {
    const animationToMenuRef = gsap.to(menuRef.current, {
      top: 0,
      duration: 0.9,
      opacity: 1,
    });

    const animationUlRef = gsap.to(ulRef.current, {
      scrollTrigger: {
        trigger: ulRef.current,
        start: "top bottom",
        end: "bottom+=200 top",
        scrub: true,
      },
      opacity: 1,
      duration: 0.3,
      fontSize: "1em",
    });

    return () => {
      animationToMenuRef.kill();
      animationUlRef.kill();
    };
  }, []);

  return (
    <Container theme={theme}>
      <Menu ref={menuRef} onSetValueMouse={setValueMouse} />
      <Mouse valueMouse={valueMouse} />
      <AnimationWebsiteAbout />
      <div className="header">
        <h1>Transformando ideias em realidade através de código</h1>
      </div>
      <div className="text">
        <p>
          Ola, sou Renan Albuquerque, tenho 17 anos e sou apaixonado pelo mundo
          do desenvolvimento web. Estudo na Escola Técnica ETEC Eudécio Luiz
          Vicente em Adamantina SP com o curso em Informática para internet.
        </p>
        <p>
          Criar websites é minha paixão e meu maior prazer. Por isso, dedico-me
          a aprender cada vez mais com uma vontade insaciável de criar projetos
          e experiências em código.
        </p>
        <p>
          Quando não estou programando aproveito meu tempo para ler livros,
          estudar inglês, desenhar, assistir séries e jogar jogos.
        </p>
      </div>
      <div className="tecnologias">
        <h1>Tecnologias</h1>
        <ul ref={ulRef}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>ThreeJS</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
};

export default About;

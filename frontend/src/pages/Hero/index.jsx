import { Container, Main } from "./styles";
import { DivLimitSpace } from "../../global-styles";
import Menu from "../../components/Menu";
import ThreeCanvas from "./Components/ThreeCanvas";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import Mouse from "../../components/Mouse";
import { gsap } from "gsap";
import { getRecentProjects } from "../../utils/projeto";
import RenderProjetos from "../../components/RenderProjetos";
import Footer from "../../components/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [projetos, setProjetos] = useState([]);
  const [valueMouse, setValueMouse] = useState(null);
  const presentationRef = useRef(null);
  const menuRef = useRef(null);
  const littleTextRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const animationToPresentationRef = gsap.to(presentationRef.current, {
      opacity: 1,
      duration: 1,
    });

    const animationToMenuRef = gsap.to(menuRef.current, {
      top: 0,
      duration: 0.9,
      opacity: 1,
    });

    const animationToLittleTextRef = gsap.to(littleTextRef.current, {
      duration: 1,
      opacity: 1,
    });

    return () => {
      animationToPresentationRef.kill();
      gsap.killTweensOf(presentationRef.current);
      animationToMenuRef.kill();
      gsap.killTweensOf(animationToMenuRef.current);
      animationToLittleTextRef.kill();
      gsap.killTweensOf(animationToLittleTextRef.current);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getProjetos = async () => {
      const response = await getRecentProjects();

      if (response?.ok) {
        setProjetos(response.response);
      }
    };

    getProjetos();
  }, []);

  return (
    <Container theme={theme}>
      <Mouse valueMouse={valueMouse} />
      <DivLimitSpace>
        <Menu ref={menuRef} onSetValueMouse={setValueMouse} />
        <Main theme={theme}>
          <ThreeCanvas />
          <section ref={presentationRef} className="presentation">
            <h1>
              Olá! Sou Renan Albuquerque, um desenvolvedor web apaixonado por
              transformar ideias em código.
            </h1>
            <p onClick={() => navigate("/about")}>Ler mais sobre mim</p>
          </section>
          <section ref={littleTextRef} className="little-text">
            <p>
              “Unindo arte, design e código, meu objetivo é que cada website
              seja uma obra de arte única e exclusiva, deixando minha marca em
              cada projeto e refletindo minha identidade em tudo o que eu crio.”
            </p>
          </section>
          <section className="projetos">
            <h1>Projetos recentes</h1>
            {projetos.length > 0 ? (
              <RenderProjetos
                theme={theme}
                onSetValueMouse={setValueMouse}
                projetos={projetos}
              />
            ) : null}
          </section>
        </Main>
        <Footer />
      </DivLimitSpace>
    </Container>
  );
};

export default Hero;

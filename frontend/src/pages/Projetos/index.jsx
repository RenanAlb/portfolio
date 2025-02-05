import { Container, ContainerProjetos } from "./styles";
import Menu from "../../components/Menu";
import Mouse from "../../components/Mouse";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { gsap } from "gsap";
import { getAllProjects } from "../../utils/projeto";
import RenderProjetos from "../../components/RenderProjetos";
import Footer from "../../components/Footer";
import AnimationBuildWebsite from "./Components/AnimationBuildWebsite";

const Projetos = () => {
  const { theme } = useContext(ThemeContext);
  const menuRef = useRef(null);
  const [projetos, setProjetos] = useState([]);
  const [valueMouse, setValueMouse] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllProjects();
        setProjetos(response.response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useLayoutEffect(() => {
    const animationToMenuRef = gsap.to(menuRef.current, {
      top: 0,
      duration: 0.9,
      opacity: 1,
    });

    return () => {
      animationToMenuRef.kill();
      gsap.killTweensOf(animationToMenuRef.current);
    };
  }, []);

  return (
    <Container theme={theme}>
      <Menu ref={menuRef} onSetValueMouse={setValueMouse} />
      <Mouse valueMouse={valueMouse} />
      <ContainerProjetos theme={theme}>
        <AnimationBuildWebsite />
        <div className="template">
          <h1>Projetos</h1>
        </div>
        {projetos.length > 0 && (
          <RenderProjetos
            theme={theme}
            onSetValueMouse={setValueMouse}
            projetos={projetos}
          />
        )}
      </ContainerProjetos>
      <Footer />
    </Container>
  );
};

export default Projetos;

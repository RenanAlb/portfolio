import { Container, Main } from "./styles";
import { getProjectByName } from "../../utils/projeto";
import {
  useEffect,
  useContext,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import Mouse from "../../components/Mouse";
import { DivLimitSpace } from "../../global-styles";
import Menu from "../../components/Menu";
import gsap from "gsap";
import DOMPurify from "dompurify";
import Footer from "../../components/Footer";

const RenderProject = () => {
  const { name_project } = useParams();
  const { theme } = useContext(ThemeContext);
  const [aboutProject, setAboutProject] = useState({});

  console.log("Página renderizada...");

  const menuRef = useRef(null);
  const headerAboutProjectRef = useRef(null);
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchGetProjectByName = async () => {
      const response = await getProjectByName(name_project);

      if (response.ok) {
        console.log(response.response);
        setAboutProject(response.response);
      }
    };

    fetchGetProjectByName();
  }, [name_project]);

  useEffect(() => {
    const animationToMenuRef = gsap.to(menuRef.current, {
      top: 0,
      duration: 0.9,
      opacity: 1,
    });

    window.scrollTo(0, 0);

    return () => {
      animationToMenuRef.kill();
      gsap.killTweensOf(animationToMenuRef.current);
    };
  }, []);

  return (
    <Container theme={theme}>
      <Mouse valueMouse={null} />
      <DivLimitSpace>
        <Menu ref={menuRef} />
        {aboutProject && (
          <Main ref={mainRef} theme={theme}>
            <div
              className="image"
              style={{ backgroundImage: `url(${aboutProject.imagemCapa})` }}
            >
              <div className="blur"></div>
              <div className="noise"></div>
              <img src={aboutProject.imagemCapa} alt="" />
            </div>
            <section
              ref={headerAboutProjectRef}
              className="header-about-project"
            >
              <div className="top-header-about-project">
                <h1>{aboutProject.nome}</h1>
                <a href={aboutProject.linkSite} target="_blank">
                  Visitar site
                </a>
              </div>
              <div className="termino-header-about-project">
                <p>Término</p>
                <h1>{aboutProject.termino}</h1>
              </div>
              <div className="tecnologias-header-about-project">
                <p>Tecnologias</p>
                <h1>{aboutProject.tecnologias}</h1>
              </div>
              <section className="images">
                <img src={aboutProject.imagemGrande} alt="" />
                <div className="division-images">
                  <img src={aboutProject.imagemPequenaLeft} alt="" />
                  <img src={aboutProject.imagemPequenaRight} alt="" />
                </div>
              </section>
              <section className="model">
                <p>Introdução</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(aboutProject.textoIntroducao),
                  }}
                />
              </section>
              <section className="model">
                <p>Ideia inicial</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(aboutProject.textoIdeiaInicial),
                  }}
                />
              </section>
              <section className="model">
                <p>Conclusão</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(aboutProject.textoConclusao),
                  }}
                />
              </section>
              <Footer />
            </section>
          </Main>
        )}
      </DivLimitSpace>
    </Container>
  );
};

export default RenderProject;

import PropTypes from "prop-types";
import { ContainerProjetos, FixedImage } from "./styles";
import { useEffect, useState, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TelaContext } from "../../context/TelaContext";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const RenderProjetos = ({ theme, onSetValueMouse, projetos }) => {
  const projetosRef = useRef([]);
  const fixedImageRef = useRef(null);
  const containerProjetoRef = useRef(null);
  const [mouseEnterProject, setMouseEnterProject] = useState(null);

  console.log("Projetos", projetos);

  const navigate = useNavigate();

  const { tela } = useContext(TelaContext);

  useEffect(() => {
    const elementos = projetosRef.current;

    elementos.forEach((elemento, index) => {
      gsap.to(elemento, {
        scrollTrigger: {
          trigger: elemento,
          start: "top+=100 bottom",
          end: "bottom bottom",
          scrub: true,
        },
        opacity: 1,
        duration: 2,
      });
    });

    if (containerProjetoRef.current && fixedImageRef.current) {
      gsap.to(fixedImageRef.current, {
        scrollTrigger: {
          trigger: containerProjetoRef.current,
          start: "bottom-=600 bottom",
          end: "bottom-=200 top+=250",
          scrub: true,
          onEnter: () => {
            gsap.set(fixedImageRef.current, { display: "block", opacity: 1 });
          },
          onLeave: () => {
            gsap.to(fixedImageRef.current, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                gsap.set(fixedImageRef.current, { display: "none" });
                setMouseEnterProject(null);
                onSetValueMouse(null);
              },
            });
          },
          onEnterBack: () => {
            gsap.set(fixedImageRef.current, { display: "block" });
            gsap.to(fixedImageRef.current, { opacity: 1, duration: 0.2 });
          },
          onLeaveBack: () => {
            gsap.to(fixedImageRef.current, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                gsap.set(fixedImageRef.current, { display: "none" });
                setMouseEnterProject(null);
                onSetValueMouse(null);
              },
            });
          },
        },
        duration: 1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const houverProject = (projeto) => {
    if (projeto !== null) {
      console.log("Hovered image", projeto.imagemCapa);
      setMouseEnterProject(projeto.imagemCapa);
      onSetValueMouse(projeto);
    } else {
      onSetValueMouse(null);
    }
  };

  const navigateViewProject = (projeto) => navigate(`/work/${projeto.nome}`);

  return (
    <ContainerProjetos theme={theme} ref={containerProjetoRef} tela={tela}>
      {projetos.length > 0 ? (
        projetos.map((projeto, index) => (
          <div
            onMouseEnter={() => houverProject(projeto)}
            ref={(el) => (projetosRef.current[index] = el)}
            key={index}
            className="projeto"
            onClick={() => navigateViewProject(projeto)}
          >
            {tela > 1000 ? (
              <p>
                {projeto.nome}{" "}
                {mouseEnterProject === projeto.imagemCapa ? (
                  <span className="material-symbols-outlined">north_east</span>
                ) : (
                  ""
                )}
              </p>
            ) : (
              <>
                <img src={projeto.imagemCapa} />
                <span>
                  {projeto.nome} - {projeto.termino}
                </span>
              </>
            )}
          </div>
        ))
      ) : (
        <p>
          Não foi possível renderizar os projetos. Por favor, reinicie o site e
          verifique sua conexão.
        </p>
      )}

      {tela > 1000 && (
        <FixedImage ref={fixedImageRef}>
          {mouseEnterProject && (
            <img src={mouseEnterProject} alt="Imagem de capa do projeto" />
          )}
        </FixedImage>
      )}
    </ContainerProjetos>
  );
};

RenderProjetos.propTypes = {
  projetos: PropTypes.array,
  onSetValueMouse: PropTypes.func,
};

export default RenderProjetos;

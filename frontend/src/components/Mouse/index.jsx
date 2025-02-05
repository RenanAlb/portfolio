import { MouseContainer } from "./styles";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Mouse = ({ valueMouse }) => {
  const [positionMouse, setMousePosition] = useState({ x: 0, y: 0 });
  const [tela, setTela] = useState(window.innerWidth);
  const navigate = useNavigate();
  const cursorRef = useRef(null); // Referência para o elemento

  useEffect(() => {
    const calcTela = () => {
      const newWidth = window.innerWidth;
      if (newWidth !== tela) setTela(newWidth); // Atualiza somente se mudar
    };

    window.addEventListener("resize", calcTela);
    return () => {
      window.removeEventListener("resize", calcTela);
    };
  }, [tela]);

  useEffect(() => {
    let cursorX = 0;
    let cursorY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const speed = 0.12;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      // Ajusta para centralizar o elemento no mouse
      const cursorElement = cursorRef.current;
      const offsetX = cursorElement ? cursorElement.offsetWidth / 2 : 0;
      const offsetY = cursorElement ? cursorElement.offsetHeight / 2 : 0;

      setMousePosition({ x: cursorX - offsetX, y: cursorY - offsetY });

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MouseContainer
      ref={cursorRef}
      style={{
        pointerEvents: valueMouse?.nome === undefined ? "none" : "all",
        transform:
          positionMouse.x === 0 || positionMouse.y === 0
            ? "translate3d(-50px, -50px, 0)"
            : `translate3d(${positionMouse.x}px, ${positionMouse.y}px, 0)`,
      }}
      onClick={() => navigate(`/work/${valueMouse?.nome}`)}
      $valueMouse={valueMouse}
      tela={tela}
    >
      {tela > 1000 ? (valueMouse?.nome ? "Ver projeto" : "") : ""}
    </MouseContainer>
  );
};

export default Mouse;

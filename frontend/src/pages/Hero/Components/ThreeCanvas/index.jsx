import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ContainerCanvas } from "./styles";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import textureHdr from "../../../../assets/textures/studio_small_08_4k.hdr";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TelaContext } from "../../../../context/TelaContext";
import WebGL from "three/addons/capabilities/WebGL.js";

gsap.registerPlugin(ScrollTrigger);

const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  const { tela } = useContext(TelaContext);

  useEffect(() => {
    gsap.to(canvasRef.current, {
      opacity: 1,
      duration: 1.5,
      y: 0,
    });
  }, []);

  useEffect(() => {
    console.log("Carregando ThreeJS...");

    if (WebGL.isWebGL2Available()) {
      console.log("ok");
    } else {
      console.error("Erro");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true, // Ative o antialiasing
      alpha: true, // Permite um fundo transparente
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight("white", 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.position.set(1, 5, 5);
    directionalLight.target.position.set(0, 0, 0);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight("white", 25, 100, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // RGBELoader
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(textureHdr, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;

      createTorusKnotGeometry();
    });

    // Geometria e mesh do torus
    let torus;
    let targetRotation = { x: 0, y: 0 };

    function createTorusKnotGeometry() {
      const torusGeometry = new THREE.TorusKnotGeometry(1, 0.4, 128, 256);
      const torusMaterial = new THREE.MeshStandardMaterial({
        color: "gray",
        metalness: 1,
        roughness: 0,
        envMap: scene.environment,
      });

      torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.set(-0.5, -0.9, -1);
      scene.add(torus);
    }

    // Mouse
    const mouse = new THREE.Vector2();

    function onMouseMove(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 + 1;

      targetRotation.x = mouse.y * Math.PI;
      targetRotation.y = mouse.x * Math.PI;
    }

    if (tela > 1000) {
      window.addEventListener("mousemove", onMouseMove);
    }

    if (canvasRef.current) {
      gsap.to(canvasRef.current, {
        scrollTrigger: {
          trigger: canvasRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onComplete: () =>
            window.removeEventListener("mousemove", onMouseMove),
        },
      });
    }

    const configResponsive = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // Ajusta o tamanho da janela
    window.addEventListener("resize", configResponsive);
    window.addEventListener("load", configResponsive);

    let animationFrameId;
    let torusGSAP;

    // Animação
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (torus && tela > 1000) {
        torusGSAP = gsap.to(torus.rotation, {
          x: targetRotation.x,
          y: targetRotation.y,
          duration: 0.7,
          ease: "power2.out",
        });
      } else if (torus && tela <= 1000) {
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      console.log("Encerrando ThreeJS...");

      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", configResponsive);
      window.removeEventListener("load", configResponsive);

      cancelAnimationFrame(animationFrameId);

      if (torus) {
        torus.geometry.dispose();
        torus.material.dispose();
        scene.remove(torus);
      }

      if (scene.environment) {
        scene.environment.dispose?.();
      }

      renderer.dispose();

      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }

      if (torusGSAP) {
        console.log("Encerrando GSAP...");
        torusGSAP.kill();
      }
    };
  }, []);

  return <ContainerCanvas ref={canvasRef} tela={tela}></ContainerCanvas>;
};

export default ThreeCanvas;

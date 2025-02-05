import { useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import Themes from "../../../Themes";
import { ThemeContext } from "../../../context/ThemeContext";

const Three = () => {
  const divRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!divRef.current) return console.error("Elemento HTML não renderizado"); // Evita erro caso a div ainda não esteja montada

    const { clientWidth, clientHeight } = divRef.current;

    console.log("Carregando ThreeJS projetos...");

    // Criar cena e câmera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    camera.lookAt(0, 0, 0);
    camera.position.set(0, 0, 3);

    // Criar renderizador
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    console.log(clientWidth, clientHeight);
    renderer.setSize(clientWidth, clientHeight);
    camera.aspect = clientWidth / clientHeight;
    divRef.current.appendChild(renderer.domElement);

    // Responsividade
    const configResponsive = () => {
      if (!divRef.current) return;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", configResponsive);
    window.addEventListener("load", configResponsive);

    // Luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 25, 100, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Criar cubo
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: `${theme === "light" ? Themes.lightGray : Themes.lightBlack}`,
    });
    const cubeForm = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(cubeForm, cubeMaterial);
    cube.position.set(0, 0, 1.4);
    scene.add(cube);

    // Animação
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
      camera.updateProjectionMatrix();
    };
    animate();

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener("resize", configResponsive);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div className="three" ref={divRef}></div>;
};

export default Three;

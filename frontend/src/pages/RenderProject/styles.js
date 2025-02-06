import styled from "styled-components";
import Themes from "../../Themes";
import noiseImg from "../../assets/img/noise.png";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Themes.white : Themes.black};
  width: 100%;
  min-height: 100dvh;
  overflow-y: hidden;
  transition: all 0.4s;
`;

export const Main = styled.main`
  margin-top: 30px;
  width: 100%;
  overflow-y: hidden;
  transition: all 0.4s;

  .image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: calc(100dvh - 40px);
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-y: hidden;
    position: fixed;
    top: 40px;
    left: 0;
  }
  .image img {
    width: 60%;
    max-width: 700px;
    position: fixed;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 3;
  }
  .image .blur {
    background-color: ${(props) =>
      props.theme === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    width: 100%;
    height: calc(100dvh - 40px);
    backdrop-filter: blur(80px);
    position: fixed;
    z-index: 2;
    top: 40px;
    left: 0;
    transition: all background 0.4s;
  }
  .image .noise {
    backdrop-filter: blur(10px);
    background-image: url(${noiseImg});
    background-repeat: repeat;
    width: 100%;
    height: 100dvh;
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 1;
    transition: all background 0.4s;
  }

  .header-about-project {
    background-color: ${(props) =>
      props.theme === "light" ? Themes.white : Themes.black};
    position: absolute;
    min-height: 100dvh;
    z-index: 5;
    width: 100%;
    padding: 100px 10px 10px 10px;
    transition: all 0.4s;
    margin-top: 100dvh;
  }
  .header-about-project .top-header-about-project {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .header-about-project .top-header-about-project h1 {
    font-size: 6em;
    font-weight: 200;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
  }
  .header-about-project .top-header-about-project a {
    background-color: transparent;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid ${Themes.gray};
    text-decoration: none;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
  }
  .header-about-project .termino-header-about-project {
    margin: 0 auto 20px auto;
    width: 70%;
  }
  .header-about-project .termino-header-about-project p {
    color: ${Themes.gray};
    font-size: 1.2em;
  }
  .header-about-project .termino-header-about-project h1 {
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-weight: 300;
    font-size: 2em;
  }
  .header-about-project .tecnologias-header-about-project {
    width: 70%;
    margin: 0 auto;
  }
  .header-about-project .tecnologias-header-about-project p {
    color: ${Themes.gray};
    font-size: 1.2em;
  }
  .header-about-project .tecnologias-header-about-project h1 {
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-weight: 300;
    font-size: 2em;
  }
  .header-about-project .images {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 150px auto 0 auto;
  }
  .header-about-project .images > img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid rgba(72, 72, 72, 0.2);
  }
  .header-about-project .images .division-images {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 10px;
  }
  .header-about-project .images .division-images img {
    width: 49.5%;
    object-fit: cover;
    height: calc(auto);
    border-radius: 10px;
    border: 1px solid rgba(72, 72, 72, 0.2);
  }
  .header-about-project .model {
    margin: 100px auto 0 auto;
    width: 70%;
  }
  .header-about-project .model > p {
    color: ${Themes.gray};
    margin-bottom: 10px;
    font-size: 1.2em;
  }
  .header-about-project .model > div p {
    font-size: 1.7em;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
  }

  @media screen and (max-width: 1200px) {
    .header-about-project .top-header-about-project {
      width: 100%;
      margin-bottom: 20px;
    }

    .header-about-project .top-header-about-project h1 {
      font-size: 2em;
    }

    .header-about-project .top-header-about-project a {
      padding: 10px;
      font-size: 0.9em;
    }

    .header-about-project .termino-header-about-project {
      width: 100%;
    }
    .header-about-project .termino-header-about-project p {
      font-size: 1em;
      margin-bottom: 15px;
    }
    .header-about-project .termino-header-about-project h1 {
      font-size: 1.5em;
    }

    .header-about-project .tecnologias-header-about-project {
      width: 100%;
    }
    .header-about-project .tecnologias-header-about-project p {
      font-size: 1em;
      margin-bottom: 15px;
    }
    .header-about-project .tecnologias-header-about-project h1 {
      font-size: 1.5em;
      line-height: 1.5em;
    }

    .header-about-project .images {
      width: 100%;
    }

    .header-about-project .model {
      width: 100%;
    }
    .header-about-project .model > p {
      font-size: 1em;
    }
    .header-about-project .model > div p {
      font-size: 1.5em;
      line-height: 1.6em;
    }
  }

  @media screen and (max-width: 520px) {
    .image img {
      width: 100%;
      border-radius: 0;
    }
  }
`;

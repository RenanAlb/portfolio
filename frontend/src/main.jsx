import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Acesso from "./pages/Acesso";
import Workspace from "./pages/Workspace";
import NewProject from "./pages/NewProjetct";
import { ChangeModeProvider } from "./context/ThemeContext";
import { ViewTela } from "./context/TelaContext";
import RenderProject from "./pages/RenderProject";
import Projetos from "./pages/Projetos";
import About from "./pages/About";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChangeModeProvider>
      <ViewTela>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/acesso-admin" element={<Acesso />} />
          <Route path="/workspace/:status" element={<Workspace />} />
          <Route path="/novo-projeto/:status" element={<NewProject />} />
          <Route path="/work/:name_project" element={<RenderProject />} />
          <Route path="/work" element={<Projetos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ViewTela>
    </ChangeModeProvider>
  </BrowserRouter>
);

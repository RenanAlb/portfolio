import express from "express";
import { v2 as cloudinaryV2 } from "cloudinary";
import multer from "multer";
import fs from "fs/promises";
import Projetos from "../modules/projetos.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinaryV2.uploader.upload(
        filePath,
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }
      );
    });

    await fs.unlink(filePath);
    return result;
  } catch (error) {
    console.error("Erro no upload para o Cloudinary:", error);
    throw error;
  }
};

router.post(
  "/create-new-project",
  upload.fields([
    { name: "imagemCapa", maxCount: 1 },
    { name: "imagemGrande", maxCount: 1 },
    { name: "imagemPequenaLeft", maxCount: 1 },
    { name: "imagemPequenaRight", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { files, body } = req;

      const imageKeys = [
        "imagemCapa",
        "imagemGrande",
        "imagemPequenaLeft",
        "imagemPequenaRight",
      ];

      const imageUrls = {};

      for (const key of imageKeys) {
        if (files[key]) {
          imageUrls[key] = await uploadToCloudinary(files[key][0].path);
        }
      }

      const {
        imagemCapa,
        imagemGrande,
        imagemPequenaLeft,
        imagemPequenaRight,
      } = imageUrls;

      const processContent = (content) => {
        content = content.replace(/\n/g, "<br>");
        content = content
          .split("\n\n")
          .map((paragraph) => `<p>${paragraph}</p>`)
          .join("");

        return content;
      };

      const addNewProject = await Projetos.create({
        nome: body.nome,
        linkSite: body.linkSite,
        linkGitHub: body.linkGitHub,
        termino: body.termino,
        tecnologias: body.tecnologias,
        imagemCapa,
        imagemGrande,
        imagemPequenaLeft,
        imagemPequenaRight,
        textoIntroducao: processContent(body.textoIntroducao),
        textoIdeiaInicial: processContent(body.textoIdeiaInicial),
        textoConclusao: processContent(body.textoConclusao),
      });

      if (!addNewProject) {
        throw new Error("Erro ao criar o novo projeto no banco de dados.");
      }

      res.status(200).json({
        message: "Sucesso! Novo projeto adicionado à sua lista",
        ok: true,
        response: addNewProject,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message, ok: false });
    }
  }
);

router.get("/get-all-projects", async (req, res) => {
  try {
    const projects = await Projetos.find();

    if (!projects) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar os projetos", ok: false });
    }

    return res
      .status(200)
      .json({ message: "Projetos buscados", ok: true, response: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, ok: false });
  }
});

router.get("/get-first-projects", async (req, res) => {
  try {
    const projects = await Projetos.find().sort({ criacao: 1 }).limit(4);

    console.log(projects);

    if (!projects) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar os projetos", ok: false });
    }

    return res
      .status(200)
      .json({ message: "Projetos buscados", ok: true, response: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, ok: false });
  }
});

router.get("/get-project-by-name/:project", async (req, res) => {
  try {
    const { project } = req.params;

    const findProjectByName = await Projetos.findOne({ nome: project });

    if (!findProjectByName) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar o projeto", ok: false });
    }

    res.status(200).json({
      message: "Sucesso ao buscar os dados do projeto",
      ok: true,
      response: findProjectByName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, ok: false });
  }
});

export default router;

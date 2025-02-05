import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDataBase from "./database/mongodb.js";
import validarAcesso from "./routes/validar-acesso.js";
import projetos from "./routes/projetos.js";
import path from "path";
import { fileURLToPath } from "url";

// Dotenv config.
dotenv.config();

// Conexão MongoDB
connectToDataBase();

// Server config.
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Use routes
app.use("/acesso", validarAcesso);
app.use("/projetos", projetos);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "../frontend/dist");
  res.sendFile(path.join(filePath, "index.html"));
});

app.listen(port, () =>
  console.log("Servidor ativo em http://localhost:" + port)
);

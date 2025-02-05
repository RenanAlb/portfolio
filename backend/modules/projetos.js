import mongoose from "mongoose";

const projetosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  linkSite: { type: String, required: true },
  linkGitHub: { type: String, required: true },
  termino: { type: String, required: true },
  tecnologias: { type: String, required: true },
  imagemCapa: { type: String, required: true },
  imagemGrande: { type: String, required: true },
  imagemPequenaLeft: { type: String, required: true },
  imagemPequenaRight: { type: String, required: true },
  textoIntroducao: { type: String, required: true },
  textoIdeiaInicial: { type: String, required: true },
  textoConclusao: { type: String, required: true },
  criacao: { type: Date, default: Date.now },
});

const Projetos = mongoose.model("Projetos", projetosSchema);

export default Projetos;

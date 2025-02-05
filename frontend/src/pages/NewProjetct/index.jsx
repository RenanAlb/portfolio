import { Container } from "./styles";
import Noise from "../../components/Noise";
import Mouse from "../../components/Mouse";
import { DivLimitSpace } from "../../global-styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { novoProjeto } from "../../utils/projeto";

const NewProject = () => {
  const navigate = useNavigate();
  const { status } = useParams();
  const [formData, setFormData] = useState({
    nome: "",
    linkSite: "",
    linkGitHub: "",
    termino: "",
    tecnologias: "",
    imagemCapa: null,
    imagemGrande: null,
    imagemPequenaLeft: null,
    imagemPequenaRight: null,
    textoIntroducao: "",
    textoIdeiaInicial: "",
    textoConclusao: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Atualiza os campos de texto
    }));
  };

  const handleFile = (event, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: event.target.files[0], // Atualiza os campos de arquivo
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("nome", formData.nome);
    data.append("linkSite", formData.linkSite);
    data.append("linkGitHub", formData.linkGitHub);
    data.append("termino", formData.termino);
    data.append("tecnologias", formData.tecnologias);
    data.append("imagemCapa", formData.imagemCapa);
    data.append("imagemGrande", formData.imagemGrande);
    data.append("imagemPequenaLeft", formData.imagemPequenaLeft);
    data.append("imagemPequenaRight", formData.imagemPequenaRight);
    data.append("textoIntroducao", formData.textoIntroducao);
    data.append("textoIdeiaInicial", formData.textoIdeiaInicial);
    data.append("textoConclusao", formData.textoConclusao);

    const response = await novoProjeto(data);

    if (response.ok) {
      setFormData({});
      navigate(-1);
    }
  };

  useEffect(() => {
    if (status !== "ok") {
      navigate("/");
    }
  }, []);

  console.log(formData);

  return (
    <Container>
      <Mouse />
      <DivLimitSpace>
        <form onSubmit={handleSubmit}>
          <p>Novo projeto</p>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Nome do projeto"
            name="nome"
            required
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Link do website"
            name="linkSite"
            required
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Link do GitHub"
            name="linkGitHub"
            required
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Ano de término"
            name="termino"
            required
          />
          <textarea
            onChange={handleInputChange}
            placeholder="Tecnologias utilizadas"
            name="tecnologias"
            required
          ></textarea>
          <p>Imagem de capa</p>
          <input
            type="file"
            onChange={(e) => handleFile(e, "imagemCapa")}
            placeholder="Imagem de capa"
            name="imagemCapa"
            required
          />
          <p>Imagem (grande)</p>
          <input
            type="file"
            onChange={(e) => handleFile(e, "imagemGrande")}
            accept="image/*"
            name="imagemGrande"
            required
          />
          <p>Imagem (pequena left)</p>
          <input
            type="file"
            onChange={(e) => handleFile(e, "imagemPequenaLeft")}
            accept="image/*"
            name="imagemPequenaLeft"
            required
          />
          <p>Imagem (peguena right)</p>
          <input
            type="file"
            onChange={(e) => handleFile(e, "imagemPequenaRight")}
            accept="image/*"
            name="imagemPequenaRight"
            required
          />
          <textarea
            onChange={handleInputChange}
            placeholder="Texto de introdução"
            name="textoIntroducao"
            required
          ></textarea>
          <textarea
            onChange={handleInputChange}
            placeholder="Texto da ideia inicial"
            name="textoIdeiaInicial"
            required
          ></textarea>
          <textarea
            onChange={handleInputChange}
            placeholder="Texto de conclusão"
            name="textoConclusao"
            required
          ></textarea>
          <button type="submit">Criar projeto +</button>
        </form>
      </DivLimitSpace>
    </Container>
  );
};

export default NewProject;

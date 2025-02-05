import { Container } from "./styles";
import Noise from "../../components/Noise";
import Mouse from "../../components/Mouse";
import { validarAcesso } from "../../utils/acesso";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Acesso = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    if (password === "") {
      return null;
    }

    const response = await validarAcesso(password);

    if (response) {
      navigate("/workspace/ok");
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <Noise />
      <Mouse />
      <form onSubmit={handleForm} className="card">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite o acesso"
        />
        <button type="submit">Confirmar</button>
      </form>
    </Container>
  );
};

export default Acesso;

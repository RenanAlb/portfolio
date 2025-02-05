import { Container } from "./styles";
import Mouse from "../../components/Mouse";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Workspace = () => {
  const navigate = useNavigate();
  const { status } = useParams();

  useEffect(() => {
    if (status !== "ok") {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Mouse />
      <div className="add-project" onClick={() => navigate("/novo-projeto/ok")}>
        <p>Novo projeto</p>
      </div>
      <main>
        <p>Meus projetos</p>
      </main>
    </Container>
  );
};

export default Workspace;

const url = "http://localhost:8080";

export const novoProjeto = async (data) => {
  try {
    const response = await fetch(`${url}/projetos/create-new-project`, {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar o projeto:", error);
    return null;
  }
};

export const getRecentProjects = async () => {
  try {
    const response = await fetch(`${url}/projetos/get-first-projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os projetos recentes!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProjectByName = async (projeto) => {
  try {
    const response = await fetch(
      `${url}/projetos/get-project-by-name/${projeto}`
    );

    if (!response.ok) {
      throw new Error(
        "Erro inesperado ao buscar os dados do projeto" + projeto
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllProjects = async () => {
  try {
    const response = await fetch(`${url}/projetos/get-all-projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar todos os projetos!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const url = "https://renan-albuquerque.onrender.com";

export const validarAcesso = async (senha) => {
  try {
    const response = await fetch(`${url}/acesso/validar-acesso`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senha }),
    });

    if (!response.ok) {
      throw new Error("Erro ao validar o acesso!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

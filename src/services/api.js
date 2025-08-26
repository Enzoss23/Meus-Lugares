const API_URL = "https://seu-backend.com/api/lugares"; // Substitua pela URL do seu backend

export const buscarLugares = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Erro ao buscar lugares");
  }
  return await response.json();
};

export const salvarLugar = async (lugar) => {
  const response = await fetch(API_URL, {
    method: lugar.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lugar),
  });
  if (!response.ok) {
    throw new Error("Erro ao salvar lugar");
  }
  return await response.json();
};

export const excluirLugar = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao excluir lugar");
  }
};

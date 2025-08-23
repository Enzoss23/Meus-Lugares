const STORAGE_KEY = "meusLugares";

export const salvarLugar = (lugar) => {
  const lugares = buscarLugares();
  const index = lugares.findIndex(l => l.id === lugar.id);
  if (index >= 0) {
    lugares[index] = lugar; // editar
  } else {
    lugares.push(lugar); // adicionar
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lugares));
};

export const buscarLugares = () => {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
};

export const excluirLugar = (id) => {
  const lugares = buscarLugares().filter(l => l.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lugares));
};

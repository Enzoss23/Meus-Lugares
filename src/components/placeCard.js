export const PlaceCard = (lugar, onToggleVisitado, onEditar, onExcluir) => {
  const card = document.createElement("div");
  card.className = "place-card";

  card.innerHTML = `
    <h3>${lugar.nome}</h3>
    <p>${lugar.descricao}</p>
    <button class="toggle-visitado">${lugar.visitado ? "✅ Visitado" : "❌ Não visitado"}</button>
    <button class="editar">Editar</button>
    <button class="excluir">Excluir</button>
  `;

  card.querySelector(".toggle-visitado").onclick = () => onToggleVisitado(lugar);
  card.querySelector(".editar").onclick = () => onEditar(lugar);
  card.querySelector(".excluir").onclick = () => onExcluir(lugar.id);

  return card;
};

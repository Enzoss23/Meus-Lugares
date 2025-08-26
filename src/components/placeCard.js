export const PlaceCard = (lugar, onToggleVisitado, onEditar, onExcluir) => {
  const card = document.createElement("div");
  card.className = "place-card";

  card.innerHTML = `
    <h3>${lugar.nome}</h3>
    <p>${lugar.descricao}</p>
    <p>Endereço: ${lugar.endereco || "Não informado"}</p>
    ${lugar.tipo ? `<p><strong>Tipo:</strong> ${lugar.tipo}</p>` : ''}
    ${lugar.avaliacao ? `<p><strong>Avaliação:</strong> ${'⭐'.repeat(lugar.avaliacao)}</p>` : ''}
    ${lugar.preco ? `<p><strong>Preço:</strong> ${lugar.preco}</p>` : ''}
    <button class="toggle-visitado">${lugar.visitado ? "✅ Visitado" : "❌ Não visitado"}</button>
    <button class="editar">Editar</button>
    <button class="excluir">Excluir</button>
  `;

  card.querySelector(".toggle-visitado").onclick = () => onToggleVisitado(lugar);
  card.querySelector(".editar").onclick = () => onEditar(lugar);
  card.querySelector(".excluir").onclick = () => onExcluir(lugar.id);

  return card;
};

import { buscarLugares, salvarLugar, excluirLugar } from "../services/localStorage.js";
import { PlaceCard } from "../components/placeCard.js";
import { ModalForm } from "../components/modalForm.js";

export const Home = () => {
  const container = document.getElementById("app");
  container.innerHTML = `
    <h1>Meus Lugares</h1>
    <button id="adicionarLugar">Adicionar Lugar</button>
    <select id="filtro">
      <option value="todos">Todos</option>
      <option value="visitados">Visitados</option>
      <option value="naoVisitados">Não visitados</option>
    </select>
    <div id="listaLugares"></div>
  `;

  const listaLugares = container.querySelector("#listaLugares");
  const filtro = container.querySelector("#filtro");

  const renderizar = () => {
    listaLugares.innerHTML = "";
    let lugares = buscarLugares();

    if (filtro.value === "visitados") lugares = lugares.filter(l => l.visitado);
    if (filtro.value === "naoVisitados") lugares = lugares.filter(l => !l.visitado);

    lugares.forEach(lugar => {
      const card = PlaceCard(
        lugar,
        (l) => { salvarLugar({ ...l, visitado: !l.visitado }); renderizar(); },
        (l) => ModalForm((novo) => { salvarLugar(novo); renderizar(); }, l),
        (id) => { excluirLugar(id); renderizar(); }
      );
      listaLugares.appendChild(card);
    });
  };

  container.querySelector("#adicionarLugar").onclick = () => {
    ModalForm((novo) => { salvarLugar(novo); renderizar(); });
  };

  filtro.onchange = renderizar;

  renderizar();
};

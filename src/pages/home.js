// import { apiService } from "../services/api.js";
import { salvarLugar, buscarLugares, excluirLugar } from "../services/localStorage.js";
import { PlaceCard } from "../components/placeCard.js";
import { ModalForm } from "../components/modalForm.js";

export const Home = () => {
  const container = document.getElementById("app");
  container.innerHTML = `
    <h1>Meus Lugares</h1>
    <select id="filtro">
      <option value="todos">Todos</option>
      <option value="visitados">Visitados</option>
      <option value="naoVisitados">Não visitados</option>
    </select>
    <button id="adicionarLugar">Adicionar Lugar</button>
    <div id="listaLugares"></div>
  `;

  const listaLugares = container.querySelector("#listaLugares");
  const filtro = container.querySelector("#filtro");

  const renderizar = async () => {
    listaLugares.innerHTML = "";
    let lugares = await buscarLugares();

    if (filtro.value === "visitados") lugares = lugares.filter(l => l.visitado);
    if (filtro.value === "naoVisitados") lugares = lugares.filter(l => !l.visitado);

    lugares.forEach(lugar => {
      const card = PlaceCard(
        lugar,
        async (l) => { 
          await salvarLugar({ ...l, visitado: !l.visitado }); 
          renderizar(); 
        },
        (l) => ModalForm(async (novo) => { 
          await salvarLugar(novo); 
          renderizar(); 
        }, l),
        async (id) => { 
          await excluirLugar(id); 
          renderizar(); 
        }
      );
      listaLugares.appendChild(card);
    });
  };

  container.querySelector("#adicionarLugar").onclick = () => {
    ModalForm(async (novo) => { 
      await salvarLugar(novo); 
      renderizar(); 
    });
  };

  filtro.onchange = renderizar;

  renderizar();
};
